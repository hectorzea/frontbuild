import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-6 mx-4">
      <p>{t("title")}</p>
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
      <Link href={`/profile/skills`} className="text-blue-500 hover:underline">
        {t("profile")}
      </Link>
    </div>
  );
}
