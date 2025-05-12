"use client";

import Sidebar from "@/app/management/components/menus/sidebars/sidebar";
import { usePathname } from "next/navigation";


export default function LayoutWithSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideSidebarRoutes = [
    "/account/login",
    "/account/login/create",
    "/account/login/lost",
    "/account/login/reset",
  ];

  const shouldHideSidebar = hideSidebarRoutes.includes(pathname);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {!shouldHideSidebar && <Sidebar />}
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}
