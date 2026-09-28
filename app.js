/**
 * app.js  v2.0
 * ─────────────────────────────────────────────────────────────
 * 職責：動態建構全部 DOM + 所有互動邏輯
 * 依賴：data.js（必須先載入）
 *
 * 架構說明
 * ─────────────────────────────────────────────────────────────
 * bootstrap()
 *   ├─ buildNav()          → #app-nav  內注入 nav-brand + nav-btn 群
 *   ├─ buildPanels()       → #app-main 內注入每個 .panel 骨架
 *   ├─ buildOverlays()     → #app-overlays 注入 modal / lightbox / back-top
 *   ├─ initHero()          → 填入 home panel 的所有動態資料
 *   ├─ initBackTop()       → 滾動顯示 / 點擊回頂端
 *   └─ bindGlobalEvents()  → modal overlay 背景關閉 / lightbox 關閉 / ESC
 *
 * 頁面切換
 *   goto(id)               → 切換 .panel.active；懶渲染各 section
 *
 * 各 section 渲染器
 *   initExperience()  → renderTimeline × 3
 *   switchTab(id)     → 切換 edu / work / teach
 *   renderAchievements()
 *   renderSkills()
 *   renderPublications()
 *
 * Modal 系統
 *   openAchModal(i)
 *   openPubModal(i)
 *   openProjectModal(i)
 *   openModal() / closeModal() / handleEscKey()
 *
 * Lightbox
 *   bindLightbox() / closeLightbox()
 *
 * Gallery
 *   buildGallery(images, altPrefix) → HTML string
 * ─────────────────────────────────────────────────────────────
 */

/* ============================================================
   ROUTER CONFIG
   ─────────────────────────────────────────────────────────────
   單一配置表驅動 nav 與 panel 建構；新增頁面只改這裡。
   ============================================================ */
const ROUTES = [
  { id: "home", label: "個人資訊", default: true },
  { id: "experience", label: "學歷語言", default: false },
  { id: "skills", label: "技術能力", default: false },
  { id: "achievements", label: "成果獎項", default: false },
  { id: "publications", label: "學術發表", default: false },
];

/* ============================================================
   EXPERIENCE TABS CONFIG
   ─────────────────────────────────────────────────────────────
   新增 tab 只改這裡，不動 HTML、不動渲染邏輯。
   ============================================================ */
const EXPERIENCE_TABS = [
  { id: "edu", label: "學歷語言", data: () => EDU_DATA },
  { id: "work", label: "臨床歷程", data: () => WORK_DATA },
  { id: "teach", label: "教學貢獻", data: () => TEACH_DATA },
];

/* ============================================================
   DOM BUILDERS
   ============================================================ */

/**
 * buildNav()
 * 依 ROUTES 建立 nav-brand 與所有 nav-btn；
 * active 狀態由 goto() 管理。
 */
function buildNav() {
  const nav = document.getElementById("app-nav");
  if (!nav) return;

  // brand
  const brand = document.createElement("span");
  brand.className = "nav-brand";
  brand.textContent = PROFILE.displayName;

  // buttons wrapper
  const links = document.createElement("div");
  links.className = "nav-links";

  ROUTES.forEach((route) => {
    const btn = document.createElement("button");
    btn.className = "nav-btn" + (route.default ? " active" : "");
    btn.dataset.panel = route.id;
    btn.textContent = route.label;
    btn.setAttribute("aria-current", route.default ? "page" : "false");
    btn.addEventListener("click", () => goto(route.id));
    links.appendChild(btn);
  });

  nav.appendChild(brand);
  nav.appendChild(links);
}

/**
 * buildPanels()
 * 依 ROUTES 建立每個 .panel 的骨架；
 * 各 panel 的內部結構在此一次性注入，之後由各渲染器填資料。
 */
function buildPanels() {
  const main = document.getElementById("app-main");
  if (!main) return;

  ROUTES.forEach((route) => {
    const panel = document.createElement("div");
    panel.id = route.id;
    panel.className = "panel" + (route.default ? " active" : "");
    panel.innerHTML = PANEL_TEMPLATES[route.id]();
    main.appendChild(panel);
  });
}

/**
 * buildOverlays()
 * modal、lightbox、back-to-top 全在此建立，不再污染 index.html。
 */
