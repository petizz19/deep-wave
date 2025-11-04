'use client'

import Image from 'next/image'
import { ActionButton } from '@/components/ActionButton'
import { PixelTracker } from '@/components/PixelTracker'

export default function Home() {
  return (
    <>
      <PixelTracker />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 flex flex-col items-center justify-center px-4 py-6 sm:py-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 w-full max-w-lg">
          {/* Promoção Imperdível Banner */}
          <div className="mb-4 sm:mb-6 animate-pulse">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg sm:text-xl py-2 px-4 rounded-lg shadow-lg transform rotate-1 sm:rotate-2">
              🔥 PROMOÇÃO IMPERDÍVEL 🔥
            </div>
          </div>
          
          {/* Logo */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <Image
              src="/logo.svg"
              alt="CLX Event Logo"
              width={180}
              height={54}
              priority
              className="drop-shadow-lg"
            />
          </div>
          
          {/* Event Information */}
          <div className="text-white space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-yellow-300">
              CLX ELETRÔNICA
            </h1>
            <p className="text-xl sm:text-2xl font-semibold">
              A MAIOR FESTA DE MÚSICA ELETRÔNICA
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 mt-4">
              <p className="text-lg sm:text-xl font-bold">
                📅 Sábado, 22 de Novembro - 21h
              </p>
              <p className="text-base sm:text-lg flex items-center justify-center gap-2 mt-2">
                <span>📍</span>
                <span>Local: Espaço Bombordo - Orla da Ribeira</span>
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-md space-y-3 sm:space-y-4">
          {/* Main Offer - Casadinha */}
          <ActionButton
            title="PROMOÇÃO CASAL (R$ 60,00)"
            subtitle="⚡ ECONOMIZE 50%! Apenas R$ 30 por pessoa"
            href="https://wa.link/zx7yjj"
            variant="primary"
          />

          {/* Individual Ticket */}
          <ActionButton
            title="INGRESSO INDIVIDUAL (R$ 40,00)"
            subtitle="🎵 Últimas unidades disponíveis"
            href="https://wa.link/zx7yjj"
            variant="secondary"
          />

          {/* Instagram */}
          <ActionButton
            title="📸 LINE-UP E NOVIDADES NO INSTAGRAM"
            href="https://www.instagram.com/deepwaveoficial"
            variant="tertiary"
          />

          {/* Support WhatsApp */}
          <ActionButton
            title="💬 NOS CHAME NO WHATSAPP!"
            subtitle="🚀 Resposta imediata | Suporte 24h"
            href="https://wa.link/zx7yjj"
            variant="tertiary"
          />

          {/* VIP Community */}
          <ActionButton
            title="⭐ ENTRAR NA COMUNIDADE VIP"
            subtitle="🔥 Conteúdo exclusivo e vantagens"
            href="https://chat.whatsapp.com/Gm1IfuIbOGs4ss19RzRNOU"
            variant="tertiary"
          />
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-white/60 text-sm">
            © 2024 CLX Events - Todos os direitos reservados
          </p>
        </div>
      </div>
    </>
  )
}
