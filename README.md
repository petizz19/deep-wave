# Deep Wave - Página de Vendas Minimalista

Página de vendas estilo Linktree para o evento Deep Wave, otimizada para conversão em campanhas de tráfego pago.

## 🚀 Funcionalidades

- Design minimalista e ultra-rápido
- Estilo neon com gradiente roxo escuro
- Botões de ação com animações e efeitos hover
- Integração com Pixels do Facebook e TikTok
- Otimização para SEO e performance
- Layout responsivo para todos os dispositivos

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## 🛠️ Configuração

1. Clone o repositório:
```bash
git clone <repository-url>
cd deep-wave
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.local.example .env.local
```

4. Edite o arquivo `.env.local` com suas configurações:
```env
# Pixel Configuration
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=seu_facebook_pixel_id
NEXT_PUBLIC_TIKTOK_PIXEL_ID=seu_tiktok_pixel_id

# Event URLs
NEXT_PUBLIC_TICKET_COUPLE_URL=https://sua-plataforma-de-ingressos.com/casadinha
NEXT_PUBLIC_TICKET_INDIVIDUAL_URL=https://sua-plataforma-de-ingressos.com/individual
```

## 🚀 Executando o Projeto

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Build para Produção

```bash
npm run build
npm start
```

## 🎨 Estrutura da Página

### Cabeçalho
- Logo Deep Wave centralizada
- Informações do evento (data, local e horário)

### Botões de Ação
1. **Ingresso Casadinha (R$ 60,00)** - Botão principal com destaque rosa/ciano
2. **Ingresso Individual (R$ 40,00)** - Botão secundário roxo
3. **Line-Up e Novidades no Instagram** - Link para o perfil oficial
4. **Dúvidas? Fale com Nosso Suporte 24h** - Link para WhatsApp
5. **Entrar na Comunidade VIP no WhatsApp** - Link para grupo VIP

## 📊 Rastreamento

A página inclui rastreamento automático para:
- **Eventos de compra**: Disparados ao clicar nos botões de ingresso
- **Eventos de contato**: Disparados ao clicar nos links do WhatsApp e Instagram
- **PageView**: Disparado no carregamento da página

## 🔧 Otimizações de Performance

- Carregamento de fontes com `display: swap`
- Formatos de imagem modernos (WebP, AVIF)
- Cache agressivo para assets estáticos
- Minificação automática em produção
- Headers de segurança configurados

## 📱 Responsividade

A página é totalmente responsiva e otimizada para:
- Dispositivos móveis (iOS/Android)
- Tablets
- Desktops
- Conexões 3G (carregamento rápido)

## 🎯 Estratégia de Conversão

- **Clareza Total**: Usuários veem imediatamente as opções de compra
- **Foco na Melhor Oferta**: Casadinha apresentada como escolha mais inteligente
- **Velocidade Máxima**: Sem distrações, carregamento instantâneo
- **Informação Sob Demanda**: Line-up direcionado para Instagram

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Add new feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.
