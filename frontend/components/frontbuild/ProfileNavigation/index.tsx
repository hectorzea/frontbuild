import * as React from "react";
import { useTranslations } from "next-intl";
import Navigation from "./Navigation";

const navItems = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

export function ProfileNavigation() {
  //todo general translation wrapper for functional?
  const t = useTranslations("Profile.navigation");
  const navigationItems = navItems.map((item) => ({
    ...item,
    name: t(item.name),
  }));
  return <Navigation navigationItems={navigationItems} />;
}
