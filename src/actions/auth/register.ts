"use server";

import { USER_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export type User = {
  id: number;
  email: string;
  username: string;
  name: string;
};

/**
 * Busca os dados do usuário autenticado.
 */
export default async function userGet() {
  try {
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      throw new Error("Token não encontrado.");
    }

    const { url } = USER_GET();

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 60, // revalidação do cache
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao encontrar o usuário.");
    }

    const data = (await response.json()) as User;

    return { data, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
