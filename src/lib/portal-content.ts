import { site } from "./content";

/** Operational homepage title — not a brand manifesto */
export const portalIdentity = {
  title: site.name,
  subtitle: "糖尿病及并发症专科 · 慢性代谢病整合医疗",
  credentials: [
    "河北省医保定点",
    "石家庄市医保定点",
    `成立于 ${site.founded} 年`,
    "全国咨询热线 " + site.phone,
  ],
};

/** Top patient task bar — immediate operational paths */
export const patientTaskBar = [
  { label: "预约门诊", href: "/contact#appointment" },
  { label: "查找医生", href: "/doctors" },
  { label: "门诊流程", href: "/patient-guide#outpatient" },
  { label: "初次就诊", href: "/patient-guide#first-visit" },
  { label: "并发症专科", href: "/care/complications" },
  { label: "糖尿病诊疗", href: "/care/diabetes" },
  { label: "健康科普", href: "/education" },
  { label: "院区交通", href: "/contact#locations" },
  { label: "致电咨询", href: `tel:${site.phoneRaw}` },
];

/** Mega-menu institutional navigation */
export type NavColumn = {
  title: string;
  links: { label: string; href: string; note?: string }[];
};

export type NavSection = {
  label: string;
  href?: string;
  columns: NavColumn[];
};

export const institutionalNav: NavSection[] = [
  {
    label: "就诊与服务",
    href: "/services",
    columns: [
      {
        title: "门诊与预约",
        links: [
          { label: "预约挂号", href: "/contact#appointment", note: "电话预约" },
          { label: "门诊流程", href: "/patient-guide#outpatient" },
          { label: "住院安排", href: "/patient-guide#inpatient", note: "请电话咨询" },
          { label: "就诊服务总览", href: "/services" },
        ],
      },
      {
        title: "糖尿病管理",
        links: [
          { label: "糖尿病诊疗", href: "/care/diabetes" },
          { label: "血糖管理", href: "/care/diabetes#overview" },
          { label: "用药指导", href: "/education#article-3" },
          { label: "营养与运动", href: "/services#six-pillars" },
          { label: "长期随访", href: "/patient-guide#follow-up" },
        ],
      },
      {
        title: "中唐照护体系",
        links: [
          { label: "六位一体体系", href: "/services#methodology" },
          { label: "疏肝调气法", href: "/about#method" },
          { label: "远程健康管理", href: "/patient-guide#remote" },
        ],
      },
    ],
  },
  {
    label: "专科与疾病",
    href: "/care/complications",
    columns: [
      {
        title: "并发症专科",
        links: [
          { label: "并发症总览", href: "/care/complications" },
          { label: "周围神经病变", href: "/care/complications#nerve" },
          { label: "糖尿病足", href: "/care/complications#foot" },
          { label: "糖尿病肾病", href: "/care/complications#kidney" },
          { label: "糖尿病眼病", href: "/care/complications#eye" },
          { label: "心脑血管风险", href: "/care/complications#cardio" },
        ],
      },
      {
        title: "常见就诊原因",
        links: [
          { label: "血糖控制不佳", href: "/care/diabetes" },
          { label: "手脚麻木疼痛", href: "/care/complications#nerve" },
          { label: "足部溃疡风险", href: "/care/complications#foot" },
          { label: "蛋白尿/肾功能", href: "/care/complications#kidney" },
          { label: "视力模糊", href: "/care/complications#eye" },
        ],
      },
      {
        title: "筛查与预防",
        links: [
          { label: "并发症筛查项目", href: "/care/complications" },
          { label: "早期发现指南", href: "/education#article-3" },
          { label: "代谢管理科普", href: "/education#article-1" },
        ],
      },
    ],
  },
  {
    label: "医护团队",
    href: "/doctors",
    columns: [
      {
        title: "临床医师",
        links: [
          { label: "全部医师", href: "/doctors" },
          { label: "王钢柱 主任医师", href: "/doctors" },
          { label: "赵海彬 主任医师", href: "/doctors" },
          { label: "李大钧 主任医师", href: "/doctors" },
          { label: "屈洪善 主治医师", href: "/doctors" },
        ],
      },
      {
        title: "专科方向",
        links: [
          { label: "糖尿病及并发症", href: "/doctors" },
          { label: "内分泌 / 代谢", href: "/doctors" },
          { label: "中西医结合", href: "/about" },
        ],
      },
    ],
  },
  {
    label: "患者与访客",
    href: "/patient-guide",
    columns: [
      {
        title: "就诊指南",
        links: [
          { label: "患者指南首页", href: "/patient-guide" },
          { label: "初次就诊", href: "/patient-guide#first-visit" },
          { label: "所需资料", href: "/patient-guide#first-visit" },
          { label: "医保就诊", href: "/patient-guide#insurance" },
        ],
      },
      {
        title: "院区与联系",
        links: [
          { label: "联系方式", href: "/contact" },
          { label: "主院区地址", href: "/contact#locations" },
          { label: "裕华院区", href: "/contact#locations" },
          { label: `电话 ${site.phone}`, href: `tel:${site.phoneRaw}` },
        ],
      },
    ],
  },
  {
    label: "健康科普",
    href: "/education",
    columns: [
      {
        title: "知识中心",
        links: [
          { label: "慢病健康知识库", href: "/education" },
          { label: "血糖与代谢", href: "/education#article-1" },
          { label: "神经病变", href: "/education#article-2" },
          { label: "并发症筛查", href: "/education#article-3" },
          { label: "饮食运动管理", href: "/education#article-4" },
        ],
      },
    ],
  },
  {
    label: "关于本院",
    href: "/about",
    columns: [
      {
        title: "医院概况",
        links: [
          { label: "医院介绍", href: "/about" },
          { label: "资质与医保", href: "/about#credentials" },
          { label: "科研学术", href: "/research" },
          { label: "发展历程", href: "/about#history" },
        ],
      },
    ],
  },
];

