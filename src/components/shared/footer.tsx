import { SignOut } from "@/lib/actions/auth/signOut";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  name: string;
  email: string;
  type?: "desktop" | "mobile";
}

export function Footer({
  name,
  email,
  type = "desktop",
}: FooterProps): JSX.Element {
  return (
    <footer className="flex items-center gap-4 opacity-80 ">
      <div
        className={cn(
          ` grid place-items-center size-10  uppercase
      rounded-full  bg-slate-200 text-2xl font-bold`,
          {
            "max-md:hidden": type === "desktop",
          }
        )}
      >
        {name?.[0]}
      </div>
      <div>
        <h3
          className={cn(" font-semibold", {
            "max-md:hidden": type === "desktop",
          })}
        >
          {name}
        </h3>
        <p
          className={cn(" text-xs text-muted-foreground font-semibold ", {
            "max-md:hidden": type === "desktop",
          })}
        >
          {email}
        </p>
      </div>
      <LogOut
        onClick={async () => {
          await SignOut();
        }}
        className={cn("cursor-pointer", {
          "md:ml-auto": type === "desktop",
          "ml-auto": type === "mobile",
        })}
        size={24}
      />
    </footer>
  );
}
