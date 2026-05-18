export const site = {
  name: "石家庄糖尿病医院",
  brand: "中唐",
  brandFull: "河北中唐慢病医疗体系",
  mission: "重新定义中国的慢性代谢病管理",
  missionSub:
    "石家庄糖尿病医院 · 中唐慢病医疗体系提供糖尿病诊疗、并发症防治、预防康复与长期随访的整合照护。",
  heroDetail:
    "涵盖血糖管理、营养与生活方式干预、用药指导、并发症筛查及出院后追踪 — 三十年专科实践，河北省与石家庄市医保定点。",
  phone: "400-812-1608",
  phoneRaw: "4008121608",
  email: "admin@admin.com",
  qq: "3293208854",
  address: "石家庄经济技术开发区创业路2号",
  addressAlt: "河北省石家庄市裕华东路33号",
  founded: 1992,
  hours: "门诊时间请咨询预约 · 建议提前电话预约",
};

/** 顶栏患者快捷入口 — Mayo「I'd like to…」/ Joslin 实用路径 */
export const utilityNav = [
  { label: "初次就诊", href: "/patient-guide#first-visit" },
  { label: "预约挂号", href: "/contact#appointment" },
  { label: "医生团队", href: "/doctors" },
  { label: "糖尿病管理", href: "/care/diabetes" },
  { label: "并发症诊疗", href: "/care/complications" },
  { label: "健康科普", href: "/education" },
  { label: "医院介绍", href: "/about" },
  { label: "联系我们", href: "/contact" },
];

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
      { label: "就诊服务总览", href: "/services" },
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
      { label: "慢病健康知识中心", href: "/education" },
    ],
  },
  {
    title: "专科与科研",
    links: [
      { label: "六位一体体系", href: "/services#methodology" },
      { label: "科研学术", href: "/research" },
      { label: "关于医院", href: "/about" },
    ],
  },
  {
    title: "联系",
    links: [
      { label: "联系方式", href: "/contact" },
      { label: "院区地址", href: "/contact#locations" },
      { label: `电话 ${site.phone}`, href: `tel:${site.phoneRaw}` },
    ],
  },
];

/** 患者入口卡片 */
export const patientEntryCards = [
  {
    title: "我想控制血糖",
    desc: "分型评估、用药与饮食运动指导、长期监测计划。",
    href: "/care/diabetes",
    icon: "glucose",
  },
  {
    title: "我担心糖尿病并发症",
    desc: "眼底、肾脏、足部与神经等靶器官筛查与专科干预。",
    href: "/care/complications",
    icon: "shield",
  },
  {
    title: "我有手脚麻木/疼痛",
    desc: "周围神经病变专科评估与症状管理。",
    href: "/care/complications#nerve",
    icon: "nerve",
  },
  {
    title: "我想做长期健康管理",
    desc: "随访、远程咨询与六位一体整合照护。",
    href: "/services#follow-up",
    icon: "track",
  },
  {
    title: "我想了解住院/门诊流程",
    desc: "预约方式、所需资料与就诊步骤说明。",
    href: "/patient-guide",
    icon: "guide",
  },
];

/** 糖尿病核心照护体系 */
export const diabetesCareSystem = [
  {
    title: "血糖管理",
    desc: "个体化降糖目标、监测频率与波动管理，减少高低血糖风险。",
    href: "/care/diabetes#overview",
  },
  {
    title: "营养与生活方式干预",
    desc: "主食营养、食疗与运动处方，纠正常见饮食误区。",
    href: "/services#six-pillars",
  },
  {
    title: "用药管理",
    desc: "规范用药指导，避免自行增减药量，配合并发症用药调整。",
    href: "/education#article-3",
  },
  {
    title: "并发症筛查",
    desc: "眼底、尿微量白蛋白、神经与足部检查等结构化筛查。",
    href: "/care/complications",
  },
  {
    title: "长期随访",
    desc: "出院后追踪、远程咨询与数据化健康管理。",
    href: "/patient-guide#follow-up",
  },
];

