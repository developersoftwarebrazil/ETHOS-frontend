import Sidebar from "@/app/management/components/menus/sidebars/sidebar";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
// import Sidebar from "../menus/sidebars/sidebar";

export default function DashboardForm({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <Breadcrumbs />
      <Sidebar />
      <main style={{ marginLeft: "250px", width: "100%" }}>{children}</main>
    </div>
  );
}
