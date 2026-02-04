import { TaskDashboard } from "@/components/frontbuild/TaskDashboard";
import { useTranslations } from "next-intl";
import MockServiceWorkerWrapper from "@/components/frontbuild/MockServiceWorkerWrapper";
import TaskDataLoader from "@/components/frontbuild/TaskDataLoader";

export default function IndexPage() {
  const t = useTranslations("Tasks");
  return (
    <MockServiceWorkerWrapper>
      <TaskDataLoader>
        <TaskDashboard title={t("title")} subtitle={t("subtitle")} />
      </TaskDataLoader>
    </MockServiceWorkerWrapper>
  );
}
