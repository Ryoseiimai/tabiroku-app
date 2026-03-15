const STORAGE_KEY = "tabiroku-mobile-screens-v3";

const screenOrder = ["welcome", "scenario", "tone", "preview", "journey", "album", "impact"];

const screenMeta = {
  welcome: { eyebrow: "相談", title: "旅の相談", badge: "送り主", phase: "gift" },
  scenario: { eyebrow: "提案", title: "旅の提案", badge: "送り主", phase: "gift" },
  tone: { eyebrow: "贈る", title: "届け方", badge: "送り主", phase: "gift" },
  preview: { eyebrow: "確認", title: "ギフト確認", badge: "送り主", phase: "gift" },
  journey: { eyebrow: "旅先", title: "旅先ログ", badge: "旅行者", phase: "travel" },
  album: { eyebrow: "記録", title: "アルバム", badge: "旅行者", phase: "after" },
  impact: { eyebrow: "地域", title: "地域価値", badge: "地域", phase: "after" }
};

const recipientOptions = [
  { id: "mother", label: "母へ" },
  { id: "friend", label: "友人へ" },
  { id: "parents", label: "両親へ" },
  { id: "partner", label: "パートナーへ" }
];

const intentOptions = [
  { id: "rest", label: "ゆっくり休んでほしい" },
  { id: "celebrate", label: "お祝いしたい" },
  { id: "thanks", label: "感謝を伝えたい" },
  { id: "local", label: "地域らしさを感じてほしい" }
];

const toneOptions = [
  { id: "thanks", label: "ありがとう" },
  { id: "otsukare", label: "おつかれさま" },
  { id: "omedeto", label: "おめでとう" },
  { id: "surprise", label: "サプライズ" }
];

const scenarios = [
  {
    id: "mother-retirement",
    title: "退職祝いで母へ",
    summary: "温泉地でひと息つける 1泊2日",
    regionId: "nagano",
    recipient: "母へ",
    occasion: "退職祝い",
    duration: "1泊2日",
    budget: 50000,
    badge: "静かな旅",
    messages: {
      thanks: "これまで本当にありがとう。肩の力がほどける旅を贈ります。",
      otsukare: "おつかれさまの気持ちを込めて、静かな景色の旅を選びました。",
      omedeto: "新しい時間のはじまりに、やさしい旅をプレゼントします。",
      surprise: "ふだんは照れくさいから、旅で気持ちを届けます。"
    }
  },
  {
    id: "friend-wedding",
    title: "結婚祝いで友人へ",
    summary: "街歩きと美食を楽しむ 2泊3日",
    regionId: "kanazawa",
    recipient: "友人へ",
    occasion: "結婚祝い",
    duration: "2泊3日",
    budget: 80000,
    badge: "華やかな旅",
    messages: {
      thanks: "いつも支えてくれてありがとう。節目に似合う旅を贈ります。",
      otsukare: "準備をがんばったふたりへ、肩の力を抜ける時間をどうぞ。",
      omedeto: "おめでとう。これからの毎日に残る思い出になりますように。",
      surprise: "開けた瞬間にわくわくする、少し特別な旅を選びました。"
    }
  },
  {
    id: "parents-gratitude",
    title: "感謝を伝える旅を両親へ",
    summary: "海辺でゆっくり味わう 1泊2日",
    regionId: "setouchi",
    recipient: "両親へ",
    occasion: "感謝を伝える旅",
    duration: "1泊2日",
    budget: 50000,
    badge: "やさしい旅",
    messages: {
      thanks: "いつもありがとう。ふたりで景色を味わう時間を贈ります。",
      otsukare: "日々のおつかれさまを込めて、ゆるやかな海辺の旅です。",
      omedeto: "これからも元気でいてね、という気持ちを旅にしました。",
      surprise: "言葉より先に、うれしい時間が届くサプライズです。"
    }
  }
];

