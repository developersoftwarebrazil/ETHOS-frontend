"use client";

import { usePathname } from "next/navigation";
import Breadcrumbs from "./breadcrumbs";

const hiddenBreadcrumbsInTheseRoutes = [
  "/account/login",
  "/account/login/create",
  "/account/login/lost",
  "/account/login/reset",
];

export default function BreadcrumbsWrapper() {
  const pathname = usePathname();
  const showBreadcrumbs = !hiddenBreadcrumbsInTheseRoutes.includes(pathname);

  if (!showBreadcrumbs) return null;

  return <Breadcrumbs />;
}