function buildOverlays() {
  const container = document.getElementById("app-overlays");
  if (!container) return;

  container.innerHTML = `
    <!-- Modal -->
    <div id="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div id="modal-box"></div>
    </div>

    <!-- Lightbox -->
    <div id="lightbox-overlay" aria-label="圖片放大檢視">
      <img id="lightbox-img" src="" alt="" />
    </div>

    <!-- Back to top -->
    <button id="back-top" aria-label="回到頂端">↑</button>
  `;
}

/* ============================================================
   PANEL TEMPLATES
   ─────────────────────────────────────────────────────────────
   每個 route 對應一個模板函式，回傳 innerHTML 字串。
   靜態骨架（標題、容器 id）在此定義；
   動態資料（卡片、時間軸項目）由各渲染器填入。
   ============================================================ */
const PANEL_TEMPLATES = {
  home: () => `
    <section class="hero">
      <div class="hero-left">
        <span class="hero-tag"></span>
        <h1><em>跨越</em><br />臨床與資訊的橋樑</h1>
        <p class="hero-sub"></p>
        <div class="hero-stats"></div>
      </div>
      <div class="hero-card">
        <img src="./img/avatar.jpg" class="avatar" alt="個人頭像" />
        <h3></h3>
        <p class="title-sub"></p>
        <div class="tag-list"></div>
      </div>
    </section>
    <hr class="divider" />
    <footer>
      <p class="footer-title"></p>
      <div class="contact-row"></div>
    </footer>
  `,

  experience: () => {
    const tabBtns = EXPERIENCE_TABS.map(
      (t, i) => `
      <button class="tab-btn${i === 0 ? " active" : ""}"
              data-tab="${t.id}"
              aria-selected="${i === 0}">${t.label}</button>
    `,
    ).join("");

    const tabPanels = EXPERIENCE_TABS.map(
      (t, i) => `
      <div id="${t.id}" class="tl-panel${i === 0 ? " active" : ""}">
        <div class="timeline" id="${t.id}-tl"></div>
      </div>
    `,
    ).join("");

    return `
      <section class="section">
        <p class="section-label">Experience</p>
        <h2 class="section-title">學習與工作歷程</h2>
        <div class="tab-bar" role="tablist">${tabBtns}</div>
        ${tabPanels}
      </section>
    `;
  },

  achievements: () => `
    <section class="section">
      <p class="section-label">Achievements</p>
      <h2 class="section-title">競賽成果與榮譽</h2>
      <div class="ach-grid" id="ach-grid"></div>
    </section>
  `,

  skills: () => `
    <section class="section">
      <p class="section-label">Skills</p>
      <h2 class="section-title">技術能力概覽</h2>
      <div class="skills-grid" id="skills-grid"></div>
      <div class="clinical-projects-header">
        <p class="section-label" style="margin-top:3rem">Clinical Projects</p>
        <h2 class="section-title">臨床實作專案</h2>
        <p class="section-desc">實際部署於臨床場域、改善工作流程的自建工具。</p>
      </div>
      <div class="project-grid" id="clinical-projects"></div>
    </section>
  `,

  publications: () => `
    <section class="section">
      <p class="section-label">Publications</p>
      <h2 class="section-title">學術研究發表</h2>
      <div class="pub-list" id="pub-list"></div>
    </section>
  `,
};

/* ============================================================
   SECTION NAVIGATION
   ============================================================ */

/** 懶渲染對應表；只在首次切換時執行渲染 */
const RENDER_MAP = {
  experience: initExperience,
  achievements: renderAchievements,
  skills: renderSkills,
  publications: renderPublications,
};

/** 已渲染過的 section（避免重複渲染） */
const _rendered = new Set(["home"]);

function goto(id) {
  // 切換 panel
  document
    .querySelectorAll(".panel")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById(id)?.classList.add("active");

  // 切換 nav 狀態
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    const isActive = btn.dataset.panel === id;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-current", isActive ? "page" : "false");
  });

  // 懶渲染（只執行一次）
  if (!_rendered.has(id) && RENDER_MAP[id]) {
    RENDER_MAP[id]();
    _rendered.add(id);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================
   EXPERIENCE TABS
   ============================================================ */

function initExperience() {
  // 初次進入：渲染第一個 tab
  const first = EXPERIENCE_TABS[0];
  renderTimeline(`${first.id}-tl`, first.data());

  // 綁定 tab 切換事件
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab, btn));
  });
}

