export const site = {
  name: "石家庄糖尿病医院",
  brand: "中唐",
  brandFull: "河北中唐慢病医疗体系",
  mission: "慢性代谢病的整合照护",
  missionSub:
    "从诊断、治疗到长期随访 — 三十年糖尿病专科实践，系统性管理血糖与并发症。",
  phone: "400-812-1608",
  phoneRaw: "4008121608",
  email: "admin@admin.com",
  qq: "3293208854",
  address: "石家庄经济技术开发区创业路2号",
  addressAlt: "河北省石家庄市裕华东路33号",
  founded: 1992,
  hours: "门诊时间请咨询预约 · 建议提前电话预约",
};

export const utilityLinks = [
  { label: "河北省医保定点", href: "/about#credentials" },
  { label: "石家庄市医保定点", href: "/about#credentials" },
];

export const mainNav = [
  { href: "/services", label: "就诊服务" },
  { href: "/care/diabetes", label: "糖尿病诊疗" },
  { href: "/care/complications", label: "并发症专科" },
  { href: "/doctors", label: "医护团队" },
  { href: "/patient-guide", label: "患者指南" },
  { href: "/education", label: "健康教育" },
  { href: "/research", label: "科研学术" },
  { href: "/about", label: "关于" },
];

export const footerColumns = [
  {
    title: "就诊与服务",
    links: [
      { label: "就诊服务", href: "/services" },
      { label: "糖尿病诊疗", href: "/care/diabetes" },
      { label: "并发症专科", href: "/care/complications" },
      { label: "预约与联系", href: "/contact" },
    ],
  },
  {
    title: "患者资源",
    links: [
      { label: "患者指南", href: "/patient-guide" },
      { label: "健康教育", href: "/education" },
      { label: "医护团队", href: "/doctors" },
    ],
  },
  {
    title: "机构",
    links: [
      { label: "关于医院", href: "/about" },
      { label: "科研学术", href: "/research" },
    ],
  },
];

export const patientJourney = [
  { step: "01", title: "了解与咨询", desc: "通过电话或到院咨询，初步了解病情与就诊安排。" },
  { step: "02", title: "预约就诊", desc: "建议提前预约，携带既往病历与检查资料。" },
  { step: "03", title: "诊疗评估", desc: "专科评估、分型与并发症筛查，制定个体化方案。" },
  { step: "04", title: "长期管理", desc: "随访、监测与生活方式指导，维持代谢稳定。" },
];

export const diabetesCareAreas = [
  {
    title: "糖尿病专家门诊",
    desc: "初诊与复诊、分型评估、用药与生活方式个体化指导。",
    href: "/services#outpatient",
  },
  {
    title: "科学确诊与分型",
    desc: "多学科评估，避免误诊误治，建立可执行的监测计划。",
    href: "/care/diabetes#diagnosis",
  },
  {
    title: "六位一体管理",
    desc: "预防、治疗、饮食、运动、情志与并发症协同干预。",
    href: "/services#six-pillars",
  },
  {
    title: "远程咨询中心",
    desc: "出院后随访与健康管理指导，延伸院内服务。",
    href: "/patient-guide#remote",
  },
];

export const complicationAreas = [
  { title: "糖尿病足病", desc: "溃疡、感染与缺血的专业防治与康复。", href: "/care/complications#foot" },
  { title: "糖尿病肾病", desc: "早期筛查与综合干预，延缓肾功能损害。", href: "/care/complications#kidney" },
  { title: "糖尿病眼病", desc: "视网膜病变筛查、治疗与定期随访。", href: "/care/complications#eye" },
  { title: "周围神经病变", desc: "神经痛、麻木等症状的专科管理。", href: "/care/complications#nerve" },
  { title: "脂肪肝与肥胖", desc: "代谢综合征与体重管理的系统方案。", href: "/care/complications#obesity" },
  { title: "心脑血管风险", desc: "多学科会诊，降低心血管事件风险。", href: "/care/complications#cardio" },
];

export const careSystem = [
  { step: "01", title: "预防", desc: "风险识别与早期干预。" },
  { step: "02", title: "干预", desc: "疏肝调气、六位一体个体化治疗。" },
  { step: "03", title: "并发症管理", desc: "专科化、精准化防治。" },
  { step: "04", title: "康复", desc: "饮食、运动与情志重建。" },
  { step: "05", title: "长期追踪", desc: "随访与监测，减少血糖波动。" },
  { step: "06", title: "整合照护", desc: "院内与远程服务闭环。" },
];

export const sixPillars = [
  { title: "科学预防", desc: "从源头识别风险，延缓疾病进展。" },
  { title: "科学确诊", desc: "精准分型分期，避免过度用药。" },
  { title: "科学治疗", desc: "个体化降糖与并发症方案。" },
  { title: "科学饮食", desc: "主食营养与食疗指导。" },
  { title: "科学运动", desc: "疏糖胰岛操等安全运动疗法。" },
  { title: "情志调理", desc: "心身同调，提升治疗依从性。" },
];

