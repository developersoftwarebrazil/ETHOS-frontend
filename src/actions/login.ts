"use server";

import { TOKEN_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export default async function Login(
  state: { ok: boolean; error: string },
  formData: FormData
) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!username || !password) throw new Error("Preencha os campos");
    const {url }= TOKEN_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error("A senha Ou o usário estão inválidos.");
    const data = await response.json();
    (await cookies()).set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
