import SideBar from "@/components/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col">
      <SideBar></SideBar>
      {children}
    </main>
  );
}
