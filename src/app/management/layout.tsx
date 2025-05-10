"use client";

import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Sidebar from "@/components/menus/sidebars/sidebar";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const showBreadcrumbs = !pathname.startsWith("/account/login");

  return (
    <>
      {showBreadcrumbs && <Breadcrumbs /> && <Sidebar />}
      {children}
    </>
  );
}
