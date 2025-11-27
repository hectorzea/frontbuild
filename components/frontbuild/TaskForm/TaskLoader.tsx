"use client";
import { TaskEditLoader } from "./TaskEditLoader";

export interface IAppProps {
  id?: string;
  children: React.ReactNode;
}

export function TaskLoader({ id, children }: IAppProps) {
  if (!id) {
    return <>{children}</>;
  } else {
    return <TaskEditLoader id={id}>{children}</TaskEditLoader>;
  }
}
