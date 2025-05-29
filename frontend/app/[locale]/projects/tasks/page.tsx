import React from 'react';
import { TaskDashboard } from '@/components/frontbuild/TaskDashboard';
import { useTranslations } from 'next-intl';

export default function IndexPage() {
    const t = useTranslations('HomePage');

    return <TaskDashboard title={t('title')} />;
}