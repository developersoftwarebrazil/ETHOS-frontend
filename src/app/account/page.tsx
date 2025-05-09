import LoginPresentationForm from "@/components/account/login/presentations/login-presentation-form";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export default async function AccountPage() {
  return (
    <section>
      <Breadcrumbs />
      <LoginPresentationForm />
    </section>
  );
}
