'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
    ttq?: any
    _fbq?: any
    TiktokAnalyticsObject?: string
  }
}

export const PixelTracker = () => {
  useEffect(() => {
    // Facebook Pixel
    const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
    if (facebookPixelId) {
      // Initialize Facebook Pixel
      const script = document.createElement('script')
      script.innerHTML = `
        !(function(f, b, e, v, n, t, s) {
          if (f.fbq) return
          n = f.fbq = function() {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
          }
          if (!f._fbq) f._fbq = n
          n.push = n
          n.loaded = !0
          n.version = '2.0'
          n.queue = []
          t = b.createElement(e)
          t.async = !0
          t.src = v
          s = b.getElementsByTagName(e)[0]
          s.parentNode.insertBefore(t, s)
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
        
        fbq('init', '${facebookPixelId}')
        fbq('track', 'PageView')
        fbq('track', 'ViewContent', {
          content_name: 'CLX Evento de Música Eletrônica',
          content_category: 'Evento',
          content_type: 'product'
        })
      `
      document.head.appendChild(script)
    }

    // TikTok Pixel
    const tiktokPixelId = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID
    if (tiktokPixelId) {
      const script = document.createElement('script')
      script.innerHTML = `
        !(function(w, d, t) {
          w.TiktokAnalyticsObject = t
          var ttq = (w[t] = w[t] || [])
          ;(ttq.methods = [
            'page',
            'track',
            'identify',
            'instances',
            'debug',
            'on',
            'off',
            'once',
            'ready',
            'alias',
            'group',
            'enableCookie',
            'disableCookie'
          ]),
            (ttq.setAndDefer = function(t, e) {
              t[e] = function() {
                t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
              }
            })
          for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i])
          ;(ttq.instance = function(t) {
            for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
              ttq.setAndDefer(e, ttq.methods[n])
            return e
          }),
            (ttq.load = function(e, n) {
              var i = 'https://analytics.tiktok.com/i18n/pixel/events.js'
              ;(ttq._i = ttq._i || {}),
                (ttq._i[e] = []),
                (ttq._i[e]._u = i),
                (ttq._t = ttq._t || {}),
                (ttq._t[e] = +new Date()),
                (ttq._o = ttq._o || {}),
                (ttq._o[e] = n || {})
              var o = document.createElement('script')
              ;(o.type = 'text/javascript'), (o.async = !0), (o.src = i + '?sdkid=' + e + '&lib=' + t)
              var a = document.getElementsByTagName('script')[0]
              a.parentNode.insertBefore(o, a)
            })
          
          ttq.load('${tiktokPixelId}')
          ttq.page()
          ttq.track('ViewContent', {
            content_name: 'CLX Evento de Música Eletrônica',
            content_category: 'Evento',
            content_type: 'product'
          })
        })(window, document, 'ttq')
      `
      document.head.appendChild(script)
    }

    // Track time on page for engagement metrics
    const timeOnPageThreshold = 30000 // 30 seconds
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Engagement', {
          content_name: '30 segundos na página',
          content_category: 'Engajamento'
        })
      }
    }, timeOnPageThreshold)

    return () => clearTimeout(timer)
  }, [])

  return null
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Track Facebook Pixel event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
  }
  
  // Track TikTok Pixel event
  if (typeof window !== 'undefined' && window.ttq && typeof window.ttq.track === 'function') {
    window.ttq.track(eventName, parameters)
  }
}

export const usePixelTracker = () => {
  const trackPurchaseClick = (ticketType: string) => {
    trackEvent('InitiateCheckout', {
      content_name: `Ingresso ${ticketType}`,
      content_category: 'Evento',
    })
    
    // Additional tracking for purchase intent
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: `Interesse em Ingresso ${ticketType}`,
        content_category: 'Lead'
      })
    }
  }

  const trackContactClick = (contactType: string) => {
    trackEvent('Contact', {
      content_name: `Contato via ${contactType}`,
    })
    
    // Enhanced contact tracking
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: `Contato via ${contactType}`,
        content_category: 'Lead'
      })
    }
  }

  const trackPageView = () => {
    trackEvent('PageView')
  }

  const trackEngagement = (action: string) => {
    trackEvent('Engagement', {
      content_name: action,
      content_category: 'Engajamento'
    })
  }

  return { trackPurchaseClick, trackContactClick, trackPageView, trackEngagement }
}