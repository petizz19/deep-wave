import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://deepwave.com.br'),
  title: "CLX - Evento de Música Eletrônica | Promoção Imperdível",
  description: "🔥 PROMOÇÃO IMPERDÍVEL! Evento de música eletrônica da CLX. Ingressos limitados com desconto especial. Não perca!",
  keywords: ["CLX", "música eletrônica", "festa", "promoção", "ingressos", "evento", "eletrônica"],
  authors: [{ name: "CLX Events" }],
  openGraph: {
    title: "CLX - Evento de Música Eletrônica | Promoção Imperdível",
    description: "🔥 PROMOÇÃO IMPERDÍVEL! Evento de música eletrônica da CLX. Ingressos limitados com desconto especial. Não perca!",
    type: "website",
    locale: "pt_BR",
    url: "https://deepwave.com.br",
    images: [
      {
        url: "/logo.svg",
        width: 200,
        height: 60,
        alt: "CLX Event Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLX - Evento de Música Eletrônica | Promoção Imperdível",
    description: "🔥 PROMOÇÃO IMPERDÍVEL! Evento de música eletrônica da CLX. Ingressos limitados com desconto especial. Não perca!",
    images: ["/logo.svg"],
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
        <link rel="canonical" href="https://deepwave.com.br" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
