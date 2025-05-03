import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perdeu ou esqueceu a sua senha | ETHOS",
  description: "Recupere a sua senha da conta do site ETHOS.",
};
export default async function LostPage() {
  return (
    <section>
      <h1>Perdeu a sua senha?</h1>
      <p>Esta é a página de  recriar senha de conta</p>
    </section>
  );
}