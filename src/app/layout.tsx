import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.deepwave.com.br'),
  title: "Deep Wave - 1ª Festa de Música Eletrônica da Cidade Baixa | Casadinha R$ 60",
  description: "🔥 CASADINHA ESPECIAL! 2 ingressos por R$ 60 na 1ª festa de música eletrônica da Cidade Baixa/Ribeira em Salvador. Atendente 24h!",
  keywords: ["Deep Wave", "Cidade Baixa", "música eletrônica", "festa", "casadinha", "ingressos", "Salvador", "Ribeira", "Espaço Bombordo", "PHStudios"],
  authors: [{ name: "PHStudios - Programador e Desenvolvedor®" }],
  openGraph: {
    title: "Deep Wave - 1ª Festa de Música Eletrônica da Cidade Baixa | Casadinha R$ 60",
    description: "🔥 CASADINHA ESPECIAL! 2 ingressos por R$ 60 na 1ª festa de música eletrônica da Cidade Baixa/Ribeira em Salvador. Atendente 24h!",
    type: "website",
    locale: "pt_BR",
    url: "https://www.deepwave.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Wave - 1ª Festa de Música Eletrônica da Cidade Baixa | Casadinha R$ 60",
    description: "🔥 CASADINHA ESPECIAL! 2 ingressos por R$ 60 na 1ª festa de música eletrônica da Cidade Baixa/Ribeira em Salvador. Atendente 24h!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.deepwave.com.br" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
