import { LeftNavbar } from "@/components/shared/leftNavbar";
import { MobileNavbar } from "@/components/shared/mobileNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User = { id: 1, name: "John Doe" };
  return (
    <main className="flex max-sm:flex-col ">
      <MobileNavbar user={user}></MobileNavbar>
      <LeftNavbar user={user}></LeftNavbar>
      {children}
    </main>
  );
}