export const patientGuideItems = [
  {
    title: "首次就诊",
    desc: "请携带身份证、医保卡、既往病历、近期检查报告及正在使用的药物清单。",
    href: "/patient-guide#first-visit",
  },
  {
    title: "医保与费用",
    desc: "我院为河北省、石家庄市医保定点医院，具体报销政策以当地规定为准。",
    href: "/patient-guide#insurance",
  },
  {
    title: "随访与监测",
    desc: "慢性代谢病需要定期复查，请按医嘱监测血糖并记录。",
    href: "/patient-guide#follow-up",
  },
  {
    title: "远程咨询",
    desc: "可通过电话或远程咨询中心获取出院后健康管理指导。",
    href: "/patient-guide#remote",
  },
];

export const articles = [
  {
    title: "为什么出院没多久血糖又高了呢？",
    category: "血糖管理",
    date: "2025-04-12",
    excerpt: "出院后血糖反弹常与用药、饮食、运动及情绪管理有关，需系统复盘。",
    href: "/education#article-1",
  },
  {
    title: "血糖波动为何突然变大？",
    category: "监测指导",
    date: "2025-03-28",
    excerpt: "识别波动诱因，建立监测与应对策略。",
    href: "/education#article-2",
  },
  {
    title: "走出用药误区，科学调糖",
    category: "用药指导",
    date: "2025-03-15",
    excerpt: "遵医嘱规范用药，避免自行增减药量。",
    href: "/education#article-3",
  },
];

export const researchHighlights = [
  {
    year: "1997",
    title: "省级科研鉴定",
    desc: "「疏肝调气法治疗非胰岛素依赖型糖尿病的临床研究」通过河北省科学技术委员会专家鉴定。",
  },
  {
    year: "2006",
    title: "专著出版",
    desc: "《糖尿病及并发症「六位一体」防治模式》由北京科技出版社出版。",
  },
  {
    year: "2008",
    title: "学术平台",
    desc: "河北省中西医学会糖尿病与肥胖专业委员会成立。",
  },
  {
    year: "持续",
    title: "教学培训",
    desc: "120 余期培训班，30000 余名医务人员受训。",
  },
];

export const trustPoints = [
  {
    title: "三十年专科实践",
    desc: "1992 年成立，专注糖尿病及并发症，非短期营销型机构。",
  },
  {
    title: "系统化并发症学科",
    desc: "足病、肾病、眼病、神经病变等独立专科设置。",
  },
  {
    title: "规范医保定点",
    desc: "河北省、石家庄市医保定点医院。",
  },
];

export const doctors = [
  {
    name: "王钢柱",
    title: "主任医师",
    role: "院长 · 学科带头人",
    bio: "创立疏肝调气、六位一体防治体系。",
    featured: true,
  },
  {
    name: "赵海彬",
    title: "主任医师",
    role: "临床专家",
    bio: "糖尿病及并发症长期诊疗。",
    featured: false,
  },
  {
    name: "李大钧",
    title: "主任医师",
    role: "临床专家",
    bio: "慢性并发症中西医结合治疗。",
    featured: false,
  },
  {
    name: "屈洪善",
    title: "主治医师",
    role: "临床",
    bio: "日常管理与健康教育。",
    featured: false,
  },
];

export const milestones = [
  { year: "1992", title: "医院成立", desc: "创立疏肝调气法防治糖尿病理论。" },
  { year: "1997", title: "科研鉴定", desc: "省级科学技术委员会专家鉴定通过。" },
  { year: "2006", title: "专著出版", desc: "六位一体防治模式专著出版。" },
  { year: "2017", title: "国际学术", desc: "世界中医药学会联合会糖尿病专业委员会副会长。" },
];

export const diabetesPageSections = [
  {
    id: "overview",
    title: "概述",
    content:
      "糖尿病是一组以血糖代谢异常为特征的慢性疾病。长期高血糖可累及神经、肾脏、视网膜、足部微循环及心脑血管系统。有效管理需要超越单次降糖，建立可预期的长期照护路径。",
  },
  {
    id: "symptoms",
    title: "常见症状与信号",
    content:
      "口渴多饮、尿频、体重下降、疲乏、视力模糊、伤口愈合缓慢等可能是血糖异常的信号。部分 2 型糖尿病患者早期症状不明显，定期筛查尤为重要。",
  },
  {
    id: "when-to-see",
    title: "何时应就医",
    content:
      "若出现上述症状，或已有糖尿病诊断但血糖控制不佳、波动加大，建议尽早就诊评估。已确诊患者应按医嘱定期复查并发症相关指标。",
  },
  {
    id: "diagnosis",
    title: "诊断与评估",
    content:
      "我院的评估包括血糖与糖化血红蛋白、并发症筛查（眼底、尿微量白蛋白、神经功能、足部检查等）及个体化分型，为后续治疗提供依据。",
  },
  {
    id: "our-approach",
    title: "中唐诊疗方式",
    content:
      "以疏肝调气、六位一体为核心框架，结合专科门诊与并发症学科，提供预防、治疗、康复与长期追踪的整合照护。",
  },
];
