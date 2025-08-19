"use client";

import React, { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { MapPin, Star, Clock, Camera, Waves, Sunset, Fish, Car, Calendar, ArrowRight, Heart, Phone, Mail } from 'lucide-react'

function DownSouthPage() {
  const [isAnimated, setIsAnimated] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState('all')
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setIsAnimated(true)
  }, [])

  const attractions = useMemo(() => [
    {
      id: 1,
      name: "Mirissa Beach",
      category: "beach",
      duration: "Full day",
      rating: 4.8,
      price: "$25",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      description: "Famous for whale watching and stunning sunsets with golden sandy beaches.",
      highlights: ["Whale Watching", "Surfing", "Beach Parties", "Sunset Views"]
    },
    {
      id: 2,
      name: "Galle Fort",
      category: "cultural",
      duration: "Half day",
      rating: 4.9,
      price: "$35",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
      description: "Historic Dutch colonial fort with charming cobblestone streets and ocean views.",
      highlights: ["Colonial Architecture", "Art Galleries", "Ocean Views", "Photography"]
    },
    {
      id: 3,
      name: "Unawatuna Beach",
      category: "beach",
      duration: "Full day",
      rating: 4.7,
      price: "$20",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
      description: "Crescent-shaped bay perfect for swimming and snorkeling with coral reefs.",
      highlights: ["Snorkeling", "Swimming", "Coral Reefs", "Beach Bars"]
    },
    {
      id: 4,
      name: "Koggala Lake",
      category: "nature",
      duration: "3-4 hours",
      rating: 4.6,
      price: "$30",
      image: "https://images.unsplash.com/photo-1573160103600-74705985b85d?w=600",
      description: "Serene lake with small islands, ideal for boat tours and bird watching.",
      highlights: ["Boat Tours", "Bird Watching", "Cinnamon Islands", "Local Villages"]
    },
    {
      id: 5,
      name: "Hikkaduwa Coral Sanctuary",
      category: "marine",
      duration: "Half day",
      rating: 4.8,
      price: "$40",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
      description: "Marine national park with vibrant coral reefs and diverse sea life.",
      highlights: ["Coral Reefs", "Sea Turtles", "Snorkeling", "Glass Bottom Boats"]
    },
    {
      id: 6,
      name: "Weligama Bay",
      category: "beach",
      duration: "Full day",
      rating: 4.7,
      price: "$25",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      description: "Famous for stilt fishermen and excellent surfing conditions year-round.",
      highlights: ["Stilt Fishing", "Surfing", "Snake Island", "Local Culture"]
    }
  ], [])

  const activities = [
    { id: 'all', name: 'All Activities', icon: <MapPin className="w-4 h-4" /> },
    { id: 'beach', name: 'Beaches', icon: <Waves className="w-4 h-4" /> },
    { id: 'cultural', name: 'Cultural', icon: <Camera className="w-4 h-4" /> },
    { id: 'nature', name: 'Nature', icon: <Sunset className="w-4 h-4" /> },
    { id: 'marine', name: 'Marine Life', icon: <Fish className="w-4 h-4" /> }
  ]

  const filteredAttractions = useMemo(() => {
    if (selectedActivity === 'all') {
      return attractions
    }
    return attractions.filter(attraction => attraction.category === selectedActivity)
  }, [selectedActivity, attractions])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  const stats = [
    { label: "Beautiful Beaches", value: "25+", icon: <Waves className="w-6 h-6" /> },
    { label: "Cultural Sites", value: "15+", icon: <Camera className="w-6 h-6" /> },
    { label: "Whale Species", value: "8+", icon: <Fish className="w-6 h-6" /> },
    { label: "Travel Time", value: "2-3h", icon: <Car className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Navbar spacing */}
      <div className="h-20 lg:h-24"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        
        {/* Hero Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 backdrop-blur-md border border-blue-500/30 text-blue-600 dark:text-blue-400 px-5 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Waves className="w-4 h-4" />
            Southern Coast Paradise
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-slate-900 dark:text-white block">Discover</span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent block my-2">
              Down South
            </span>
            <span className="text-slate-900 dark:text-white block">Sri Lanka</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            Experience the pristine beaches, historic forts, and vibrant marine life of Sri Lanka&apos;s stunning southern coast. 
            From whale watching in Mirissa to exploring the Dutch colonial heritage of Galle.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transform transition-all duration-1000 delay-200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl lg:text-3xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Activity Filter */}
        <div className={`mb-12 transform transition-all duration-1000 delay-400 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {activities.map((activity) => (
              <button
                key={activity.id}
                onClick={() => setSelectedActivity(activity.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedActivity === activity.id
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-slate-600 dark:text-slate-300 hover:bg-white/20'
                }`}
              >
                {activity.icon}
                {activity.name}
              </button>
            ))}
          </div>
        </div>

        {/* Attractions Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-600 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredAttractions.map((attraction) => (
            <div 
              key={attraction.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(attraction.id)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                  aria-label={`${favorites.includes(attraction.id) ? 'Remove from' : 'Add to'} favorites`}
                >
                  <Heart 
                    className={`w-5 h-5 transition-all ${
                      favorites.includes(attraction.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-white hover:text-red-400'
                    }`} 
                  />
                </button>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm capitalize">
                    {attraction.category}
                  </span>
                </div>
                
                {/* Price */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                    {attraction.price}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                  {attraction.name}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {attraction.description}
                </p>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {attraction.highlights.map((highlight, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                {/* Details */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{attraction.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-slate-900 dark:text-white">{attraction.rating}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium group/btn">
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Tips */}
        <div className={`bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20 mb-16 transform transition-all duration-1000 delay-800 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Travel Tips for Down South
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Best Time to Visit</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                November to April offers the best weather with minimal rainfall and calm seas perfect for whale watching.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Car className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Getting Around</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Rent a car or hire a driver for flexibility. Tuk-tuks are perfect for short distances and local exploration.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Waves className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Whale Watching</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Early morning trips from Mirissa offer the best chances to spot blue whales and dolphins.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Explore Down South?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Let our local experts craft the perfect southern coast adventure for you. From beach hopping to cultural discoveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-slate-900 dark:text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <Mail className="w-5 h-5" />
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownSouthPage
