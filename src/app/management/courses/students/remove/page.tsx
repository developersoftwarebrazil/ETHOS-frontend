import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export default async function AdminRemoveStudentPage() 
{
  return (
    <section className="flex flex-col gap-4">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold">Remover conta de estudante</h1>
      <p className="text-gray-500">
        Esta é a página de remoção de conta de estudante
      </p>
    </section>
  );
}