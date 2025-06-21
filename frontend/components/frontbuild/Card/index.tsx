import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <Card className="bg-neutral-900">
      <CardHeader>
        <CardTitle>Task Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <p className="text-sm">
            A simple task generator using the best practices of redux toolkit +
            jest asdadasdadasdasd asd asda sd asdadasdasd asdasdasda d
          </p>
          <div>
            Stack Used
            <ul className="list-disc pl-5 text-sm">
              <li>Next.js</li>
              <li>Redux Toolkit</li>
              <li>Jest</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            Testing Approach
            <ul className="list-disc pl-5 text-sm">
              <li>Next.js</li>
              <li>Redux Toolkit</li>
              <li>Jest</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            Motivation of the project
            <p className="text-sm">
              Having an simple app but robust with CI/CD, applying testing
              pyramid principles and using server components / client components
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          className="text-white hover:text-gray-300 transition-colors duration-200"
          href={`/projects/tasks`}
        >
          Go to project
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
