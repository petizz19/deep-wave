'use client'

import Image from 'next/image'
import { ActionButton } from '@/components/ActionButton'
import { PixelTracker } from '@/components/PixelTracker'
import { SoundWave } from '@/components/SoundWave'

export default function Home() {
  return (
    <>
      <PixelTracker />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 cyber-grid flex flex-col items-center justify-center px-4 py-6 sm:py-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 w-full max-w-lg">
          {/* Event Information */}
          <div className="text-white space-y-4 sm:space-y-6">
            <h1 className="text-5xl sm:text-6xl font-black text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-lg">
                DEEP
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 drop-shadow-lg ml-2">
                WAVE
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-center text-white/95 max-w-lg mx-auto leading-tight">
              <span className="text-yellow-300">1ª</span> festa de música eletrônica da cidade baixa
            </p>
            
            {/* Equalizador Simplificado */}
            <div className="flex justify-center items-end space-x-1 h-8 my-3">
              <div className="w-1.5 bg-gradient-to-t from-pink-500 to-cyan-400 rounded-t" style={{height: '60%'}}></div>
              <div className="w-1.5 bg-gradient-to-t from-pink-500 to-cyan-400 rounded-t" style={{height: '80%'}}></div>
              <div className="w-1.5 bg-gradient-to-t from-pink-500 to-cyan-400 rounded-t" style={{height: '50%'}}></div>
              <div className="w-1.5 bg-gradient-to-t from-pink-500 to-cyan-400 rounded-t" style={{height: '90%'}}></div>
              <div className="w-1.5 bg-gradient-to-t from-pink-500 to-cyan-400 rounded-t" style={{height: '70%'}}></div>
              <div className="w-1.5 bg-gradient-to-t from-pink-500 to-cyan-400 rounded-t" style={{height: '85%'}}></div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 mt-4">
              <p className="text-lg sm:text-xl font-bold">
                📅 Sábado, 22 de Novembro - <span className="text-yellow-300 text-xl sm:text-2xl font-black animate-pulse">21h</span>
              </p>
              <a
                href="https://maps.app.goo.gl/nZpoB296xDwBPUCm9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg flex items-center justify-center gap-2 mt-2 hover:text-cyan-300 transition-colors"
              >
                <span>📍</span>
                <span>Espaço Bombordo Av. Beira Mar, 405-Ribeira</span>
              </a>
              <div className="mt-3 flex justify-center space-x-4 text-sm">
                <span className="flex items-center gap-1">
                  <span className="text-pink-400">🎧</span>
                  <span>Techno</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-cyan-400">🎵</span>
                  <span>House</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-purple-400">🎶</span>
                  <span>Trance</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Promoção Destaque */}
        <div className="w-full max-w-md mb-6">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-xl sm:text-2xl py-3 px-6 rounded-xl shadow-2xl transform rotate-1 neon-border glitch-effect animate-pulse">
            🔥 PROMOÇÃO IMPERDÍVEL
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-md space-y-3 sm:space-y-4">
          {/* Main Offer - Casadinha */}
          <div className="mb-4 sm:hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg py-2 px-4 rounded-lg shadow-lg transform rotate-1 animate-pulse">
              ⏰ 2 HORAS DE OPEN BAR!
            </div>
          </div>
          
          <ActionButton
            title="CASADINHA (R$ 60,00)"
            subtitle="⚡ 2 INGRESSOS POR APENAS R$ 60! ECONOMIZE R$ 20"
            href="https://www.wa.link/zx7yjj"
            variant="primary"
          />

          {/* Individual Ticket */}
          <ActionButton
            title="INGRESSO INDIVIDUAL (R$ 40,00)"
            subtitle="🎵 1 INGRESSO POR R$ 40"
            href="https://www.wa.link/zx7yjj"
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
            title="💬 ATENDENTE 24 HORAS NO WHATSAPP!"
            subtitle="🚀 RESPOSTA IMEDIATA | COMPRA JÁ!"
            href="https://www.wa.link/zx7yjj"
            variant="primary"
          />

          {/* VIP Community */}
          <ActionButton
            title="⭐ ENTRAR NA COMUNIDADE VIP"
            subtitle="🔥 Conteúdo exclusivo e vantagens"
            href="https://chat.whatsapp.com/Gm1IfuIbOGs4ss19RzRNOU?mode=wwt"
            variant="tertiary"
          />
        </div>

        {/* Footer com Elementos Musicais */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="mb-4 flex justify-center space-x-4 text-xs text-white/40">
            <span>TECHNO</span>
            <span>•</span>
            <span>HOUSE</span>
            <span>•</span>
            <span>TRANCE</span>
            <span>•</span>
            <span>ELECTRONIC</span>
          </div>
          <div className="mb-2">
            <a
              href="https://www.instagram.com/phstudiosoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group"
            >
              <span className="text-sm">Site Desenvolvido por</span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 group-hover:from-pink-300 group-hover:to-cyan-300 transition-all duration-300">
                PHStudio
              </span>
              <span className="text-xs text-white/50">®</span>
              <span className="text-sm">Programador e Desenvolvedor</span>
            </a>
          </div>
          <p className="text-white/40 text-xs">
            © 2025 Todos os direitos reservados
          </p>
        </div>
      </div>
    </>
  )
}
