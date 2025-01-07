"use client"
import React from 'react';
import { App } from '.';
import './client';
import { useGetTasksQuery } from '@/lib/features/tasks/tasksApiSlice';

export default function IndexPage() {
  const { data, isError, isLoading, isSuccess } =
    useGetTasksQuery();

  return <App />;
}