/** 并发症专科 */
export const complicationSpecialties = [
  {
    title: "糖尿病周围神经病变",
    desc: "麻木、疼痛、烧灼感等症状的评估与中西医结合治疗。",
    href: "/care/complications#nerve",
  },
  {
    title: "糖尿病足风险管理",
    desc: "足部溃疡、感染与缺血防治，降低截肢风险。",
    href: "/care/complications#foot",
  },
  {
    title: "肾脏风险管理",
    desc: "蛋白尿与肾功能监测，延缓肾病进展。",
    href: "/care/complications#kidney",
  },
  {
    title: "视网膜风险管理",
    desc: "眼底筛查与随访，保护视力。",
    href: "/care/complications#eye",
  },
  {
    title: "心脑血管风险管理",
    desc: "多学科协作，降低心血管事件风险。",
    href: "/care/complications#cardio",
  },
];

/** 中唐方法论 — 结构化医疗系统 */
export const methodologySteps = [
  {
    step: "01",
    title: "预防",
    desc: "风险识别、早期干预与代谢健康教育，延缓疾病发生。",
  },
  {
    step: "02",
    title: "干预",
    desc: "疏肝调气法与个体化治疗，平稳控糖并兼顾全身状态。",
  },
  {
    step: "03",
    title: "诊疗",
    desc: "专科门诊与并发症学科协作，精准分型与规范路径。",
  },
  {
    step: "04",
    title: "康复",
    desc: "饮食、疏糖胰岛操、情志调理与生活方式重建。",
  },
  {
    step: "05",
    title: "追踪",
    desc: "定期复查、血糖监测与出院后管理，减少反弹。",
  },
  {
    step: "06",
    title: "长期管理",
    desc: "院内诊疗、远程咨询与患者教育形成连续闭环。",
  },
];

export const sixPillars = [
  { title: "科学预防", desc: "从源头识别风险，延缓疾病进展。" },
  { title: "科学确诊", desc: "精准分型分期，避免过度用药。" },
  { title: "科学治疗", desc: "个体化降糖与并发症方案。" },
  { title: "科学饮食", desc: "主食营养与食疗指导。" },
  { title: "科学运动", desc: "疏糖胰岛操等安全运动疗法。" },
  { title: "情志调理", desc: "心身同调，提升治疗依从性。" },
];

export const articles = [
  {
    title: "糖尿病为什么不能只看血糖？",
    category: "代谢管理",
    date: "2025-05-01",
    excerpt: "血糖是重要指标，但神经、肾脏、眼底与微循环同样决定长期预后。",
    href: "/education#article-1",
  },
  {
    title: "手脚麻木可能意味着什么？",
    category: "并发症",
    date: "2025-04-20",
    excerpt: "周围神经病变可早于典型症状出现，需尽早专科评估。",
    href: "/education#article-2",
  },
  {
    title: "如何早期发现并发症？",
    category: "筛查指南",
    date: "2025-04-08",
    excerpt: "结构化筛查项目与建议复查频率。",
    href: "/education#article-3",
  },
  {
    title: "饮食、运动与长期管理",
    category: "生活方式",
    date: "2025-03-22",
    excerpt: "走出误区，建立可持续的慢病自我管理习惯。",
    href: "/education#article-4",
  },
];

export const credibilityItems = [
  {
    title: "糖尿病专科医院",
    desc: `自 ${site.founded} 年成立以来，专注糖尿病及并发症防治，设立多个独立并发症学科。`,
  },
  {
    title: "科研与学术",
    desc: "疏肝调气法通过省级鉴定；六位一体专著出版；学术专业委员会与持续教学培训。",
  },
  {
    title: "临床体系",
    desc: "门诊、并发症专科、远程咨询与患者教育构成完整照护路径。",
  },
  {
    title: "中西医结合",
    desc: "在循证框架下整合中医调气理论与现代慢病管理实践。",
  },
  {
    title: "医保定点",
    desc: "河北省、石家庄市医保定点医院，诊疗路径规范透明。",
  },
  {
    title: "产业与教学协同",
    desc: "中唐体系涵盖临床、科研、医药与慢病管理能力的长期积累。",
  },
];

