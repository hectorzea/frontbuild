"use client"
import { useMsw } from '@/hooks/useMsw';
import React from 'react'
import { Loading } from '@/components/frontbuild/Loading';
import { useFrontbuildApi } from '@/hooks/useFrontbuildApi';

type TaskDataLoaderProps = {
    children?: React.ReactNode;
}

const TaskDataLoader = ({ children }: TaskDataLoaderProps) => {

    const mswLoaded = useMsw();
    const generalDataLoaded = useFrontbuildApi(mswLoaded); 

    if (!mswLoaded || !generalDataLoaded) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loading />
            </div>
        );
    }

    return (
        <>{children}</>
    )
}

export default TaskDataLoader