function switchTab(id, btn) {
  document
    .querySelectorAll(".tl-panel")
    .forEach((p) => p.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach((t) => {
    t.classList.remove("active");
    t.setAttribute("aria-selected", "false");
  });

  document.getElementById(id)?.classList.add("active");
  btn.classList.add("active");
  btn.setAttribute("aria-selected", "true");

  const tab = EXPERIENCE_TABS.find((t) => t.id === id);
  if (tab) renderTimeline(`${id}-tl`, tab.data());
}

/* ============================================================
   TIMELINE RENDERER
   ============================================================ */

function renderTimeline(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  data.forEach((item, index) => {
    const el = document.createElement("div");
    el.className = "tl-item";

    // 有佐證資料才顯示按鈕
    const evidenceBtn = item.evidence
      ? `<button class="tl-evidence-btn" aria-label="查看「${item.title}」佐證資料">
      查看佐證文件
         </button>`
      : "";

    // 有外部連結（如論文 DOI）才顯示連結按鈕
    const linkBtn = item.externalUrl
      ? `<a class="tl-evidence-btn tl-link-btn" href="${item.externalUrl}"
            target="_blank" rel="noopener">${item.linkLabel || "查看連結"} ↗</a>`
      : "";

    el.innerHTML = `
      <div class="tl-dot ${item.dot || ""}"></div>
      <div class="tl-year">${item.year}</div>
      <div class="tl-title">${item.title}</div>
      <div class="tl-desc">${item.desc}</div>
      ${evidenceBtn}
      ${linkBtn}
    `;

    // 綁定按鈕點擊（若有）
    if (item.evidence) {
      el.querySelector(".tl-evidence-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        openWorkEvidenceModal(item);
      });
    }

    container.appendChild(el);
    setTimeout(() => el.classList.add("show"), index * 90 + 80);
  });
}

/* ============================================================
   ACHIEVEMENTS RENDERER
   ============================================================ */

function renderAchievements() {
  const container = document.getElementById("ach-grid");
  if (!container) return;

  container.innerHTML = ACH_DATA.map(
    (item, index) => `
    <div class="ach-card" role="button" tabindex="0"
         data-ach-index="${index}"
         aria-label="查看「${item.name}」詳細內容">
      <span class="ach-icon">${item.icon}</span>
      <div class="ach-year">${item.year}</div>
      <div class="ach-name">${item.name}</div>
      <div class="ach-org">${item.org}</div>
      <div class="ach-card-footer">
        <span class="badge ${item.btype}">🏅 ${item.badge}</span>
        <span class="card-more-hint">查看詳情 →</span>
      </div>
    </div>
  `,
  ).join("");

  container.querySelectorAll(".ach-card").forEach((card) => {
    const i = Number(card.dataset.achIndex);
    card.addEventListener("click", () => openAchModal(i));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") openAchModal(i);
    });
  });
}

function openAchModal(index) {
  const item = ACH_DATA[index];
  const d = item.detail;

  const techHTML = d.tech?.length
    ? `<div class="modal-tech">
        ${d.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
       </div>`
    : "";

  // 判斷是否有實際圖片（src 非空字串）
  const hasRealImages = d.images?.some(
    (img) => img.src && img.src.trim() !== "",
  );
  // externalUrl 可放在頂層或 detail 層
  const externalUrl = (item.externalUrl || d.externalUrl || "").trim();
  const hasExternalUrl = externalUrl !== "";
  const name = d.name || item.name;

  let mediaHTML = "";
  if (hasRealImages) {
    const realImages = d.images.filter(
      (img) => img.src && img.src.trim() !== "",
    );
    mediaHTML = buildGallery(realImages, item.name);
    if (hasExternalUrl) {
      mediaHTML += `
        <div class="modal-link-card" style="margin: 0 2rem 1.25rem;">
          <div class="modal-link-card-inner">
            <div class="modal-link-card-text">
              <div class="modal-link-card-label">更多資訊</div>
              <div class="modal-link-card-url">${name}</div>
            </div>
            <a href="${externalUrl}" target="_blank" rel="noopener"
               class="modal-link-card-btn">前往 ↗</a>
          </div>
        </div>`;
    }
  } else if (hasExternalUrl) {
    mediaHTML = `
      <div class="modal-link-card">
        <div class="modal-link-card-inner">
          <div class="modal-link-card-text">
            <div class="modal-link-card-label">更多資訊</div>
            <div class="modal-link-card-url">${name}</div>
          </div>
          <a href="${externalUrl}" target="_blank" rel="noopener"
             class="modal-link-card-btn">前往 ↗</a>
        </div>
      </div>`;
  }

  document.getElementById("modal-box").innerHTML = `
    <button class="modal-close" aria-label="關閉">✕</button>
    <div class="modal-header">
      <span class="modal-icon">${item.icon}</span>
      <div>
        <div class="modal-year">${item.year}</div>
        <h3 id="modal-title" class="modal-title">${item.name}</h3>
        <div class="modal-org">${item.org}</div>
        <span class="badge ${item.btype}">🏅 ${item.badge}</span>
      </div>
    </div>
    ${mediaHTML}
    <div class="modal-body">
      <div class="modal-section">
        <div class="modal-section-label">背景</div>
        <p>${d.background}</p>
      </div>
      <div class="modal-section">
        <div class="modal-section-label">內容</div>
        <p>${d.contribution}</p>
      </div>
      <div class="modal-section">
        <div class="modal-section-label">成果</div>
        <p>${d.outcome}</p>
      </div>
      ${techHTML}
    </div>
  `;

  document
    .querySelector("#modal-box .modal-close")
    .addEventListener("click", closeModal);
  bindLightbox();
  openModal();
}