const regions = {
  nagano: {
    name: "長野・上高地",
    tagline: "森と湯けむりで、深呼吸する旅。",
    style: "静けさにひたる",
    gradient: "linear-gradient(145deg, rgba(29, 67, 58, 0.96), rgba(109, 155, 121, 0.92))",
    albumGradients: [
      "linear-gradient(145deg, rgba(69, 114, 83, 0.94), rgba(166, 202, 154, 0.82))",
      "linear-gradient(145deg, rgba(44, 83, 70, 0.94), rgba(113, 156, 124, 0.86))"
    ],
    ecLabel: "旅後に果実バターや森の香りの品へ広がる",
    stops: [
      { id: "nagano-inn", name: "森あいの宿", type: "宿泊", spend: 24000, note: "贈り主の気持ちが到着ログに残る" },
      { id: "nagano-soba", name: "川辺のそば処", type: "食", spend: 3800, note: "地域の味が旅ログにまとまる" },
      { id: "nagano-forest", name: "森のガイドウォーク", type: "体験", spend: 6800, note: "歩いた景色がアルバムの一枚になる" }
    ]
  },
  kanazawa: {
    name: "金沢",
    tagline: "街歩きと美食が、祝いの記憶になる。",
    style: "華やかにひたる",
    gradient: "linear-gradient(145deg, rgba(63, 37, 57, 0.96), rgba(171, 114, 100, 0.92))",
    albumGradients: [
      "linear-gradient(145deg, rgba(144, 101, 83, 0.94), rgba(89, 52, 67, 0.86))",
      "linear-gradient(145deg, rgba(181, 133, 102, 0.94), rgba(106, 69, 83, 0.84))"
    ],
    ecLabel: "旅後に器や和菓子などの地域ECにつながる",
    stops: [
      { id: "kanazawa-machiya", name: "町家ステイ", type: "宿泊", spend: 27000, note: "街の空気感まで表紙にのる" },
      { id: "kanazawa-craft", name: "工芸と茶のひととき", type: "体験", spend: 5400, note: "手仕事の時間が温度を上げる" },
      { id: "kanazawa-food", name: "旬の小さな会席", type: "食", spend: 6200, note: "地域の食体験で旅が締まる" }
    ]
  },
  setouchi: {
    name: "瀬戸内",
    tagline: "海のリズムに身をあずける、やさしい旅。",
    style: "ゆるやかにひたる",
    gradient: "linear-gradient(145deg, rgba(28, 70, 81, 0.96), rgba(113, 165, 190, 0.92))",
    albumGradients: [
      "linear-gradient(145deg, rgba(77, 135, 161, 0.94), rgba(214, 183, 133, 0.84))",
      "linear-gradient(145deg, rgba(40, 96, 115, 0.94), rgba(126, 180, 197, 0.84))"
    ],
    ecLabel: "旅後にレモンカードや海辺の工芸品へ広がる",
    stops: [
      { id: "setouchi-inn", name: "島影の小さな宿", type: "宿泊", spend: 23000, note: "海の気配まで伝わる一泊" },
      { id: "setouchi-ferry", name: "船でめぐる夕景ルート", type: "移動", spend: 2600, note: "移動そのものが思い出になる" },
      { id: "setouchi-workshop", name: "器とクラフトの工房", type: "体験", spend: 6100, note: "手で触れた時間が接点になる" }
    ]
  }
};

const defaultState = {
  screenId: "welcome",
  scenarioId: scenarios[0].id,
  pendingScenarioId: scenarios[0].id,
  recipientId: recipientOptions[0].id,
  intentId: intentOptions[0].id,
  request: "",
  toneId: toneOptions[0].id,
  useCustomMessage: false,
  customMessage: "",
  gifted: false,
  checkedStopIds: [],
  albumReady: false
};

const state = loadState();
let navDirection = "forward";
let toastTimer = null;
let celebrationTimer = null;

const elements = {
  navBack: document.getElementById("navBack"),
  navEyebrow: document.getElementById("navEyebrow"),
  navTitle: document.getElementById("navTitle"),
  navBadge: document.getElementById("navBadge"),
  phaseGift: document.getElementById("phaseGift"),
  phaseTravel: document.getElementById("phaseTravel"),
  phaseAfter: document.getElementById("phaseAfter"),
  screenShell: document.getElementById("screenShell"),
  screenView: document.getElementById("screenView"),
  stickyText: document.getElementById("stickyText"),
  primaryAction: document.getElementById("primaryAction"),
  toast: document.getElementById("toast"),
  celebration: document.getElementById("celebration"),
  celebrationTitle: document.getElementById("celebrationTitle"),
  celebrationText: document.getElementById("celebrationText")
};

