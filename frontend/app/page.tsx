import { columns } from "@/components/shared/Columns";
import { DataTable } from "@/components/shared/DataTable";

export default function Home() {
  return (
    <div className="p-20">
      <h2 className="text-2xl font-bold">Welcome back!</h2>
      <p className="text-muted-foreground">
        FrontBuild all task repository!
      </p>
      <div className="mt-8">
        <h2 className="text-1xl font-bold mb-3">Frontend </h2>
        <DataTable data={[
          {
            "id": "FNTB-0001",
            "title": "Adjust folders for table in frontbuild repository",
            "status": "in progress",
            "label": "documentation",
            "priority": "medium"
          },
        ]} columns={columns} />
      </div>
      <div className="mt-8">
        <h2 className="text-1xl font-bold">Backend </h2>
        <DataTable data={[
          {
            "id": "FNTB-0002",
            "title": "Initialize and connect localhost backend mongo + express simple setup",
            "status": "backlog",
            "label": "task",
            "priority": "medium"
          },
        ]} columns={columns} />
      </div>
    </div>
  );
}
