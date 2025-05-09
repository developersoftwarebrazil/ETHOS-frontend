import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export default async function AdminCreateEnrollmentPage() {
  return (
    <section className="flex flex-col gap-4">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold">Criar conta de matrícula</h1>
      <p className="text-gray-500">
        Esta é a página de criação de conta da matrícula. Aqui você pode criar uma nova conta de matrícula para um aluno ou funcionário.
      </p>
    </section>
  );
}