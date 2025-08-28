import CssIcon from "@/components/frontbuild/Icons/CssIcon";
import Html5Icon from "@/components/frontbuild/Icons/Html5Icon";
import JavascriptIcon from "@/components/frontbuild/Icons/JavascriptIcon";
import ReactIcon from "@/components/frontbuild/Icons/ReactIcon";
import TypescriptIcon from "@/components/frontbuild/Icons/TypescriptIcon";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-6 mx-4">
      <Image
        className="home-image"
        src={"/files/cat.gif"}
        width={"160"}
        height={"100"}
        alt="nyan-cat"
        unoptimized
      />
      <p>{t("title")}</p>
      <div className="flex">
        <JavascriptIcon />
        <ReactIcon />
        <Html5Icon />
        <CssIcon />
        <TypescriptIcon />
      </div>
      <Button
        asChild
        size={"lg"}
        data-testid={"download-cv-button"}
        className="sm:w-auto mt-2 sm:mt-0"
      >
        <Link
          href={`/files/${t("cv")}.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Downlod CV"
        >
          {t("cvLinkName")}
        </Link>
      </Button>
      <Link href={`/projects`} className="text-blue-500 hover:underline">
        {t("profile")}
      </Link>
    </div>
  );
}
