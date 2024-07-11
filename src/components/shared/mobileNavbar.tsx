"use client";
// COMPONENTS
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/constants";
import { Input } from "../ui/input";

interface SideBarProps {
  user: User;
}

export function MobileNavbar({ user }: SideBarProps): JSX.Element {
  return (
    <header className="mobile-navbar">
      <div className="relative w-10 h-10">
        <Image src={"/icons/logo.svg"} fill alt="logo"></Image>
      </div>
      <Menu />
    </header>
  );
}

function Menu() {
  const currentPath = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative w-10 h-10">
          <Image src={"/icons/hamburger.svg"} fill alt="logo"></Image>
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="px-4 mt-4 font-inter">
        <nav className="">
          <div className="flex items-center gap-2  ">
            <div className=" max-md:size-[30px] w-10 h-10 relative  ">
              <Image src={"/icons/logo.svg"} alt="logo" fill></Image>
            </div>
            <h2 className="text-2xl font-bold ">Horizon</h2>
          </div>
          <section className="flex flex-col mt-8">
            {navigationLinks.map((link) => {
              const isActive =
                currentPath === link.route ||
                currentPath.startsWith(`${link.route}/`);

              return (
                <Link
                  href={link.route}
                  key={link.route}
                  className={cn(
                    "flex items-center gap-4 capitalize p-4 rounded-md",
                    {
                      "bg-blue-500 text-white": isActive,
                    }
                  )}
                >
                  <Image
                    className={cn("", {
                      "brightness-[3]": isActive,
                    })}
                    src={link.icon}
                    alt={link.label}
                    width={19}
                    height={19}
                  />
                  <span className="font-bold text-sm">{link.label}</span>
                </Link>
              );
            })}
          </section>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
