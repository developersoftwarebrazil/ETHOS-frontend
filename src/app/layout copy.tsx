import type { Metadata } from "next";
import "./globals.scss";
import { chathura, openSans, roboto } from "@/functions/fonts";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import BreadcrumbsWrapper from "@/components/breadcrumbs/BreadcrumbsWrapper";

export const metadata: Metadata = {
  title: "Aplicativo de Gestão ETHOS",
  description: "Aplicativo web de gestão de alunos, e professores",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  return (
    <html lang="pt-BR">
      <body
        className={`${chathura.variable} ${openSans.variable} ${roboto.variable}`}
      >
        <div className="App">
          <Header />
          <main className="AppBody">
            <BreadcrumbsWrapper />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
