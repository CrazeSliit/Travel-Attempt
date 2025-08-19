"use client";

import React, { useState } from 'react';
import { MapPin, Star, Eye, Camera, Mountain, Waves, TreePine, Building, Clock, Users, Heart, Share2 } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamic import of MapModal to avoid SSR issues
const MapModal = dynamic(() => import('./mapModal'), { ssr: false });

interface Highlight {
  id: number;
  name: string;
  description: string;
  category: 'cultural' | 'nature' | 'beach' | 'adventure';
  image: string;
  rating: number;
  coordinates: { lat: number; lng: number };
  features: string[];
  bestTime: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  visitors: string;
  price: string;
  highlights: string[];
}

const mapHighlights: Highlight[] = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    description: "Ancient rock fortress and palace ruins of the 5th century AD, known as the Eighth Wonder of the World",
    category: "cultural",
    image: "/pexels-charithk-6624969.jpg",
    rating: 4.8,
    coordinates: { lat: 7.9570, lng: 80.7603 },
    features: ["Ancient frescoes", "Water gardens", "Lion's paw terrace"],
    bestTime: "Early morning (6-8 AM)",
    duration: "3-4 hours",
    difficulty: "Moderate",
    visitors: "1000+ daily",
    price: "$30",
    highlights: ["UNESCO World Heritage Site", "5th century palace ruins", "Ancient hydraulic technology", "Stunning 360° views"]
  },
  {
    id: 2,
    name: "Ella Rock",
    description: "Spectacular hiking destination with panoramic views of tea plantations and valleys",
    category: "adventure",
    image: "/pexels-dilen-arunodya-291179593-15553254.jpg",
    rating: 4.7,
    coordinates: { lat: 6.8697, lng: 81.0467 },
    features: ["Hiking trails", "Tea plantations", "Nine Arch Bridge"],
    bestTime: "Early morning (5-7 AM)",
    duration: "4-5 hours",
    difficulty: "Challenging",
    visitors: "500+ daily",
    price: "Free",
    highlights: ["Breathtaking sunrise views", "Tea plantation walks", "Little Adam's Peak nearby", "Nine Arch Bridge photo ops"]
  },
  {
    id: 3,
    name: "Mirissa Beach",
    description: "Golden sandy beach perfect for whale watching and surfing with crystal clear waters",
    category: "beach",
    image: "/pexels-malindabandaralk-16508228.jpg",
    rating: 4.6,
    coordinates: { lat: 5.9487, lng: 80.4707 },
    features: ["Whale watching", "Surfing", "Beach bars"],
    bestTime: "December to April",
    duration: "Full day",
    difficulty: "Easy",
    visitors: "2000+ daily",
    price: "$5-15",
    highlights: ["Blue whale watching", "World-class surfing", "Coconut tree hill", "Sunset beach bars"]
  },
  {
    id: 4,
    name: "Yala National Park",
    description: "Wildlife sanctuary famous for having the highest density of leopards in the world",
    category: "nature",
    image: "/pexels-malindabandaralk-16508232.jpg",
    rating: 4.9,
    coordinates: { lat: 6.3725, lng: 81.5189 },
    features: ["Leopard safaris", "Bird watching", "Elephant herds"],
    bestTime: "February to July",
    duration: "Half or full day",
    difficulty: "Easy",
    visitors: "1500+ daily",
    price: "$25-45",
    highlights: ["Highest leopard density", "Over 200 bird species", "Ancient rock formations", "Diverse ecosystems"]
  },
  {
    id: 5,
    name: "Temple of the Tooth",
    description: "Sacred Buddhist temple housing the tooth relic of Buddha, most venerated in Sri Lanka",
    category: "cultural",
    image: "/pexels-charithk-7538610.jpg",
    rating: 4.8,
    coordinates: { lat: 7.2906, lng: 80.6337 },
    features: ["Sacred tooth relic", "Daily ceremonies", "Temple museum"],
    bestTime: "Evening puja (6:30 PM)",
    duration: "2-3 hours",
    difficulty: "Easy",
    visitors: "3000+ daily",
    price: "$10",
    highlights: ["Sacred tooth relic", "Traditional Kandyan architecture", "Daily puja ceremonies", "Temple museum artifacts"]
  },
  {
    id: 6,
    name: "Adam's Peak",
    description: "Sacred mountain with the famous footprint at the summit, revered by multiple religions",
    category: "adventure",
    image: "/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass.jpg",
    rating: 4.7,
    coordinates: { lat: 6.8092, lng: 80.4989 },
    features: ["Sacred footprint", "Sunrise views", "Pilgrimage trail"],
    bestTime: "December to May",
    duration: "5-7 hours",
    difficulty: "Challenging",
    visitors: "5000+ during season",
    price: "Free",
    highlights: ["Sacred footprint", "Spectacular sunrise", "Multi-religious significance", "2,243m peak height"]
  },
  {
    id: 7,
    name: "Galle Dutch Fort",
    description: "Historic fortified city built by Portuguese and modified by Dutch, overlooking the Indian Ocean",
    category: "cultural",
    image: "/pexels-srkportraits-10850855.jpg",
    rating: 4.6,
    coordinates: { lat: 6.0329, lng: 80.2168 },
    features: ["Dutch architecture", "Lighthouse", "Colonial buildings"],
    bestTime: "Evening (4-6 PM)",
    duration: "2-3 hours",
    difficulty: "Easy",
    visitors: "2500+ daily",
    price: "Free",
    highlights: ["UNESCO World Heritage", "Colonial architecture", "Historic lighthouse", "Ocean rampart walks"]
  },
  {
    id: 8,
    name: "Horton Plains",
    description: "High-altitude plateau with unique ecosystems, featuring World's End cliff and Baker's Falls",
    category: "nature",
    image: "/pexels-srkportraits-10850860.jpg",
    rating: 4.8,
    coordinates: { lat: 6.8067, lng: 80.8056 },
    features: ["World's End cliff", "Baker's Falls", "Endemic species"],
    bestTime: "Early morning (6-9 AM)",
    duration: "4-5 hours",
    difficulty: "Moderate",
    visitors: "800+ daily",
    price: "$15",
    highlights: ["World's End 870m drop", "Unique montane ecosystem", "Endemic flora and fauna", "Baker's Falls waterfall"]
  }
];

