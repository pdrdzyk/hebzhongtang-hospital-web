/**
 * Homepage healthcare photography system.
 * Editorial stock (Unsplash) — replace with hospital-owned assets when available.
 */

export type HomeImage = {
  src: string;
  alt: string;
  credit?: string;
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const homeImages = {
  hero: {
    src: u("photo-1576091160399-112ba8d25d1f", 1800),
    alt: "医师在诊室为患者进行临床沟通",
  },
  heroAccent: {
    src: u("photo-1582719478250-c89cae4dc85b", 800),
    alt: "现代化医院临床环境",
  },
  campus: {
    src: u("photo-1486325212027-808455ffe373", 1600),
    alt: "医疗机构建筑与院区环境",
  },
  consultation: {
    src: u("photo-1579684383340-80aa1f9f58f1", 1200),
    alt: "医护团队讨论患者诊疗方案",
  },
  examination: {
    src: u("photo-1579154204601-01521f42e943", 1200),
    alt: "临床检查与血糖监测相关场景",
  },
  diabetesCare: {
    src: u("photo-1571019613454-1cb2f99b2d8b", 1200),
    alt: "糖尿病管理与生活方式指导",
  },
  footCare: {
    src: u("photo-1607613009820-a29f7bb81c04", 1200),
    alt: "糖尿病足部护理与检查",
  },
  neuropathy: {
    src: u("photo-1651008376811-b90ae2c6a0a2", 1200),
    alt: "周围神经与血液循环相关医疗示意",
  },
  labScience: {
    src: u("photo-1532187863486-abf9fb1a6dd6", 1200),
    alt: "医学检验与科研实验室环境",
  },
  patientSupport: {
    src: u("photo-1581594696302-7f69ee47ffc9", 1200),
    alt: "医护人员关怀老年慢病患者",
  },
  interior: {
    src: u("photo-1519494026892-80bbd2d45ef1", 1600),
    alt: "医院内部走廊与就诊环境",
  },
  technology: {
    src: u("photo-1579153909908-42dc0a24821e", 1200),
    alt: "医疗设备与数字化监测",
  },
} as const satisfies Record<string, HomeImage>;

/** Mayo-style visual care modules with photography */
export const visualCareModules = [
  {
    title: "糖尿病门诊",
    desc: "初诊、复诊与长期血糖管理。",
    href: "/services#outpatient",
    image: homeImages.diabetesCare,
  },
  {
    title: "并发症筛查",
    desc: "眼、肾、足、神经与心脑血管风险评估。",
    href: "/care/complications",
    image: homeImages.examination,
  },
  {
    title: "糖尿病足病",
    desc: "足部溃疡与缺血的专业防治。",
    href: "/care/complications#foot",
    image: homeImages.footCare,
  },
  {
    title: "糖尿病肾病",
    desc: "早期干预，延缓肾功能损害。",
    href: "/care/complications#kidney",
    image: homeImages.labScience,
  },
  {
    title: "神经病变",
    desc: "麻木、疼痛等症状专科管理。",
    href: "/care/complications#nerve",
    image: homeImages.neuropathy,
  },
  {
    title: "营养与运动",
    desc: "饮食、运动与体重管理指导。",
    href: "/services#methodology",
    image: homeImages.patientSupport,
  },
  {
    title: "患者教育",
    desc: "慢病知识与自我管理支持。",
    href: "/education",
    image: homeImages.consultation,
  },
  {
    title: "长期随访",
    desc: "出院后追踪与远程健康管理。",
    href: "/patient-guide#follow-up",
    image: homeImages.technology,
  },
] as const;

export const complicationVisuals = [
  { key: "nerve", image: homeImages.neuropathy },
  { key: "foot", image: homeImages.footCare },
  { key: "kidney", image: homeImages.labScience },
  { key: "eye", image: homeImages.examination },
  { key: "cardio", image: homeImages.technology },
] as const;

export const doctorPortraits = [
  u("photo-1612349317150-e413f6a5b16d", 400),
  u("photo-1622253692010-333f3e6039d8", 400),
  u("photo-1559839734-2b71ea197ec2", 400),
  u("photo-1594824476967-48c8b964273f", 400),
] as const;

export const articleThumbnails = [
  u("photo-1576091160399-112ba8d25d1f", 600),
  u("photo-1651008376811-b90ae2c6a0a2", 600),
  u("photo-1571019613454-1cb2f99b2d8b", 600),
  u("photo-1579154204601-01521f42e943", 600),
] as const;
