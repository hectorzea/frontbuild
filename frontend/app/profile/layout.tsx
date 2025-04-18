import { Metadata } from "next"

import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/components/frontbuild/SidebarNav"
import { HamburgerMenu } from "@/components/frontbuild/HamburgerMenu"

export const metadata: Metadata = {
    title: "Frontbuild",
    description: "Page for crafting software",
}

const sidebarNavItems = [
    // {
    //     title: "Interviews",
    //     href: "/profile/interviews",
    // },
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
        title: "Tasks",
        href: "/",
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
                            I like to build things with code. Im a software engineer based in Berlin, Germany.
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