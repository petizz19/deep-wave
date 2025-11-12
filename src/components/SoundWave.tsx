'use client'

import React, { useEffect, useState, useRef } from 'react'

export const SoundWave: React.FC = () => {
  const [bars, setBars] = useState<number[]>([])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Inicializar as barras com alturas aleatórias - otimizado
    const initialBars = Array.from({ length: 15 }, () => Math.random() * 100)
    setBars(initialBars)

    // Animar as barras periodicamente - otimizado
    intervalRef.current = setInterval(() => {
      setBars(prevBars =>
        prevBars.map(() => Math.random() * 100)
      )
    }, 600)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div className="flex items-center justify-center space-x-1 h-16 my-4">
      {bars.map((height, index) => (
        <div
          key={index}
          className="w-1 bg-gradient-to-t from-pink-500 via-purple-500 to-cyan-400 rounded-full transition-all duration-300 ease-in-out"
          style={{
            height: `${height}%`,
            opacity: 0.7 + (height / 100) * 0.3,
            willChange: 'height, opacity'
          }}
        />
      ))}
    </div>
  )
}