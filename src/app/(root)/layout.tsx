import { LeftNavbar } from "@/components/shared/leftNavbar";
import { MobileNavbar } from "@/components/shared/mobileNavbar";
import { getLoggedInUser } from "@/lib/actions/auth/appwrite";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<JSX.Element> {
  const user = await getLoggedInUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <main className="flex max-sm:flex-col ">
      <MobileNavbar user={user}></MobileNavbar>
      <LeftNavbar user={user}></LeftNavbar>
      {children}
    </main>
  );
}
