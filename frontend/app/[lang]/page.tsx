import { redirect } from 'next/navigation';
export default async function Index() {
    redirect('/profile');
    // const { t } = await getT('common');
    // return (
    //     <div>
    //         {t('accept')}
    //     </div>
    // );
}