"use client"
import { useMsw } from '@/hooks/useMsw';
import React from 'react'
import { Loading } from '../Loading';

type TaskDataLoaderProps = {
    children?: React.ReactNode;
}

const TaskDataLoader = ({ children }: TaskDataLoaderProps) => {

    const isMswReady = useMsw();

    if (!isMswReady) {
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