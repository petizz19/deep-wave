'use client'

import React, { useEffect, useState } from 'react'

export const SoundWave: React.FC = () => {
  const [bars, setBars] = useState<number[]>([])

  useEffect(() => {
    // Inicializar as barras com alturas aleatórias
    const initialBars = Array.from({ length: 20 }, () => Math.random() * 100)
    setBars(initialBars)

    // Animar as barras periodicamente
    const interval = setInterval(() => {
      setBars(prevBars => 
        prevBars.map(() => Math.random() * 100)
      )
    }, 500)

    return () => clearInterval(interval)
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
            animationDelay: `${index * 0.05}s`
          }}
        />
      ))}
    </div>
  )
}