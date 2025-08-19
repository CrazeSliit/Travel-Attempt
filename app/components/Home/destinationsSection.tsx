"use client";

import React, { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { MapPin, Star, Clock, Heart, Search, ArrowRight, Camera, Mountain, Trees, Waves } from 'lucide-react'

function DestinationsSection() {
  const [isAnimated, setIsAnimated] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setIsAnimated(true)
  }, [])

  const destinations = useMemo(() => [
    {
      id: 1,
      name: "Sigiriya Rock Fortress",
      location: "Central Province",
      category: "cultural",
      duration: "2-3 hours",
      difficulty: "Moderate",
      rating: 4.8,
      reviews: 1547,
      price: "$45",
      image: "/pexels-dilen-arunodya-291179593-15553254.jpg",
      description: "Ancient rock fortress with stunning frescoes and panoramic views.",
      highlights: ["Ancient Architecture", "UNESCO Site", "Panoramic Views"]
    },
    {
      id: 2,
      name: "Kandy Lake & Temple",
      location: "Kandy",
      category: "cultural",
      duration: "Half day",
      difficulty: "Easy",
      rating: 4.7,
      reviews: 2341,
      price: "$35",
      image: "/pexels-charithk-6624969.jpg",
      description: "Sacred Buddhist temple complex around serene lake.",
      highlights: ["Sacred Temple", "Cultural Heritage", "Peaceful Setting"]
    },
    {
      id: 3,
      name: "Mirissa Beach",
      location: "Southern Province",
      category: "beach",
      duration: "Full day",
      difficulty: "Easy",
      rating: 4.6,
      reviews: 1876,
      price: "$25",
      image: "/pexels-malindabandaralk-16508228.jpg",
      description: "Pristine golden beach perfect for whale watching and surfing.",
      highlights: ["Whale Watching", "Golden Sands", "Surfing Spots"]
    },
    {
      id: 4,
      name: "Ella Rock Hiking",
      location: "Ella",
      category: "adventure",
      duration: "4-5 hours",
      difficulty: "Challenging",
      rating: 4.9,
      reviews: 987,
      price: "$55",
      image: "/pexels-charithk-7538610.jpg",
      description: "Epic mountain hike with breathtaking hill country views.",
      highlights: ["Mountain Views", "Tea Plantations", "Adventure Hiking"]
    },
    {
      id: 5,
      name: "Yala National Park",
      location: "Southern Province",
      category: "wildlife",
      duration: "Full day",
      difficulty: "Easy",
      rating: 4.8,
      reviews: 1654,
      price: "$75",
      image: "/pexels-srkportraits-10850855.jpg",
      description: "Premier wildlife sanctuary famous for leopard sightings.",
      highlights: ["Leopard Safari", "Wildlife Photography", "Natural Habitat"]
    },
    {
      id: 6,
      name: "Galle Fort",
      location: "Southern Province",
      category: "cultural",
      duration: "3-4 hours",
      difficulty: "Easy",
      rating: 4.7,
      reviews: 2156,
      price: "$40",
      image: "/pexels-malindabandaralk-16508232.jpg",
      description: "Historic Dutch colonial fort with charming cobblestone streets.",
      highlights: ["Colonial History", "Ocean Views", "Art Galleries"]
    }
  ], [])

  const categories = [
    { id: 'all', name: 'All Destinations', icon: <MapPin className="w-4 h-4" /> },
    { id: 'cultural', name: 'Cultural', icon: <Camera className="w-4 h-4" /> },
    { id: 'adventure', name: 'Adventure', icon: <Mountain className="w-4 h-4" /> },
    { id: 'wildlife', name: 'Wildlife', icon: <Trees className="w-4 h-4" /> },
    { id: 'beach', name: 'Beach', icon: <Waves className="w-4 h-4" /> }
  ]

  const filteredDestinations = useMemo(() => {
    let filtered = destinations

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(dest => dest.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(dest => 
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return filtered
  }, [searchTerm, selectedCategory, destinations])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-100'
      case 'moderate': return 'text-yellow-600 bg-yellow-100'
      case 'challenging': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/wp4359097-sri-lanka-4k-wallpapers.jpg')`,
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 backdrop-blur-md border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 px-5 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <MapPin className="w-4 h-4" />
            Explore Sri Lanka
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-slate-900 dark:text-white block">Discover</span>
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block my-2">
              Amazing
            </span>
            <span className="text-slate-900 dark:text-white block">Destinations</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            From ancient temples to pristine beaches, explore the diverse wonders that make Sri Lanka 
            a truly unforgettable destination for every type of traveler.
          </p>
        </div>

        {/* Search and Filter */}
        <div className={`mb-12 transform transition-all duration-1000 delay-200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
              />
            </div>
            
            {/* Results Count */}
            <div className="text-slate-600 dark:text-slate-400 text-sm">
              Showing {filteredDestinations.length} of {destinations.length} destinations
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-slate-600 dark:text-slate-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000 delay-400 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredDestinations.map((destination) => (
            <div 
              key={destination.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(destination.id)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                  aria-label={`${favorites.includes(destination.id) ? 'Remove from' : 'Add to'} favorites`}
                >
                  <Heart 
                    className={`w-5 h-5 transition-all ${
                      favorites.includes(destination.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-white hover:text-red-400'
                    }`} 
                  />
                </button>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}
                  </span>
                </div>
                
                {/* Price */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                    {destination.price}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {destination.name}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {destination.description}
                </p>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {destination.highlights.map((highlight, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                      <Clock className="w-4 h-4" />
                      <span>Duration: {destination.duration}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getDifficultyColor(destination.difficulty)}`}>
                      {destination.difficulty}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-slate-900 dark:text-white">
                        {destination.rating}
                      </span>
                      <span className="text-xs text-slate-500">
                        ({destination.reviews} reviews)
                      </span>
                    </div>
                    
                    <button className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-sm font-medium group/btn">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <div className="text-slate-400 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
              <p>Try adjusting your search terms or filters</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DestinationsSection