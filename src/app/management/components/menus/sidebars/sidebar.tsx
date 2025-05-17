"use client";

import Link from "next/link";
import { Plus, Pencil, ChevronRight, ChevronLeft } from "lucide-react";

import styles from "../../../styles/sidebar.module.scss";
import { useSidebar } from "@/contexts/sidebar/sidebarContext";

const menuSections = [
  {
    title: "Autenticação e Autorização",
    items: [
      { label: "Usuários", path: "/management/users" },
      { label: "Permissões", path: "/management/roles/role" },
    ],
  },
  {
    title: "Área de Gerenciamento do Vídeo",
    items: [
      { label: "Etiquetas", path: "/management/videos/tags" },
      { label: "Vídeos", path: "/management/videos/video" },
    ],
  },
  {
    title: "Área de Gerenciamento do Curso",
    items: [
      { label: "Alunos", path: "/management/courses/students" },
      { label: "Cursos", path: "/management/courses/course" },
      { label: "Matrículas", path: "/management/courses/enrollment" },
      { label: "Turmas", path: "/management/courses/classroom" },
    ],
  },
];

export default function Sidebar() {
  const { collapsed, toggleCollapse } = useSidebar();
  return (
    <>
      <aside
        className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}
      >
        {!collapsed && (
          <>
            <button onClick={toggleCollapse} className={styles.toggleButton}>
              <ChevronLeft />
            </button>
            {menuSections.map((section) => (
              <div key={section.title} className={styles.section}>
                <h4 className={styles.sectionTitle}>
                  {section.title.toUpperCase()}
                </h4>
                <ul className={styles.linkList}>
                  {section.items.map((item) => (
                    <li key={item.label} className={styles.linkItem}>
                      <Link href={item.path} className={styles.link}>
                        {item.label}
                      </Link>
                      <div className={styles.actions}>
                        <Link
                          href={`${item.path}/create`}
                          className={styles.actionLink}
                          title="adicionar"
                        >
                          <Plus size={16} />
                          <span>adicionar</span>
                        </Link>
                        <Link
                          href={`${item.path}/edit`}
                          className={styles.actionLink}
                          title="editar"
                        >
                          <Pencil size={16} />
                          <span>editar</span>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Footer */}
            <div className={styles.sidebarFooter}>
              <span className={styles.footerText}>v1.0.0</span>
            </div>
          </>
        )}
      </aside>

      {collapsed && (
        <button
          onClick={toggleCollapse}
          className={styles.toggleCollapsedButton}
          aria-label="Expand sidebar"
        >
          <ChevronRight />
        </button>
      )}
    </>
  );
}
