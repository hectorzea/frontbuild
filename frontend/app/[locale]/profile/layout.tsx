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

type ProfileLayoutTranslations = ReturnType<
  typeof useTranslations<"ProfileLayout">
>;

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  const t = useTranslations("ProfileLayout");
  const getSideBarNavItems = (t: ProfileLayoutTranslations) => {
    return [
      {
        title: t("sidebarItem.item4"),
        href: "/profile",
      },
      {
        title: t("sidebarItem.item3"),
        href: "/profile/testing",
      },
      {
        title: t("sidebarItem.item5"),
        href: "/profile/crafting-software",
      },
      {
        title: t("sidebarItem.item6"),
        href: "/projects",
      },
    ] as SidebarNavItem[];
  };
  const sidebarNavItems = getSideBarNavItems(t);
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
