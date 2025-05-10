import LoginPresentationForm from "@/components/account/login/presentations/login-presentation-form";
import Sidebar from "@/components/menus/sidebars/sidebar";

export default function Home() {
  return (
    <div>
      <main>
        <Sidebar />
        <LoginPresentationForm />
      </main>
    </div>
  );
}
