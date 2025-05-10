import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Sidebar from "@/components/menus/sidebars/sidebar";

export default function Home() {
  return (
    <div>
      <Breadcrumbs />
      <main>
        <Sidebar />
        {/* <LoginPresentationForm /> */}
      </main>
    </div>
  );
}
