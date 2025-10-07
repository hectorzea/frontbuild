import { useTranslations } from "next-intl";

export function ProfileHero() {
  const t = useTranslations("Profile.hero");
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-4xl">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          {t("main")}
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}
