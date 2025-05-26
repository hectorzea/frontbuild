import { getT } from "@/app/i18n";
import Link from "next/link";

export default async function ProfileIndexPage() {
    const { t } = await getT('main');
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center space-y-6 mx-4">
            <p>{t('title')}</p>
            <Link href={`/profile`} className="text-blue-500 hover:underline">{t('link')}</Link>
        </div>
    );
}