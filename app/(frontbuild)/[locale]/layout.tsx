import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { ModeToggle } from "@/components/frontbuild/ModeToggle";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <NextIntlClientProvider locale={locale}>
        {/* TODO ver como acomodar dps para accesibilidad o como hacer para que este en unos lugares y en otros no */}
        {/* <ModeToggle /> */}
        {children}
      </NextIntlClientProvider>
    </>
  );
}
