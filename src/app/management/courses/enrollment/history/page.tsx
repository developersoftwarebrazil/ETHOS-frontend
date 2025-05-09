import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export default async function AeminHistoryEnrollmentPage() {
  return (
    <section className="flex flex-col gap-4">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold">Histórico de matrícula</h1>
      <p className="text-gray-500">
        Esta é a página de histórico de matrícula. Aqui você pode visualizar o histórico de matrículas de um aluno ou funcionário.
      </p>
    </section>
  );
}