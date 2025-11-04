'use client'

import React from 'react'
import { usePixelTracker } from './PixelTracker'

interface ActionButtonProps {
  title: string
  subtitle?: string
  href: string
  variant: 'primary' | 'secondary' | 'tertiary'
  onClick?: () => void
}

export const ActionButton: React.FC<ActionButtonProps> = ({ 
  title, 
  subtitle, 
  href, 
  variant,
  onClick 
}) => {
  const { trackPurchaseClick, trackContactClick } = usePixelTracker()

  const handleClick = () => {
    // Track events based on button type
    if (title.includes('INGRESSO') || title.includes('PROMOÇÃO')) {
      const ticketType = title.includes('CASAL') ? 'Casal' : 'Individual'
      const price = title.includes('60,00') ? 60.00 : 40.00
      
      // Enhanced tracking for ticket purchases
      trackPurchaseClick(ticketType)
      
      // Additional Facebook Pixel events
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'AddToCart', {
          content_name: `Ingresso ${ticketType}`,
          content_category: 'Evento',
          value: price,
          currency: 'BRL'
        })
        
        window.fbq('track', 'ViewContent', {
          content_name: `Ingresso ${ticketType}`,
          content_category: 'Evento',
          value: price,
          currency: 'BRL'
        })
      }
      
      // TikTok events
      if (typeof window !== 'undefined' && window.ttq) {
        window.ttq.track('AddToCart', {
          content_name: `Ingresso ${ticketType}`,
          content_category: 'Evento',
          value: price,
          currency: 'BRL'
        })
      }
    } else if (href.includes('wa.link') || href.includes('whatsapp')) {
      trackContactClick('WhatsApp')
      
      // Additional WhatsApp tracking
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Contact', {
          content_name: 'WhatsApp',
          content_category: 'Contato'
        })
      }
    } else if (href.includes('instagram')) {
      trackContactClick('Instagram')
      
      // Instagram tracking
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'ViewContent', {
          content_name: 'Instagram',
          content_category: 'Rede Social'
        })
      }
    }

    if (onClick) {
      onClick()
    }
  }

  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold shadow-lg shadow-orange-500/50 hover:shadow-yellow-400/50 transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-yellow-300 text-lg sm:text-xl py-4 sm:py-5'
      case 'secondary':
        return 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-pink-400 hover:border-pink-300 text-lg sm:text-xl py-4 sm:py-5'
      case 'tertiary':
        return 'bg-gradient-to-r from-purple-900/80 to-pink-900/80 backdrop-blur-sm text-white font-bold border-2 border-purple-400 hover:bg-purple-800/50 transform hover:scale-105 transition-all duration-300 text-base sm:text-lg py-3 sm:py-4'
      default:
        return 'bg-gray-800 text-white'
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`
        block w-full max-w-md mx-auto rounded-xl p-3 sm:p-4 text-center
        ${getButtonStyles()}
      `}
    >
      <div className="font-black tracking-wide">{title}</div>
      {subtitle && (
        <div className="text-sm sm:text-base mt-1 sm:mt-2 opacity-90 font-medium">{subtitle}</div>
      )}
    </a>
  )
}