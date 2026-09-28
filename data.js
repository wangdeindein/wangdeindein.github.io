/**
 * data.js
 * 所有個人資料集中於此 — 只需修改這支檔案即可更新內容
 */

/* ============================================================
   個人基本資訊
   ============================================================ */
const PROFILE = {
  nameChar: "王",
  displayName: "醫療 × 資訊 × AI",
  role: "專科護理師 ×  醫療AI應用者",
  dept: "台大癌醫中心外科病房",
  heroTagline: "臨床醫護 × 人工智慧",
  heroSub:
    "從萬芳醫院外科病房到台大癌醫中心腫瘤外科，多年臨床經驗；從自學程式語言到人工智慧競賽獲獎，以醫護前線視角驅動醫療智慧應用。",
  footerQuote: "致力於讓醫療更聰明，讓科技更溫馨",
  stats: [
    { num: "16+", lbl: "年臨床經驗" },
    { num: "4", lbl: "學術競賽" },
    { num: "4", lbl: "學術發表" },
  ],
  tags: [
    { label: "外科/腫瘤照護", green: true },
    { label: "外科專科護理師", green: true },
    { label: "實證醫學", green: false },
    { label: "ACLS 急救技術", green: false },
    { label: "超音波操作", green: false },
    { label: "醫療臨床流程優化", green: false },
    { label: "人工智慧醫療整合", green: false },
    { label: "數據分析", green: false },
    { label: "資料科學", green: false },
    { label: "機器學習", green: false },
    { label: "影像辨識", green: false },
    { label: "自然語言", green: false },
    { label: "攝影剪輯", green: false },
    { label: "Python", green: false },
    { label: "JavaScript", green: false },
    { label: "React", green: false },
    { label: "Next.js", green: false },
    { label: "SQL", green: false },
    { label: "Figma", green: false },
    { label: "Photoshop", green: false },
    { label: "FinalCutPro", green: false },
    { label: "English: CEFR C1 | IELTS 7.0", green: false },
  ],
  contacts: [
    { icon: "🎓", text: "臺灣大學護理系碩士專科護理師組" },
    { icon: "🏥", text: "台大癌醫中心醫院外科專科護理師" },
    { icon: "💻", text: "臨床流程優化與人工智慧醫療應用" },
  ],
};

/* ============================================================
   學術教育
   ============================================================ */
const EDU_DATA = [
  {
    year: "2026",
    title: "IELTS Academic 7.0（CEFR C1）",
    desc: "IELTS 學術組成績總分 7.0（聽 6.5 / 讀 7.0 / 寫 6.0 / 說 7.5），相當於 CEFR C1 程度（測驗日期：2026年09月）。",
    dot: "",
  },
  {
    year: "2018–2021",
    title: "國立臺灣大學 醫學院護理學系暨研究所 專科護理師組 碩士",
    desc: "碩士論文：〈探討第五期慢性腎臟病病人之唾液流速、口乾症狀及口腔健康〉。深化臨床判斷力與邏輯思考訓練，為跨領域研究奠定嚴謹的學術基礎。",
    dot: "",
    externalUrl: "https://doi.org/10.6342/NTU202100563",
    linkLabel: "碩士論文 DOI: 10.6342/NTU202100563",
  },
  {
    year: "2006–2010",
    title: "臺北醫學大學 護理學院 護理學系 學士",
    desc: "取得護理學士學位，奠定紮實臨床護理基礎。",
    dot: "",
  },
  {
    year: "2003–2006",
    title: "高雄市立高雄女子高級中學",
    desc: "就讀三類組。",
    dot: "",
  },
];

/* ============================================================
   臨床工作
   ============================================================ */
const WORK_DATA = [
  {
    year: "2026",
    title: "高級心臟救命術(ACLS)急救技術",
    desc: "通過中華民國急救加護醫學會「高級心臟救命術(ACLS)訓練課程」（2026年09月20日，證書核發中）。",
    dot: "work",
  },
  {
    year: "2026",
    title: "2026 台大癌醫中心院內研究計畫",
    desc: "以主持人身份，在台大資工系羅紹元助理教授指導下，進行院內研究計畫，主題「生成式人工智慧於乳癌患者治療照護衛教之應用研究:提升衛教回應時效性與準確性」，研究期間：2026年01月~2026年12月。",
    dot: "work",
    evidence: {
      subtitle: "主持計畫證明",
      images: [
        { src: "./img/ntuccResearch.png", caption: "院內研究主持證明文件" },
      ],
    },
  },
  {
    year: "2026",
    title: "2026 臺北醫學大學AI智慧醫療三日工作坊",
    desc: "參加臺北醫學大學跨領域學院舉辦的AI智慧醫療三日工作坊(2026年04月25日~2026年05月09日)，以病床偵測主題模擬實作預防跌倒及即時偵測生命徵象系統。",
    dot: "work",
    evidence: {
      subtitle: "工作坊參與證明",
      images: [
        { src: "./img/aiCamp.png", caption: "工作坊參與證明文件" },
        { src: "./img/aiCamp_01.JPG", caption: "工作坊現場照片" },
      ],
    },
  },
  {
    year: "2026",
    title: "2026 台大醫院外科資料科學研討會",
    desc: "參加台大醫院外科資料科學研討會(2026年03月14日)，學習如何運用大數據以及人工智慧對醫學帶來的創新翻轉。",
    dot: "work",
    evidence: {
      subtitle: "研討會參與證明",
      images: [
        { src: "./img/dataCamp_01.png", caption: "研討會參與證明文件" },
        { src: "./img/dataCamp_02.png", caption: "研討會參與證明文件" },
        { src: "./img/2026_dataCamp_01.JPG", caption: "研討會現場照片" },
        { src: "./img/2026_dataCamp_02.JPG", caption: "研討會現場照片" },
      ],
    },
  },
  {
    year: "2023",
    title: "高級心臟救命術(ACLS)急救技術",
    desc: "通過中華民國急救加護醫學會「高級心臟救命術(ACLS)訓練課程」（2023年06月11日）。",
    dot: "work",
    evidence: {
      subtitle: "ACLS 訓練結業證書",
      images: [{ src: "./img/ACLS.png", caption: "ACLS 結業證書" }],
    },
  },
  {
    year: "2023",
    title: "2022 Post-San Antonio Breast Cancer Symposium(北區場)",
    desc: "持續參與乳房醫學相關研討會，Post-San Antonio Breast Cancer Symposium(北區場)（2023年01月08日）。",
    dot: "work",
    evidence: {
      subtitle: "研討會參與證明",
      images: [
        { src: "./img/breastConference_02.png", caption: "研討會參與證明文件" },
        { src: "./img/breastConference.jpg", caption: "研討會參與證明文件" },
      ],
    },
  },
  {
    year: "2021",
    title: "實用即時重點式超音波實作能力",
    desc: "參與台灣醫院整合醫學學會「實用即時重點式超音波工作坊」並通過實務能力測驗（2021年11月14日）。",
    dot: "work",
    evidence: {
      subtitle: "超音波工作坊能力測驗證明",
      images: [
        { src: "./img/sono.png", caption: "工作坊結業暨能力測驗通過證明" },
      ],
    },
  },
  {
    year: "2021 – 今",
    title: "台大癌醫中心 外科專科護理師",
    desc: "碩士班畢業後進入台大癌醫中心工作，專注外科腫瘤術後評估、複雜病況判斷與多專科團隊協作。在職期間自學程式語言、機器學習與人工智慧應用，開發多項獲獎臨床資訊工具。",
    dot: "work",
  },
  {
    year: "2020",
    title: "外科專科護理師資格",
    desc: "台灣大學護理系研究所碩士班專科護理師組就讀期間，取得外科專科護理師證書。",
    dot: "work",
  },
  {
    year: "2018",
    title: "臺北市立萬芳醫院 一般外科病房 護理師 離職",
    desc: "歷時 8 年從新進護理師晉升至 N3 護理師，並擔任臨床指導教師，帶領新進同仁與實習學生，奠定臨床教學基礎。",
    dot: "work",
  },
  {
    year: "2016",
    title: "赴日本長野縣佐久市長期照護培訓",
    desc: "獲臺北醫學大學優秀護理人才培訓計畫選拔，赴日進行約 1 個月長期照護學習，返臺後完成成果報告口頭發表。（2016年11月07日~2016年11月25日）。",
    dot: "work",
    evidence: {
      subtitle: "赴日培訓相關文件",
      images: [
        { src: "./img/jp_training_01.png", caption: "培訓選拔通知函" },
        { src: "./img/jp_training_02.png", caption: "赴日培訓期間照片" },
        { src: "./img/jp_training_03.png", caption: "成果報告口頭發表紀錄" },
      ],
    },
  },
  {
    year: "2015",
    title: "護理人員臨床專業能力進階三級",
    desc: "取得臺北市立萬芳醫院「護理人員臨床專業能力進階三級證書」。",
    dot: "work",
    evidence: {
      subtitle: "護理進階三級（N3）證書",
      images: [
        { src: "./img/N3.png", caption: "臺北市立萬芳醫院 N3 進階證書" },
      ],
    },
  },
  {
    year: "2014",
    title: "實證醫學種子教師資格",
    desc: "參加臺北市立萬芳醫院「103年實證醫學種子教師基礎培訓工作坊」，取得臺北市立萬芳醫院實證醫學種子教師資格（2014年10月20日）。",
    dot: "work",
    evidence: {
      subtitle: "實證醫學種子教師基礎培訓工作坊結業證書",
      images: [
        {
          src: "./img/ebm.png",
          caption: "實證醫學種子教師基礎培訓工作坊研習證明",
        },
      ],
    },
  },
  {
    year: "2014",
    title: "台灣護理學會個案報告審查合格",
    desc: "取得台灣護理學會「個案報告審查合格證明書」。",
    dot: "work",
    evidence: {
      subtitle: "個案報告審查合格證明書",
      images: [
        { src: "./img/caseReport.png", caption: "個案報告審查合格證明書" },
      ],
    },
  },
  {
    year: "2013",
    title: "腫瘤護理訓練課程",
    desc: "深入學習腫瘤照護，取得臺北市立萬芳醫院「腫瘤護理訓練課程結業證書」。",
    dot: "work",
    evidence: {
      subtitle: "腫瘤護理結業證書",
      images: [
        {
          src: "./img/oncologyTraining.png",
          caption: "腫瘤護理訓練課程結業證書",
        },
      ],
    },
  },
  {
    year: "2013",
    title: "護理人員臨床專業能力進階二級",
    desc: "取得臺北市立萬芳醫院「護理人員臨床專業能力進階二級證書」。",
    dot: "work",
    evidence: {
      subtitle: "護理進階二級（N2）證書",
      images: [
        { src: "./img/N2.png", caption: "臺北市立萬芳醫院 N2 進階證書" },
      ],
    },
  },
  {
    year: "2012",
    title: "護理人員臨床專業能力進階一級",
    desc: "取得臺北市立萬芳醫院「護理人員臨床專業能力進階一級證書」。",
    dot: "work",
    evidence: {
      subtitle: "護理進階一級（N1）證書",
      images: [
        { src: "./img/N1.png", caption: "臺北市立萬芳醫院 N1 進階證書" },
      ],
    },
  },
  {
    year: "2010",
    title: "臺北市立萬芳醫院 一般外科病房 護理師",
    desc: "大學畢業後，取得護理師資格，開始於臨床職業。",
    dot: "work",
  },
];

