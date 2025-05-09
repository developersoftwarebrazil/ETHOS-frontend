import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export default async function AdminEditClassroomPage() {
  return (
    <section className="flex flex-col gap-4">
      <Breadcrumbs/>
      <h1 className="text-2xl font-bold">Editar conta de formação de turma</h1>
      <p className="text-gray-500">
        Esta é a página de edição de conta de formação de turma. Aqui você pode editar uma conta de formação de turma existente para um aluno ou funcionário.
      </p>
    </section>
  );
}