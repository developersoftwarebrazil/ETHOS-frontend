"use client";
import { usePathname } from "next/navigation";
import styles from "./bradcrumbs.module.scss";
import Link from "next/link";
import breadcrumbLabelTranslate from "@/utils/breadcrumbTranslations";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathnameSegmants = pathname.split("/").filter(Boolean); // Remove strings vazias
  const buildHref = (index: number) =>
    "/" + pathnameSegmants.slice(0, index + 1).join("/");

  return (
    <nav className={styles.breadcrumbs}>
      <div className="container">
      <ol className={styles.breadcrumbsContent}>
        <li className={styles.breadcrumbsItems}>
          <Link href="/">home</Link>
        </li>
        {pathnameSegmants.map((segments, index) => {
          const isLast = index === pathnameSegmants.length - 1;
          const href = buildHref(index);
          const label = breadcrumbLabelTranslate[segments] || decodeURIComponent(segments);

          return (
            <li key={href}>
              <span>/</span>
              {isLast ? <span>{label}</span> : <Link href={href}>{label}</Link>}
            </li>
          );
        })}
      </ol></div>
    </nav>
  );
}
