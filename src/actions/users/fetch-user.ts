import { USER_GET } from "@/functions/api";

export async function fetchUsers(): Promise<
  Array<{ name: string; fullname: string; email: string }>
> {
  try {
    const { url } = USER_GET();
    const response = await fetch(url, { cache: "no-store" });
    if (!response) throw new Error("Erro ao buscar usuários");

    const data = await response.json();
    console.log(data);

    // Simulação de estrutura, ajuste conforme retorno real da APInpm run dev

    return [
      { name: "João", fullname: "Joao Fernando", email: "joao@email.com" },
      {
        name: "Maria",
        fullname: "Maria Fernanda",
        email: "mariafernanda@email.com",
      },
      {
        name: "Maria",
        fullname: "Maria Manuela",
        email: "mariamanuela@email.com",
      },
       { name: "João", fullname: "Joao Fernando", email: "joao@email.com" },
      {
        name: "Maria",
        fullname: "Maria Fernanda",
        email: "mariafernanda@email.com",
      },
      {
        name: "Maria",
        fullname: "Maria Manuela",
        email: "mariamanuela@email.com",
      },
    ];
  } catch (error) {
    console.error(error);
    return [];
  }
}
