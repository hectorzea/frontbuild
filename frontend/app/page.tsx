"use client"
import React, { useEffect, useState } from 'react';
import { TaskDashboard } from '../components/frontbuild/TaskDashboard/TaskDashboard';
import { setUpMocks } from './mocks/setupMocks';

export default function IndexPage() {
  const [isMswReady, setIsMswReady] = useState<boolean>(false);

  useEffect(() => {
    const initializeMocking = async () => {
      if (process.env.NODE_ENV === "development") {
        await setUpMocks();
      }
      setIsMswReady(true);
    };
    initializeMocking();
  }, []);

  if (!isMswReady) {
    return <div>Loading...</div>;
  }

  return <TaskDashboard />;
}