/** Service directory for homepage left column */
export const serviceDirectory = [
  {
    title: "门诊服务",
    items: [
      { label: "糖尿病门诊（初诊/复诊）", href: "/services#outpatient" },
      { label: "并发症联合门诊", href: "/care/complications" },
      { label: "预约挂号", href: "/contact#appointment" },
    ],
  },
  {
    title: "诊疗项目",
    items: [
      { label: "血糖监测与分型评估", href: "/care/diabetes#overview" },
      { label: "用药调整与指导", href: "/education#article-3" },
      { label: "营养与食疗处方", href: "/services#six-pillars" },
      { label: "疏糖胰岛操运动疗法", href: "/services#methodology" },
    ],
  },
  {
    title: "筛查与随访",
    items: [
      { label: "眼底筛查", href: "/care/complications#eye" },
      { label: "尿微量白蛋白 / 肾功能", href: "/care/complications#kidney" },
      { label: "神经与足部检查", href: "/care/complications#nerve" },
      { label: "出院后远程随访", href: "/patient-guide#follow-up" },
    ],
  },
];

/** Specialty / condition directory for homepage */
export const specialtyDirectory = [
  {
    title: "糖尿病核心管理",
    items: [
      { label: "1 型 / 2 型糖尿病", href: "/care/diabetes" },
      { label: "血糖波动与低血糖", href: "/care/diabetes" },
      { label: "妊娠与特殊人群", href: "/contact" },
    ],
  },
  {
    title: "并发症专科",
    items: [
      { label: "周围神经病变", href: "/care/complications#nerve" },
      { label: "糖尿病足", href: "/care/complications#foot" },
      { label: "糖尿病肾病", href: "/care/complications#kidney" },
      { label: "糖尿病视网膜病变", href: "/care/complications#eye" },
      { label: "心脑血管风险管理", href: "/care/complications#cardio" },
    ],
  },
];