/* ============================================================
   PUBLICATIONS RENDERER
   ============================================================ */

function renderPublications() {
  const container = document.getElementById("pub-list");
  if (!container) return;

  container.innerHTML = PUB_DATA.map(
    (item, index) => `
    <div class="pub-item" role="button" tabindex="0"
         data-pub-index="${index}"
         aria-label="查看「${item.title}」詳細內容">
      <div class="pub-type ${item.type}">${item.typeLabel}</div>
      <div class="pub-content">
        <div class="pub-title">${item.title}</div>
        <div class="pub-meta">${item.venue}</div>
      </div>
      <div class="pub-actions">
        ${
          item.externalUrl
            ? `<a href="${item.externalUrl}" target="_blank" rel="noopener"
               class="pub-ext-btn" title="查看原文">查看原文 ↗</a>`
            : ""
        }
        <span class="pub-more-hint">詳細內容 →</span>
      </div>
    </div>
  `,
  ).join("");

  container.querySelectorAll(".pub-item").forEach((card) => {
    const i = Number(card.dataset.pubIndex);
    card.addEventListener("click", (e) => {
      // 不讓外部連結按鈕的點擊觸發 modal
      if (!e.target.closest(".pub-ext-btn")) openPubModal(i);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") openPubModal(i);
    });
    // 外部連結不冒泡到 card
    card
      .querySelector(".pub-ext-btn")
      ?.addEventListener("click", (e) => e.stopPropagation());
  });
}

function openPubModal(index) {
  const item = PUB_DATA[index];
  const d = item.detail;

  const SECTION_LABELS = {
    background: "研究背景",
    objective: "研究目的",
    method: "研究方法",
    finding: "主要發現",
  };

  const sectionsHTML = Object.entries(SECTION_LABELS)
    .filter(([key]) => d[key])
    .map(
      ([key, label]) => `
      <div class="modal-section">
        <div class="modal-section-label">${label}</div>
        <p>${d[key]}</p>
      </div>
    `,
    )
    .join("");

  const galleryHTML = item.images?.length
    ? buildGallery(item.images, item.title)
    : "";

  const extBtnHTML = item.externalUrl
    ? `<div class="modal-ext-row">
        <a href="${item.externalUrl}" target="_blank" rel="noopener" class="modal-ext-btn">
          查看完整論文 / 原文 ↗
        </a>
       </div>`
    : "";

  document.getElementById("modal-box").innerHTML = `
    <button class="modal-close" aria-label="關閉">✕</button>
    <div class="modal-header pub-modal-header">
      <div class="pub-type ${item.type} modal-pub-badge">${item.typeLabel}</div>
      <div>
        <div class="modal-year">${item.year}</div>
        <h3 id="modal-title" class="modal-title">${item.title}</h3>
        <div class="modal-org">${item.venue}</div>
      </div>
    </div>
    ${galleryHTML}
    <div class="modal-body">
      ${sectionsHTML}
      ${extBtnHTML}
    </div>
  `;

  document
    .querySelector("#modal-box .modal-close")
    .addEventListener("click", closeModal);
  bindLightbox();
  openModal();
}

