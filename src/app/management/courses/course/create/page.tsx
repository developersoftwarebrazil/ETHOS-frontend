import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export default async function AdminCreateCousePage() {  
  return (
    <section className="flex flex-col gap-4">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold">Criar Curso</h1>
      <p className="text-gray-500">
        Esta é a página de criar curso
      </p>
    </section>
  );
}