import { Metadata } from "next"

import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/components/frontbuild/SidebarNav"

export const metadata: Metadata = {
    title: "Forms",
    description: "Advanced form example using react-hook-form and Zod.",
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
        title: "Education",
        href: "/profile/education",
    },
    {
        title: "Tasks",
        href: "/",
    },
]

interface SettingsLayoutProps {
    children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <>
            <div className="space-y-6 p-10 pb-16">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">Hector Zea</h2>
                    <p className="text-muted-foreground">
                        I like to build things with code. Im a software engineer based in Berlin, Germany.
                    </p>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 lg:w-1/5">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1">{children}</div>
                </div>
            </div>
        </>
    )
}