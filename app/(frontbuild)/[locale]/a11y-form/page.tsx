import { PageHeader } from "@/components/frontbuild/a11y-form/PageHeader";
import ProfileForm from "@/components/frontbuild/a11y-form/ProfileForm";
import SkipLink from "@/components/frontbuild/a11y-form/SkipLink";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "profileForm.page" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function A11yFormPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "profileForm" });

  return (
    <>
      <SkipLink href="#profile-form">{t("page.skipLink")}</SkipLink>
      <div className="mx-auto max-w-2xl px-4 py-8 md:py-12">
        <PageHeader
          title={t("page.title")}
          description={t("page.description")}
        />
        <main id="main-content">
          <section
            id="profile-form"
            tabIndex={-1}
            aria-labelledby="profile-form-heading"
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <ProfileForm />
          </section>
        </main>
      </div>
    </>
  );
}