export const patientGuideHome = [
  { title: "门诊流程", desc: "挂号 → 专科评估 → 检查与方案制定 → 取药/预约复查", href: "/patient-guide#outpatient" },
  { title: "住院流程", desc: "适用于需强化治疗或并发症处理的患者，请电话咨询安排。", href: "/patient-guide#inpatient" },
  { title: "预约方式", desc: "全国热线 400-812-1608，建议提前电话预约。", href: "/contact#appointment" },
  { title: "所需资料", desc: "身份证、医保卡、既往病历、检查报告与用药清单。", href: "/patient-guide#first-visit" },
  { title: "主院区地址", desc: site.address, href: "/contact#locations" },
  { title: "咨询热线", desc: site.phone, href: `tel:${site.phoneRaw}` },
];

export const doctors = [
  {
    name: "王钢柱",
    title: "主任医师",
    specialty: "糖尿病及并发症",
    focus: "疏肝调气、六位一体体系 · 学科带头人",
    bio: "创立中唐慢病防治理论，长期致力于临床与科研。",
    featured: true,
  },
  {
    name: "赵海彬",
    title: "主任医师",
    specialty: "内分泌 / 糖尿病",
    focus: "血糖管理与并发症综合诊疗",
    bio: "经验丰富，注重个体化长期随访。",
    featured: false,
  },
  {
    name: "李大钧",
    title: "主任医师",
    specialty: "糖尿病并发症",
    focus: "慢性并发症中西医结合治疗",
    bio: "肾病、神经病变等专科方向。",
    featured: false,
  },
  {
    name: "屈洪善",
    title: "主治医师",
    specialty: "糖尿病日常管理",
    focus: "用药指导与患者健康教育",
    bio: "帮助患者建立可执行的自我管理计划。",
    featured: false,
  },
];

export const stats = [
  { value: "30+", label: "年专科实践" },
  { value: "13", label: "特色专科方向" },
  { value: "120+", label: "教学培训班次" },
  { value: "30000+", label: "医务人员受训" },
];

export const researchHighlights = [
  { year: "1997", title: "省级科研鉴定", desc: "疏肝调气法治疗非胰岛素依赖型糖尿病临床研究通过专家鉴定。" },
  { year: "2006", title: "专著出版", desc: "《糖尿病及并发症「六位一体」防治模式》由北京科技出版社出版。" },
  { year: "2008", title: "学术平台", desc: "河北省中西医学会糖尿病与肥胖专业委员会成立。" },
  { year: "持续", title: "教学培训", desc: "120 余期培训班，30000 余名医务人员受训。" },
];

export const milestones = [
  { year: "1992", title: "医院成立", desc: "创立疏肝调气法防治糖尿病理论。" },
  { year: "1997", title: "科研鉴定", desc: "省级科学技术委员会专家鉴定通过。" },
  { year: "2006", title: "专著出版", desc: "六位一体防治模式专著出版。" },
  { year: "2017", title: "国际学术", desc: "世界中医药学会联合会糖尿病专业委员会副会长。" },
];

export const diabetesPageSections = [
  { id: "overview", title: "概述", content: "糖尿病是一组以血糖代谢异常为特征的慢性疾病。长期高血糖可累及神经、肾脏、视网膜、足部微循环及心脑血管系统。" },
  { id: "symptoms", title: "常见症状", content: "口渴多饮、尿频、体重下降、疲乏、视力模糊、伤口愈合缓慢等。部分患者早期症状不明显。" },
  { id: "when-to-see", title: "何时就医", content: "出现症状或血糖控制不佳时应尽早就诊。已确诊患者需定期复查并发症指标。" },
  { id: "diagnosis", title: "诊断评估", content: "包括血糖、糖化血红蛋白及并发症筛查，个体化分型后制定方案。" },
  { id: "our-approach", title: "中唐方式", content: "疏肝调气、六位一体整合照护，结合专科门诊与并发症学科。" },
];

export const complicationAreas = complicationSpecialties;
export const careSystem = methodologySteps;
export const diabetesCareAreas = diabetesCareSystem;
export const trustPoints = credibilityItems.slice(0, 3);
export const patientGuideItems = patientGuideHome.slice(0, 4);
export const patientJourney = [
  { step: "01", title: "咨询预约", desc: "电话了解病情与安排就诊时间。" },
  { step: "02", title: "到院评估", desc: "专科问诊、检查与并发症筛查。" },
  { step: "03", title: "制定方案", desc: "个体化治疗与生活方式指导。" },
  { step: "04", title: "长期随访", desc: "定期复查与远程健康管理。" },
];

