// layout SIMPLIFICADO para login/cadastro
import type { Metadata } from "next";
import { chathura, openSans, roboto } from "@/functions/fonts";
// import "@/app/styles/layout.scss"; // ou outro estilo básico

export const metadata: Metadata = {
  title: "Entrar | ETHOS",
  description: "Acesse sua conta no ETHOS.",
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${chathura.variable} ${openSans.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