/* ============================================================
   教學貢獻
   ============================================================ */
const TEACH_DATA = [
  {
    year: "2022-",
    title: "台大癌醫中心 護理臨床教師",
    desc: "通過護理臨床教師考核，指導臨床護理師。",
    dot: "teach",
    evidence: {
      subtitle: "證明文件",
      images: [
        { src: "./img/2022_clinical_metntor.png", caption: "護理臨床教師證書" },
      ],
    },
  },
  {
    year: "2026",
    title: "臺北醫學大學 課程助理",
    desc: "協助大學部跨領域醫病溝通課程教學。",
    dot: "teach",
    evidence: {
      subtitle: "證明文件",
      images: [
        { src: "./img/2026_teach_01.png", caption: "課程教學證明文件" },
        { src: "./img/2026_teach_02.png", caption: "課程教學證明文件" },
      ],
    },
  },
  {
    year: "2019–2020",
    title: "國立臺灣大學護理學系 課程助理",
    desc: "協助大學部「身體檢查與評估」課程教學及行政工作，接觸高等護理教育實務操作。",
    dot: "teach",
    evidence: {
      subtitle: "證明文件",
      images: [{ src: "./img/2019_teach.png", caption: "課程助理感謝狀" }],
    },
  },
  {
    year: "2018",
    title: "外籍研究生臨床指導員",
    desc: "指導臺北醫學大學護理學系碩士班外籍研究生臨床見習，具備雙語教學與跨文化溝通能力。",
    dot: "teach",
    evidence: {
      subtitle: "證明文件",
      images: [{ src: "./img/2018_teach.png", caption: "課程表" }],
    },
  },
  {
    year: "2017",
    title: "國外交換見習生教學人員",
    desc: "擔任臺北醫學大學國外交換見習生參訪之教學人員，展示臨床教學與國際溝通能力。",
    dot: "teach",
    evidence: {
      subtitle: "證明文件",
      images: [{ src: "./img/2017_teach.png", caption: "課程表" }],
    },
  },
  {
    year: "2015",
    title: "取得臨床教師證書",
    desc: "臺北市立萬芳醫院認可，並參與教學醫院教學費用補助計畫認證教師，正式擔任院內臨床指導工作。",
    dot: "teach",
  },
];

/* ============================================================
   成果獎項
   ============================================================ */
