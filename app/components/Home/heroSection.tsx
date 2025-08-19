"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, MapPin, Star, Heart, Calendar, Camera } from 'lucide-react'

interface Destination {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  location: string;
  category?: string;
  price?: string;
  duration?: string;
}

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimated, setIsAnimated] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null)
  const [favoriteDestinations, setFavoriteDestinations] = useState<Set<number>>(new Set())

  const destinations: Destination[] = useMemo(() => [
    {
      id: 1,
      name: "Mirissa Beach",
      rating: 4.9,
      reviews: 3247,
      image: "/1.jpg",
      description: "A serene paradise in Sri Lanka, famous for golden sands, whale watching, and vibrant sunsets.",
      location: "Southern Province",
      category: "Beach Paradise",
      price: "From $299",
      duration: "3-5 days"
    },
    {
      id: 2,
      name: "Lipton's Seat",
      rating: 4.8,
      reviews: 2156,
      image: "/backiee-126197-landscape.jpg",
      description: "Scenic hilltop in Sri Lanka offering panoramic tea plantation views and breathtaking sunrise vistas",
      location: "Uva Province",
      category: "Mountain Scenic",
      price: "From $199",
      duration: "2-3 days"
    },
    {
      id: 3,
      name: "Galle Dutch Fort",
      rating: 4.7,
      reviews: 1890,
      image: "/pexels-charithk-6624969.jpg",
      description: "Historic 17th-century fort overlooking the Indian Ocean with cobblestone streets and colonial architecture",
      location: "Southern Province",
      category: "Cultural Heritage",
      price: "From $149",
      duration: "1-2 days"
    },
    {
      id: 4,
      name: "Ella Rock",
      rating: 4.8,
      reviews: 2340,
      image: "/pexels-charithk-7538610.jpg",
      description: "A charming mountain town in Sri Lanka, known for lush greenery, waterfalls, and stunning viewpoints.",
      location: "Central Province",
      category: "Adventure Trek",
      price: "From $179",
      duration: "2-4 days"
    },
    {
      id: 5,
      name: "Sigiriya Rock",
      rating: 4.9,
      reviews: 4521,
      image: "/pexels-srkportraits-10850860.jpg",
      description: "Ancient rock fortress with stunning frescoes and panoramic views of the Cultural Triangle.",
      location: "Central Province",
      category: "UNESCO Heritage",
      price: "From $249",
      duration: "1-2 days"
    },
    {
      id: 6,
      name: "Yala National Park",
      rating: 4.7,
      reviews: 3178,
      image: "/pexels-malindabandaralk-16508232.jpg",
      description: "Wildlife safari paradise home to leopards, elephants, and over 200 bird species.",
      location: "Southern Province",
      category: "Wildlife Safari",
      price: "From $329",
      duration: "2-3 days"
    }
  ], [])

  useEffect(() => {
    setIsAnimated(true)
    // Set the first destination as background automatically
    setBackgroundImage(destinations[0].image)
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length)
    }, 5000) // Slightly longer for better UX
    return () => clearInterval(interval)
  }, [destinations])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length)
  }, [destinations.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length)
  }, [destinations.length])

  const toggleFavorite = useCallback((id: number) => {
    setFavoriteDestinations(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }, [])

  const setBackgroundFromDestination = useCallback((destination: Destination) => {
    setBackgroundImage(destination.image)
    setCurrentSlide(destinations.findIndex(d => d.id === destination.id))
  }, [destinations])

  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      style={{
        backgroundImage: backgroundImage ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Enhanced Background overlay for better text readability */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent backdrop-blur-[0.5px]" />
      )}
      
      {/* Navbar spacing */}
      <div className="h-20 lg:h-24"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 min-h-[calc(100vh-6rem)] items-center">{/* Improved spacing and alignment */}
        
          {/* Left Side - Enhanced Animated Text Content */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8">
            <div className={`transform transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 backdrop-blur-md border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 px-5 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
                <MapPin className="w-4 h-4" />
                Discover Sri Lanka&apos;s Wonders
              </div>
              
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-white block">Explore</span>
                <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block my-2">
                  Paradise
                </span>
                <span className="text-white block">Island</span>
                </h1>
              </div>

              <div className={`transform transition-all duration-1000 delay-200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <p className="text-lg lg:text-xl text-white leading-relaxed max-w-2xl font-light">
                Journey through ancient kingdoms, pristine beaches, misty mountains, and vibrant wildlife. 
                Experience the Pearl of the Indian Ocean like never before with our curated adventures.
                </p>
              </div>

            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-400 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button 
                className="group bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 min-w-[200px]"
                aria-label="Plan your journey to Sri Lanka"
              >
                <Calendar className="w-5 h-5" />
                Plan Your Journey
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="group backdrop-blur-md bg-white/10 border border-white/30 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 min-w-[180px]"
                aria-label="Take a virtual tour"
              >
                <Camera className="w-5 h-5" />
                Virtual Tour
              </button>
            </div>

            {/* Enhanced Statistics */}
            <div className={`grid grid-cols-3 gap-6 pt-8 transform transition-all duration-1000 delay-600 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center group bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl lg:text-3xl font-bold mb-1 group-hover:scale-110 transition-transform bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  8+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">UNESCO Sites</div>
              </div>
              <div className="text-center group bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl lg:text-3xl font-bold mb-1 group-hover:scale-110 transition-transform bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  100K+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Happy Travelers</div>
              </div>
              <div className="text-center group bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <div className="text-2xl lg:text-3xl font-bold group-hover:scale-110 transition-transform bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">4.9</div>
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Image Gallery */}
          <div className="lg:col-span-6 relative">
            
            {/* Enhanced Main Featured Card */}
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-6 group cursor-pointer transform transition-all duration-500 hover:scale-[1.02]"
                 onClick={() => setBackgroundFromDestination(destinations[currentSlide])}>
              <Image 
                src={destinations[currentSlide].image}
                alt={destinations[currentSlide].name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
              
              {/* Enhanced Content Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30">
                    {destinations[currentSlide].category}
                  </span>
                  <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">{destinations[currentSlide].rating}</span>
                    <span className="text-white/80 text-sm">({destinations[currentSlide].reviews})</span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">{destinations[currentSlide].name}</h3>
                <p className="text-white/90 text-sm lg:text-base mb-3 leading-relaxed">{destinations[currentSlide].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <p className="text-white/70 text-sm flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {destinations[currentSlide].location}
                    </p>
                    {destinations[currentSlide].duration && (
                      <p className="text-emerald-400 text-sm font-semibold">
                        {destinations[currentSlide].duration}
                      </p>
                    )}
                  </div>
                  {destinations[currentSlide].price && (
                    <div className="text-right">
                      <p className="text-emerald-400 text-lg font-bold">{destinations[currentSlide].price}</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Favorite Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFavorite(destinations[currentSlide].id)
                }}
                className={`absolute top-6 right-6 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                  favoriteDestinations.has(destinations[currentSlide].id) 
                    ? 'bg-red-500/80 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Heart className={`w-5 h-5 ${favoriteDestinations.has(destinations[currentSlide].id) ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Enhanced Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {destinations.slice(0, 4).map((dest, index) => (
                <div 
                  key={dest.id}
                  className={`relative h-20 lg:h-24 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    currentSlide === index 
                      ? 'ring-2 ring-emerald-500 ring-offset-2 ring-offset-transparent shadow-lg scale-105' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setBackgroundFromDestination(dest)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setBackgroundFromDestination(dest)}
                  aria-label={`View ${dest.name}`}
                >
                  <Image 
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-1 left-2 right-2">
                    <div className="text-white text-xs font-semibold truncate drop-shadow-lg">
                      {dest.name.split(' ')[0]}
                    </div>
                    {dest.category && (
                      <div className="text-emerald-300 text-[10px] font-medium truncate">
                        {dest.category}
                      </div>
                    )}
                  </div>
                  {currentSlide === index && (
                    <div className="absolute top-1 right-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Enhanced Navigation Controls */}
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white/15 backdrop-blur-md border border-white/25 rounded-full flex items-center justify-center hover:bg-white/25 transition-all duration-300 text-slate-900 dark:text-white hover:scale-105 shadow-lg"
                  aria-label="Previous destination"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white/15 backdrop-blur-md border border-white/25 rounded-full flex items-center justify-center hover:bg-white/25 transition-all duration-300 text-slate-900 dark:text-white hover:scale-105 shadow-lg"
                  aria-label="Next destination"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Enhanced Slide Indicators */}
              <div className="flex gap-2">
                {destinations.slice(0, 6).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index)
                      setBackgroundImage(destinations[index].image)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
                      currentSlide === index 
                        ? 'bg-emerald-500 w-8 shadow-lg shadow-emerald-500/50' 
                        : 'bg-white/40 w-2 hover:bg-white/60'
                    }`}
                    aria-label={`Go to destination ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection