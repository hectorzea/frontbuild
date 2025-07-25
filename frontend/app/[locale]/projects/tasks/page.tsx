import React from "react";
import { TaskDashboard } from "@/components/frontbuild/TaskDashboard";
import { useTranslations } from "next-intl";
import TaskDataLoader from "@/components/frontbuild/TaskDataLoader";

export default function IndexPage() {
  const t = useTranslations("Tasks");
  return (
    <TaskDataLoader>
      <TaskDashboard title={t("title")} subtitle={t("subtitle")} />
    </TaskDataLoader>
  );
}
