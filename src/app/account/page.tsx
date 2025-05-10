import LoginPresentationForm from "@/components/account/login/presentations/login-presentation-form";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Sidebar from "@/components/menus/sidebars/sidebar";

export default async function AccountPage() {
  return (
    <section>
      <Breadcrumbs />
      <Sidebar />
      <LoginPresentationForm />
    </section>
  );
}