sanitizeState();
bindEvents();
render(true);

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return { ...defaultState };
    }
    return { ...defaultState, ...JSON.parse(stored) };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function bindEvents() {
  elements.navBack.addEventListener("click", () => goBack());
  elements.primaryAction.addEventListener("click", () => handlePrimaryAction());

  elements.screenView.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest("button");
    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    if (button.dataset.recipientId) {
      state.recipientId = button.dataset.recipientId;
      saveState();
      render();
      return;
    }

    if (button.dataset.intentId) {
      state.intentId = button.dataset.intentId;
      saveState();
      render();
      return;
    }

    if (button.dataset.scenarioId) {
      applyScenario(button.dataset.scenarioId);
      return;
    }

    if (button.dataset.confirmScenarioId) {
      confirmScenario(button.dataset.confirmScenarioId);
      return;
    }

    if (button.dataset.toneId) {
      selectTone(button.dataset.toneId);
      return;
    }

    if (button.dataset.stopId) {
      checkIn(button.dataset.stopId);
      return;
    }

    if (button.dataset.action === "toggle-custom") {
      toggleCustomMessage();
      return;
    }

    if (button.dataset.action === "restart") {
      resetFlow();
    }
  });

  elements.screenView.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.id === "requestNote" && target instanceof HTMLTextAreaElement) {
      state.request = target.value;
      saveState();
      return;
    }

    if (target.id === "customMessage" && target instanceof HTMLInputElement) {
      state.customMessage = target.value;
      saveState();
      if (state.screenId === "tone") {
        render();
      }
    }
  });

  elements.celebration.addEventListener("click", () => hideCelebration());
}

function sanitizeState() {
  if (!screenOrder.includes(state.screenId)) {
    state.screenId = defaultState.screenId;
  }
  if (!scenarios.some((scenario) => scenario.id === state.scenarioId)) {
    state.scenarioId = defaultState.scenarioId;
  }
  if (!scenarios.some((scenario) => scenario.id === state.pendingScenarioId)) {
    state.pendingScenarioId = state.scenarioId;
  }
  if (!recipientOptions.some((item) => item.id === state.recipientId)) {
    state.recipientId = defaultState.recipientId;
  }
  if (!intentOptions.some((item) => item.id === state.intentId)) {
    state.intentId = defaultState.intentId;
  }
  if (!toneOptions.some((tone) => tone.id === state.toneId)) {
    state.toneId = defaultState.toneId;
  }
  if (!Array.isArray(state.checkedStopIds)) {
    state.checkedStopIds = [];
  }

  const validStopIds = new Set(currentRegion().stops.map((stop) => stop.id));
  state.checkedStopIds = state.checkedStopIds.filter((stopId) => validStopIds.has(stopId));

  if (!state.gifted) {
    state.checkedStopIds = [];
    state.albumReady = false;
    if (["journey", "album", "impact"].includes(state.screenId)) {
      state.screenId = "preview";
    }
  }

  if (state.checkedStopIds.length < 2) {
    state.albumReady = false;
    if (state.screenId === "impact") {
      state.screenId = "album";
    }
  }
}

function currentScenario() {
  return scenarios.find((scenario) => scenario.id === state.scenarioId) || scenarios[0];
}

function currentRegion() {
  return regions[currentScenario().regionId];
}

function checkedStops() {
  return currentRegion().stops.filter((stop) => state.checkedStopIds.includes(stop.id));
}

function recipientLabel() {
  return recipientOptions.find((item) => item.id === state.recipientId)?.label || recipientOptions[0].label;
}

function intentLabel() {
  return intentOptions.find((item) => item.id === state.intentId)?.label || intentOptions[0].label;
}

