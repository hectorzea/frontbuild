"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type MenuItem = {
    title: string
    href?: string
}

const MenuItemComponent: React.FC<{ item: MenuItem; depth?: number }> = ({ item, depth = 0 }) => {
    return (
        <a
            href={item.href}
            className={cn(
                "block py-2 text-lg font-medium transition-colors hover:text-primary",
                depth > 0 && "pl-4",
                item.href === "/" && "text-primary"
            )}
        >
            {item.title}
        </a>
    )
}

interface HamburgerMenuProps {
    menuItems: MenuItem[]
}


export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ menuItems }) => {
    const [open, setOpen] = React.useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="w-[100%]">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[100%]">
                <SheetHeader>
                    <SheetTitle>Frontbuild</SheetTitle>
                    <nav className="flex flex-col space-y-4">
                        {menuItems.map((item) => (
                            <MenuItemComponent key={item.title} item={item} />
                        ))}
                    </nav>
                </SheetHeader>
            </SheetContent>
        </Sheet >
    )
}