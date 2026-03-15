const STORAGE_KEY = "tabiroku-mobile-screens-v1";

const screenOrder = ["welcome", "scenario", "tone", "preview", "journey", "album", "impact"];

const screenMeta = {
  welcome: { eyebrow: "Gift a Journey", title: "旅録", badge: "送り主", phase: "gift" },
  scenario: { eyebrow: "Sender Mode", title: "旅を選ぶ", badge: "送り主", phase: "gift" },
  tone: { eyebrow: "Sender Mode", title: "気持ちを選ぶ", badge: "送り主", phase: "gift" },
  preview: { eyebrow: "Sender Mode", title: "届くギフト", badge: "送り主", phase: "gift" },
  journey: { eyebrow: "Traveler Mode", title: "旅先で記録", badge: "旅行者", phase: "travel" },
  album: { eyebrow: "Traveler Mode", title: "旅アルバム", badge: "旅行者", phase: "after" },
  impact: { eyebrow: "Regional Value", title: "地域に返る価値", badge: "地域", phase: "after" }
};

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
    summary: "温泉地で、ひと息つける1泊2日",
    regionId: "nagano",
    recipient: "母へ",
    occasion: "退職祝い",
    duration: "1泊2日",
    budget: 50000,
    badge: "いちばん人気",
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
    summary: "街歩きと美食を楽しむ2泊3日",
    regionId: "kanazawa",
    recipient: "友人へ",
    occasion: "結婚祝い",
    duration: "2泊3日",
    budget: 80000,
    badge: "華やか",
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
    summary: "海辺でゆっくり味わう1泊2日",
    regionId: "setouchi",
    recipient: "両親へ",
    occasion: "感謝を伝える旅",
    duration: "1泊2日",
    budget: 50000,
    badge: "やさしい",
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
      "linear-gradient(145deg, rgba(44, 83, 70, 0.94), rgba(113, 156, 124, 0.86))",
      "linear-gradient(145deg, rgba(104, 146, 118, 0.94), rgba(204, 218, 181, 0.84))"
    ],
    ecLabel: "旅のあとに果実バターや森の香りの品へ広がる",
    stops: [
      {
        id: "nagano-inn",
        name: "森あいの宿",
        type: "宿泊",
        spend: 24000,
        note: "チェックインした瞬間に、贈り主のメッセージが旅ログへ残ります。"
      },
      {
        id: "nagano-soba",
        name: "川辺のそば処",
        type: "食",
        spend: 3800,
        note: "地域の味と店主のひとことが、写真と一緒にまとまります。"
      },
      {
        id: "nagano-forest",
        name: "森のガイドウォーク",
        type: "体験",
        spend: 6800,
        note: "歩いた景色がそのまま旅アルバムの一枚になります。"
      }
    ]
  },
  kanazawa: {
    name: "金沢",
    tagline: "街歩きと美食が、祝いの記憶になる。",
    style: "華やかにひたる",
    gradient: "linear-gradient(145deg, rgba(63, 37, 57, 0.96), rgba(171, 114, 100, 0.92))",
    albumGradients: [
      "linear-gradient(145deg, rgba(144, 101, 83, 0.94), rgba(89, 52, 67, 0.86))",
      "linear-gradient(145deg, rgba(181, 133, 102, 0.94), rgba(106, 69, 83, 0.84))",
      "linear-gradient(145deg, rgba(94, 59, 75, 0.94), rgba(190, 148, 109, 0.82))"
    ],
    ecLabel: "旅のあとに器や和菓子などの地域ECにつながる",
    stops: [
      {
        id: "kanazawa-machiya",
        name: "町家ステイ",
        type: "宿泊",
        spend: 27000,
        note: "古い街並みの空気感まで、旅ログの表紙にのります。"
      },
      {
        id: "kanazawa-craft",
        name: "工芸と茶のひととき",
        type: "体験",
        spend: 5400,
        note: "手仕事の時間が、思い出の温度を上げてくれます。"
      },
      {
        id: "kanazawa-food",
        name: "旬の小さな会席",
        type: "食",
        spend: 6200,
        note: "地域の食体験が、旅のストーリーを締めくくります。"
      }
    ]
  },
  setouchi: {
    name: "瀬戸内",
    tagline: "海のリズムに身をあずける、やさしい旅。",
    style: "ゆるやかにひたる",
    gradient: "linear-gradient(145deg, rgba(28, 70, 81, 0.96), rgba(113, 165, 190, 0.92))",
    albumGradients: [
      "linear-gradient(145deg, rgba(77, 135, 161, 0.94), rgba(214, 183, 133, 0.84))",
      "linear-gradient(145deg, rgba(40, 96, 115, 0.94), rgba(126, 180, 197, 0.84))",
      "linear-gradient(145deg, rgba(126, 184, 197, 0.94), rgba(235, 202, 145, 0.82))"
    ],
    ecLabel: "旅のあとにレモンカードや海辺の工芸品へ広がる",
    stops: [
      {
        id: "setouchi-inn",
        name: "島影の小さな宿",
        type: "宿泊",
        spend: 23000,
        note: "海の気配まで伝わる一泊が、旅の核になります。"
      },
      {
        id: "setouchi-ferry",
        name: "船でめぐる夕景ルート",
        type: "移動体験",
        spend: 2600,
        note: "移動そのものが、思い出の一枚として残ります。"
      },
      {
        id: "setouchi-workshop",
        name: "器とクラフトの工房",
        type: "体験",
        spend: 6100,
        note: "手で触れた時間が、地域との接点を深くします。"
      }
    ]
  }
};