/* ============================================================
   SKILLS + CLINICAL PROJECTS
   ============================================================ */

function renderSkills() {
  // ── 技術能力條狀圖 ──────────────────────────────────────
  const skillsContainer = document.getElementById("skills-grid");
  if (skillsContainer) {
    // 先以 width:0% 渲染，之後用 rAF 觸發 CSS transition 動畫
    skillsContainer.innerHTML = SKILLS_DATA.map(
      (group) => `
      <div class="skill-group">
        <h4>${group.group}</h4>
        ${group.skills
          .map(
            ([name, pct]) => `
          <div class="skill-item">
            <span class="skill-name">${name}</span>
            <div class="skill-bar">
              <div class="skill-fill" data-pct="${pct}" style="width:0%"></div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    `,
    ).join("");

    // 下一幀再設定實際寬度，讓 transition 生效
    requestAnimationFrame(() => {
      skillsContainer.querySelectorAll(".skill-fill").forEach((bar) => {
        bar.style.width = bar.dataset.pct + "%";
      });
    });
  }

  // ── 臨床實作專案 ─────────────────────────────────────────
  const projectsContainer = document.getElementById("clinical-projects");
  if (projectsContainer && projectsContainer.innerHTML.trim() === "") {
    projectsContainer.innerHTML = CLINICAL_PROJECTS.map((p, index) => {
      const hasRealImages = p.detail.images?.some(
        (img) => img.src && img.src.trim() !== "",
      );
      const hasExtUrl = p.externalUrl && p.externalUrl.trim() !== "";
      // 卡片提示文字
      const hintText = hasRealImages
        ? "查看截圖 →"
        : hasExtUrl
          ? "前往連結 ↗"
          : "查看詳情 →";
      // 若只有外部連結（無圖），在卡片上直接顯示小連結徽章
      return `
        <div class="project-card" role="button" tabindex="0"
             data-project-index="${index}"
             aria-label="查看「${p.title}」詳細內容">
          <div class="project-card-top">
            <span class="project-icon">${p.icon}</span>
            <span class="project-tag ${p.tagColor}">${p.tag}</span>
          </div>
          <div class="project-title">${p.title}</div>
          <div class="project-desc">${p.desc}</div>
          <div class="project-card-footer">
            <div class="project-tech">
              ${p.tech.map((t) => `<span class="tech-chip">${t}</span>`).join("")}
            </div>
            <span class="card-more-hint">${hintText}</span>
          </div>
        </div>
      `;
    }).join("");

    projectsContainer.querySelectorAll(".project-card").forEach((card) => {
      const i = Number(card.dataset.projectIndex);
      card.addEventListener("click", () => openProjectModal(i));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") openProjectModal(i);
      });
    });
  }
}

/* ============================================================
   WORK EVIDENCE MODAL
   ─────────────────────────────────────────────────────────────
   供「臨床工作」時間軸項目點擊「查看佐證文件」時使用。
   重用現有 modal + lightbox + buildGallery 系統。
   ============================================================ */

function openWorkEvidenceModal(item) {
  const ev = item.evidence;

  document.getElementById("modal-box").innerHTML = `
    <button class="modal-close" aria-label="關閉">✕</button>
    <div class="modal-header">
      <div>
        <div class="modal-year">${item.year}</div>
        <h3 id="modal-title" class="modal-title">${item.title}</h3>
        ${ev.subtitle ? `<div class="modal-org">${ev.subtitle}</div>` : ""}
      </div>
    </div>
    ${buildGallery(ev.images, item.title)}
    <div class="modal-body">
      <div class="modal-section">
        <div class="modal-section-label">說明</div>
        <p>${item.desc}</p>
      </div>
      <div class="work-evidence-note">
        <span class="work-evidence-note-icon">ℹ️</span>
        點擊圖片可放大檢視。
      </div>
    </div>
  `;

  document
    .querySelector("#modal-box .modal-close")
    .addEventListener("click", closeModal);
  bindLightbox();
  openModal();
}

/* ============================================================
   PROJECT MODAL
   ============================================================ */

// data.js 內 problem/solution/impact 常以「1. ...\n2. ...」條列撰寫，
// 這裡把每一行拆成獨立 <li>，並去除原本手打的數字前綴（避免與 <ol>
// 自動編號重複顯示成「1. 1. ...」）；單行內容則維持原本的 <p> 呈現。
function renderDetailText(text) {
  const lines = (text || "")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l !== "");

  if (lines.length <= 1) {
    return `<p>${text || ""}</p>`;
  }

  const items = lines
    .map((l) => l.replace(/^\d+[.、)]\s*/, ""))
    .map((l) => `<li>${l}</li>`)
    .join("");
  return `<ol class="modal-detail-list">${items}</ol>`;
}

function openProjectModal(index) {
  const p = CLINICAL_PROJECTS[index];
  const d = p.detail;

  // 判斷是否有實際圖片（src 非空字串）
  const hasRealImages = d.images?.some(
    (img) => img.src && img.src.trim() !== "",
  );
  // externalUrl 可放在頂層或 detail 層
  const externalUrl = (p.externalUrl || d.externalUrl || "").trim();
  const hasExternalUrl = externalUrl !== "";
  const name = p.name || d.name;

  // 圖片區域：有圖就 gallery；沒圖但有外部連結 → 大型連結卡；都沒有 → 空
  let mediaHTML = "";
  if (hasRealImages) {
    // 只傳入有 src 的圖（過濾掉佔位符）
    const realImages = d.images.filter(
      (img) => img.src && img.src.trim() !== "",
    );
    mediaHTML = buildGallery(realImages, p.title);
    // 圖片下方附上前往連結按鈕
    if (hasExternalUrl) {
      mediaHTML += `
      <div class="modal-link-card">
        <div class="modal-link-card-inner">
          <div class="modal-link-card-text">
            <div class="modal-link-card-label">專案內容</div>
            <div class="modal-link-card-url">${name}</div>
          </div>
          <a href="${externalUrl}" target="_blank" rel="noopener"
             class="modal-link-card-btn">前往 ↗</a>
        </div>
      </div>`;
    }
  } else if (hasExternalUrl) {
    // 無圖片 → 顯示醒目大型連結卡
    mediaHTML = `
      <div class="modal-link-card">
        <div class="modal-link-card-inner">
          <div class="modal-link-card-text">
            <div class="modal-link-card-label">專案內容</div>
            <div class="modal-link-card-url">${name}</div>
          </div>
          <a href="${externalUrl}" target="_blank" rel="noopener"
             class="modal-link-card-btn">前往 ↗</a>
        </div>
      </div>`;
  }

  document.getElementById("modal-box").innerHTML = `
    <button class="modal-close" aria-label="關閉">✕</button>
    <div class="modal-header">
      <span class="modal-icon">${p.icon}</span>
      <div>
        <span class="project-tag ${p.tagColor}"
              style="margin-bottom:0.5rem;display:inline-block">${p.tag}</span>
        <h3 id="modal-title" class="modal-title">${p.title}</h3>
        <div class="modal-tech-inline">
          ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
    ${mediaHTML}
    <div class="modal-body">
      <div class="modal-section">
        <div class="modal-section-label">問題背景</div>
        ${renderDetailText(d.problem)}
      </div>
      <div class="modal-section">
        <div class="modal-section-label">解決方案</div>
        ${renderDetailText(d.solution)}
      </div>
      <div class="modal-section">
        <div class="modal-section-label">實際成效</div>
        ${renderDetailText(d.impact)}
      </div>
    </div>
  `;

  document
    .querySelector("#modal-box .modal-close")
    .addEventListener("click", closeModal);
  bindLightbox();
  openModal();
}

/* ============================================================
   GALLERY BUILDER
   ─────────────────────────────────────────────────────────────
   images: [{ src, caption }]   src 空字串 → 顯示佔位框
   ============================================================ */

function buildGallery(images, altPrefix) {
  if (!images?.length) return "";

  const items = images
    .map((img, i) => {
      if (img.src) {
        return `
        <div class="gallery-item">
          <img src="${img.src}"
               alt="${altPrefix} — ${img.caption || "圖 " + (i + 1)}"
               class="gallery-img lightbox-trigger"
               loading="lazy"
               onerror="this.parentElement.innerHTML=_placeholderInner('${(img.caption || "圖片載入失敗").replace(/'/g, "\\'")}')">
          ${img.caption ? `<div class="gallery-caption">${img.caption}</div>` : ""}
        </div>`;
      }
      return `
      <div class="gallery-item gallery-placeholder">
        <div class="gallery-placeholder-inner">
          <span>📷</span>
          <small>${img.caption || "截圖待上傳"}</small>
        </div>
        ${img.caption ? `<div class="gallery-caption">${img.caption}</div>` : ""}
      </div>`;
    })
    .join("");

  return `<div class="modal-gallery">${items}</div>`;
}

/** onerror 內嵌字串呼叫，需掛在 window */
window._placeholderInner = (caption) =>
  `<div class="gallery-placeholder-inner"><span>📷</span><small>${caption}</small></div>`;

/* ============================================================
   LIGHTBOX
   ============================================================ */

function bindLightbox() {
  document.querySelectorAll(".lightbox-trigger").forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      const lbImg = document.getElementById("lightbox-img");
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      document.getElementById("lightbox-overlay").classList.add("active");
    });
  });
}

function closeLightbox() {
  document.getElementById("lightbox-overlay")?.classList.remove("active");
}

/* ============================================================
   MODAL OPEN / CLOSE
   ============================================================ */

function openModal() {
  document.getElementById("modal-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", handleEscKey);
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("active");
  closeLightbox();
  document.body.style.overflow = "";
  document.removeEventListener("keydown", handleEscKey);
}

function handleEscKey(e) {
  if (e.key !== "Escape") return;
  const lb = document.getElementById("lightbox-overlay");
  lb.classList.contains("active") ? closeLightbox() : closeModal();
}

/* ============================================================
   HERO INIT
   ─────────────────────────────────────────────────────────────
   填入 home panel 內所有由 PROFILE 驅動的動態內容。
   home panel 的骨架（空元素）已由 PANEL_TEMPLATES.home 建立。
   ============================================================ */

function initHero() {
  const panel = document.getElementById("home");
  if (!panel) return;

  _setText(panel, ".hero-tag", PROFILE.heroTagline);
  _setText(panel, ".hero-sub", PROFILE.heroSub);
  _setText(panel, ".hero-card h3", PROFILE.role);
  _setText(panel, ".footer-title", PROFILE.footerQuote);

  // 統計數字
  const statsEl = panel.querySelector(".hero-stats");
  if (statsEl) {
    statsEl.innerHTML = PROFILE.stats
      .map(
        (s) => `<div class="stat-item">
                     <div class="num">${s.num}</div>
                     <div class="lbl">${s.lbl}</div>
                   </div>`,
      )
      .join("");
  }

  // 標籤列表
  const tagList = panel.querySelector(".tag-list");
  if (tagList) {
    tagList.innerHTML = PROFILE.tags
      .map(
        (t) => `<span class="tag ${t.green ? "green" : ""}">${t.label}</span>`,
      )
      .join("");
  }

  // 聯絡資訊
  const contactRow = panel.querySelector(".contact-row");
  if (contactRow) {
    contactRow.innerHTML = PROFILE.contacts
      .map((c) => `<span class="contact-chip">${c.icon} ${c.text}</span>`)
      .join("");
  }

  // nav brand（buildNav 已先建立元素）
  const navBrand = document.querySelector(".nav-brand");
  if (navBrand) navBrand.textContent = PROFILE.displayName;
}

/** 小工具：安全設定文字 */
function _setText(scope, selector, text) {
  const el = scope.querySelector(selector);
  if (el) el.textContent = text;
}

/* ============================================================
   SCROLL-TO-TOP
   ============================================================ */

function initBackTop() {
  const btn = document.getElementById("back-top");
  if (!btn) return;
  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 300);
    },
    { passive: true },
  );
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

/* ============================================================
   GLOBAL EVENT BINDINGS
   ============================================================ */

function bindGlobalEvents() {
  // Modal 背景點擊關閉
  document.getElementById("modal-overlay")?.addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });

  // Lightbox 點擊關閉
  document
    .getElementById("lightbox-overlay")
    ?.addEventListener("click", closeLightbox);
}

/* ============================================================
   BOOTSTRAP
   ─────────────────────────────────────────────────────────────
   執行順序：
     1. buildNav()       → nav 結構
     2. buildPanels()    → main 結構（含 home panel 骨架）
     3. buildOverlays()  → modal / lightbox / back-top
     4. initHero()       → 填入 home 動態資料
     5. initBackTop()    → 滾動按鈕
     6. bindGlobalEvents()
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  buildNav();
  buildPanels();
  buildOverlays();
  initHero();
  initBackTop();
  bindGlobalEvents();
});
