"use client";

import React, { useState } from 'react';
import { Route, MapPin, Clock, Star, Car, Train, Plane } from 'lucide-react';
import Image from 'next/image';

interface RouteStop {
  name: string;
  duration: string;
  highlights: string[];
}

interface TravelRoute {
  id: number;
  name: string;
  description: string;
  duration: string;
  distance: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  transportMode: 'car' | 'train' | 'plane' | 'mixed';
  image: string;
  rating: number;
  stops: RouteStop[];
  price: string;
}

const travelRoutes: TravelRoute[] = [
  {
    id: 1,
    name: "Cultural Triangle Classic",
    description: "Ancient cities, rock fortresses, and sacred temples",
    duration: "5 Days",
    distance: "450 km",
    difficulty: "Easy",
    transportMode: "car",
    image: "/pexels-charithk-6624969.jpg",
    rating: 4.9,
    price: "$299",
    stops: [
      {
        name: "Colombo",
        duration: "Day 1",
        highlights: ["Arrival and city tour", "National Museum", "Galle Face Green"]
      },
      {
        name: "Dambulla",
        duration: "Day 2",
        highlights: ["Cave Temple complex", "Golden Temple", "Ancient paintings"]
      },
      {
        name: "Sigiriya",
        duration: "Day 3",
        highlights: ["Rock Fortress climb", "Ancient gardens", "Mirror wall"]
      },
      {
        name: "Polonnaruwa",
        duration: "Day 4",
        highlights: ["Ancient capital ruins", "Gal Vihara", "Royal Palace"]
      },
      {
        name: "Kandy",
        duration: "Day 5",
        highlights: ["Temple of Tooth", "Royal Gardens", "Cultural show"]
      }
    ]
  },
  {
    id: 2,
    name: "Hill Country Express",
    description: "Tea plantations, mountain peaks, and scenic railways",
    duration: "4 Days",
    distance: "320 km",
    difficulty: "Moderate",
    transportMode: "train",
    image: "/pexels-dilen-arunodya-291179593-15553254.jpg",
    rating: 4.8,
    price: "$249",
    stops: [
      {
        name: "Kandy",
        duration: "Day 1",
        highlights: ["Temple visit", "Botanical gardens", "Train departure"]
      },
      {
        name: "Nuwara Eliya",
        duration: "Day 2",
        highlights: ["Tea factory tour", "Little England", "Gregory Lake"]
      },
      {
        name: "Ella",
        duration: "Day 3",
        highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ravana Falls"]
      },
      {
        name: "Badulla",
        duration: "Day 4",
        highlights: ["Final train stop", "Local markets", "Return journey"]
      }
    ]
  },
  {
    id: 3,
    name: "Southern Coastal Adventure",
    description: "Beaches, whale watching, and colonial heritage",
    duration: "6 Days",
    distance: "380 km",
    difficulty: "Easy",
    transportMode: "car",
    image: "/pexels-malindabandaralk-16508228.jpg",
    rating: 4.7,
    price: "$349",
    stops: [
      {
        name: "Colombo",
        duration: "Day 1",
        highlights: ["City exploration", "Shopping", "Coastal drive start"]
      },
      {
        name: "Bentota",
        duration: "Day 2",
        highlights: ["Beach relaxation", "Water sports", "River safari"]
      },
      {
        name: "Galle",
        duration: "Day 3-4",
        highlights: ["Dutch Fort", "Lighthouse", "Historic walks"]
      },
      {
        name: "Mirissa",
        duration: "Day 5",
        highlights: ["Whale watching", "Beach time", "Sunset views"]
      },
      {
        name: "Tangalle",
        duration: "Day 6",
        highlights: ["Pristine beaches", "Turtle watching", "Relaxation"]
      }
    ]
  },
  {
    id: 4,
    name: "Wildlife Safari Circuit",
    description: "National parks, elephant orphanages, and wildlife encounters",
    duration: "7 Days",
    distance: "520 km",
    difficulty: "Moderate",
    transportMode: "mixed",
    image: "/pexels-malindabandaralk-16508232.jpg",
    rating: 4.8,
    price: "$399",
    stops: [
      {
        name: "Colombo",
        duration: "Day 1",
        highlights: ["Arrival", "Elephant orphanage", "Hotel check-in"]
      },
      {
        name: "Minneriya",
        duration: "Day 2-3",
        highlights: ["Elephant gathering", "Safari drives", "Bird watching"]
      },
      {
        name: "Yala",
        duration: "Day 4-5",
        highlights: ["Leopard spotting", "Multiple safaris", "Wildlife photography"]
      },
      {
        name: "Udawalawe",
        duration: "Day 6",
        highlights: ["Elephant sanctuary", "Reservoir views", "Conservation center"]
      },
      {
        name: "Sinharaja",
        duration: "Day 7",
        highlights: ["Rainforest trek", "Endemic species", "Nature walks"]
      }
    ]
  }
];

const TransportIcon = ({ mode }: { mode: string }) => {
  switch (mode) {
    case 'car':
      return <Car className="w-4 h-4" />;
    case 'train':
      return <Train className="w-4 h-4" />;
    case 'plane':
      return <Plane className="w-4 h-4" />;
    default:
      return <Route className="w-4 h-4" />;
  }
};

const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const colors = {
    Easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    Moderate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    Challenging: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[difficulty as keyof typeof colors]}`}>
      {difficulty}
    </span>
  );
};

export default function TravelRoutes() {
  const [selectedRoute, setSelectedRoute] = useState<TravelRoute | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-32 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Travel Routes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Carefully curated travel routes to experience the best of Sri Lanka
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {travelRoutes.map((route) => (
            <div 
              key={route.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedRoute(route)}
            >
              <div className="relative h-48">
                <Image
                  src={route.image}
                  alt={route.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{route.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 rounded-lg px-3 py-1">
                  <span className="text-white font-bold text-lg">{route.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {route.name}
                  </h3>
                  <DifficultyBadge difficulty={route.difficulty} />
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {route.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{route.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{route.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <TransportIcon mode={route.transportMode} />
                    <span className="capitalize">{route.transportMode}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Route className="w-4 h-4" />
                    <span>{route.stops.length} Stops</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Route Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {route.stops.slice(0, 3).map((stop, index) => (
                      <span 
                        key={index}
                        className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300 px-2 py-1 rounded-md text-xs"
                      >
                        {stop.name}
                      </span>
                    ))}
                    {route.stops.length > 3 && (
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        +{route.stops.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 border border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-4 py-2 rounded-lg transition-colors">
                    Book Route
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Route Detail Modal */}
        {selectedRoute && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedRoute.name}
                  </h2>
                  <button 
                    onClick={() => setSelectedRoute(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="space-y-4">
                  {selectedRoute.stops.map((stop, index) => (
                    <div key={index} className="border-l-2 border-emerald-500 pl-4 pb-4">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {stop.name} - {stop.duration}
                      </h3>
                      <ul className="mt-2 space-y-1">
                        {stop.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors">
                    Book This Route - {selectedRoute.price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}