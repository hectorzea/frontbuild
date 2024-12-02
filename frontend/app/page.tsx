import { columns } from "@/components/frontbuild/DataTable/Columns";
import { DataTable } from "@/components/frontbuild/DataTable/DataTable";

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
            "status": "done",
            "label": "tech-debt",
            "priority": "medium"
          },
          {
            "id": "FNTB-0002",
            "title": "By Depending on the label, find a color for the badge and use it.",
            "status": "done",
            "label": "feature",
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
            "label": "feature",
            "priority": "medium"
          },
        ]} columns={columns} />
      </div>
    </div>
  );
}
