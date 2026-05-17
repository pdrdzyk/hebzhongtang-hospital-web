export const site = {
  name: "石家庄糖尿病医院",
  brand: "中唐",
  brandFull: "河北中唐慢病医疗体系",
  mission: "重新定义中国的慢性代谢病管理",
  missionEn: "Integrated lifelong metabolic care",
  phone: "400-812-1608",
  phoneRaw: "4008121608",
  email: "admin@admin.com",
  address: "石家庄经济技术开发区创业路2号",
  addressAlt: "河北省石家庄市裕华东路33号",
  founded: 1992,
};

export const navLinks = [
  { href: "/", label: "首页" },
  { href: "/services", label: "诊疗体系" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" },
];

/** 慢病是系统问题 — 相互关联的代谢域 */
export const metabolicDomains = [
  {
    id: "glucose",
    label: "血糖代谢",
    desc: "胰岛素抵抗与血糖波动是系统性失调的表面信号，而非孤立指标。",
  },
  {
    id: "nerve",
    label: "神经功能",
    desc: "周围神经病变常早于典型症状出现，需要长期、结构化的监测与干预。",
  },
  {
    id: "circulation",
    label: "微循环",
    desc: "血管与末梢灌注影响伤口愈合、足部健康及心脑血管事件风险。",
  },
  {
    id: "kidney",
    label: "肾脏",
    desc: "蛋白尿与肾功能变化提示代谢负担正在累及重要靶器官。",
  },
  {
    id: "retina",
    label: "视网膜",
    desc: "眼底改变反映全身微血管状态，是并发症筛查的关键窗口。",
  },
  {
    id: "system",
    label: "全身整合",
    desc: "慢性代谢病需要跨科室、跨周期的协同管理，而非单次就诊。",
  },
];

/** 中唐方法论 — 超越降糖的系统路径 */
export const careSystem = [
  {
    step: "01",
    title: "预防",
    desc: "风险识别与早期干预，在疾病形成之前建立可执行的代谢健康路径。",
  },
  {
    step: "02",
    title: "干预",
    desc: "基于循证与临床经验的个体化治疗，疏肝调气、六位一体为核心框架。",
  },
  {
    step: "03",
    title: "并发症管理",
    desc: "足病、肾病、眼病、神经病变等专科化、精准化防治。",
  },
  {
    step: "04",
    title: "康复",
    desc: "饮食、运动、情志与生活方式的结构化重建，支持长期稳定。",
  },
  {
    step: "05",
    title: "长期追踪",
    desc: "随访、监测与数据化健康管理，减少出院后血糖反弹与波动。",
  },
  {
    step: "06",
    title: "整合照护",
    desc: "院内诊疗、远程咨询与患者教育形成连续闭环。",
  },
];

export const sixPillars = [
  { title: "科学预防", desc: "从源头识别风险，延缓疾病发生与发展。" },
  { title: "科学确诊", desc: "多学科评估，精准分型，避免误治。" },
  { title: "科学治疗", desc: "个体化降糖与并发症干预方案。" },
  { title: "科学饮食", desc: "主食营养与食疗，平稳控糖与营养平衡。" },
  { title: "科学运动", desc: "疏糖胰岛操等安全有效的运动疗法。" },
  { title: "情志调理", desc: "心身同调，提升依从性与生活质量。" },
];

export const trustSignals = [
  {
    label: "1992",
    title: "专科创立",
    desc: "三十余年专注糖尿病及并发症，非短期营销型医疗机构。",
  },
  {
    label: "临床",
    title: "六位一体体系",
    desc: "疏肝调气防治模式经省级科研鉴定，专著由北京科技出版社出版。",
  },
  {
    label: "医保",
    title: "定点资质",
    desc: "河北省、石家庄市医保定点医院，诊疗路径规范透明。",
  },
  {
    label: "专科",
    title: "并发症学科群",
    desc: "足病、肾病、眼病、神经病变等独立专科，系统化防治。",
  },
  {
    label: "学术",
    title: "科研与教学",
    desc: "120 余期培训班，30000 余名医务人员受训，学术平台持续运行。",
  },
  {
    label: "整合",
    title: "医药与临床协同",
    desc: "中唐体系涵盖临床、科研、慢病管理能力的长期积累。",
  },
];

export const departments = [
  { name: "糖尿病专家门诊", desc: "个体化诊疗与长期随访。" },
  { name: "糖尿病足病科", desc: "足部溃疡、感染与缺血防治。" },
  { name: "糖尿病肾病科", desc: "早期筛查与肾功能保护。" },
  { name: "糖尿病眼病科", desc: "视网膜病变筛查与随访。" },
  { name: "糖尿病周围神经痛科", desc: "神经病变诊疗与症状管理。" },
  { name: "糖尿病脂肪肝肥胖科", desc: "代谢综合征与体重管理。" },
];

export const doctors = [
  {
    name: "王钢柱",
    title: "主任医师",
    role: "学科带头人",
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
  {
    name: "李春萍",
    title: "主治医师",
    role: "临床",
    bio: "并发症早期筛查与干预。",
    featured: false,
  },
  {
    name: "李继峰",
    title: "主治医师",
    role: "临床",
    bio: "个体化用药与生活方式指导。",
    featured: false,
  },
];

export const milestones = [
  { year: "1992", title: "医院成立", desc: "创立疏肝调气法防治糖尿病理论。" },
  { year: "1997", title: "科研鉴定", desc: "省级科学技术委员会专家鉴定通过。" },
  { year: "2006", title: "专著出版", desc: "《糖尿病及并发症「六位一体」防治模式》出版。" },
  { year: "2008", title: "学术平台", desc: "河北省中西医学会糖尿病与肥胖专业委员会成立。" },
  { year: "2017", title: "国际学术", desc: "世界中医药学会联合会糖尿病专业委员会副会长。" },
];
