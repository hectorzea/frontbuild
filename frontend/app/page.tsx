"use client"

import { columns } from "@/components/frontbuild/DataTable/Columns";
import { DataTable } from "@/components/frontbuild/DataTable/DataTable";
import { useEffect, useState } from "react";
import axios from "axios";
import { Task } from "./src/types/api/Api";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/tasks");
        setTasks(response.data);
        console.log(tasks)
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);
  return (
    <div className="p-20">
      <h2 className="text-2xl font-bold">Welcome back!</h2>
      <p className="text-muted-foreground">
        FrontBuild all task repository!
      </p>
      <div className="mt-8">
        <h2 className="text-1xl font-bold mb-3">Frontend </h2>
        <DataTable data={tasks} columns={columns} />
      </div>
    </div>
  );
}
