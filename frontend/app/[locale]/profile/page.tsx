import { Brain, Computer, Cuboid } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProfilePage() {
  const t = useTranslations("ProfilePage");
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-10 mt-0 sm:mt-10">
        <div className="flex flex-col items-center max-w-xs sm:max-w-md space-y-4">
          <Brain width={100} height={100} />
          <p className="text-center max-w-xs sm:max-w-md">{t("title")}</p>
        </div>
        <div className="flex flex-col items-center max-w-xs sm:max-w-md space-y-4">
          <Cuboid width={100} height={100} />
          <p className="text-center max-w-xs sm:max-w-md">
            {t("skills.curious.description")}
          </p>
        </div>
        <div className="flex flex-col items-center max-w-xs sm:max-w-md space-y-4">
          <Computer width={100} height={100} />
          <p className="text-center max-w-xs sm:max-w-md">
            {t("skills.deliver.description")}
          </p>
        </div>
      </div>
    </div>
  );
}