/** Operational care pathway — how the institution works */
export const operationalPathway = [
  {
    step: "1",
    title: "咨询预约",
    desc: "致电全国热线，说明病情与就诊需求，安排门诊时间。",
    href: "/contact#appointment",
  },
  {
    step: "2",
    title: "到院评估",
    desc: "专科问诊、血糖与并发症相关检查，建立病历档案。",
    href: "/patient-guide#outpatient",
  },
  {
    step: "3",
    title: "制定方案",
    desc: "个体化降糖、生活方式与并发症干预方案。",
    href: "/care/diabetes",
  },
  {
    step: "4",
    title: "治疗与康复",
    desc: "门诊治疗、必要时住院强化，营养运动与情志调理。",
    href: "/services",
  },
  {
    step: "5",
    title: "复查随访",
    desc: "定期复查指标，远程咨询与患者教育，长期管理闭环。",
    href: "/patient-guide#follow-up",
  },
];

/** Six-pillar system — compact operational labels */
export const careSystemPillars = [
  { label: "科学预防", href: "/services#methodology" },
  { label: "科学确诊", href: "/care/diabetes#diagnosis" },
  { label: "科学治疗", href: "/care/diabetes" },
  { label: "科学饮食", href: "/services#six-pillars" },
  { label: "科学运动", href: "/services#methodology" },
  { label: "情志调理", href: "/services#methodology" },
];

/** Clinical notices — operational updates */
export const clinicalNotices = [
  {
    date: "就诊提示",
    title: "门诊建议提前预约",
    href: "/contact#appointment",
    text: "请致电 " + site.phone + " 安排就诊时间，携带身份证、医保卡及既往检查资料。",
  },
  {
    date: "医保",
    title: "河北省、石家庄市医保定点",
    href: "/about#credentials",
    text: "就诊时请携带医保卡，具体报销政策以当地医保规定为准。",
  },
];

/** Compact institutional facts — trust without storytelling */
export const institutionalFacts = [
  { label: "专科年限", value: "30+ 年" },
  { label: "专科方向", value: "13 个" },
  { label: "培训班次", value: "120+ 期" },
  { label: "受训医务人员", value: "30000+ 人" },
  { label: "成立年份", value: String(site.founded) },
  { label: "医保定点", value: "省 / 市两级" },
];

/** Footer extended columns */
export const footerInstitutional = [
  {
    title: "就诊与服务",
    links: [
      { label: "就诊服务", href: "/services" },
      { label: "糖尿病诊疗", href: "/care/diabetes" },
      { label: "并发症专科", href: "/care/complications" },
      { label: "预约挂号", href: "/contact#appointment" },
      { label: "医护团队", href: "/doctors" },
    ],
  },
  {
    title: "患者资源",
    links: [
      { label: "患者指南", href: "/patient-guide" },
      { label: "初次就诊", href: "/patient-guide#first-visit" },
      { label: "门诊流程", href: "/patient-guide#outpatient" },
      { label: "住院流程", href: "/patient-guide#inpatient" },
      { label: "健康科普", href: "/education" },
    ],
  },
  {
    title: "专科导航",
    links: [
      { label: "神经病变", href: "/care/complications#nerve" },
      { label: "糖尿病足", href: "/care/complications#foot" },
      { label: "糖尿病肾病", href: "/care/complications#kidney" },
      { label: "糖尿病眼病", href: "/care/complications#eye" },
      { label: "六位一体体系", href: "/services#methodology" },
    ],
  },
  {
    title: "关于与联系",
    links: [
      { label: "医院介绍", href: "/about" },
      { label: "科研学术", href: "/research" },
      { label: "联系方式", href: "/contact" },
      { label: "院区地址", href: "/contact#locations" },
      { label: site.phone, href: `tel:${site.phoneRaw}` },
    ],
  },
];
