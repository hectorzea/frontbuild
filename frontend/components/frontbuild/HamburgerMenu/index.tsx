"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

type MenuItem = {
  title: string;
  href?: string;
};

const MenuItemComponent: React.FC<{
  item: MenuItem;
  pathname?: string;
  setOpen: (flag: boolean) => void;
}> = ({ item, pathname, setOpen }) => {
  return (
    <Link
      key={item.href}
      href={item.href!}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        pathname === item.href
          ? "bg-muted hover:bg-muted"
          : "hover:bg-transparent hover:underline",
        "justify-start"
      )}
      onClick={() => setOpen(false)}
    >
      {item.title}
    </Link>
  );
};

interface HamburgerMenuProps {
  menuItems: MenuItem[];
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ menuItems }) => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[100%]">
        <SheetHeader>
          <SheetTitle>
            <p className="text-left px-4"> Frontbuild</p>
          </SheetTitle>
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <MenuItemComponent
                key={item.title}
                item={item}
                pathname={pathname}
                setOpen={setOpen}
              />
            ))}
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
