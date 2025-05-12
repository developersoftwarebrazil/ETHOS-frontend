import styles from "../../../styles/sidebar.module.scss";
import { Pencil, Plus } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  label: string;
  href: string;
}
export default async function SidebarItems({ label, href }: SidebarProps) {
  return (
    <div className={styles.items}>
      <Link href={href}>{label}</Link>
      <div className={styles.actions}>
        <Plus size={14} />
        <Pencil size={14} />
      </div>
    </div>
  );
}
