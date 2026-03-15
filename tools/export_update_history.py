from __future__ import annotations

import csv
import subprocess
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter


ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / "tabiroku-update-history.csv"
XLSX_PATH = ROOT / "tabiroku-update-history.xlsx"
PUBLIC_URL = "https://ryoseiimai.github.io/tabiroku-app/"

DETAIL_MAP = {
    "Initial Tabiroku mobile mock": {
        "detail": "旅録モックの初期画面と、ギフト・旅ログの基本構成を追加。",
        "effect": "最初のスマホモックを確認できる状態に。",
    },
    "Ignore local GitHub CLI files": {
        "detail": "ローカルの GitHub CLI 関連ファイルを git 管理対象から外した。",
        "effect": "ユーザー画面の変化なし。",
    },
    "Remove Pages workflow for initial push": {
        "detail": "GitHub Pages の公開方法を workflow からブランチ公開へ切り替えた。",
        "effect": "公開 URL を安定して使える状態に調整。",
    },
    "Convert mock to screen-based mobile flow": {
        "detail": "長い1ページ構成をやめて、画面遷移型のスマホモックへ変更。",
        "effect": "ポチポチ進めるアプリ風の体験に変更。",
    },
    "Add scenario confirmation step": {
        "detail": "旅候補を仮選択してから決定する、2段階の選択操作を追加。",
        "effect": "誤タップしづらい旅選択になった。",
    },
    "Compact mobile screens": {
        "detail": "余白、文字量、カードの高さを削って画面密度を調整。",
        "effect": "スクロールを減らしたコンパクト UI に改善。",
    },
    "Refine compact screen-first mock": {
        "detail": "iPhone アプリらしい見た目と操作導線になるよう再調整。",
        "effect": "よりスマホアプリっぽい印象に更新。",
    },
    "Refine ask-first mobile flow": {
        "detail": "おすすめ先行ではなく、相手・したい時間・要望入力から旅提案する流れに変更。",
        "effect": "相談してから旅が提案される体験に変わった。",
    },
    "Clarify journey recording flow": {
        "detail": "旅先ログをトグル記録にし、アルバムへつながる説明文を改善。",
        "effect": "押し間違いを戻しやすく、次の画面も理解しやすくなった。",
    },
    "Remove user-facing impact screen": {
        "detail": "地域価値ダッシュボードを導線から外し、アルバムで完了する流れに変更。",
        "effect": "最後がユーザー向けの完了画面として自然になった。",
    },
}

HEADERS = [
    "更新日時",
    "コミット",
    "更新タイトル",
    "主な更新内容",
    "変更ファイル",
    "ユーザーに見える変化",
    "公開URL",
]


def run_git(*args: str) -> str:
    result = subprocess.run(
        ["git", "-C", str(ROOT), *args],
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
    )
    return result.stdout.strip()


def changed_files(commit_hash: str) -> str:
    raw = run_git("show", "--pretty=format:", "--name-only", "--no-renames", commit_hash)
    files = [line.strip() for line in raw.splitlines() if line.strip()]
    if not files:
      return "-"
    return ", ".join(files[:4])


def rows() -> list[list[str]]:
    raw = run_git(
        "log",
        "--date=format-local:%Y-%m-%d %H:%M",
        "--pretty=format:%H%x09%h%x09%ad%x09%s",
    )
    output = []
    for line in raw.splitlines():
        full_hash, short_hash, updated_at, subject = line.split("\t", 3)
        detail = DETAIL_MAP.get(subject, {})
        output.append(
            [
                updated_at,
                short_hash,
                subject,
                detail.get("detail", subject),
                changed_files(full_hash),
                detail.get("effect", "更新内容にあわせて反映。"),
                PUBLIC_URL,
            ]
        )
    return output


def write_csv(data: list[list[str]]) -> None:
    with CSV_PATH.open("w", newline="", encoding="utf-8-sig") as file:
        writer = csv.writer(file)
        writer.writerow(HEADERS)
        writer.writerows(data)


def write_xlsx(data: list[list[str]]) -> None:
    workbook = Workbook()
    sheet = workbook.active
    sheet.title = "更新履歴"
    sheet.append(HEADERS)
    for row in data:
        sheet.append(row)

    header_fill = PatternFill(fill_type="solid", fgColor="1F1B16")
    header_font = Font(color="FFFFFF", bold=True)
    wrap = Alignment(vertical="top", wrap_text=True)

    for cell in sheet[1]:
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = wrap

    for row in sheet.iter_rows(min_row=2):
        for cell in row:
            cell.alignment = wrap

    widths = {
        1: 18,
        2: 12,
        3: 34,
        4: 42,
        5: 28,
        6: 36,
        7: 34,
    }
    for index, width in widths.items():
        sheet.column_dimensions[get_column_letter(index)].width = width

    sheet.freeze_panes = "A2"
    sheet.auto_filter.ref = f"A1:G{sheet.max_row}"

    note = workbook.create_sheet("運用メモ")
    note["A1"] = "更新方法"
    note["A2"] = "このファイルは tools/export_update_history.py を実行すると最新の git 履歴から再生成できます。"
    note["A3"] = "今後こちらでモックを更新したときも、このスクリプトを回して履歴を追記できます。"
    note["A1"].font = Font(bold=True)
    note.column_dimensions["A"].width = 90
    note["A2"].alignment = wrap
    note["A3"].alignment = wrap

    workbook.save(XLSX_PATH)


def main() -> None:
    data = rows()
    write_csv(data)
    write_xlsx(data)
    print(f"created: {CSV_PATH}")
    print(f"created: {XLSX_PATH}")


if __name__ == "__main__":
    main()
