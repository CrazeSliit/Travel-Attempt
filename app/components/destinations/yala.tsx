"use client";

import React, { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { MapPin, Star, Clock, Camera, Binoculars, TreePine, Sun, Moon, ArrowRight, Heart, Phone, Mail, Car, Bird } from 'lucide-react'

function YalaPage() {
  const [isAnimated, setIsAnimated] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState('all')
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setIsAnimated(true)
  }, [])

  const attractions = useMemo(() => [
    {
      id: 1,
      name: "Leopard Safari",
      category: "wildlife",
      duration: "4-6 hours",
      rating: 4.9,
      price: "$75",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=600",
      description: "Yala has the highest density of leopards in the world. Spot these magnificent cats in their natural habitat.",
      highlights: ["Leopard Sightings", "Big Cats", "Photography", "Expert Guide"]
    },
    {
      id: 2,
      name: "Elephant Watching",
      category: "wildlife",
      duration: "3-4 hours",
      rating: 4.8,
      price: "$60",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600",
      description: "Observe herds of wild elephants roaming freely across the vast plains and waterholes.",
      highlights: ["Wild Elephants", "Herds", "Water Holes", "Behavior Study"]
    },
    {
      id: 3,
      name: "Bird Watching Tour",
      category: "birding",
      duration: "3-5 hours",
      rating: 4.7,
      price: "$45",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600",
      description: "Over 215 bird species including peacocks, hornbills, and migratory birds call Yala home.",
      highlights: ["215+ Species", "Peacocks", "Hornbills", "Migratory Birds"]
    },
    {
      id: 4,
      name: "Sunrise Safari",
      category: "photography",
      duration: "4-5 hours",
      rating: 4.9,
      price: "$85",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=600",
      description: "Experience the magic of Yala at dawn when wildlife is most active and lighting is perfect.",
      highlights: ["Golden Hour", "Active Wildlife", "Perfect Lighting", "Photography"]
    },
    {
      id: 5,
      name: "Sloth Bear Tracking",
      category: "wildlife",
      duration: "Full day",
      rating: 4.6,
      price: "$95",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600",
      description: "Track the elusive sloth bears through their preferred habitats and termite mounds.",
      highlights: ["Sloth Bears", "Tracking", "Rare Sighting", "Expert Tracker"]
    },
    {
      id: 6,
      name: "Night Safari",
      category: "adventure",
      duration: "3-4 hours",
      rating: 4.8,
      price: "$70",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600",
      description: "Discover nocturnal wildlife including fishing cats, civets, and various owl species.",
      highlights: ["Nocturnal Animals", "Fishing Cats", "Civets", "Night Photography"]
    }
  ], [])

  const activities = [
    { id: 'all', name: 'All Safaris', icon: <MapPin className="w-4 h-4" /> },
    { id: 'wildlife', name: 'Wildlife', icon: <Binoculars className="w-4 h-4" /> },
    { id: 'birding', name: 'Bird Watching', icon: <Bird className="w-4 h-4" /> },
    { id: 'photography', name: 'Photography', icon: <Camera className="w-4 h-4" /> },
    { id: 'adventure', name: 'Adventure', icon: <Moon className="w-4 h-4" /> }
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
    { label: "Park Area", value: "979km²", icon: <TreePine className="w-6 h-6" /> },
    { label: "Leopard Density", value: "Highest", icon: <Binoculars className="w-6 h-6" /> },
    { label: "Bird Species", value: "215+", icon: <Bird className="w-6 h-6" /> },
    { label: "From Colombo", value: "5h", icon: <Car className="w-6 h-6" /> }
  ]

  const wildlife = [
    { name: "Sri Lankan Leopard", population: "35+", status: "Endangered", icon: "🐆" },
    { name: "Asian Elephant", population: "300+", status: "Endangered", icon: "🐘" },
    { name: "Sloth Bear", population: "50+", status: "Vulnerable", icon: "🐻" },
    { name: "Spotted Deer", population: "1000+", status: "Common", icon: "🦌" }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1549366021-9f761d040a94?w=1920')`,
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 to-orange-500/15 backdrop-blur-md border border-amber-500/30 text-amber-600 dark:text-amber-400 px-5 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Binoculars className="w-4 h-4" />
            Wildlife Paradise
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-slate-900 dark:text-white block">Wild</span>
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent block my-2">
              Yala
            </span>
            <span className="text-slate-900 dark:text-white block">National Park</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            Embark on an unforgettable safari adventure in Sri Lanka&apos;s premier national park. 
            Home to the world&apos;s highest density of leopards and diverse wildlife in their natural habitat.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transform transition-all duration-1000 delay-200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <div className="text-amber-600 dark:text-amber-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl lg:text-3xl font-bold mb-1 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Wildlife Highlights */}
        <div className={`mb-12 transform transition-all duration-1000 delay-300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
            Iconic Wildlife of Yala
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {wildlife.map((animal, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{animal.icon}</div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{animal.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">Population: {animal.population}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  animal.status === 'Endangered' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                  animal.status === 'Vulnerable' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                  'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                }`}>
                  {animal.status}
                </span>
              </div>
            ))}
          </div>
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
                    ? 'bg-amber-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-slate-600 dark:text-slate-300 hover:bg-white/20'
                }`}
              >
                {activity.icon}
                {activity.name}
              </button>
            ))}
          </div>
        </div>

        {/* Safari Packages Grid */}
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
                  <span className="bg-amber-500/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm capitalize">
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
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-3">
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
                      className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-1 rounded-md text-xs"
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
                  
                  <button className="flex items-center gap-1 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 text-sm font-medium group/btn">
                    Book Safari
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safari Guidelines */}
        <div className={`bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 mb-16 transform transition-all duration-1000 delay-800 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Safari Guidelines & Tips
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Sun className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Best Safari Times</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Early morning (6:00-10:00 AM) and late afternoon (2:00-6:00 PM) offer the best wildlife viewing opportunities.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Camera className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Photography Tips</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Bring telephoto lenses, extra batteries, and memory cards. Respect animal boundaries and follow guide instructions.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <TreePine className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Conservation Ethics</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Maintain silence, don&apos;t litter, stay in vehicles, and support local conservation efforts through responsible tourism.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Start Your Safari Adventure
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Ready to witness Sri Lanka&apos;s incredible wildlife? Book your Yala safari with our expert naturalist guides for an unforgettable experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5" />
                Book Safari
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-slate-900 dark:text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <Mail className="w-5 h-5" />
                Safari Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YalaPage