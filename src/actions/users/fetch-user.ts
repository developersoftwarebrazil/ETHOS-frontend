import { USER_GET } from "@/functions/api";

export async function fetchUsers(): Promise<
  Array<{ nome: string; email: string }>
> {
  try {
    const { url } = USER_GET();
    const response = await fetch(url, { cache: "no-store" });
    if (!response) throw new Error("Erro ao buscar usuários");

    const data = await response.json();
    console.log(data);
    

    // Simulação de estrutura, ajuste conforme retorno real da APInpm run dev

    return [
      { nome: "João", email: "joao@email.com" },
      { nome: "Maria", email: "maria@email.com" },
      { nome: "Maria Manuela", email: "maria@email.com" },
    
    ];
  } catch (error) {
    console.error(error);
    return [];
  }
}
