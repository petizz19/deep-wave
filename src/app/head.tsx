import { Head } from 'next/document'

export default function DocumentHead() {
  return (
    <Head>
      {/* Preload de fontes críticas para performance */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Preconnect para recursos externos */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//wa.link" />
      <link rel="dns-prefetch" href="//www.instagram.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      <link rel="dns-prefetch" href="//analytics.tiktok.com" />
      
      {/* Critical CSS inline para renderização mais rápida */}
      <style dangerouslySetInnerHTML={{
        __html: `
          body {
            background: #0a0a0a;
            color: #ededed;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            margin: 0;
            padding: 0;
          }
          
          /* Prevenir flash de conteúdo não estilizado */
          .dark {
            color-scheme: dark;
          }
          
          /* Otimizações para carregamento inicial */
          .min-h-screen {
            min-height: 100vh;
          }
          
          .flex {
            display: flex;
          }
          
          .items-center {
            align-items: center;
          }
          
          .justify-center {
            justify-content: center;
          }
        `
      }} />
    </Head>
  )
}