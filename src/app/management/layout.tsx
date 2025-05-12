"use client";
import styles from "./styles/layout.module.scss";

import { useSidebar } from "@/contexts/sidebar/sidebarContext";
import { usePathname } from "next/navigation";
import React from "react";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar();
  const pathname = usePathname();

  const showBreadcrumbs = !pathname.startsWith("/account/login");

  return (
    <div className={styles.layoutWrapper}>
      <main
        className={`${styles.mainContent} ${collapsed ? styles.expanded : ""}`} // ajuste conforme o colapso
      >
        {showBreadcrumbs}
        {children}
      </main>
    </div>
  );
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutContent>{children}</LayoutContent>;
}
