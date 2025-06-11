
import DownloadCVButton from "@/components/frontbuild/DownloadButton";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center space-y-6 mx-4">
            <p>{t('title')}</p>
            <DownloadCVButton/>
            <Link href={`/profile/skills`} className="text-blue-500 hover:underline">{t('profile')}</Link>
        </div>
    );
}