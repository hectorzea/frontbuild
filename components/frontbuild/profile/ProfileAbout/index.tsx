import { useTranslations } from "next-intl";

export function ProfileAbout() {
  const t = useTranslations("HomePage.about");
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-12 py-20"
    >
      <div className="max-w-4xl">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-8">
          {t("title")}
        </h3>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>{t("text_1")}</p>
          <p>{t("text_2")}</p>
          <p>{t("text_3")}</p>
          <p>{t("text_4")}</p>
        </div>
      </div>
    </section>
  );
}
