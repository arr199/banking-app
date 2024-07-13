import { LeftNavbar } from "@/components/shared/leftNavbar";
import { MobileNavbar } from "@/components/shared/mobileNavbar";
import { mockUser } from "@/lib/data";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <main className="flex max-sm:flex-col ">
      <MobileNavbar user={mockUser}></MobileNavbar>
      <LeftNavbar user={mockUser}></LeftNavbar>
      {children}
    </main>
  );
}
