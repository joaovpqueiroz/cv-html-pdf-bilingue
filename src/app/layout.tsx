import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://joaovpqueiroz.github.io/cv-html-pdf-bilingue/",
  ),

  title: "João Queiroz | Backend Java Engineer",

  description:
    "Currículo profissional de João Queiroz, Backend Java Engineer especializado em SAP Commerce Cloud, arquitetura, integrações e e-commerce escalável.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "profile",
    title: "João Queiroz | Backend Java Engineer",
    description:
      "Java, SAP Commerce Cloud, arquitetura, integrações e e-commerce escalável.",
    url: "/",
    siteName: "João Queiroz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
