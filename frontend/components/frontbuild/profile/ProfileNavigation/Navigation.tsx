"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import * as React from "react";
import { NavigationProps } from "./types";
import Link from "next/link";

export default function Navigation({ navigationItems }: NavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <Button
        data-testid="navigation-menu-button-mobile"
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar navigation */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-background border-r border-border z-40 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        data-testid="navigation-menu-button-desktop"
      >
        <div className="flex flex-col h-full p-8">
          <div className="mb-16">
            <h1 className="text-2xl font-bold mb-2">Hector Zea</h1>
            <p className="text-muted-foreground text-sm">Software Engineer</p>
          </div>

          <ul className="space-y-6 flex-1">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors duration-200 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/hectorzea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hectorazea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
