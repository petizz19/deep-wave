import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração do Turbopack para evitar conflitos
  turbopack: {
    // Configurações vazias para silenciar o aviso
  },
  // Otimização de imagens
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
  },
  
  // Otimização de build
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Headers de segurança e performance - otimizados
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Cross-Origin-Opener-Policy',
          value: 'same-origin',
        },
      ],
    },
    {
      source: '/_next/static/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
      has: [
        {
          type: 'header',
          key: 'content-type',
          value: 'image/(.*)',
        },
      ],
    },
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
      has: [
        {
          type: 'header',
          key: 'content-type',
          value: 'text/css',
        },
      ],
    },
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
      has: [
        {
          type: 'header',
          key: 'content-type',
          value: 'application/javascript',
        },
      ],
    },
  ],
  
  // Compressão
  compress: true,
  
  // Powered by header removal
  poweredByHeader: false,
  
  // Otimizações experimentais para performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react', 'react-dom'],
    scrollRestoration: true,
  },
  
  // Otimização de bundle
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    
    // Otimização para produção
    if (process.env.NODE_ENV === 'production') {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            priority: 20,
            chunks: 'all',
          },
        },
      }
    }
    
    return config
  },
};

export default nextConfig;
