/** フッター上のナビゲーションのリンク情報一覧 */
export const FOOTER_LINKS = [
  {
    text: "利用規約",
    path: `${process.env.NEXT_PUBLIC_MYSELF_HOST}/company/sitepolicy/`,
  },
  {
    text: "個人情報の取扱い",
    path: `${process.env.NEXT_PUBLIC_MYSELF_HOST}/company/handling/`,
  },
  {
    text: "個人情報保護方針",
    path: `${process.env.NEXT_PUBLIC_MYSELF_HOST}/company/privacypolicy/`,
  },
  {
    text: "会社概要",
    path: "https://tryt-group.co.jp/about/company_prof/",
  },
];

/** 介護ワーカーLPフォームのステップ1に必要な資格情報一覧 */
export const LP_KAIGO_HELLOWORK_STEP_STEP1_QUALIFICATIONS = [
  { name: "介護福祉士", imageUrl: "btn-icon-qualification01.webp" },
  {
    name: "初任者研修(ヘルパー2級)",
    imageUrl: "btn-icon-qualification02.webp",
  },
  {
    name: "実務者研修(ヘルパー1級)",
    imageUrl: "btn-icon-qualification03.webp",
  },
  {
    name: "介護支援専門員(ケアマネージャー)",
    imageUrl: "btn-icon-qualification04.webp",
  },
  {
    name: "資格なし(介護職 経験有)",
    imageUrl: "btn-icon-qualification05.webp",
  },
  {
    name: "資格なし(介護職 未経験)",
    imageUrl: "btn-icon-qualification06.webp",
  },
  { name: "社会福祉士", imageUrl: "btn-icon-qualification07.webp" },
  { name: "その他", imageUrl: "btn-icon-qualification08.webp" },
] as const;

/** 介護ワーカーLPフォームのステップ2に必要な働き方（勤務形態）情報一覧 */
export const LP_KAIGO_HELLOWORK_STEP_STEP2_WORK_STYLES = [
  { name: "常勤(夜勤あり)", imageUrl: "btn-icon-work-style01.webp" },
  { name: "常勤(夜勤なし)", imageUrl: "btn-icon-work-style02.webp" },
  {
    name: "パート・アルバイト(夜勤あり)",
    imageUrl: "btn-icon-work-style03.webp",
  },
  {
    name: "パート・アルバイト(夜勤なし)",
    imageUrl: "btn-icon-work-style04.webp",
  },
  { name: "派遣", imageUrl: "btn-icon-work-style05.webp" },
  { name: "こだわらない", imageUrl: "btn-icon-work-style06.webp" },
];

/** 介護ワーカーLPフォームのステップ2に必要な入職時期情報一覧 */
export const LP_KAIGO_HELLOWORK_STEP_STEP2_DESIRED_TIMES = [
  { name: "未定", imageUrl: "btn-icon-desired-time01.webp" },
  { name: "１ヶ月以内", imageUrl: "btn-icon-desired-time02.webp" },
  { name: "３ヶ月以内", imageUrl: "btn-icon-desired-time03.webp" },
  { name: "半年以内", imageUrl: "btn-icon-desired-time04.webp" },
  { name: "１年以内", imageUrl: "btn-icon-desired-time05.webp" },
  { name: "１年以上先", imageUrl: "btn-icon-desired-time06.webp" },
];
