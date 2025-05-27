import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/components/frontbuild/SidebarNav"
import { HamburgerMenu } from "@/components/frontbuild/HamburgerMenu"


const sidebarNavItems = [
    {
        title: "Personal Info",
        href: "/profile/personal-info",
    },
    {
        title: "My Skills",
        href: "/profile/skills",
    },
    {
        title: "Testing",
        href: "/profile/testing",
    },
    {
        title: "Education",
        href: "/profile/education",
    },
    {
        title: "Crafting Software",
        href: "/profile/crafting-software",
    },
    {
        title: "Projects",
        href: "/projects",
    },
]

interface ProfileLayoutProps {
    children: React.ReactNode
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
    return (
        <>
            <div className="p-10 pb-16" data-testid="frontbuild-profile-layout">
                <div className="flex items-center justify-between space-x-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Hector Zea</h2>
                        <p className="text-muted-foreground">
                            INFO TODO
                        </p>
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
    )
}