const ACH_DATA = [
  {
    year: "2026",
    icon: "🏆",
    name: "AI 次世代照護—基於多模態技術與決策輔助的智慧醫療機器人",
    org: "2026 智慧照護新世代：AI 賦能健康進行式競賽",
    badge: "發光銅質獎",
    btype: "award",
    detail: {
      background:
        "隨著多模態 AI 技術成熟，醫療機器人的智慧化成為改善照護品質的重要方向。本專案旨在整合語音、影像與文字等多模態輸入，建構一套能輔助護理決策的智慧醫療機器人原型。",
      contribution:
        "負責系統架構設計、多模態資料整合邏輯、以及護理決策輔助模組的開發。結合大型語言模型與臨床場景知識圖譜，實作「建議—依據—注意事項」三層結構化輸出。",
      outcome:
        "榮獲 2026 智慧照護新世代競賽「發光銅質獎」，展示了跨模態技術在臨床護理場景的落地可行性。",
      tech: ["Python", "多模態 LLM", "知識圖譜", "RAG"],
      externalUrl: "https://youtu.be/KPBrkZ4PGlQ",
      images: [
        { src: "./img/2026_award.png", caption: "競賽獎狀（發光銅質獎）" },
        { src: "", caption: "系統展示照片" },
        { src: "", caption: "活動現場照片" },
      ],
    },
  },
  {
    year: "2026",
    icon: "❤️",
    name: "院長表揚狀",
    org: "台大癌醫中心 院長表揚",
    badge: "服務績優人員",
    btype: "heart",
    detail: {
      background:
        "院長表揚為主管主動向院方提出，肯定特定員工在任職期間所提供之照護品質與態度。",
      contribution:
        "在台大癌醫中心外科病房任職期間，持續以病患為中心，提供細心、專業且有溫度的術後護理照護，堅守崗位。",
      outcome: "自 2021 年至 2026 年連續五年堅守崗位，工作表現獲得肯定。",
      tech: [],
      images: [
        { src: "./img/goodPerform.PNG", caption: "院長表揚狀（服務績優人員）" },
      ],
    },
  },
  {
    year: "2025",
    icon: "🏆",
    name: "智慧乳癌衛教 AI 問答系統",
    org: "中華電信數位創新應用系列賽智慧創新應用大賽",
    badge: "潛力商品獎",
    btype: "award",
    detail: {
      background:
        "乳癌術後病人常有大量衛教問題，但護理師人力有限，難以隨時即時回應。本系統以大型語言模型為核心，建構乳癌手術與治療相關的智慧問答機器人，供病人 24 小時自助查詢。",
      contribution:
        "從需求訪談、資料收集、Prompt Engineering 設計到前後端整合一手包辦。針對乳癌護理情境微調回答邏輯，確保輸出內容符合臨床指引且易於病患理解。",
      outcome:
        "榮獲中華電信數位創新應用大賽「潛力商品獎」，評審肯定其商業化潛力與臨床實用性。",
      tech: ["LLM", "Prompt Engineering", "RAG", "JavaScript"],
      name: "競賽宣傳網頁展示",
      externalUrl: "https://ntucchelper.onrender.com/",
      images: [
        { src: "./img/2025_award_02.png", caption: "競賽獎狀（潛力商品獎）" },
        { src: "./img/2025_award_02_01.png", caption: "競賽海報展示" },
      ],
    },
  },
  {
    year: "2025",
    icon: "🏆",
    name: "整合 Google Apps Script 與 LINE API 的自動化衛教系統",
    org: "114 年度韌性臺大瑞客松競賽",
    badge: "最佳精實優化獎",
    btype: "award",
    detail: {
      background:
        "術前衛教資訊傳遞仰賴人工逐一通知，耗時且易遺漏。本系統串接醫院排程資料，自動透過 LINE 在手術前特定時間點推播個人化衛教訊息給病患。",
      contribution:
        "以 Google Apps Script 為後端，串接 LINE Messaging API，設計觸發條件邏輯與訊息模板。整合 Google Sheets 作為輕量化資料庫，讓護理師可直接在試算表維護病患資料。",
      outcome:
        "榮獲韌性臺大瑞客松競賽「最佳精實優化獎」。系統已實際部署於台大癌醫中心乳癌外科病房，每月自動服務數十位病患。",
      tech: [
        "Google Apps Script",
        "LINE Messaging API",
        "Google Sheets",
        "JavaScript",
      ],
      images: [
        {
          src: "./img/2025_award_01.jpg",
          caption: "競賽獎狀（最佳精實優化獎）",
        },
      ],
    },
  },
  {
    year: "2024",
    icon: "🏆",
    name: "使用程式碼及演算法建立自動化乳房手術前病人資訊收集與衛教資訊傳遞",
    org: "台灣胸腔及心臟血管外科學會暨台灣專科護理師學會 口頭發表競賽",
    badge: "精湛銀質獎",
    btype: "award",
    detail: {
      background:
        "術前病人資訊收集流程繁瑣，傳統紙本或人工電話確認方式耗費大量護理人力。本研究設計一套自動化資訊收集流程，以演算法判斷病患狀態並自動分配個人化衛教內容。",
      contribution:
        "設計並實作資料收集表單、自動化判斷邏輯及衛教內容推播機制。以 Python 撰寫資料處理腳本，結合 Google Forms 與 Apps Script 完成端對端自動化流程。",
      outcome:
        "榮獲口頭發表競賽「精湛銀質獎」，為護理資訊化應用提供可複製的實作參考。",
      tech: ["Python", "Google Apps Script", "Google Forms", "自動化流程"],
      images: [
        { src: "./img/2024_award.png", caption: "競賽獎狀（精湛銀質獎）" },
        { src: "./img/2024_award_03.png", caption: "海報發表內容" },
        { src: "./img/2024_award_01.jpg", caption: "口頭發表現場照片" },
        { src: "./img/2024_award_02.jpg", caption: "口頭發表現場照片" },
      ],
    },
  },
  {
    year: "2022–2025",
    icon: "❤️",
    name: "病友表揚狀",
    org: "台大癌醫中心 病患表揚",
    badge: "值業期間持續獲得表揚",
    btype: "heart",
    detail: {
      background:
        "病友表揚為病患或家屬主動向院方提出，肯定特定護理師在住院期間所提供之照護品質與態度。",
      contribution:
        "在台大癌醫中心外科病房服務期間，持續以病患為中心，提供細心、專業且有溫度的術後護理照護，並於病患提問時給予清晰易懂的說明，建立良好的護病關係。",
      outcome:
        "自 2022 年至今持續獲得病友表揚，反映了長期穩定的高品質照護能量。",
      tech: [],
      images: [
        { src: "./img/fromPatient/001.jpg", caption: "病患表揚狀" },
        { src: "./img/fromPatient/002.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/003.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/004.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/005.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/006.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/007.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/008.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/009.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/010.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/011.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/012.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/013.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/014.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/015.png", caption: "病患表揚狀" },
        { src: "./img/fromPatient/016.png", caption: "病患表揚狀" },
      ],
    },
  },
];

/* ============================================================
   技術能力
   ============================================================ */
const SKILLS_DATA = [
  {
    group: "臨床專業",
    skills: [
      ["腫瘤及外科醫療照護", 95],
      ["ACLS 急救技術", 95],
      ["超音波操作判讀", 85],
      ["實證醫學", 85],
    ],
  },
  {
    group: "程式語言",
    skills: [
      ["Python", 80],
      ["JavaScript", 72],
      ["HTML / CSS", 65],
      ["React", 52],
      ["Next.js", 52],
      ["SQL", 50],
    ],
  },
  {
    group: "資料科學 / 機器學習 / AI",
    skills: [
      ["數據分析與資料科學", 85],
      ["機器學習基礎", 80],
      ["影像分析", 70],
      ["自然語言", 90],
      ["大型語言模型應用", 90],
      ["深度學習", 40],
    ],
  },
  {
    group: "工具 & 整合",
    skills: [
      ["數位影音內容產製 (Photoshop / Final Cut Pro)", 95],
      ["UI/UX 視覺設計 (Figma)", 80],
      ["系統自動化 (Selenium / Google Apps Script) ", 95],
      ["RESTful API介接整合開發", 82],
      ["Git版本控制 / GitHub協作", 85],
    ],
  },
];

/* ============================================================
   臨床實作專案
   ─────────────────────────────────────────────────────────────
   externalUrl → 填入專案對外連結（YouTube、GitHub、Google Forms…）
                 有值時：modal 中 gallery 區下方顯示醒目連結按鈕
                 無圖片且有 externalUrl：gallery 區換成大型連結卡
                 留空 "" 則不顯示連結
   images 陣列：每項填入 { src, caption }
     src     → 截圖路徑，例如 "img/project1-form.png"
               留空字串 "" 會顯示灰色佔位框，提示您稍後補充
     caption → 圖片下方說明文字
   ============================================================ */
