"use client";

import React, { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { MapPin, Star, Clock, Camera, Mountain, TreePine, Church, Music, ArrowRight, Heart, Phone, Mail, Car } from 'lucide-react'

function KandyPage() {
  const [isAnimated, setIsAnimated] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState('all')
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setIsAnimated(true)
  }, [])

  const attractions = useMemo(() => [
    {
      id: 1,
      name: "Temple of the Sacred Tooth Relic",
      category: "cultural",
      duration: "2-3 hours",
      rating: 4.9,
      price: "$15",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
      description: "Sacred Buddhist temple housing the tooth relic of Lord Buddha, a UNESCO World Heritage Site.",
      highlights: ["Sacred Relic", "Buddhist Architecture", "UNESCO Site", "Evening Ceremony"]
    },
    {
      id: 2,
      name: "Kandy Lake",
      category: "nature",
      duration: "1-2 hours",
      rating: 4.7,
      price: "$10",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600",
      description: "Serene artificial lake in the heart of Kandy, perfect for peaceful walks and boat rides.",
      highlights: ["Boat Rides", "Walking Path", "City Views", "Photography"]
    },
    {
      id: 3,
      name: "Royal Botanical Gardens Peradeniya",
      category: "nature",
      duration: "3-4 hours",
      rating: 4.8,
      price: "$20",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
      description: "147-acre botanical garden with over 4,000 species of plants, orchids, and spices.",
      highlights: ["Orchid House", "Spice Garden", "Giant Bamboo", "Cannonball Tree"]
    },
    {
      id: 4,
      name: "Udawattakele Forest Reserve",
      category: "adventure",
      duration: "2-3 hours",
      rating: 4.6,
      price: "$25",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
      description: "Historic forest sanctuary above Kandy with hiking trails and diverse wildlife.",
      highlights: ["Hiking Trails", "Bird Watching", "City Panorama", "Ancient Trees"]
    },
    {
      id: 5,
      name: "Bahirawakanda Vihara Buddha Statue",
      category: "cultural",
      duration: "1-2 hours",
      rating: 4.7,
      price: "$12",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
      description: "Giant white Buddha statue offering panoramic views of Kandy city and surrounding hills.",
      highlights: ["Giant Buddha", "Panoramic Views", "Photography", "Sunset Views"]
    },
    {
      id: 6,
      name: "Kandy Cultural Show",
      category: "cultural",
      duration: "1 hour",
      rating: 4.8,
      price: "$18",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
      description: "Traditional Sri Lankan dance and music performances showcasing local culture.",
      highlights: ["Traditional Dance", "Fire Dancing", "Local Music", "Cultural Heritage"]
    }
  ], [])

  const activities = [
    { id: 'all', name: 'All Activities', icon: <MapPin className="w-4 h-4" /> },
    { id: 'cultural', name: 'Cultural', icon: <Church className="w-4 h-4" /> },
    { id: 'nature', name: 'Nature', icon: <TreePine className="w-4 h-4" /> },
    { id: 'adventure', name: 'Adventure', icon: <Mountain className="w-4 h-4" /> }
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
    { label: "Historic Temples", value: "25+", icon: <Church className="w-6 h-6" /> },
    { label: "Cultural Sites", value: "15+", icon: <Camera className="w-6 h-6" /> },
    { label: "Elevation", value: "500m", icon: <Mountain className="w-6 h-6" /> },
    { label: "From Colombo", value: "3h", icon: <Car className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920')`,
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/15 to-emerald-500/15 backdrop-blur-md border border-green-500/30 text-green-600 dark:text-green-400 px-5 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Church className="w-4 h-4" />
            Cultural Capital
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-slate-900 dark:text-white block">Sacred City of</span>
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent block my-2">
              Kandy
            </span>
            <span className="text-slate-900 dark:text-white block">Hill Capital</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            Immerse yourself in Sri Lanka&apos;s cultural heart, home to the sacred Temple of the Tooth Relic, 
            surrounded by misty mountains, lush gardens, and centuries of royal heritage.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transform transition-all duration-1000 delay-200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <div className="text-green-600 dark:text-green-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl lg:text-3xl font-bold mb-1 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
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
                    ? 'bg-green-500 text-white shadow-lg scale-105'
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
                  <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm capitalize">
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
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-3">
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
                      className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-md text-xs"
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
                  
                  <button className="flex items-center gap-1 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium group/btn">
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Highlights */}
        <div className={`bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20 mb-16 transform transition-all duration-1000 delay-800 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Experience Kandy&apos;s Rich Heritage
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Music className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Esala Perahera</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Witness the grand annual festival with decorated elephants, traditional dancers, and cultural processions.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <TreePine className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Spice Gardens</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Explore aromatic spice gardens and learn about Ceylon cinnamon, cardamom, and other exotic spices.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Church className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Buddhist Heritage</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Visit ancient temples, meditation centers, and learn about Buddhist philosophy and practices.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Discover Sacred Kandy
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Join us on a spiritual and cultural journey through Sri Lanka&apos;s ancient capital. Perfect for history buffs and culture enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5" />
                Book Tour
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-slate-900 dark:text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <Mail className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KandyPage
