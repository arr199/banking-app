import { LeftNavbar } from "@/components/home/leftNavbar";
import { MobileNavbar } from "@/components/home/mobileNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User = { id: 1, name: "John Doe" };
  return (
    <main className="flex">
      <MobileNavbar user={user}></MobileNavbar>
      <LeftNavbar user={user}></LeftNavbar>
      {children}
    </main>
  );
}