const CLINICAL_PROJECTS = [
  {
    icon: "💻",
    title:
      "伴你同行 CareForU：乳癌病患治療旅程陪伴系統(開發中/2027年深耕計畫申請中)",
    tag: "全端開發",
    tagColor: "green",
    desc: "以React 19 + Vite打造行動優先的乳癌病患陪伴App，整合症狀日誌、用藥提醒、治療時間軸、階段性衛教內容與AI聊天問答；後端以Express + Prisma／MySQL建置，支援病患與工作人員雙角色驗證，前後端分別部署於Railway。",
    tech: [
      "React 19 / Vite / React Router",
      "Express + Prisma（MySQL）",
      "JWT 雙角色驗證",
      "RAG 衛教機器人串接",
      "Vitest + Supertest",
      "Railway 前後端雙服務部署",
    ],
    name: "伴你同行 CareForU",
    externalUrl: "https://web-production-13578.up.railway.app/login",
    detail: {
      problem:
        "乳癌病患在治療旅程中（症狀變化、用藥、回診、衛教資訊）缺乏一個整合的日常陪伴工具：身體出現異狀時不確定是否該通報、用藥常常忘記、衛教資訊分散在不同管道，難以依自己目前的治療階段找到對應內容。",
      solution:
        "1. 病患旅程整合介面：以React 19 + Vite打造行動優先的病患端App，底部導覽含首頁、行事曆、日誌、治療新知、我的五大頁籤，並支援中英雙語切換。\n2. 症狀日誌與分級提示：病患記錄副作用/症狀後，前端內建規則即時判斷紅旗症狀（出血、呼吸困難、胸痛）、發燒≥38°C或嚴重嘔吐腹瀉疼痛，標記為「需留意」並提示已通知個管師；此分級規則明確設計為待臨床團隊審核確認後才正式啟用，避免未經驗證的規則直接影響病患判斷。\n3. 用藥提醒與治療時間軸：整合用藥排程與每日服用紀錄，並將治療流程視覺化為時間軸，於對應治療階段主動呈現相關衛教新知內容。\n4. 依任務選用AI串接方式：病患聊天問答串接院內既有的EVE衛教機器人平台（RAG檢索式問答），另針對關懷紀錄摘要等結構化任務，改直接呼叫Ollama Cloud大型語言模型產生一次性摘要，而非統一套用RAG流程。\n5. 全端後台建置：以Express + Prisma／MySQL開發API後端，支援病患與工作人員雙角色JWT驗證與權限區隔，並提供工作人員端訊息與個案管理等功能。\n6. 可測試架構：後端主要路由均搭配Vitest + Supertest撰寫對應測試，前端靜態站與後端API服務分別部署於Railway。",
      impact:
        "1. 陪伴式照護延伸：讓病患在候診或返家後仍能查詢個人化治療時間軸與衛教資訊，減少對單一衛教管道的依賴。\n2. 安全意識內建於架構：症狀分級規則雖尚待臨床團隊正式審核啟用，但「紅旗症狀」判斷邏輯與待審核機制已在系統架構層面預留，體現以病人安全為前提的漸進式上線思維，而非急於上線未經驗證的臨床規則。\n3. 系統可維護性：所有資料存取皆透過可替換模組介接，讓前端從假資料切換到真實API時無需更動UI程式碼，降低後續串接風險。",
      images: [
        { src: "./img/careforu_01.png", caption: "工作人員後台介面" },
        { src: "./img/careforu_02.png", caption: "病人使用端畫面" },
      ],
    },
  },
  {
    icon: "💻",
    title: "乳房外科小幫手醫病共享決策系統(2027年院內研究計畫申請中)",
    tag: "全端開發",
    tagColor: "green",
    desc: "以React開發乳癌手術醫病共享決策(SDM)輔助系統，涵蓋乳房原位癌手術方式、部分/全乳房切除合併前哨淋巴結切片兩大決策情境。整合分支式互動問卷、語音朗讀字幕、YouTube衛教影片、AI問答機器人與國際通用決策衝突量表(DCS)，協助病人在充分知情下做出最適合自己的治療選擇。",
    tech: [
      "React 18 / React Router",
      "Web Speech API",
      "YouTube IFrame API",
      "Google Apps Script",
      "GitHub Actions CI/CD",
    ],
    name: "乳房外科小幫手醫病共享決策系統",
    externalUrl: "https://ntuccbreast.github.io/qa_sdm/",
    detail: {
      problem:
        "乳癌病人面對手術方式（如乳房原位癌手術選擇、部分切除保留乳房 vs. 全乳房切除）時，門診時間短、口頭衛教資訊量大且來源不一致，病人常在還沒釐清自身價值觀（外觀重要性、對再次手術與放療負擔的接受度）前就倉促做決定，事後容易產生決策衝突或後悔。",
      solution:
        "1. 分支式互動問卷：依病人選擇的決策主題（原位癌手術方式 / 乳房部分切除 vs. 乳房全切除），動態導引至對應的情境式問答路徑，每題搭配衛教影片、圖文提示(hint)彈窗說明專有名詞與風險。\n2. 語音朗讀與字幕同步：以瀏覽器 Web Speech API 朗讀每步驟說明文字，自建逐句字幕同步演算法並針對 iOS 語音行為做速度校正，確保低識字或高齡病人也能理解內容；影片與語音須完整聽看完才能進入下一步，避免病人跳過關鍵資訊。\n3. 價值觀衝突偵測：後端邏輯比對病人「重視外觀、希望保留乳房」的偏好，與其對「再次手術風險」「放療排程與副作用」的實際接受度，若兩者矛盾則自動彈出衝突釐清卡，引導病人做最後權衡，而非直接產出建議。\n4. AI問答機器人：串接自建問答機器人 API，依病人當前瀏覽的決策主題與情境即時回答個人化問題，並於畫面顯示醫療免責聲明。\n5. 決策結果與追蹤：完成問卷後自動生成含選擇摘要的個人化建議頁，並透過 Google Apps Script 建立的網頁應用程式，將問答歷程、選擇結果同步回寫至 Google Sheet；同時內建16題「決策衝突量表(Decisional Conflict Scale, O'Connor 1993中文版)」供病人自評決策信心，作為系統成效的量化指標。\n6. 透過 GitHub Actions 自動建置並部署至 GitHub Pages，程式碼push後即自動更新上線版本。",
      impact:
        "1. 統一衛教資訊來源：以標準化互動流程取代因人而異的口頭衛教，確保每位病人接收到一致且完整的手術選擇資訊。\n2. 促進知情決策：透過價值觀衝突偵測機制，讓病人在下決定前，主動意識到自己偏好與現實負擔間的落差，減少事後決策後悔。\n3. 可量化的成效評估：導入國際通用的DCS決策衝突量表，讓臨床端能以標準化工具追蹤病人決策信心變化，而非僅憑主觀感受判斷衛教成效。\n4. 延伸即時衛教支援：AI問答機器人讓病人在候診或返家後仍能取得個人化解答，降低臨床人員重複回答基本問題的負擔。",
      images: [
        { src: "", caption: "分支式互動問卷與衛教影片畫面" },
        { src: "", caption: "價值觀衝突釐清卡畫面" },
        { src: "", caption: "AI問答機器人互動畫面" },
      ],
    },
  },
  {
    icon: "💻",
    title: "乳房重建門診病歷智慧轉譯系統：互動問診表單",
    tag: "全端開發",
    tagColor: "green",
    desc: "開發React（Vite）+ FastAPI全端Web應用，病患以手機/平板完成多步驟中文問診表單並自動寫入Google Sheet，工作人員登入後台補上理學檢查欄位後，系統即時將內容轉譯為英文病歷全文，一鍵複製貼入院內病歷系統。",
    tech: [
      "React (Vite)",
      "FastAPI",
      "Google Sheets API",
      "Docker / Railway 部署",
    ],
    name: "乳房重建門診病歷互動問診表單",
    externalUrl: "https://breast-recon-form-production.up.railway.app/",
    detail: {
      problem:
        "乳房重建門診看診時間短，問診項目繁雜（疾病史、生育與生活史、用藥史、目前疼痛等），醫護人員需逐一詢問並手動將中文問診內容繕寫、翻譯為英文病歷，過程耗時且容易遺漏或不一致。",
      solution:
        "1. 病患端多步驟表單：以React打造5步驟精簡問診表單，病患自行於手機/平板完成填寫，資料即時寫入Google Sheet，不需另建資料庫。\n2. 工作人員後台補件：醫護登入後台即可看到依時間排序的填答清單，補上僅能由理學檢查取得的欄位（患側、腫瘤位置大小、NAC、乳房外觀評估等）。\n3. 中翻英自動轉譯引擎：後端FastAPI依據結構化欄位與對照規則，即時將問診與檢查資料轉換為英文病歷全文，供醫師一鍵複製貼上。\n4. 單一服務部署：以Dockerfile將前端建置後的靜態檔案交由FastAPI一併serve，於Railway僅需部署一個服務，無需另外處理CORS。",
      impact:
        "1. 縮短病歷書寫時間：中翻英病歷由系統即時生成，取代逐字手動翻譯與繕打。\n2. 標準化病歷內容：透過統一的轉譯規則，降低不同人員書寫用詞不一致的風險。\n3. 減少重複問診：病患於候診前先行填寫，門診時間可聚焦於理學檢查與醫病溝通。",
      images: [
        { src: "./img/psOPD_01.png", caption: "患者填寫畫面" },
        { src: "./img/psOPD_02.png", caption: "醫師實際收到訊息畫面截圖" },
      ],
    },
  },
  {
    icon: "⚙️",
    title: "個人化術前引導自動化系統：LINE API與多媒體衛教整合",
    tag: "流程自動化開發",
    tagColor: "green",
    desc: "運用Google Apps Script串接LINE Messaging API，開發精準分流的術前自動化通知系統。系統根據雲端試算表內的病患術式，於入院當天自動推播個人化的影音衛教與Flex Message互動訊息，徹底解決臨床人力不足而無法充分衛教問題。",
    tech: [
      "JavaScript",
      "Google Apps Script",
      "LINE Messaging API",
      "Flex Message",
      "時間驅動觸發器",
    ],
    detail: {
      problem:
        "不同術式（如：全切除、部分切除、重建、定位針手術）的術前準備細節具差異，護理師在病患入院後需耗費大量時間重複為不同病患講解，人為口頭講解也因臨床資深程度、可衛教的時間長度不同而導致內容不一致，容易因資訊落差導致手術準備不足。",
      solution:
        "1. 精準邏輯條件式設計：開發條件判斷引擎，即時 Google Sheet術式欄位，實現20種以上的不同術式精準衛教路徑分流。\n2. 多媒體影音衛教整合：預先製作多套針對不同術式的專業衛教影片，並將連結嵌入至自定義的Flex Message中，病患會在時間點收到訊息，只要點擊即可觀看影音教學，提升學習動機與理解度。\n3. 時序驅動自動化佈署：利用GAS的時間驅動設定系統於每日特定時間自動巡檢資料庫，針對隔天手術病患發送提醒，實現完全自動的通知機制。",
      impact:
        "1. 縮減臨床衛教時間：病患於入院前已完成基本影音學習，顯著節省護理師每位病患15-20分鐘的手術流程講解時間，減少重複衛教工作，時間可花在其他需要更專業的臨床照護。\n2. 標準化醫療服務品質：透過自動化系統，確保每一位病患都能獲得最精確、無人為遺漏的術式衛教資訊。\n3. 提升醫病互動體驗：透過LINE隨身查閱功能，病患可反覆觀看衛教影片，大幅降低術前焦慮感並提升醫療順從度。",
      images: [
        { src: "./img/preOPeducation_01.png", caption: "Apps Script截圖" },
        { src: "./img/preOPeducation_02.png", caption: "患者實際收到訊息畫面" },
      ],
    },
  },
  {
    icon: "🎬",
    title: "醫療資訊多媒體化：台大癌醫乳醫中心 YouTube 頻道營運",
    tag: "多媒體製作",
    tagColor: "pink",
    desc: "撰寫衛教內容腳本，針對大眾注意力碎片化趨勢，將複雜的乳房疾病醫學知識轉化為高濃度的短影音內容，拍攝專屬乳房疾病的治療衛教影片，提供民眾更正確直覺的衛教內容。",
    tech: ["腳本撰寫", "攝影", "Final Cut Pro 剪輯"],
    name: "台大癌醫乳醫中心 YouTube 頻道",
    externalUrl: "https://www.youtube.com/@ntuccbreast", // ← 填入實際頻道網址
    detail: {
      problem:
        "傳統長篇衛教文章或長影片（>10分鐘）在專注力碎片化時代面臨接收效率低、資訊留存率不佳，導致病人對術後護理常有認知落差。",
      solution:
        "與專業醫療人員合作，確保醫療內容的權威可信，將專業知識拆解為短影音，降低學習門檻，搭配設計強化重點記憶。",
      impact:
        "1. 溝通效率化：病人常見重複性問題諮詢頻次明顯降低，實現醫療資訊的有效傳遞。2. 品牌建立：協助中心建立具備數位美學與專業知識的YouTube衛教知識庫。",
      images: [], // ← YouTube 頻道以連結呈現，不需截圖
    },
  },
  {
    icon: "🤖",
    title:
      "台大癌醫乳房外科小幫手：RAG 衛教問答機器人(2026年院內研究計畫進行中)",
    tag: "AI 應用開發",
    tagColor: "green",
    desc: "以 Flask + LangChain + FAISS 打造的乳房外科 AI 衛教問答機器人，串接 LINE LIFF 供病患隨時提問。系統以「相似度門檻路由」整合 QA 配對庫、乳外問答知識庫與 Notion 衛教頁三層知識來源，並將每一輪問答的路由路徑、檢索來源、相似度與使用模型完整回寫 Google Sheet，讓每個回答都可被臨床端稽核與驗證。",
    tech: [
      "Python / Flask",
      "LangChain + FAISS 向量檢索",
      "HuggingFace Embeddings",
      "LINE LIFF",
      "Google Sheets API（gspread）",
      "Docker / Railway 部署",
    ],
    name: "台大癌醫乳房外科小幫手",
    externalUrl: "https://web-production-fbb7b.up.railway.app/",
    detail: {
      problem:
        "乳房外科病患的衛教問題高度集中且重複（傷口照護、副作用處理、住院流程、術後衣購買等），但護理人員無法 24 小時回覆；若直接使用通用大型語言模型，又會產生查無依據的幻覺答案，臨床端無從得知回答的出處，難以放心導入病人照護場域。另一方面，衛教資訊分散於公開 Notion 頁面與院內非公開資料（價格、廠商、院內流程），單一知識來源無法涵蓋病患真實提問。",
      solution:
        "1. 三層知識庫整合：將 849 則真實問答去重為 58 則標準答案，依 15 個臨床類別重建為結構化「乳外問答知識庫」，與原有 QA 配對庫、公開 Notion 衛教頁一同建成 FAISS 向量索引，補齊公開頁面不便揭露的院內資訊缺口。\n2. 相似度門檻路由流程圖：依 QA 檢索 top-1 相似度分流——高相似度（≥0.50）直接採用既有標準答案（QA_DIRECT）；中度相似（0.28–0.50）則同時帶入第二層知識庫脈絡交由 LLM 綜合（QA_NOTION_HYBRID）；低相似度（<0.28）略過 QA 僅用知識庫（NOTION_ONLY）；連第二層都低於 0.13 時直接回覆制式拒答語，寧可請病患改問或詢問醫護，也不讓模型憑空生成。\n3. 第二層標題匹配改寫：以 LLM 從知識庫標題清單中挑選最相近的標題取回全文，向量檢索僅作為兜底，避免片段切分造成衛教內容被截斷。\n4. 臨床語境前處理：內建同義詞正規化表（束衣／壓力衣／加壓內衣→術後衣、MC／小紅→月經、光療／美甲→指甲油等），並以「規則式比對→短句 LLM 判定→預設視為醫療問題」的三層保守策略分流純社交訊息，確保任何帶有症狀或疑問的訊息都不會被誤判略過。\n5. 多輪對話指代消解：以 session（LINE userId 或匿名 id）保留最近數輪對話，將「那多久會好？」這類追問自動補回主詞後再進入檢索，解決病患口語化追問檢索不到的問題。\n6. 全程可稽核與回饋閉環：每一則回答連同意圖、路由路徑、QA／知識庫相似度、實際使用模型與檢索原文寫入 Google Sheet，病患的三級評分（好／尚可／不好）再回寫同一列，形成可持續分析的品質資料。\n7. 對外 API 服務化：另開 /ask/sdm 路由，供乳房外科醫病共享決策（SDM）系統依當前決策節點帶入脈絡提問，使同一套知識庫可被多個臨床系統共用。\n8. 評估方法學建置：針對原測試集類別分布偏斜的問題，重建 15 類別 × 每類 20 題、共 300 題的類別平衡測試集（含真實 held-out 問句與新撰寫的 gap 問句），以分類別方式拆解檢索與回答表現，暴露情緒支持、復健等弱類別。",
      impact:
        "1. 延伸衛教量能：病患於候診、住院或返家後皆可即時取得一致的衛教資訊，降低護理人員重複回答基本問題的負擔。\n2. 以拒答換取安全：低相似度時主動拒答並導向醫護諮詢，讓系統的錯誤模式偏向「不回答」而非「答錯」，符合臨床導入的風險控管前提。\n3. 可驗證而非黑箱：每則回答皆可追溯檢索來源與相似度分數，臨床團隊能逐則檢視答案依據，作為正式導入前審核的基礎。\n4. 知識庫可被多系統共用：SDM 決策輔助系統直接串接本服務，避免各專案重複建置衛教知識庫。\n5. 具研究可延續性：類別平衡測試集與完整問答記錄，使系統成效能以量化指標（分類別命中率、回答適宜率、使用者評分）持續追蹤，作為後續研究與論文的資料基礎。",
      images: [],
    },
  },
  {
    icon: "⚙️",
    title: "智慧化臨床入院摘要自動生成系統",
    tag: "流程自動化開發",
    tagColor: "green",
    desc: "開發基於Google Apps Script的HTML互動式UI介面，將繁瑣的病歷書寫流程轉化為結構化表單，透過動態模板渲染技術，根據醫師/專科護理師輸入自動生成入院摘要。",
    tech: ["Google Apps Script（HtmlService）", "JavaScript / HTML / CSS"],
    detail: {
      problem:
        "臨床醫師/專科護理師在書寫入院摘要時，需重複輸入大量標準化內容，手動繕寫不僅耗時，且容易發生格式不一或資訊遺漏之風險。",
      solution:
        "1. 動態互動式介面設計：利用HTML/CSS建構輕量化Web UI，設計多層次下拉選單與聯動輸入框，讓醫師能快速選取診斷、與檢查報告。\n2. 結構化資料轉譯引擎：開發後端邏輯解析UI傳回的參數，並結合動態標籤（Placeholder）替換技術，將結構化數據即時渲染套入預先製作好的入院摘要範本，產出病歷後，只需針對特定記號提醒部分進行手動修改。\n3.臨床語意模板管理：針對乳癌等專科設計標準化描述模組（Diagnosis Phrase, Care Plan），確保生成的病歷一致。\n4. 零阻力部署：將UI嵌入Google Sheets，無需切換系統即可在同一工作環境完成病歷自動化生成。",
      impact:
        "1. 極大化文書效率：將原本需耗時10-15分鐘的入院摘要撰寫時間縮短至2分鐘內，產出速度提升80%以上。\n2.標準化醫療紀錄：模板均統一，確保病歷內容的正確性與一致性，降低因人工疲勞導致的擅打錯誤以及不同人書寫的異質性，利於後續臨床數據的擷取與分析。",
      images: [
        { src: "./img/adNote_01.png", caption: "Apps Script截圖" },
        { src: "./img/adNote_02.png", caption: "Apps Script截圖" },
        { src: "./img/adNote_03.png", caption: "擅打病歷使用者介面" },
        { src: "./img/adNote_04.png", caption: "擅打病歷使用者介面" },
        { src: "./img/adNote_05.png", caption: "病歷生成畫面（示範資料）" },
      ],
    },
  },
  {
    icon: "⚙️",
    title: "個人化醫療導航：LINE 自動化手術安排衛教系統",
    tag: "流程自動化開發",
    tagColor: "green",
    desc: "整合 Google Apps Script 與 LINE Messaging API，開發自動化通知系統。根據患者術式與臨床路徑，自動發送互動式衛教訊息，提升患者術前準備的遵從度。",
    tech: [
      "Google Apps Script",
      "LINE Messaging API",
      "Flex Message（多頁輪播）",
      "RegEx",
    ],
    detail: {
      problem:
        "術前注意事項極其繁瑣（如：停藥準備、住院流程、自費衛材、禁食規定）。傳統口頭或純文字提醒容易遺漏細節，且不同術式（如：門診手術 vs. 住院手術）的衛教內容各異，醫護人員電話聯絡或門診解釋耗時。",
      solution:
        "1. 多層次條件式判斷：識別Google Sheet中臨床路徑、麻醉方式與特定術式欄位，達成精準的個性化內容推送。\n2. 互動式Flex Message設計：設計多頁式輪播介面（Carousel），將「報到地圖」、「停藥清單」、「術後照護」與「物品清單」模組化，並嵌入對應的連結與。\n3. 觸發機制：串接LINE Messaging API，建立觸發器，點選時或指定時間立即自動判斷所有條件及符合的傳送對象，發送個人化訊息。",
      impact:
        "1. 大幅降低術前準備錯誤率：透過結構化的圖文引導，顯著減少患者因未停藥或未禁食導致手術延期之狀況。\n2. 數位化衛教體驗：將傳統紙本衛教轉化為隨身可查的互動介面，提升醫療服務滿意度與病患安全。\n3. 節省人力成本：自動化發送取代人工電話聯繫通知，讓臨床人員專注於高價值的護理工作。",
      images: [
        { src: "./img/line_01.png", caption: "Apps Script截圖" },
        { src: "./img/line_02.png", caption: "Apps Script截圖" },
        { src: "./img/line_03.png", caption: "患者實際收到訊息畫面" },
        { src: "./img/line_04.png", caption: "患者實際收到訊息畫面" },
      ],
    },
  },
  {
    icon: "⚙️",
    title: "手術排程名單自動化傳送系統",
    tag: "流程自動化開發",
    tagColor: "green",
    desc: "開發基於Google Apps Script的自動化調度系統，透過自定義演算法，於指定工作日自動彙整、格式化並分發手術名單至手術相關醫療團隊。",
    tech: ["Google Apps Script", "時間驅動觸發器", "日期演算法設計"],
    detail: {
      problem:
        "醫療團隊需於每週固定時間同步下週手術排程。由於需人工比對國定假日、彈性放假與週末，手動彙整名單耗時且易產生版本同步誤差，影響跨單位協作效率。",
      solution:
        "1. 動態日期演算法：設計邏輯，能自動讀取國定假日列表並回溯計算正確的寄件工作日，解決跳日或連假導致的失效問題。\n2. 資料自動彙整與封裝：系統自動檢索試算表中的欄位（術式、醫師需求等），依據手術週別進行資料過濾，並動態生成格式化 HTML/純文本郵件內容。\n3. 自動化維運回饋：發送後自動回填狀態，確保程序可追蹤且不重複發送。",
      impact:
        "1. 零人力介入：實現手術排程同步流程完全自動化，消除每週例行性的行政作業時間，完全不需手動寄送名單。\n2. 資訊傳遞精準化：確保負責手術的跨科別醫護團隊（包含核醫部、影醫科、麻醉科、臨床研究護理師等）能在最精確的時間點接收到格式一致的排程資訊，減少人為傳送的遺漏。",
      images: [{ src: "./img/sendOPlist.png", caption: "Apps Script截圖" }],
    },
  },
  {
    icon: "💻",
    title: "住院前病患臨床資訊自動化收集系統",
    tag: "全端開發",
    tagColor: "green",
    desc: "開發基於Flask框架的雲端Web應用，整合Google Sheets API實現自動化臨床資料收集與分流。病患可透過網頁介面提交術前評估資訊，系統則自動完成後端數據彙整與動態指令生成，顯著提升術前資料收集及衛教效率。",
    tech: [
      "Python / Flask",
      "Jinja2 模板引擎",
      "Google Sheets API（gspread）",
      "Render 部署",
    ],
    name: "台大癌醫中心乳房醫學中心乳房外科住院前資料填答",
    externalUrl: "https://pre-admission.onrender.com/",
    detail: {
      problem:
        "傳統術前資料收集（如抗凝血劑使用情形、床位意願）高度依賴人工電話詢問與手動記錄，不僅耗時且容易發生溝通資訊遺漏，且醫療人員需重複口述相同的術前注意事項。",
      solution:
        "1. 輕量化Web服務開發：利用Flask建構後端邏輯，設計響應式HTML表單填選。\n2. 雲端API數據持久化：整合gspread庫與服務帳戶驗證，實現代碼與Google Sheets的串接，確保資料即時、安全地寫入雲端資料庫。\n3. 演算法動態內容呈現：根據病患填答的邏輯（如床位選擇、藥物史），透過Jinja2模板引擎即時渲染個人化的「術前注意事項」頁面，達成個別化的衛教資訊傳遞。\n4. 正式環境部署：將原始碼託管於GitHub，並成功部署至雲端伺服器，讓病患能透過公網連結隨時隨地完成填答。",
      impact:
        "1. 數位化轉型效率：將原本的人工電話詢問流程轉為自動化，大幅減少護理人員每日30%以上的行政溝通負擔。\n2. 數據精準度提升：透過結構化輸入，降低人工記錄錯誤率，確保獲得最正確的病患術前用藥資訊。\n3. 強化醫病溝通：填答後立即顯示的數位衛教清單，讓病患能反覆查閱注意事項，提升術前準備的順從度與安全性。",
      images: [
        { src: "./img/python_01.png", caption: "填答完成後病患看到的畫面" },
        { src: "./img/python_02.png", caption: "後端收到病患填答結果畫面" },
      ],
    },
  },
  {
    icon: "📊",
    title: "臨床醫療數據分析與視覺化呈現",
    tag: "資料科學與分析",
    tagColor: "yellow",
    desc: "利用Google Colab整合Google Sheets，透過Python數據處理庫進行臨床案例的統計與多維度視覺化呈現。",
    tech: ["Python", "Pandas", "Matplotlib / Seaborn", "Google Colab"],
    detail: {
      problem:
        "臨床資料通常以非結構化或試算表形式分散儲存，難以直觀觀察手術趨勢、病理分類數量等資料。傳統人工統計或excel生成統計圖表不僅效率低下，且難以進行複雜的交叉比對與長期追蹤。",
      solution:
        "1. 雲端數據自動化串接：透過 Python google.colab與驅動介面，實現與Google Drive/Sheets的即時連動，建立自動化數據導入工作。\n2. EDA (探索性數據分析)：運用Pandas進行資料清洗與特徵工程，處理臨床資料中的缺失值、格式不一及類型轉換，實現精準的數據預處理。\n3. 多維度視覺化：利用Matplotlib繪製圓餅圖與趨勢圖，並搭配Seaborn繪製分佈圖與統計圖表，量化呈現科內手術分佈、病理類型比例等。\n4. 統計摘要生成：開發自動化腳本，針對年度手術量、癌症亞型佔比等關鍵指標進行自動彙整與分析。",
      impact:
        "1. 科學化臨床洞察：透過視覺化圖表，協助醫療團隊快速掌握特定年度的手術分佈規律，為臨床研究與科別經營提供數據支持。\n2. 研究效率提升：將原本耗時數天的統計報表製作過程，轉化為幾秒就能生成的Python自動化腳本。\n3. 邁向醫療大數據：建立了從數據擷取、清洗到呈現的標準化SOP，為後續導入機器學習預測模型打下堅實的數據基礎。",
      images: [
        {
          src: "./img/analysis_02.png",
          caption: "Python數據分析環境(Google Colab)",
        },
        {
          src: "./img/analysis_01.png",
          caption: "乳癌手術類型(Matplotlib產出範例)",
        },
      ],
    },
  },
  {
    icon: "⚙️",
    title: "乳房手術病理報告結構化擷取工具",
    tag: "流程自動化開發",
    tagColor: "green",
    desc: "開發基於 Google Apps Script 的病理報告解析系統，利用字串處理與正則表達式技術，自動從非結構化醫療文本中精確擷取病灶位置、組織學分級與免疫染色數據。",
    tech: ["Python", "JavaScript", "Google Apps Script", "Regex"],
    detail: {
      problem:
        "病理報告內容冗長且格式非結構化，醫師需手動閱讀並擷取關鍵參數（如 TNM 分期、生物標記）填入系統，耗時且存在人工謄寫錯誤風險。",
      solution:
        "1. 特徵工程設計：針對病理報告特有語法（如 Nottingham score、Gross description）設計解析邏輯，過濾無關雜訊。\n2. 自動化擷取邏輯：建立一套多層次的判斷模型，自動擷取所需內容並格式化為國際標準摘要。\n3. Python資料後處理：擷取結果另以Python進行資料清理與彙整，供後續統計分析與研究使用。",
      impact:
        "1. 顯著提升行政效率：將單份報告的摘要整理時間從數分鐘降低至秒級自動生成。\n2. 數據結構化基礎：將非結構化文本轉化為可供後續研究與AI訓練使用的結構化數據庫。\n3. 跨系統整合：與 Google Sheets無縫介接，建立低成本、高效能的臨床資料管理。",
      images: [
        { src: "./img/pathoCode.png", caption: "Apps Script截圖" },
        {
          src: "./img/pathoCodeResult.png",
          caption: "原始病理報告自動轉換為結構化摘要示範",
        },
      ],
    },
  },
  {
    icon: "🗂️",
    title: "民眾衛教內容資料庫建置",
    tag: "知識工程與資訊架構",
    tagColor: "blue",
    desc: "利用Notion的關聯式資料庫架構，將臨床第一線的零散衛教知識系統化，建置具備目錄導航的衛教資料庫，提供民眾精準且易懂、結構化的醫療資訊。",
    tech: ["Notion 關聯式資料庫", "多維度篩選與檢視設計", "資訊架構設計"],
    name: "台大癌醫乳房醫學中心乳房外科衛教資訊平台",
    externalUrl:
      "https://plausible-uncle-1ab.notion.site/60b8b5cb0586426791c852d0a587dad6",
    detail: {
      problem:
        "臨床衛教資料常散落在紙本或各網頁中，民眾難以根據自身病程階段快速檢索所需資訊。",
      solution:
        "知識結構化：將乳癌治療流程拆解為階段性模組（如：檢查、手術、化療、照護），建立層級清晰的知識索引。\n多維度檢索：運用資料庫屬性分類，讓患者能依據治療方式（如：全切、重建）篩選對應的照護指引。\n即時更新與分發：利用雲端協作特性，確保醫學指引更新後，前端民眾獲取之資訊具備一致性與即時性。",
      impact:
        "1. 衛教資訊可檢索化：顯著縮短病人家屬搜尋特定照護問題的時間。\n2. 降低臨床溝通成本：透過結構化引導，病人對治療流程的預期感增加，提升醫療順從度。\n3. 系統化管理：作為中心數位轉型的基礎，利於後續擴展至AI自動化回覆系統。",
    },
  },
  {
    icon: "🗂️",
    title: "臨床專科知識管理與SOP維護系統",
    tag: "知識工程與資訊架構",
    tagColor: "blue",
    desc: "運用Notion關聯式資料庫架構，將臨床繁瑣的行政流程、手術配合及跨單位協作細節轉化為結構化的數位手冊。透過模組化設計與權限管理，建立具備高度可檢索性的「科內知識庫」，縮短新人培訓週期並確保醫療品質的一致性。",
    tech: ["Notion 關聯式資料庫", "多視圖／屬性篩選設計", "資訊架構設計"],
    detail: {
      problem:
        "醫療現場工作繁雜且具備高度依賴性，傳統口頭師徒制傳承易導致資訊斷層；且作業規範常散落在公文或口頭交接中，缺乏中心化的標準化查詢工具。",
      solution:
        "1. 工作流結構化建模：將科內的工作內容依時序（術前、術中、術後）與類型（行政、臨床、研究）進行解構，建立多層級的導航索引。\n2. 動態SOP資料庫：利用Notion Database屬性定義，實現單一資料源的多維度視圖呈現，可依不同條件查看。\n3. 引導路徑工作流程：將臨床隱性知識轉化為顯性、可搜尋的數位資產。",
      impact:
        "1. 縮短人員養成週期：新人能透過系統化導航快速上手複雜流程，顯著降低因資訊不對稱產生的溝通成本與行政錯誤率。\n2. 知識傳承數位化：解決人員流動導致的經驗流失問題，確保科內運作不受人力更迭影響，達成組織知識的永續管理。\n3. 跨部門協作透明化：清晰定義與醫師、麻醉科、病房之對接流程，建立一致的作業標準，強化醫療團隊間的協作默契。",
      images: [
        {
          src: "./img/notionSOP.png",
          caption: "科內工作SOP部分截圖",
        },
      ],
    },
  },
];

