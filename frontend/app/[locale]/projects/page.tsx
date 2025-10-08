import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col p-5" data-testid="projects-page">
      <div className="flex items-center my-3">
        <Button
          variant={"link"}
          asChild
          className="hover:text-gray-300 transition-colors duration-200 p-0"
        >
          <Link href={"/"}>
            <ArrowLeft size={"20"} />
            <p className="text-lg">Go back to my profile</p>
          </Link>
        </Button>
      </div>
      <h1 className="text-2xl">Proyectos</h1>
      <p className="text-xl my-3">Una lista de todos mis proyectos</p>
      <div className="bg-card"></div>
    </div>
  );
}
