"use client"

import { columns } from "@/components/frontbuild/DataTable/Columns";
import { DataTable } from "@/components/frontbuild/DataTable/DataTable";
import { useEffect, useState } from "react";
import axios from "axios";

interface Task {
  id: string;
  title: string;
  status: string;
  label: string;
  priority: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost/api/tasks"); // Ajusta la URL según tu configuración
        setTasks(response.data); // Suponiendo que la respuesta es un array de tareas
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
      {/* <div className="mt-8">
        <h2 className="text-1xl font-bold">Backend </h2>
        <DataTable data={[
          {
            "id": "FNTB-0002",
            "title": "Initialize and connect localhost backend mongo + express simple setup",
            "status": "backlog",
            "label": "feature",
            "priority": "medium"
          },
        ]} columns={columns} />
      </div> */}
    </div>
  );
}