function resolvedMessage() {
  const scenario = currentScenario();
  if (state.useCustomMessage && state.customMessage.trim()) {
    return state.customMessage.trim();
  }
  return scenario.messages[state.toneId] || scenario.messages[toneOptions[0].id];
}

function recommendationList() {
  return scenarios
    .map((scenario, index) => ({
      scenario,
      score: scoreScenario(scenario),
      reason: reasonForScenario(scenario),
      rank: index
    }))
    .sort((left, right) => right.score - left.score || left.rank - right.rank);
}

function scoreScenario(scenario) {
  let score = 0;
  const request = state.request;

  if (state.recipientId === "mother" && scenario.id === "mother-retirement") {
    score += 4;
  }
  if (state.recipientId === "friend" && scenario.id === "friend-wedding") {
    score += 4;
  }
  if (state.recipientId === "parents" && scenario.id === "parents-gratitude") {
    score += 4;
  }
  if (state.recipientId === "partner" && scenario.id !== "mother-retirement") {
    score += 2;
  }

  if (state.intentId === "rest" && (scenario.id === "mother-retirement" || scenario.id === "parents-gratitude")) {
    score += 3;
  }
  if (state.intentId === "celebrate" && scenario.id === "friend-wedding") {
    score += 3;
  }
  if (state.intentId === "thanks" && scenario.id === "parents-gratitude") {
    score += 3;
  }
  if (state.intentId === "local" && scenario.id !== "friend-wedding") {
    score += 2;
  }

  if (includesAny(request, ["温泉", "静か", "自然", "森", "休ん"])) {
    score += scenario.id === "mother-retirement" ? 3 : 0;
  }
  if (includesAny(request, ["祝い", "華やか", "結婚", "記念", "グルメ", "食"])) {
    score += scenario.id === "friend-wedding" ? 3 : 0;
  }
  if (includesAny(request, ["海", "島", "感謝", "ゆっくり", "二人"])) {
    score += scenario.id === "parents-gratitude" ? 3 : 0;
  }

  return score;
}

function reasonForScenario(scenario) {
  const requestPart = state.request.trim() ? `「${trimText(state.request.trim(), 18)}」にも寄せています。` : "";

  if (scenario.id === "mother-retirement") {
    return `${recipientLabel()} に ${intentLabel()} を届けたい時に合う静かな旅です。${requestPart}`;
  }
  if (scenario.id === "friend-wedding") {
    return `${recipientLabel()} への節目やお祝いに向く、食と街歩きの旅です。${requestPart}`;
  }
  return `${recipientLabel()} にやさしい時間を贈りたい時に合う、海辺の旅です。${requestPart}`;
}

function proposalBadge(index) {
  if (index === 0) {
    return "いちばん合う";
  }
  if (index === 1) {
    return "次に合う";
  }
  return "別案";
}

function prepareProposal() {
  const topScenario = recommendationList()[0]?.scenario;
  if (topScenario) {
    state.pendingScenarioId = topScenario.id;
  }
}

function applyScenario(id) {
  if (!scenarios.some((scenario) => scenario.id === id)) {
    return;
  }
  state.pendingScenarioId = id;
  saveState();
  render();
}

function confirmScenario(id) {
  if (!scenarios.some((scenario) => scenario.id === id)) {
    return;
  }

  state.pendingScenarioId = id;
  if (state.scenarioId !== id) {
    state.scenarioId = id;
    state.toneId = toneOptions[0].id;
    state.useCustomMessage = false;
    state.customMessage = "";
    state.gifted = false;
    state.checkedStopIds = [];
    state.albumReady = false;
  }
  saveState();
  navigateTo("tone", "forward");
}

function selectTone(id) {
  if (!toneOptions.some((tone) => tone.id === id)) {
    return;
  }
  state.toneId = id;
  if (!state.customMessage.trim()) {
    state.useCustomMessage = false;
  }
  saveState();
  render();
}

function toggleCustomMessage() {
  state.useCustomMessage = !state.useCustomMessage;
  saveState();
  render();
}

function giftTrip() {
  state.gifted = true;
  state.checkedStopIds = [];
  state.albumReady = false;
  navigateTo("journey", "forward");
  showToast("旅を贈りました。");
}

