"use client";
import Image from "next/image";
import { Input } from "../ui/input";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SideBarProps {
  user: User;
}

export function LeftNavbar({ user }: SideBarProps): JSX.Element {
  const currentPath = usePathname();

  console.log(currentPath);
  return (
    <nav className="sidebar">
      <div className="flex items-center gap-2 max-md:justify-center ">
        <div className=" max-md:size-[50px] w-10 h-10 relative  ">
          <Image src={"/icons/logo.svg"} alt="logo" fill></Image>
        </div>
        <h2 className="text-2xl font-bold max-md:hidden">Horizon</h2>
      </div>
      <div className="relative h-10 mt-4 max-md:hidden">
        <Image
          className="absolute top-1/2  -translate-y-1/2 left-2 opacity-50"
          width={19}
          height={19}
          src={"/icons/search.svg"}
          alt="user"
        />
        <Input className="w-full h-full pl-8 " placeholder="Search" />
      </div>
      <section className="flex flex-col  mt-4 max-md:mt-16">
        {leftNavbarLinks.map((link) => {
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
              <span className="max-md:hidden font-bold">{link.label}</span>
            </Link>
          );
        })}
      </section>
    </nav>
  );
}

export const leftNavbarLinks = [
  {
    label: "home",
    route: "/",
    icon: "/icons/home.svg",
  },

  {
    label: "my banks",
    route: "/banks",
    icon: "/icons/dollar-circle.svg",
  },
  {
    label: "transaction history",
    route: "/transactions",
    icon: "/icons/transaction.svg",
  },
  {
    label: "payments transfer",
    route: "/payments",
    icon: "/icons/payment-transfer.svg",
  },
  {
    label: "connect banks",
    route: "/connect-banks",
    icon: "/icons/connect-bank.svg",
  },
];
