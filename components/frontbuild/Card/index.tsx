import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Project } from "@/app/types";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, subtitle, stack, testingApproach, motivation, link } = project;
  return (
    <Card className="max-w-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 h-[450px]">
        <p className="text-sm">{subtitle}</p>
        <div>
          Stack Used
          <ul className="list-disc pl-5 text-sm">
            {stack.map((s, index) => (
              <li key={index}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          Testing Approach
          <ul className="list-disc pl-5 text-sm">
            {testingApproach.map((t, index) => (
              <li key={index}>{t}</li>
            ))}
          </ul>
        </div>
        <div>
          Motivation of the project
          <p className="text-sm">{motivation}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant={"link"}
          asChild
          className="hover:text-gray-300 hover:no-underline transition-colors duration-200 p-0"
        >
          <Link href={link} className="">
            Go to project
            <ArrowRight size={"20"} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