function checkIn(stopId) {
  if (!state.gifted || state.checkedStopIds.includes(stopId)) {
    return;
  }
  state.checkedStopIds.push(stopId);
  saveState();
  render();
  showToast(state.checkedStopIds.length >= 2 ? "次はアルバムです。" : "1つ記録しました。");
}

function buildAlbum() {
  if (state.checkedStopIds.length < 2) {
    return;
  }
  state.albumReady = true;
  saveState();
  render();
  showCelebration("旅アルバムができました", "想いと体験がひとつにまとまりました。");
}

function resetFlow() {
  Object.assign(state, { ...defaultState });
  navDirection = "back";
  saveState();
  render(true);
}

function navigateTo(screenId, direction = "forward") {
  state.screenId = sanitizeScreenId(screenId);
  navDirection = direction;
  saveState();
  render(true);
}

function sanitizeScreenId(screenId) {
  if (!screenOrder.includes(screenId)) {
    return "welcome";
  }
  if (!state.gifted && ["journey", "album", "impact"].includes(screenId)) {
    return "preview";
  }
  if (!state.albumReady && screenId === "impact") {
    return "album";
  }
  return screenId;
}

function goBack() {
  const currentIndex = screenOrder.indexOf(state.screenId);
  if (currentIndex <= 0) {
    return;
  }
  let target = screenOrder[currentIndex - 1];
  if (!state.gifted && ["journey", "album", "impact"].includes(target)) {
    target = "preview";
  }
  navigateTo(target, "back");
}

function handlePrimaryAction() {
  if (state.screenId === "welcome") {
    prepareProposal();
    navigateTo("scenario", "forward");
    return;
  }
  if (state.screenId === "scenario") {
    confirmScenario(state.pendingScenarioId);
    return;
  }
  if (state.screenId === "tone") {
    navigateTo("preview", "forward");
    return;
  }
  if (state.screenId === "preview") {
    if (state.gifted) {
      navigateTo("journey", "forward");
    } else {
      giftTrip();
    }
    return;
  }
  if (state.screenId === "journey") {
    if (state.checkedStopIds.length >= 2) {
      navigateTo("album", "forward");
    }
    return;
  }
  if (state.screenId === "album") {
    if (state.albumReady) {
      navigateTo("impact", "forward");
    } else {
      buildAlbum();
    }
    return;
  }
  resetFlow();
}

function render(resetScroll = false) {
  sanitizeState();
  renderChrome();
  renderScreen();
  renderAction();
  saveState();
  if (resetScroll) {
    elements.screenShell.scrollTop = 0;
  }
}

function renderChrome() {
  const meta = screenMeta[state.screenId];
  elements.navEyebrow.textContent = meta.eyebrow;
  elements.navTitle.textContent = meta.title;
  elements.navBadge.textContent = meta.badge;
  elements.navBack.classList.toggle("hidden", state.screenId === "welcome");
  elements.phaseGift.classList.toggle("active", meta.phase === "gift");
  elements.phaseTravel.classList.toggle("active", meta.phase === "travel");
  elements.phaseAfter.classList.toggle("active", meta.phase === "after");
}

function renderScreen() {
  elements.screenView.className = `screen-view ${navDirection === "back" ? "is-back" : "is-forward"}`;
  elements.screenView.innerHTML = renderScreenContent();
}

function renderScreenContent() {
  if (state.screenId === "welcome") {
    return renderWelcomeScreen();
  }
  if (state.screenId === "scenario") {
    return renderProposalScreen();
  }
  if (state.screenId === "tone") {
    return renderToneScreen();
  }
  if (state.screenId === "preview") {
    return renderPreviewScreen();
  }
  if (state.screenId === "journey") {
    return renderJourneyScreen();
  }
  if (state.screenId === "album") {
    return renderAlbumScreen();
  }
  return renderImpactScreen();
}

