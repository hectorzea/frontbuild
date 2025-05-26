import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <div>
            {t('title')}
        </div>
    );
}