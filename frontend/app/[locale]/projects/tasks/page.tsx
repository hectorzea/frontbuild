import React from 'react';
import { TaskDashboard } from '@/components/frontbuild/TaskDashboard';
// import { setUpMocks } from '@/app/mocks/setupMocks';
// import { Loading } from '@/components/frontbuild/Loading';
import { useTranslations } from 'next-intl';

export default function IndexPage() {
    const t = useTranslations('HomePage');

    return <TaskDashboard title={t('title')} />;
}