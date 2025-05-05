import { getT } from '@/app/i18n/index';
export default async function Index() {
    const { t } = await getT('common');
    return (
        <div>
            {t('accept')}
        </div>
    );
}