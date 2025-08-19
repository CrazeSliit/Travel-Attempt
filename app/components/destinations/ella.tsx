"use client";

import React, { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { MapPin, Star, Clock, Camera, Mountain, TreePine, Coffee, Train, ArrowRight, Heart, Phone, Mail, Sunrise } from 'lucide-react'

function EllaPage() {
  const [isAnimated, setIsAnimated] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState('all')
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setIsAnimated(true)
  }, [])

  const attractions = useMemo(() => [
    {
      id: 1,
      name: "Ella Rock Hike",
      category: "adventure",
      duration: "4-5 hours",
      rating: 4.9,
      price: "$35",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      description: "Epic hiking trail to Ella Rock summit with breathtaking 360-degree views of the hill country.",
      highlights: ["Mountain Summit", "Panoramic Views", "Tea Plantations", "Railway Tracks"]
    },
    {
      id: 2,
      name: "Nine Arch Bridge",
      category: "scenic",
      duration: "2-3 hours",
      rating: 4.8,
      price: "$15",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
      description: "Iconic stone bridge surrounded by lush greenery, perfect for train spotting and photography.",
      highlights: ["Historic Bridge", "Train Spotting", "Photography", "Jungle Views"]
    },
    {
      id: 3,
      name: "Little Adam's Peak",
      category: "adventure",
      duration: "2-3 hours",
      rating: 4.7,
      price: "$20",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      description: "Easier hike with stunning views, perfect for sunrise or sunset watching.",
      highlights: ["Easy Hike", "Sunrise Views", "Tea Gardens", "Valley Views"]
    },
    {
      id: 4,
      name: "Lipton's Seat",
      category: "scenic",
      duration: "3-4 hours",
      rating: 4.8,
      price: "$30",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
      description: "Historic viewpoint where Sir Thomas Lipton surveyed his tea empire with panoramic hill views.",
      highlights: ["Historic Site", "Tea History", "Panoramic Views", "Photography"]
    },
    {
      id: 5,
      name: "Ravana Falls",
      category: "nature",
      duration: "1-2 hours",
      rating: 4.6,
      price: "$12",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
      description: "Spectacular waterfall plunging 25 meters, named after the legendary King Ravana.",
      highlights: ["Waterfall", "Swimming", "Mythology", "Natural Pool"]
    },
    {
      id: 6,
      name: "Tea Factory Tour",
      category: "cultural",
      duration: "2-3 hours",
      rating: 4.7,
      price: "$25",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
      description: "Learn about Ceylon tea production from plucking to packaging at a working tea factory.",
      highlights: ["Tea Tasting", "Factory Tour", "Tea History", "Local Workers"]
    }
  ], [])

  const activities = [
    { id: 'all', name: 'All Activities', icon: <MapPin className="w-4 h-4" /> },
    { id: 'adventure', name: 'Adventure', icon: <Mountain className="w-4 h-4" /> },
    { id: 'scenic', name: 'Scenic Views', icon: <Camera className="w-4 h-4" /> },
    { id: 'nature', name: 'Nature', icon: <TreePine className="w-4 h-4" /> },
    { id: 'cultural', name: 'Cultural', icon: <Coffee className="w-4 h-4" /> }
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
    { label: "Elevation", value: "1,041m", icon: <Mountain className="w-6 h-6" /> },
    { label: "Hiking Trails", value: "10+", icon: <TreePine className="w-6 h-6" /> },
    { label: "Tea Estates", value: "15+", icon: <Coffee className="w-6 h-6" /> },
    { label: "From Kandy", value: "3h", icon: <Train className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 backdrop-blur-md border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 px-5 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Mountain className="w-4 h-4" />
            Hill Country Gem
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-slate-900 dark:text-white block">Majestic</span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent block my-2">
              Ella
            </span>
            <span className="text-slate-900 dark:text-white block">Mountains</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            Experience breathtaking mountain vistas, rolling tea plantations, and epic hiking adventures 
            in Sri Lanka&apos;s most scenic hill station. A paradise for nature lovers and adventure seekers.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transform transition-all duration-1000 delay-200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <div className="text-emerald-600 dark:text-emerald-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl lg:text-3xl font-bold mb-1 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
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
                    ? 'bg-emerald-500 text-white shadow-lg scale-105'
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
                  <span className="bg-emerald-500/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm capitalize">
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
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-3">
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
                      className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-md text-xs"
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
                  
                  <button className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-sm font-medium group/btn">
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Adventure Tips */}
        <div className={`bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/20 mb-16 transform transition-all duration-1000 delay-800 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Adventure Tips for Ella
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Sunrise className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Best Sunrise Spots</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Little Adam&apos;s Peak and Ella Rock offer spectacular sunrise views. Start early for the best experience.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Train className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Scenic Train Ride</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                The train journey from Kandy to Ella is one of the world&apos;s most beautiful railway routes.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Coffee className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Tea Estate Tours</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Visit working tea plantations to learn about Ceylon tea and enjoy fresh mountain tea.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Adventure Awaits in Ella
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Ready for epic hikes, stunning views, and unforgettable mountain adventures? Let us plan your perfect Ella getaway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5" />
                Plan Adventure
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-slate-900 dark:text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <Mail className="w-5 h-5" />
                Get Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EllaPage