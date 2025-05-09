import ProfileUserDashboardForm from "@/components/account/profile/profile-form";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export default async function UserProfile() {
  return (
    <div>
      <Breadcrumbs />
      <h1>User page</h1>
      <ProfileUserDashboardForm />
    </div>
  );
}
