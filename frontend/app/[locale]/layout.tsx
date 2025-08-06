import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
  modal,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
  modal: React.ReactNode;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <NextIntlClientProvider>
        {modal}
        {children}
      </NextIntlClientProvider>
    </>
  );
}
