"use client";

import React, { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { Camera, X, ChevronLeft, ChevronRight, Download, Heart, Grid, List } from 'lucide-react'

function GallerySection() {
  const [isAnimated, setIsAnimated] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid')

  useEffect(() => {
    setIsAnimated(true)
  }, [])

  const galleryImages = useMemo(() => [
    {
      id: 1,
      src: "/pexels-dilen-arunodya-291179593-15553254.jpg",
      title: "Sigiriya Rock Fortress",
      category: "landmarks",
      location: "Central Province",
      description: "Ancient rock fortress rising majestically from the plains."
    },
    {
      id: 2,
      src: "/pexels-charithk-6624969.jpg",
      title: "Kandy Temple at Sunset",
      category: "culture",
      location: "Kandy",
      description: "Sacred temple complex bathed in golden sunset light."
    },
    {
      id: 3,
      src: "/pexels-malindabandaralk-16508228.jpg",
      title: "Mirissa Beach Paradise",
      category: "beaches",
      location: "Southern Province",
      description: "Pristine golden sands meeting crystal clear waters."
    },
    {
      id: 4,
      src: "/pexels-charithk-7538610.jpg",
      title: "Ella Mountain Views",
      category: "landscapes",
      location: "Ella",
      description: "Breathtaking panoramic views from Ella Rock."
    },
    {
      id: 5,
      src: "/pexels-srkportraits-10850855.jpg",
      title: "Yala Leopard Safari",
      category: "wildlife",
      location: "Yala National Park",
      description: "Majestic leopard in its natural habitat."
    },
    {
      id: 6,
      src: "/pexels-malindabandaralk-16508232.jpg",
      title: "Galle Fort Heritage",
      category: "culture",
      location: "Galle",
      description: "Historic Dutch colonial architecture by the sea."
    },
    {
      id: 7,
      src: "/backiee-126197-landscape.jpg",
      title: "Tea Plantation Valleys",
      category: "landscapes",
      location: "Hill Country",
      description: "Rolling green hills covered in tea plantations."
    },
    {
      id: 8,
      src: "/wp4359097-sri-lanka-4k-wallpapers.jpg",
      title: "Coastal Paradise",
      category: "beaches",
      location: "West Coast",
      description: "Dramatic coastline with palm trees and turquoise waters."
    },
    {
      id: 9,
      src: "/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass.jpg",
      title: "Sunset Serenity",
      category: "landscapes",
      location: "Central Plains",
      description: "Solitary tree silhouetted against a dramatic sunset sky."
    }
  ], [])

  const categories = useMemo(() => [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'landmarks', name: 'Landmarks', count: galleryImages.filter(img => img.category === 'landmarks').length },
    { id: 'culture', name: 'Culture', count: galleryImages.filter(img => img.category === 'culture').length },
    { id: 'beaches', name: 'Beaches', count: galleryImages.filter(img => img.category === 'beaches').length },
    { id: 'landscapes', name: 'Landscapes', count: galleryImages.filter(img => img.category === 'landscapes').length },
    { id: 'wildlife', name: 'Wildlife', count: galleryImages.filter(img => img.category === 'wildlife').length }
  ], [galleryImages])

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') {
      return galleryImages
    }
    return galleryImages.filter(img => img.category === selectedCategory)
  }, [selectedCategory, galleryImages])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  const openLightbox = (id: number) => {
    setSelectedImage(id)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
    let newIndex
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }
    
    setSelectedImage(filteredImages[newIndex].id)
  }

  const currentImage = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null

  // Handle keyboard navigation
  useEffect(() => {
    const handleNavigate = (direction: 'prev' | 'next') => {
      if (selectedImage === null) return
      
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
      let newIndex
      
      if (direction === 'prev') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
      } else {
        newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
      }
      
      setSelectedImage(filteredImages[newIndex].id)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      
      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          handleNavigate('prev')
          break
        case 'ArrowRight':
          handleNavigate('next')
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, filteredImages])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/pexels-malindabandaralk-16508228.jpg')`,
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
            <Camera className="w-4 h-4" />
            Photo Gallery
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-slate-900 dark:text-white block">Capture the</span>
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block my-2">
              Beauty
            </span>
            <span className="text-slate-900 dark:text-white block">of Sri Lanka</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            Explore our curated collection of stunning photographs showcasing the diverse landscapes, 
            rich culture, and natural wonders that make Sri Lanka truly extraordinary.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className={`mb-12 transform transition-all duration-1000 delay-200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-white/20'
                }`}
              >
                <Grid className="w-4 h-4" />
                Grid
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'masonry'
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-white/20'
                }`}
              >
                <List className="w-4 h-4" />
                Masonry
              </button>
            </div>
            
            {/* Results Count */}
            <div className="text-slate-600 dark:text-slate-400 text-sm">
              Showing {filteredImages.length} photos
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
                {category.name}
                <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`transform transition-all duration-1000 delay-400 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className={`grid gap-4 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'columns-1 md:columns-2 lg:columns-3'
          }`}>
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  viewMode === 'masonry' ? 'mb-4 break-inside-avoid' : 'aspect-square'
                }`}
                onClick={() => openLightbox(image.id)}
              >
                <div className={`relative ${viewMode === 'masonry' ? 'h-auto' : 'h-full'}`}>
                  <Image 
                    src={image.src}
                    alt={image.title}
                    width={400}
                    height={viewMode === 'masonry' ? undefined : 400}
                    className={`object-cover w-full group-hover:scale-110 transition-transform duration-500 ${
                      viewMode === 'masonry' ? 'h-auto' : 'h-full'
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(image.id)
                    }}
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                    aria-label={`${favorites.includes(image.id) ? 'Remove from' : 'Add to'} favorites`}
                  >
                    <Heart 
                      className={`w-5 h-5 transition-all ${
                        favorites.includes(image.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-white hover:text-red-400'
                      }`} 
                    />
                  </button>
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && currentImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              
              {/* Image */}
              <div className="relative">
                <Image 
                  src={currentImage.src}
                  alt={currentImage.title}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  priority
                />
                
                {/* Image Details */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2">{currentImage.title}</h3>
                      <p className="text-white/80 text-lg mb-1">{currentImage.location}</p>
                      <p className="text-white/60">{currentImage.description}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFavorite(currentImage.id)
                        }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                        aria-label={`${favorites.includes(currentImage.id) ? 'Remove from' : 'Add to'} favorites`}
                      >
                        <Heart 
                          className={`w-5 h-5 transition-all ${
                            favorites.includes(currentImage.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-white hover:text-red-400'
                          }`} 
                        />
                      </button>
                      
                      <button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                        aria-label="Download image"
                      >
                        <Download className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GallerySection