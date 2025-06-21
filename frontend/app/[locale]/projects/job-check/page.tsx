"use client"
import { InputForm } from "@/components/frontbuild/LinkForm";
import React from "react";

export default function ProjectsPage() {
    return (
        <div data-testid="projects-page" className="flex flex-col p-4">
            <p>Job linter</p>
            <InputForm />
        </div>
    );
}