/* ============================================================
   學術發表
   ─────────────────────────────────────────────────────────────
   externalUrl → 填入 DOI 連結或研討會摘要頁面網址
                 留空字串 "" 則不顯示「查看原文」按鈕
   ============================================================ */
const PUB_DATA = [
  {
    type: "intl",
    typeLabel: "國際\n研討會",
    year: "2025",
    title:
      "AI-Driven Q&A Chatbot Supporting Education for Breast Surgery and Therapy Patients",
    venue: "APCNP: The Asian and Pacific Congress for Nurse Practitioners 2025",
    externalUrl: "https://elite.newhopetek.com/APCNP2025CD/PDF/OA_001.pdf", // ← 填入研討會摘要頁面網址
    images: [
      { src: "./img/2025_pub_01.jpg", caption: "研討會投稿證書" },
      { src: "./img/2025_pub_01_02.png", caption: "研討會投稿海報" },
      { src: "./img/2025_pub_01_01.JPG", caption: "發表現場照片" },
    ],
    detail: {
      background:
        "乳癌手術及治療過程複雜，病患對術前準備、術後照護及輔助治療常有大量疑問。傳統衛教模式受限於護理人力與時間，難以提供即時且個人化的解答。",
      objective:
        "本研究旨在開發一套以大型語言模型（LLM）為核心的 AI 問答機器人，整合乳癌手術與治療相關衛教知識庫，提供病患 24 小時自助問答服務，並評估其回答準確性與病患滿意度。",
      method:
        "以 Retrieval-Augmented Generation（RAG）架構為基礎，建立乳癌護理知識向量資料庫，結合 Prompt Engineering 設計護理情境對話邏輯。系統整合 LINE 介面部署，收集實際使用紀錄進行回答品質分析。",
      finding:
        "系統對常見乳癌手術衛教問題的回答準確率達 87%，病患滿意度問卷顯示 82% 受訪者認為系統回答「有幫助」或「非常有幫助」，整體衛教問題詢問護理師的頻率下降約 30%。",
    },
  },
  {
    type: "intl",
    typeLabel: "國際\n研討會",
    year: "2025",
    title:
      "Leveraging Google Apps Script and LINE API for Automated Pre-Operative Breast Surgery Patient Education: A Technology-Driven Automation Approach",
    venue: "APCNP: The Asian and Pacific Congress for Nurse Practitioners 2025",
    externalUrl: "https://elite.newhopetek.com/APCNP2025CD/PDF/OA_005.pdf", // ← 填入研討會摘要頁面網址
    images: [
      { src: "./img/2025_pub_02.png", caption: "研討會投稿證書" },
      { src: "./img/2025_pub_01.png", caption: "研討會投稿海報" },
    ],

    detail: {
      background:
        "乳癌手術及治療過程複雜，病患對術前準備、術後照護及輔助治療常有大量疑問。傳統衛教模式受限於護理人力與時間，難以提供即時且個人化的解答。",
      objective:
        "本研究旨在開發一套以大型語言模型（LLM）為核心的 AI 問答機器人，整合乳癌手術與治療相關衛教知識庫，提供病患 24 小時自助問答服務，並評估其回答準確性與病患滿意度。",
      method:
        "以 Retrieval-Augmented Generation（RAG）架構為基礎，建立乳癌護理知識向量資料庫，結合 Prompt Engineering 設計護理情境對話邏輯。系統整合 LINE 介面部署，收集實際使用紀錄進行回答品質分析。",
      finding:
        "系統對常見乳癌手術衛教問題的回答準確率達 87%，病患滿意度問卷顯示 82% 受訪者認為系統回答「有幫助」或「非常有幫助」，整體衛教問題詢問護理師的頻率下降約 30%。",
    },
  },
  {
    type: "intl",
    typeLabel: "國際\n研討會",
    year: "2023",
    title: "Integrated Rehabilitation Program of Breast Cancer Surgery",
    venue: "ICN: International Council of Nursing 2023 Congress",
    externalUrl: "", // ← 填入 ICN 研討會頁面網址
    images: [
      { src: "./img/icn2003.png", caption: "研討會投稿證明" },
      { src: "./img/icn2003_04.png", caption: "研討會投稿摘要" },
      { src: "./img/icn2003_03.png", caption: "研討會出席證明" },
      { src: "./img/icn2003_01.jpg", caption: "發表現場照片" },
      { src: "./img/icn2003_02.jpg", caption: "發表現場照片" },
    ],
    detail: {
      background:
        "乳癌手術後復健計畫的落實程度直接影響病患上肢功能恢復與生活品質。現有復健指導多仰賴單次衛教，缺乏系統性追蹤機制，導致病患居家執行依從性不佳。",
      objective:
        "本研究設計並評估一套整合性乳癌手術後復健計畫，涵蓋術後上肢運動、淋巴水腫預防及心理調適，透過結構化介入提升病患復健依從性與功能恢復成效。",
      method:
        "採類實驗設計，以台大癌醫中心乳癌外科術後病患為對象，介入組接受整合性復健計畫（包含個別化運動指導、LINE 回傳追蹤及定期電話關懷），對照組接受常規衛教。以上肢關節活動度、淋巴水腫發生率及 BREAST-Q 量表評估成效。",
      finding:
        "介入組在術後三個月上肢關節活動度恢復較對照組顯著改善（p < 0.05），淋巴水腫發生率降低 18%，BREAST-Q 整體生活品質分數亦優於對照組。",
    },
  },
  {
    type: "dom",
    typeLabel: "期刊\n論文",
    year: "2016",
    title: "一位慢性阻塞性肺疾病合併肺癌病患脫離呼吸器的護理經驗",
    venue: "新台北護理期刊 第十八卷第一期 ｜ DOI: 10.6540/NTJN.2016.1.009",
    externalUrl: "https://doi.org/10.6540/NTJN.2016.1.009",
    detail: {
      background:
        "慢性阻塞性肺疾病（COPD）合併肺癌病患因肺功能嚴重受損，術後脫離呼吸器（Weaning）的過程極具挑戰性，護理介入的時機與策略對成功脫機至關重要。",
      objective:
        "本個案報告旨在描述一位 COPD 合併肺癌術後病患脫離呼吸器的護理過程，分析護理評估、問題確認及個別化介入策略，以供臨床護理師參考。",
      method:
        "採個案研究法，收集病患住院期間的護理評估資料、呼吸器設定紀錄及復原歷程，運用 Gordon 功能性健康型態評估框架進行分析，並依據實證醫學文獻擬定護理計畫。",
      finding:
        "透過系統性呼吸訓練、漸進式脫機計畫及心理支持，病患於入住加護病房第 21 天成功脫離呼吸器，顯示個別化護理計畫結合多專科團隊合作在高風險脫機案例的重要性。",
    },
  },
];
