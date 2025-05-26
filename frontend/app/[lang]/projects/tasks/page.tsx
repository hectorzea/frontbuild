"use client"
import React, { useEffect, useState } from 'react';
import { TaskDashboard } from '@/components/frontbuild/TaskDashboard';
import { setUpMocks } from '@/app/mocks/setupMocks';
import { Loading } from '@/components/frontbuild/Loading';

export default function IndexPage() {
    const [isMswReady, setIsMswReady] = useState<boolean>(false);
    useEffect(() => {
        const initializeMocking = async () => {
            if (process.env.NEXT_PUBLIC_ENABLE_MSW === "true") {
                await setUpMocks();
            }
            setIsMswReady(true);
        };
        initializeMocking();
    }, []);

    if (!isMswReady) {
        return <div className='flex justify-center items-center h-screen'><Loading /></div>;
    }

    return <TaskDashboard />;
}