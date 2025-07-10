import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Project } from "@/app/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, subtitle, stack, testingApproach, motivation, link } = project;
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
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
        </div>
      </CardContent>
      <CardFooter>
        <Link
          className="hover:text-gray-300 transition-colors duration-200"
          href={link}
        >
          Go to project
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
