"use client";
import { UserNav } from "@/components/frontbuild/UserNav";

import { ModeToggle } from "../ModeToggle";
import { selectAllTasks } from "@/lib/features/tasks/tasksSlice";
import { useAppSelector } from "@/lib/hooks";
import { DataTable } from "../DataTable";
import { columns } from "../DataTable/Columns";

type TaskDashboardProps = {
  title: string;
};

export const TaskDashboard = ({ title }: TaskDashboardProps) => {
  const tasks = useAppSelector(selectAllTasks);
  return (
    <div className="h-full flex-1 flex-col space-y-4 p-4 sm:p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2
            className="text-2xl font-bold tracking-tight"
            data-testid={"frontbuild-title"}
          >
            FrontBuild
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <UserNav />
          <ModeToggle />
        </div>
      </div>
      <DataTable
        data={tasks}
        columns={columns}
        data-testid={"frontbuild-table"}
      />
    </div>
  );
};
