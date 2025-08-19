"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, Clock, ArrowRight, Globe } from 'lucide-react'

function SriLankaToursPage() {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    setIsAnimated(true)
  }, [])

  const tourPackages = [
    {
      id: 1,
      name: "Classic Sri Lanka - 10 Days",
      duration: "10 Days / 9 Nights",
      price: "$1,200",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
      highlights: ["Cultural Triangle", "Kandy", "Hill Country", "Beach Time"]
    },
    {
      id: 2,
      name: "Complete Island Tour - 14 Days",
      duration: "14 Days / 13 Nights", 
      price: "$1,800",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      highlights: ["All Major Cities", "Wildlife Safaris", "Beach Resorts", "Cultural Sites"]
    },
    {
      id: 3,
      name: "Highlights of Ceylon - 7 Days",
      duration: "7 Days / 6 Nights",
      price: "$950",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=600",
      highlights: ["Sigiriya", "Kandy", "Nuwara Eliya", "Galle"]
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="h-20 lg:h-24"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 backdrop-blur-md border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 px-5 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Globe className="w-4 h-4" />
            Complete Sri Lanka Experience
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-slate-900 dark:text-white block">Discover</span>
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block my-2">
              Sri Lanka
            </span>
            <span className="text-slate-900 dark:text-white block">Tours</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            Explore the complete beauty of Sri Lanka with our carefully crafted tour packages. 
            From ancient temples to pristine beaches, experience the best of the Pearl of the Indian Ocean.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-400 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {tourPackages.map((tour) => (
            <div 
              key={tour.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                    {tour.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-3">
                  {tour.name}
                </h3>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {tour.highlights.map((highlight, index) => (
                    <span 
                      key={index}
                      className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-md text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-slate-900 dark:text-white">{tour.rating}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-sm font-medium group/btn">
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SriLankaToursPage