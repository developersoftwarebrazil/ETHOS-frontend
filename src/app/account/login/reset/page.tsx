import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a sua senha | ETHOS",
  description: "Reset a senha da sua conta do site ETHOS.",
};

export default async function ResetPage() {
  return (
    <section>
      <h1>Redefinir Senha</h1>
      <p>Esta é a página de redefinição de senha de conta</p>
    </section>
  );
}