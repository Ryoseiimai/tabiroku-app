const STORAGE_KEY = "tabiroku-mobile-demo";

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
  scenarioId: scenarios[0].id,
  toneId: toneOptions[0].id,
  useCustomMessage: false,
  customMessage: "",
  gifted: false,
  checkedStopIds: [],
  albumReady: false
};

const state = loadState();

const elements = {
  scenarioList: document.getElementById("scenarioList"),
  toneList: document.getElementById("toneList"),
  toggleCustomMessage: document.getElementById("toggleCustomMessage"),
  customMessageField: document.getElementById("customMessageField"),
  customMessage: document.getElementById("customMessage"),
  giftCard: document.getElementById("giftCard"),
  journeySummary: document.getElementById("journeySummary"),
  journeyBanner: document.getElementById("journeyBanner"),
  stopList: document.getElementById("stopList"),
  albumPanel: document.getElementById("albumPanel"),
  impactNote: document.getElementById("impactNote"),
  metricList: document.getElementById("metricList"),
  stickyText: document.getElementById("stickyText"),
  primaryAction: document.getElementById("primaryAction"),
  stepGift: document.getElementById("stepGift"),
  stepTravel: document.getElementById("stepTravel"),
  stepAfter: document.getElementById("stepAfter"),
  journeyPanel: document.getElementById("journeyPanel"),
  impactPanel: document.getElementById("impactPanel"),
  toast: document.getElementById("toast"),
  celebration: document.getElementById("celebration"),
  celebrationTitle: document.getElementById("celebrationTitle"),
  celebrationText: document.getElementById("celebrationText")
};

let toastTimer = null;
let celebrationTimer = null;

