import type { Metadata } from "next";
import { redirect } from "next/navigation";

/** 医师信息整合在关于与诊疗体系中，避免「专家橱窗」式呈现 */
export const metadata: Metadata = { title: "医师" };

export default function DoctorsPage() {
  redirect("/about");
}