function renderWelcomeScreen() {
  return `
    <section class="screen-panel">
      <div class="panel-head">
        <p class="panel-label">相談</p>
        <h2 class="welcome-title">誰に贈る旅か、<br>聞かせてください</h2>
        <p class="panel-copy">相手としたい時間をもとに、旅を出します。</p>
      </div>
      <article class="embedded-card slim-card">
        <div class="field-stack">
          <p class="section-label">誰に贈る？</p>
          <div class="tone-grid">
            ${renderRecipientButtons()}
          </div>
        </div>
        <div class="field-stack">
          <p class="section-label">どんな時間？</p>
          <div class="tone-grid">
            ${renderIntentButtons()}
          </div>
        </div>
      </article>
      <article class="embedded-card slim-card">
        <p class="section-label">ひとこと要望</p>
        <textarea id="requestNote" class="note-input" rows="3" placeholder="例: 温泉でゆっくりしてほしい / 食を楽しめる旅がいい">${escapeHtml(state.request)}</textarea>
      </article>
    </section>
  `;
}

function renderProposalScreen() {
  const proposals = recommendationList();
  return `
    <section class="screen-panel">
      <div class="panel-head compact-head">
        <p class="panel-label">提案</p>
        <p class="panel-copy">入力に合わせて、3つの旅を出しました。</p>
      </div>
      <article class="embedded-card slim-card">
        <div class="tag-row summary-tags">
          <span class="tag">${escapeHtml(recipientLabel())}</span>
          <span class="tag">${escapeHtml(intentLabel())}</span>
        </div>
        <p class="compact-copy">${state.request.trim() ? `要望: ${escapeHtml(trimText(state.request.trim(), 34))}` : "要望がなくても、相手と目的から旅を整えます。"}</p>
      </article>
      <div class="option-list">
        ${proposals.map((item, index) => `
          <article class="option-row ${item.scenario.id === state.pendingScenarioId ? "selected" : ""}">
            <div class="option-main">
              <div class="row-top">
                <div>
                  <p class="section-label">${proposalBadge(index)}</p>
                  <h3>${escapeHtml(item.scenario.title)}</h3>
                </div>
                <span class="tag">${escapeHtml(regions[item.scenario.regionId].name)}</span>
              </div>
              <p class="compact-copy">${escapeHtml(item.reason)}</p>
            </div>
            <div class="row-actions">
              <button class="select-button ${item.scenario.id === state.pendingScenarioId ? "active" : ""}" type="button" data-scenario-id="${item.scenario.id}">この旅にする</button>
              <button class="confirm-button" type="button" data-confirm-scenario-id="${item.scenario.id}" ${item.scenario.id === state.pendingScenarioId ? "" : "disabled"}>決定</button>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderToneScreen() {
  const scenario = currentScenario();
  return `
    <section class="screen-panel">
      <div class="panel-head compact-head">
        <p class="panel-label">届け方</p>
        <p class="panel-copy">${escapeHtml(scenario.title)} に添えるひとことを選びます。</p>
      </div>
      <article class="embedded-card slim-card">
        <div class="tag-row">
          <span class="tag">${escapeHtml(recipientLabel())}</span>
          <span class="tag">${escapeHtml(intentLabel())}</span>
        </div>
        <div class="tone-grid">
          ${renderToneButtons()}
        </div>
        <button class="text-button" type="button" data-action="toggle-custom">
          ${state.useCustomMessage ? "プリセットに戻す" : "自分の言葉を足す"}
        </button>
        <label class="custom-message ${state.useCustomMessage ? "" : "hidden"}">
          <input id="customMessage" type="text" maxlength="36" placeholder="例: 次は一緒に行こうね" value="${escapeHtml(state.customMessage)}">
        </label>
      </article>
      <article class="quote-box">「${escapeHtml(resolvedMessage())}」</article>
    </section>
  `;
}

function renderPreviewScreen() {
  const region = currentRegion();
  return `
    <section class="screen-panel">
      <div class="panel-head compact-head">
        <p class="panel-label">確認</p>
        <p class="panel-copy">相談内容から整えたギフトの確認です。</p>
      </div>
      ${renderGiftCard()}
      <article class="embedded-card slim-card">
        <div class="mini-list">
          <div class="mini-row"><strong>旅先</strong><span>${escapeHtml(region.name)}</span></div>
          <div class="mini-row"><strong>体験</strong><span>${escapeHtml(region.style)}</span></div>
          <div class="mini-row"><strong>記録</strong><span>旅先で2回タップ</span></div>
        </div>
      </article>
    </section>
  `;
}

function renderJourneyScreen() {
  const scenario = currentScenario();
  const region = currentRegion();
  const remaining = Math.max(0, 2 - state.checkedStopIds.length);
  return `
    <section class="screen-panel">
      <div class="panel-head compact-head">
        <p class="panel-label">旅先</p>
        <p class="panel-copy">${escapeHtml(scenario.recipient)} が旅先で記録する画面です。</p>
      </div>
      <article class="embedded-card slim-card">
        <div class="row-top">
          <div>
            <p class="section-label">進行</p>
            <h3>${remaining > 0 ? `あと${remaining}スポット` : "アルバムへ進めます"}</h3>
          </div>
          <span class="tag">${escapeHtml(region.name)}</span>
        </div>
        <div class="progress-bar"><span style="width:${Math.min(100, state.checkedStopIds.length * 50)}%"></span></div>
      </article>
      <div class="compact-list">
        ${renderStopRows()}
      </div>
    </section>
  `;
}

function renderAlbumScreen() {
  const region = currentRegion();
  const stops = checkedStops();
  return `
    <section class="screen-panel">
      <div class="panel-head compact-head">
        <p class="panel-label">記録</p>
        <p class="panel-copy">${state.albumReady ? "旅の記録が1冊にまとまりました。" : "2つそろうとアルバムになります。"}</p>
      </div>
      <article class="embedded-card album-card">
        <div class="album-grid">
          ${stops.slice(0, 2).map((stop, index) => `
            <div class="album-tile" style="background:${region.albumGradients[index % region.albumGradients.length]}">
              <span>${escapeHtml(stop.name)}</span>
            </div>
          `).join("")}
          ${Array.from({ length: Math.max(0, 2 - stops.length) }).map(() => `
            <div class="album-empty">旅の記録</div>
          `).join("")}
        </div>
        <p class="compact-copy">${state.albumReady ? escapeHtml(resolvedMessage()) : "相談内容と旅先の体験がここに並びます。"}</p>
      </article>
    </section>
  `;
}

function renderImpactScreen() {
  const region = currentRegion();
  const spend = checkedStops().reduce((total, stop) => total + stop.spend, 0);
  const ecPotential = Math.round(spend * 0.28);
  return `
    <section class="screen-panel">
      <div class="panel-head compact-head">
        <p class="panel-label">地域</p>
        <p class="panel-copy">旅の体験が、地域の価値にも返っていきます。</p>
      </div>
      <div class="stats-grid">
        <article class="stat-card"><span>回遊</span><strong>${state.checkedStopIds.length}/${currentRegion().stops.length}</strong></article>
        <article class="stat-card"><span>消費</span><strong>${formatCurrency(spend)}</strong></article>
        <article class="stat-card"><span>旅後EC</span><strong>+${formatCurrency(ecPotential)}</strong></article>
      </div>
      <article class="embedded-card slim-card">
        <p class="compact-copy">${escapeHtml(region.ecLabel)}</p>
        <button class="text-button" type="button" data-action="restart">最初から見る</button>
      </article>
    </section>
  `;
}

function renderRecipientButtons() {
  return recipientOptions.map((item) => `
    <button class="tone-chip ${item.id === state.recipientId ? "active" : ""}" type="button" data-recipient-id="${item.id}">
      ${escapeHtml(item.label)}
    </button>
  `).join("");
}

function renderIntentButtons() {
  return intentOptions.map((item) => `
    <button class="tone-chip ${item.id === state.intentId ? "active" : ""}" type="button" data-intent-id="${item.id}">
      ${escapeHtml(item.label)}
    </button>
  `).join("");
}

function renderToneButtons() {
  return toneOptions.map((tone) => `
    <button class="tone-chip ${tone.id === state.toneId && !state.useCustomMessage ? "active" : ""}" type="button" data-tone-id="${tone.id}">
      ${escapeHtml(tone.label)}
    </button>
  `).join("");
}

function renderGiftCard() {
  const scenario = currentScenario();
  const region = currentRegion();
  return `
    <article class="gift-card" style="background:${region.gradient}">
      <div class="row-top">
        <span class="tag">${escapeHtml(scenario.occasion)}</span>
        <span class="card-id">${escapeHtml(region.name)}</span>
      </div>
      <div class="gift-copy">
        <p class="card-note">${escapeHtml(region.tagline)}</p>
        <h3 class="card-title">${escapeHtml(recipientLabel())}に贈る旅</h3>
        <p class="card-message">${escapeHtml(resolvedMessage())}</p>
      </div>
      <div class="tag-row">
        <span class="card-chip">${escapeHtml(region.style)}</span>
        <span class="card-chip">${escapeHtml(currentScenario().duration)}</span>
        <span class="card-chip">${formatCurrency(currentScenario().budget)}</span>
      </div>
    </article>
  `;
}

function renderStopRows() {
  const region = currentRegion();
  return region.stops.map((stop) => {
    const checked = state.checkedStopIds.includes(stop.id);
    return `
      <article class="option-row ${checked ? "checked" : ""}">
        <div class="option-main">
          <div class="row-top">
            <div>
              <p class="section-label">${escapeHtml(stop.type)}</p>
              <h3>${escapeHtml(stop.name)}</h3>
            </div>
            <span class="tag">${formatCurrency(stop.spend)}</span>
          </div>
          <p class="compact-copy">${escapeHtml(stop.note)}</p>
        </div>
        <button class="confirm-button ${checked ? "done" : ""}" type="button" data-stop-id="${stop.id}" ${checked ? "disabled" : ""}>
          ${checked ? "記録済み" : "チェックイン"}
        </button>
      </article>
    `;
  }).join("");
}

function renderAction() {
  const action = primaryActionState();
  elements.stickyText.textContent = action.copy;
  elements.primaryAction.textContent = action.label;
  elements.primaryAction.disabled = action.disabled;
}

function primaryActionState() {
  if (state.screenId === "welcome") {
    return { copy: "入力から旅を提案します。", label: "旅を提案してもらう", disabled: false };
  }
  if (state.screenId === "scenario") {
    return { copy: "提案を選んで確定します。", label: "決定して次へ", disabled: false };
  }
  if (state.screenId === "tone") {
    return { copy: "届け方を整えます。", label: "確認へ", disabled: false };
  }
  if (state.screenId === "preview") {
    return {
      copy: state.gifted ? "旅行者の画面へ進みます。" : "内容を確認して贈ります。",
      label: state.gifted ? "旅先へ" : "この旅を贈る",
      disabled: false
    };
  }
  if (state.screenId === "journey") {
    const ready = state.checkedStopIds.length >= 2;
    return { copy: ready ? "次はアルバムです。" : "2つ記録すると次へ進みます。", label: ready ? "アルバムへ" : "記録を待つ", disabled: !ready };
  }
  if (state.screenId === "album") {
    return { copy: state.albumReady ? "最後に地域価値を見ます。" : "アルバムをつくります。", label: state.albumReady ? "地域価値へ" : "アルバムをつくる", disabled: !state.albumReady && state.checkedStopIds.length < 2 };
  }
  return { copy: "最初に戻れます。", label: "最初から見る", disabled: false };
}

function includesAny(text, keywords) {
  return keywords.some((keyword) => text.includes(keyword));
}

function trimText(text, length) {
  return text.length > length ? `${text.slice(0, length)}…` : text;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 1800);
}

function showCelebration(title, message) {
  window.clearTimeout(celebrationTimer);
  elements.celebrationTitle.textContent = title;
  elements.celebrationText.textContent = message;
  elements.celebration.classList.add("show");
  elements.celebration.setAttribute("aria-hidden", "false");
  celebrationTimer = window.setTimeout(() => {
    hideCelebration();
  }, 2200);
}

function hideCelebration() {
  elements.celebration.classList.remove("show");
  elements.celebration.setAttribute("aria-hidden", "true");
}

function formatCurrency(value) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0
  }).format(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}
