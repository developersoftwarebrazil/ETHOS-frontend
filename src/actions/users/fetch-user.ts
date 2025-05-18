import { USER_GET } from "@/functions/apis/options";

export async function fetchUsers(): Promise<
  Array<{
    id: number;
    name: string;
    email: string;
    phone: string;
    image: string;
    createdAt: string;
  }>
> {
  try {
    const { url } = USER_GET();
    const response = await fetch(url, { cache: "no-store" });
    if (!response) throw new Error("Erro ao buscar usuários");

    const data = await response.json();
    console.log(response, data);

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
