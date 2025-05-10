"use client";
import styles from "./layout.module.scss";

import Sidebar from "@/components/menus/sidebars/sidebar";
import { SidebarProvider, useSidebar } from "@/contexts/sidebar/sidebarContext";
import { usePathname } from "next/navigation";
import React from "react";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar();
  const pathname = usePathname();

  const showBreadcrumbs = !pathname.startsWith("/account/login");

  return (
    <div className={styles.layoutWrapper}>
      <Sidebar />
      <main
        className={styles.mainContent}
        style={{ marginLeft: collapsed ? "80px" : "260px" }} // ajuste conforme o colapso
      >
        {showBreadcrumbs}
        {children}
      </main>
    </div>
  );
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}
