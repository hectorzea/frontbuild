import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/frontbuild/SidebarNav";
import { HamburgerMenu } from "@/components/frontbuild/HamburgerMenu";
import { useTranslations } from "next-intl";

type SidebarNavItem = {
  title: string;
  href: string;
};

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const sidebarNavItems: SidebarNavItem[] = [
  {
    title: "About Me",
    href: "/profile/personal-info",
  },
  {
    title: "Education",
    href: "/profile/education",
  },
  {
    title: "Testing, My Way",
    href: "/profile/testing",
  },
  {
    title: "Professional History",
    href: "/profile/skills",
  },
  {
    title: "My Method: Agile Scrum",
    href: "/profile/crafting-software",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  const t = useTranslations("ProfileLayout");
  return (
    <>
      <div className="p-10 pb-16" data-testid="frontbuild-profile-layout">
        <div className="flex items-center justify-between space-x-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{t("title")}</h2>
            <p>{t("description")}</p>
          </div>
          <HamburgerMenu menuItems={sidebarNavItems} />
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 hidden md:block">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  );
}