/** Mayo-style primary nav tabs */
export const mayoPrimaryNav = [
  { label: "患者诊疗", href: "/services" },
  { label: "健康科普", href: "/education" },
  { label: "医护团队", href: "/doctors" },
  { label: "院区位置", href: "/contact#locations" },
  { label: "关于医院", href: "/about" },
];

/** Large patient action tiles (Mayo request appointment / find doctor pattern) */
export const patientActions = [
  {
    label: "预约就诊",
    sub: "Request appointment",
    href: "/contact#appointment",
    icon: "calendar",
  },
  {
    label: "查找医生",
    sub: "Find a doctor",
    href: "/doctors",
    icon: "doctor",
  },
  {
    label: "患者指南",
    sub: "Patient guide",
    href: "/patient-guide",
    icon: "guide",
  },
  {
    label: "联系我们",
    sub: "Contact us",
    href: "/contact",
    icon: "contact",
  },
];

/** Featured care areas — Mayo grid */
export const featuredCareAreas = [
  {
    title: "糖尿病门诊",
    desc: "初诊、复诊与长期血糖管理。",
    href: "/services#outpatient",
  },
  {
    title: "并发症筛查",
    desc: "眼、肾、足、神经与心脑血管风险评估。",
    href: "/care/complications",
  },
  {
    title: "糖尿病足病",
    desc: "足部溃疡与缺血的专业防治。",
    href: "/care/complications#foot",
  },
  {
    title: "糖尿病肾病",
    desc: "早期干预，延缓肾功能损害。",
    href: "/care/complications#kidney",
  },
  {
    title: "糖尿病眼病",
    desc: "视网膜病变筛查与随访。",
    href: "/care/complications#eye",
  },
  {
    title: "神经病变",
    desc: "麻木、疼痛等症状专科管理。",
    href: "/care/complications#nerve",
  },
  {
    title: "营养与运动",
    desc: "饮食、疏糖胰岛操与体重管理。",
    href: "/services#methodology",
  },
  {
    title: "远程咨询",
    desc: "出院后健康管理指导。",
    href: "/patient-guide#remote",
  },
];

/** Mayo「Healing starts here」三栏信任 */
export const healingColumns = [
  {
    title: "准确诊断是有效治疗的起点",
    desc: "多学科评估与并发症筛查，避免误诊误治，为个体化方案奠定基础。",
    link: { label: "了解糖尿病诊疗", href: "/care/diabetes" },
  },
  {
    title: "三十年糖尿病专科实践",
    desc: "1992 年成立，河北省、石家庄市医保定点医院，专注慢病而非短期营销。",
    link: { label: "关于医院", href: "/about" },
  },
  {
    title: "六位一体整合照护",
    desc: "预防、干预、诊疗、康复、追踪与长期管理 — 结构化路径，非单一口号。",
    link: { label: "就诊服务体系", href: "/services" },
  },
];

/** I'd like to… quick links */
export const idLikeToLinks = [
  { label: "预约门诊", href: "/contact#appointment" },
  { label: "查找医生", href: "/doctors" },
  { label: "了解并发症", href: "/care/complications" },
  { label: "阅读健康科普", href: "/education" },
  { label: "查看院区地址", href: "/contact#locations" },
  { label: "致电咨询", href: `tel:${site.phoneRaw}` },
];

/** Health library browse chips */
export const healthBrowseChips = [
  { label: "血糖管理", href: "/care/diabetes" },
  { label: "并发症", href: "/care/complications" },
  { label: "饮食营养", href: "/education" },
  { label: "用药指导", href: "/education#article-3" },
  { label: "运动康复", href: "/services#methodology" },
  { label: "患者指南", href: "/patient-guide" },
  { label: "科研学术", href: "/research" },
  { label: "医保就诊", href: "/patient-guide#insurance" },
];

export const locations = [
  {
    name: "主院区",
    address: site.address,
    href: "/contact#locations",
  },
  {
    name: "裕华院区",
    address: site.addressAlt,
    href: "/contact#locations",
  },
];