const defaultState = {
  screenId: "welcome",
  scenarioId: scenarios[0].id,
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

    return {
      ...defaultState,
      ...JSON.parse(stored)
    };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function bindEvents() {
  elements.navBack.addEventListener("click", () => {
    goBack();
  });

  elements.primaryAction.addEventListener("click", () => {
    handlePrimaryAction();
  });

  elements.screenView.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest("button");
    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    if (button.dataset.scenarioId) {
      applyScenario(button.dataset.scenarioId);
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

    const action = button.dataset.action;
    if (!action) {
      return;
    }

    if (action === "toggle-custom") {
      toggleCustomMessage();
      return;
    }

    if (action === "goto-scenario") {
      navigateTo("scenario", "forward");
      return;
    }

    if (action === "goto-welcome") {
      navigateTo("welcome", "back");
      return;
    }

    if (action === "restart") {
      resetFlow();
    }
  });

  elements.screenView.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
      return;
    }

    if (target.id !== "customMessage") {
      return;
    }

    state.customMessage = target.value;
    saveState();
    if (state.screenId === "tone") {
      render();
    }
  });

  elements.celebration.addEventListener("click", () => {
    hideCelebration();
  });
}

function sanitizeState() {
  if (!screenOrder.includes(state.screenId)) {
    state.screenId = defaultState.screenId;
  }

  if (!scenarios.some((scenario) => scenario.id === state.scenarioId)) {
    state.scenarioId = defaultState.scenarioId;
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

function resolvedMessage() {
  const scenario = currentScenario();
  if (state.useCustomMessage && state.customMessage.trim()) {
    return state.customMessage.trim();
  }

  return scenario.messages[state.toneId] || scenario.messages[toneOptions[0].id];
}

function applyScenario(id) {
  const scenario = scenarios.find((item) => item.id === id);
  if (!scenario) {
    return;
  }

  state.scenarioId = scenario.id;
  state.toneId = toneOptions[0].id;
  state.useCustomMessage = false;
  state.customMessage = "";
  state.gifted = false;
  state.checkedStopIds = [];
  state.albumReady = false;
  saveState();
  render();
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

  if (state.useCustomMessage) {
    const input = document.getElementById("customMessage");
    if (input instanceof HTMLInputElement) {
      input.focus();
    }
  }
}

function giftTrip() {
  state.gifted = true;
  state.checkedStopIds = [];
  state.albumReady = false;
  navigateTo("journey", "forward");
  showToast("旅を贈りました。ここから先は受け取った人の画面です。");
}

function checkIn(stopId) {
  if (!state.gifted) {
    showToast("まずは旅を贈ると、旅先の画面へ進めます。");
    return;
  }

  if (state.checkedStopIds.includes(stopId)) {
    return;
  }

  state.checkedStopIds.push(stopId);
  saveState();
  render();

  if (state.checkedStopIds.length >= 2) {
    showToast("思い出がそろいました。次は旅アルバムへ進めます。");
  } else {
    showToast("チェックインしました。あと1スポットで旅アルバムです。");
  }
}

function buildAlbum() {
  if (state.checkedStopIds.length < 2) {
    showToast("まずは2つチェックインしてください。");
    return;
  }

  state.albumReady = true;
  saveState();
  render();
  showCelebration(
    "旅アルバムができました",
    "贈る人の想いと、旅する人の体験がひとつの記録になりました。"
  );
}

function resetFlow() {
  state.screenId = "welcome";
  state.scenarioId = scenarios[0].id;
  state.toneId = toneOptions[0].id;
  state.useCustomMessage = false;
  state.customMessage = "";
  state.gifted = false;
  state.checkedStopIds = [];
  state.albumReady = false;
  navDirection = "back";
  saveState();
  render(true);
  showToast("最初の画面に戻りました。");
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
    navigateTo("scenario", "forward");
    return;
  }

  if (state.screenId === "scenario") {
    navigateTo("tone", "forward");
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
    } else {
      showToast("この画面でスポットを2つ記録すると、次へ進めます。");
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

  if (state.screenId === "impact") {
    resetFlow();
  }
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

  if (state.screenId === "tone" && state.useCustomMessage) {
    const input = document.getElementById("customMessage");
    if (input instanceof HTMLInputElement) {
      input.value = state.customMessage;
    }
  }
}

function renderScreenContent() {
  if (state.screenId === "welcome") {
    return renderWelcomeScreen();
  }

  if (state.screenId === "scenario") {
    return renderScenarioScreen();
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
  const scenario = currentScenario();
  const region = currentRegion();

  return `
    <section class="hero-card">
      <p class="eyebrow">Gift a Journey</p>
      <h2 class="hero-title">大切な人に、<br>旅を贈る。</h2>
      <p class="hero-copy">今度は1画面ずつ進むモックです。選ぶ、贈る、旅する、残すをアプリっぽく体験できます。</p>
      <div class="hero-metrics">
        <article class="metric-mini">
          <strong>3</strong>
          <span>送り主の操作</span>
        </article>
        <article class="metric-mini">
          <strong>2</strong>
          <span>旅先のタップ</span>
        </article>
        <article class="metric-mini">
          <strong>1</strong>
          <span>自動アルバム</span>
        </article>
      </div>
    </section>

    <section class="surface-card">
      <div class="section-head">
        <p class="section-label">NEXT</p>
        <h2>まずは旅を選ぶ</h2>
        <p class="section-copy">いまのおすすめは、${escapeHtml(scenario.title)}。${escapeHtml(region.name)} の空気感から始められます。</p>
      </div>
      <div class="detail-grid">
        <article class="detail-item">
          <strong>贈る相手</strong>
          <span>${escapeHtml(scenario.recipient)}</span>
        </article>
        <article class="detail-item">
          <strong>旅先</strong>
          <span>${escapeHtml(region.name)}</span>
        </article>
        <article class="detail-item">
          <strong>旅の長さ</strong>
          <span>${escapeHtml(scenario.duration)}</span>
        </article>
      </div>
    </section>
  `;
}

function renderScenarioScreen() {
  return `
    <section class="surface-card">
      <div class="section-head">
        <p class="section-label">STEP 1</p>
        <h2>旅を選ぶ</h2>
        <p class="section-copy">ギフトの物語をひとつ選ぶと、このあと気持ちと一緒に旅へ変わります。</p>
      </div>
      <div class="scenario-list">
        ${renderScenarioCards()}
      </div>
    </section>
  `;
}

function renderToneScreen() {
  const scenario = currentScenario();
  const region = currentRegion();

  return `
    <section class="summary-card">
      <div class="summary-row">
        <div>
          <p class="section-label">SELECTED</p>
          <h3>${escapeHtml(scenario.title)}</h3>
        </div>
        <span class="tag">${escapeHtml(region.name)}</span>
      </div>
      <p class="summary-copy">${escapeHtml(region.tagline)}</p>
      <div class="scenario-tags">
        <span class="tag">${escapeHtml(scenario.duration)}</span>
        <span class="tag">${formatCurrency(scenario.budget)}</span>
      </div>
    </section>

    <section class="surface-card">
      <div class="section-head">
        <p class="section-label">STEP 2</p>
        <h2>気持ちを選ぶ</h2>
        <p class="section-copy">文章は打たなくても大丈夫。ひとことをタップするだけで贈れます。</p>
      </div>
      <div class="tone-grid">
        ${renderToneButtons()}
      </div>
      <button class="text-button" type="button" data-action="toggle-custom">
        ${state.useCustomMessage ? "プリセットのひとことに戻す" : "自分の言葉を少しだけ足す"}
      </button>
      <label class="custom-message ${state.useCustomMessage ? "" : "hidden"}">
        <span class="field-label">任意のひとこと</span>
        <input id="customMessage" type="text" maxlength="40" placeholder="例: 次は一緒に行こうね" value="${escapeHtml(state.customMessage)}">
      </label>
    </section>

    <section class="message-card">
      <p class="section-label">MESSAGE PREVIEW</p>
      <p class="quote-copy">「${escapeHtml(resolvedMessage())}」</p>
    </section>
  `;
}

function renderPreviewScreen() {
  const scenario = currentScenario();
  const region = currentRegion();

  return `
    <section class="surface-card">
      <div class="section-head">
        <p class="section-label">PREVIEW</p>
        <h2>届くギフト</h2>
        <p class="section-copy">送り主の気持ちと旅先の空気が、1枚のカードとして届きます。</p>
      </div>
      ${renderGiftCard()}
    </section>

    <section class="summary-card">
      <div class="summary-row">
        <div>
          <p class="section-label">DELIVERY</p>
          <h3>${escapeHtml(scenario.recipient)}に届く内容</h3>
        </div>
        <span class="tag">${escapeHtml(scenario.occasion)}</span>
      </div>
      <div class="detail-grid">
        <article class="detail-item">
          <strong>地域体験</strong>
          <span>${escapeHtml(region.style)}</span>
        </article>
        <article class="detail-item">
          <strong>旅先の記録</strong>
          <span>チェックインで自動保存</span>
        </article>
        <article class="detail-item">
          <strong>旅のあと</strong>
          <span>アルバムと地域ECへ接続</span>
        </article>
      </div>
    </section>
  `;
}

function renderJourneyScreen() {
  const scenario = currentScenario();
  const region = currentRegion();
  const remaining = Math.max(0, 2 - state.checkedStopIds.length);

  return `
    <section class="journey-banner">
      <p class="section-label">TRAVELER SCREEN</p>
      <h3>${escapeHtml(scenario.recipient)}が旅先でタップすると、体験ログがそのまま残ります。</h3>
      <p class="journey-summary">${remaining > 0 ? `あと${remaining}スポット記録すると、旅アルバムへ進めます。` : "2スポットそろったので、次は旅アルバムです。"}</p>
      <div class="scenario-tags">
        <span class="banner-chip">${escapeHtml(region.name)}</span>
        <span class="banner-chip">${escapeHtml(region.style)}</span>
      </div>
    </section>

    <section class="surface-card">
      <div class="section-head">
        <p class="section-label">CHECK IN</p>
        <h2>旅先で記録する</h2>
        <p class="section-copy">この画面では、立ち寄った場所をタップするだけです。</p>
      </div>
      <div class="stop-list">
        ${renderStopCards()}
      </div>
    </section>
  `;
}

function renderAlbumScreen() {
  const scenario = currentScenario();
  const region = currentRegion();
  const stops = checkedStops();

  let albumBody = `
    <article class="album-box">
      <h3>${escapeHtml(scenario.recipient)}の旅が育っています</h3>
      <p class="album-copy">2つの体験がそろうと、自動で旅アルバムをつくれます。</p>
      <div class="album-empty">
        ${stops.map((stop, index) => `
          <div class="album-photo" style="background:${region.albumGradients[index % region.albumGradients.length]}">
            ${escapeHtml(stop.name)}<br>${escapeHtml(stop.note)}
          </div>
        `).join("")}
        ${Array.from({ length: Math.max(0, 2 - stops.length) }).map(() => `
          <div class="album-placeholder"></div>
        `).join("")}
      </div>
    </article>
  `;

  if (state.albumReady) {
    albumBody = `
      <article class="album-box">
        <h3>${escapeHtml(region.name)}の旅アルバム</h3>
        <p class="album-copy">${escapeHtml(resolvedMessage())}</p>
        <div class="album-photos">
          ${stops.map((stop, index) => `
            <div class="album-photo" style="background:${region.albumGradients[index % region.albumGradients.length]}">
              ${escapeHtml(stop.name)}<br>${escapeHtml(stop.note)}
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }

  return `
    <section class="surface-card">
      <div class="section-head">
        <p class="section-label">ALBUM</p>
        <h2>旅アルバム</h2>
        <p class="section-copy">${state.albumReady ? "旅の記録が1冊にまとまりました。" : "記録された体験が、自動でアルバムになっていきます。"}</p>
      </div>
      ${albumBody}
    </section>
  `;
}

function renderImpactScreen() {
  const region = currentRegion();
  const spend = checkedStops().reduce((total, stop) => total + stop.spend, 0);
  const checkedCount = state.checkedStopIds.length;
  const ecPotential = Math.round(spend * 0.28);

  return `
    <section class="surface-card">
      <div class="section-head">
        <p class="section-label">REGIONAL VALUE</p>
        <h2>地域に返る価値</h2>
        <p class="section-copy">旅の体験が記録になることで、回遊、消費、旅後ECまで見えるようになります。</p>
      </div>
      <div class="metric-list">
        <article class="metric-card">
          <p class="section-label">回遊</p>
          <h3>チェックイン数</h3>
          <p class="metric-value">${checkedCount}/${currentRegion().stops.length}</p>
          <p>定番スポットだけでなく、地域内の回遊を後押しします。</p>
        </article>
        <article class="metric-card">
          <p class="section-label">地域消費</p>
          <h3>今回の消費額</h3>
          <p class="metric-value">${formatCurrency(spend)}</p>
          <p>小さな事業者にも届く使われ方が見える設計です。</p>
        </article>
        <article class="metric-card">
          <p class="section-label">旅後EC</p>
          <h3>次の購入余地</h3>
          <p class="metric-value">+${formatCurrency(ecPotential)}</p>
          <p>${escapeHtml(region.ecLabel)}</p>
        </article>
      </div>
      <button class="secondary-button" type="button" data-action="restart">もう一度はじめから見る</button>
    </section>
  `;
}

function renderScenarioCards() {
  return scenarios.map((scenario) => `
    <article class="scenario-card ${scenario.id === state.scenarioId ? "active" : ""}">
      <div class="scenario-top">
        <div>
          <p class="section-label">${escapeHtml(scenario.badge)}</p>
          <h3>${escapeHtml(scenario.title)}</h3>
        </div>
        <span class="tag">${escapeHtml(regions[scenario.regionId].name)}</span>
      </div>
      <p class="scenario-copy">${escapeHtml(scenario.summary)}</p>
      <div class="scenario-tags">
        <span class="tag">${escapeHtml(scenario.duration)}</span>
        <span class="tag">${formatCurrency(scenario.budget)}</span>
      </div>
      <button class="select-button ${scenario.id === state.scenarioId ? "active" : ""}" type="button" data-scenario-id="${scenario.id}">
        ${scenario.id === state.scenarioId ? "選択中" : "この旅にする"}
      </button>
    </article>
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
    <article class="gift-card" style="background:${region.gradient}" aria-live="polite">
      <div class="card-top">
        <span class="tag">${escapeHtml(scenario.occasion)}</span>
        <span class="card-id">${escapeHtml(region.name)}</span>
      </div>
      <div>
        <p class="card-note">${escapeHtml(region.tagline)}</p>
        <h3 class="card-title">${escapeHtml(scenario.recipient)}へ贈る旅</h3>
        <p class="card-message">${escapeHtml(resolvedMessage())}</p>
      </div>
      <div class="card-chip-list">
        <span class="card-chip">${escapeHtml(region.style)}</span>
        <span class="card-chip">${escapeHtml(scenario.duration)}</span>
        <span class="card-chip">${formatCurrency(scenario.budget)}</span>
      </div>
    </article>
  `;
}

function renderStopCards() {
  const region = currentRegion();
  return region.stops.map((stop) => {
    const checked = state.checkedStopIds.includes(stop.id);
    return `
      <article class="stop-card ${checked ? "checked" : ""}">
        <div class="stop-top">
          <div>
            <p class="section-label">${escapeHtml(stop.type)}</p>
            <h3>${escapeHtml(stop.name)}</h3>
          </div>
          <span class="tag">${formatCurrency(stop.spend)}</span>
        </div>
        <p>${escapeHtml(stop.note)}</p>
        <div class="stop-meta">
          <span class="tag">${escapeHtml(region.name)}</span>
          <span class="tag">${checked ? "記録済み" : "未記録"}</span>
        </div>
        <button class="check-button" type="button" data-stop-id="${stop.id}" ${checked ? "disabled" : ""}>
          ${checked ? "記録済み" : "ここでチェックイン"}
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
    return {
      copy: "まずはギフトにする旅を選びます。",
      label: "旅を選ぶ",
      disabled: false
    };
  }

  if (state.screenId === "scenario") {
    return {
      copy: "旅が決まったら、次は気持ちを選ぶだけです。",
      label: "気持ちを選ぶ",
      disabled: false
    };
  }

  if (state.screenId === "tone") {
    return {
      copy: "ことばが決まったら、届くギフトを確認できます。",
      label: "ギフトを確認する",
      disabled: false
    };
  }

  if (state.screenId === "preview") {
    return {
      copy: state.gifted
        ? "このまま受け取った人の画面へ進めます。"
        : "送り主の操作はここで完了です。",
      label: state.gifted ? "旅先の画面へ" : "この旅を贈る",
      disabled: false
    };
  }

  if (state.screenId === "journey") {
    const ready = state.checkedStopIds.length >= 2;
    return {
      copy: ready
        ? "2つの体験が記録されたので、旅アルバムへ進めます。"
        : "この画面でスポットを2つタップすると次へ進めます。",
      label: ready ? "旅アルバムへ" : "あと少しで次へ",
      disabled: !ready
    };
  }

  if (state.screenId === "album") {
    return {
      copy: state.albumReady
        ? "旅の記録がまとまりました。最後に地域への広がりを見ます。"
        : "この画面で旅アルバムを完成させます。",
      label: state.albumReady ? "地域へのひろがりへ" : "旅アルバムをつくる",
      disabled: !state.albumReady && state.checkedStopIds.length < 2
    };
  }

  return {
    copy: "最初の画面に戻って、もう一度体験できます。",
    label: "最初から見る",
    disabled: false
  };
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2200);
}

function showCelebration(title, message) {
  window.clearTimeout(celebrationTimer);
  elements.celebrationTitle.textContent = title;
  elements.celebrationText.textContent = message;
  elements.celebration.classList.add("show");
  elements.celebration.setAttribute("aria-hidden", "false");
  celebrationTimer = window.setTimeout(() => {
    hideCelebration();
  }, 2600);
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