const categoryIcons = {
  cultural: Building,
  nature: TreePine,
  beach: Waves,
  adventure: Mountain
};

const categoryColors = {
  cultural: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  nature: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  beach: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  adventure: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
};

const difficultyColors = {
  Easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  Moderate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  Challenging: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
};

export default function MapHighlights() {
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const filteredHighlights = selectedCategory === 'all' 
    ? mapHighlights 
    : mapHighlights.filter(h => h.category === selectedCategory);

  const handleViewOnMap = (highlight: Highlight) => {
    setSelectedHighlight(highlight);
  };

  const toggleFavorite = (id: number) => {
    setFavoriteIds(prev => 
      prev.includes(id) 
        ? prev.filter(fId => fId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-32 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Map Highlights
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Discover Sri Lanka&apos;s most spectacular destinations and plan your perfect journey
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{mapHighlights.length} Amazing Destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>4.7+ Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Millions of Visitors</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full transition-all shadow-lg ${
              selectedCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-emerald-200'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-xl'
            }`}
          >
            All Destinations ({mapHighlights.length})
          </button>
          {Object.keys(categoryColors).map((category) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            const count = mapHighlights.filter(h => h.category === category).length;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 shadow-lg ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-emerald-200'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-xl'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="capitalize">{category} ({count})</span>
              </button>
            );
          })}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredHighlights.map((highlight) => {
            const Icon = categoryIcons[highlight.category];
            const isFavorite = favoriteIds.includes(highlight.id);
            return (
              <div
                key={highlight.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56">
                  <Image
                    src={highlight.image}
                    alt={highlight.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium shadow-lg ${categoryColors[highlight.category]}`}>
                      <Icon className="w-3 h-3" />
                      {highlight.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="bg-white/90 dark:bg-gray-800/90 rounded-full px-2 py-1 flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{highlight.rating}</span>
                    </div>
                    <button
                      onClick={() => toggleFavorite(highlight.id)}
                      className={`p-2 rounded-full transition-all shadow-lg ${
                        isFavorite 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium shadow-lg ${difficultyColors[highlight.difficulty]}`}>
                      {highlight.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 rounded-lg px-3 py-1 shadow-lg">
                    <span className="text-white font-bold">{highlight.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {highlight.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {highlight.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{highlight.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{highlight.visitors}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 col-span-2">
                      <Camera className="w-4 h-4" />
                      <span>Best: {highlight.bestTime}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {highlight.highlights.slice(0, 2).map((item, index) => (
                        <span 
                          key={index}
                          className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300 px-2 py-1 rounded-md text-xs"
                        >
                          {item}
                        </span>
                      ))}
                      {highlight.highlights.length > 2 && (
                        <span className="text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
                          +{highlight.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleViewOnMap(highlight)}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                    </button>
                    <button className="p-2 border border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map Modal */}
        {selectedHighlight && (
          <MapModal
            isOpen={!!selectedHighlight}
            highlight={selectedHighlight}
            onClose={() => setSelectedHighlight(null)}
          />
        )}
      </div>
    </div>
  );
}