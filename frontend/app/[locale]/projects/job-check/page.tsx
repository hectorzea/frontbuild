"use client"
import { InputForm } from "@/components/frontbuild/LinkForm";
import React from "react";

export default function ProjectsPage() {
    return (
        <div data-testid="projects-page" className="flex flex-col">
            <p>Text Job Formatter</p>
            <InputForm />
        </div>
    );
}