elements.customMessage.value = state.customMessage;
bindEvents();
render();

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
  elements.scenarioList.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest("[data-scenario-id]");
    if (!(button instanceof HTMLElement) || !button.dataset.scenarioId) {
      return;
    }

    applyScenario(button.dataset.scenarioId);
  });

  elements.toneList.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest("[data-tone-id]");
    if (!(button instanceof HTMLElement) || !button.dataset.toneId) {
      return;
    }

    selectTone(button.dataset.toneId);
  });

  elements.toggleCustomMessage.addEventListener("click", () => {
    state.useCustomMessage = !state.useCustomMessage;
    saveState();
    renderToneArea();
    renderGift();
    renderSticky();

    if (state.useCustomMessage) {
      elements.customMessage.focus();
    }
  });

  elements.customMessage.addEventListener("input", () => {
    state.customMessage = elements.customMessage.value.trim();
    saveState();
    renderGift();
  });

  elements.stopList.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest("[data-stop-id]");
    if (!(button instanceof HTMLElement) || !button.dataset.stopId) {
      return;
    }

    checkIn(button.dataset.stopId);
  });

  elements.primaryAction.addEventListener("click", () => {
    const action = elements.primaryAction.dataset.action;
    if (action === "gift") {
      giftTrip();
      return;
    }

    if (action === "journey") {
      elements.journeyPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (action === "album") {
      buildAlbum();
      return;
    }

    if (action === "impact") {
      elements.impactPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  elements.celebration.addEventListener("click", () => {
    hideCelebration();
  });
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
  elements.customMessage.value = "";

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
  renderToneArea();
  renderGift();
  renderSticky();
}

function currentScenario() {
  return scenarios.find((item) => item.id === state.scenarioId) || scenarios[0];
}

function currentRegion() {
  return regions[currentScenario().regionId];
}

function resolvedMessage() {
  const scenario = currentScenario();
  if (state.useCustomMessage && state.customMessage.trim()) {
    return state.customMessage.trim();
  }

  return scenario.messages[state.toneId] || scenario.messages[toneOptions[0].id];
}

function checkedStops() {
  return currentRegion().stops.filter((stop) => state.checkedStopIds.includes(stop.id));
}

function giftTrip() {
  state.gifted = true;
  state.checkedStopIds = [];
  state.albumReady = false;

  saveState();
  render();
  showToast("旅を贈りました。受け取ると、このまま旅先モードに進みます。");
  elements.journeyPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function checkIn(stopId) {
  if (!state.gifted) {
    showToast("先に旅を贈ると、旅先でチェックインできるようになります。");
    return;
  }

  if (state.checkedStopIds.includes(stopId)) {
    return;
  }

  state.checkedStopIds.push(stopId);
  saveState();
  render();

  if (state.checkedStopIds.length >= 2) {
    showToast("思い出がそろいました。次は旅アルバムをつくれます。");
  } else {
    showToast("チェックインしました。あと1つで旅アルバムになります。");
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

function render() {
  renderScenarios();
  renderToneArea();
  renderGift();
  renderJourney();
  renderAlbum();
  renderImpact();
  renderSticky();
  renderSteps();
}

function renderScenarios() {
  elements.scenarioList.innerHTML = scenarios.map((scenario) => `
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

function renderToneArea() {
  elements.toneList.innerHTML = toneOptions.map((tone) => `
    <button class="tone-chip ${tone.id === state.toneId && !state.useCustomMessage ? "active" : ""}" type="button" data-tone-id="${tone.id}">
      ${escapeHtml(tone.label)}
    </button>
  `).join("");

  elements.customMessageField.classList.toggle("hidden", !state.useCustomMessage);
  elements.toggleCustomMessage.textContent = state.useCustomMessage
    ? "プリセットのひとことに戻す"
    : "自分の言葉を少しだけ足す";
}

function renderGift() {
  const scenario = currentScenario();
  const region = currentRegion();

  elements.giftCard.style.background = region.gradient;
  elements.giftCard.innerHTML = `
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
  `;
}

function renderJourney() {
  const scenario = currentScenario();
  const region = currentRegion();
  const remaining = Math.max(0, 2 - state.checkedStopIds.length);

  elements.journeySummary.textContent = state.gifted
    ? `${scenario.recipient}が旅先でタップすると、地域での体験がそのまま旅ログになります。`
    : "贈ったあと、旅先では2回タップするだけで思い出が残ります。";

  elements.journeyBanner.innerHTML = state.gifted
    ? `
      <p class="section-label">旅先モード</p>
      <h3>${escapeHtml(region.name)}での時間が、体験ログとして自動でたまります。</h3>
      <div class="scenario-tags">
        <span class="banner-chip">あと${remaining}回でアルバム</span>
        <span class="banner-chip">${escapeHtml(region.style)}</span>
      </div>
    `
    : `
      <p class="section-label">受け取り後</p>
      <h3>${escapeHtml(scenario.recipient)}にギフトが届くと、この画面が旅先のチェックイン画面になります。</h3>
      <div class="scenario-tags">
        <span class="banner-chip">${escapeHtml(region.name)}</span>
        <span class="banner-chip">${escapeHtml(scenario.duration)}</span>
      </div>
    `;

  elements.stopList.innerHTML = region.stops.map((stop) => {
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
        <button class="check-button" type="button" data-stop-id="${stop.id}" ${!state.gifted || checked ? "disabled" : ""}>
          ${checked ? "記録済み" : "ここでチェックイン"}
        </button>
      </article>
    `;
  }).join("");
}

function renderAlbum() {
  const scenario = currentScenario();
  const region = currentRegion();
  const stops = checkedStops();

  if (!state.gifted) {
    elements.albumPanel.innerHTML = `
      <article class="album-box">
        <h3>旅はまだこれから</h3>
        <p class="album-copy">贈ると、旅先で記録された体験が自動で一冊にまとまります。</p>
        <div class="album-empty">
          <div class="album-placeholder"></div>
          <div class="album-placeholder"></div>
        </div>
      </article>
    `;
    return;
  }

  if (!state.albumReady) {
    const remaining = Math.max(0, 2 - state.checkedStopIds.length);
    elements.albumPanel.innerHTML = `
      <article class="album-box">
        <h3>${escapeHtml(scenario.recipient)}の旅が育っています</h3>
        <p class="album-copy">あと${remaining}回タップすると、体験カードが自動で並びます。</p>
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
    return;
  }

  elements.albumPanel.innerHTML = `
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

function renderImpact() {
  const region = currentRegion();
  const spend = checkedStops().reduce((total, stop) => total + stop.spend, 0);
  const checkedCount = state.checkedStopIds.length;
  const ecPotential = Math.round(spend * 0.28);

  elements.impactNote.textContent = !state.gifted
    ? "旅を贈ることが、そのまま地域の回遊と消費の入口になります。"
    : state.albumReady
      ? "旅の体験が記録になることで、旅後の地域消費にもつながります。"
      : "旅先で記録がたまるほど、地域の価値も見えるようになります。";

  elements.metricList.innerHTML = `
    <article class="metric-card">
      <p class="section-label">回遊</p>
      <h3>チェックイン数</h3>
      <p class="metric-value">${checkedCount}/${region.stops.length}</p>
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
  `;
}

function renderSticky() {
  if (!state.gifted) {
    elements.stickyText.textContent = "旅先と気持ちが決まったら、ワンタップで贈れます。";
    elements.primaryAction.textContent = "この旅を贈る";
    elements.primaryAction.dataset.action = "gift";
    return;
  }

  if (state.checkedStopIds.length < 2) {
    elements.stickyText.textContent = "受け取った人は、旅先で2回タップするだけです。";
    elements.primaryAction.textContent = "旅先でチェックイン";
    elements.primaryAction.dataset.action = "journey";
    return;
  }

  if (!state.albumReady) {
    elements.stickyText.textContent = "思い出がそろったので、旅アルバムを仕上げられます。";
    elements.primaryAction.textContent = "旅アルバムをつくる";
    elements.primaryAction.dataset.action = "album";
    return;
  }

  elements.stickyText.textContent = "旅の価値が地域へどう返るか、最後まで見られます。";
  elements.primaryAction.textContent = "地域へのひろがりを見る";
  elements.primaryAction.dataset.action = "impact";
}

function renderSteps() {
  elements.stepGift.classList.toggle("active", !state.gifted);
  elements.stepTravel.classList.toggle("active", state.gifted && !state.albumReady);
  elements.stepAfter.classList.toggle("active", state.albumReady);
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
