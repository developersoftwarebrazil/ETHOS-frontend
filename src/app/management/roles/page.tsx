import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export default async function AdminRolesUserPage() {
  return (
    <section className="flex flex-col gap-4">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold">Autorizações e Autenticações</h1>
      <p className="text-gray-500">
        Manage user roles and permissions within the application.
      </p>
    </section>
  );
}