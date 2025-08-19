"use client";

import { useState } from "react";
import { MapPin, Navigation, Star, Camera, Clock, Route, Compass, Car, Mountain, TreePine, Waves } from "lucide-react";
import Image from "next/image";

interface Destination {
  id: number;
  name: string;
  type: "cultural" | "beach" | "mountain" | "wildlife" | "city";
  position: { x: number; y: number };
  image: string;
  rating: number;
  highlights: string[];
  travelTime: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Colombo",
    type: "city",
    position: { x: 15, y: 60 },
    image: "/pexels-charithk-6624969.jpg",
    rating: 4.5,
    highlights: ["Modern cityscape", "Colonial architecture", "Shopping districts"],
    travelTime: "Starting point"
  },
  {
    id: 2,
    name: "Kandy",
    type: "cultural",
    position: { x: 45, y: 40 },
    image: "/pexels-charithk-7538610.jpg",
    rating: 4.8,
    highlights: ["Temple of Tooth", "Royal Botanical Gardens", "Cultural shows"],
    travelTime: "3h from Colombo"
  },
  {
    id: 3,
    name: "Sigiriya",
    type: "cultural",
    position: { x: 50, y: 25 },
    image: "/pexels-dilen-arunodya-291179593-15553254.jpg",
    rating: 4.9,
    highlights: ["Lion Rock Fortress", "Ancient frescoes", "Water gardens"],
    travelTime: "4h from Colombo"
  },
  {
    id: 4,
    name: "Ella",
    type: "mountain",
    position: { x: 55, y: 65 },
    image: "/pexels-malindabandaralk-16508228.jpg",
    rating: 4.7,
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Tea plantations"],
    travelTime: "6h from Colombo"
  },
  {
    id: 5,
    name: "Yala National Park",
    type: "wildlife",
    position: { x: 70, y: 80 },
    image: "/pexels-malindabandaralk-16508232.jpg",
    rating: 4.6,
    highlights: ["Leopard spotting", "Safari adventures", "Wildlife diversity"],
    travelTime: "5h from Colombo"
  },
  {
    id: 6,
    name: "Galle",
    type: "cultural",
    position: { x: 25, y: 85 },
    image: "/pexels-srkportraits-10850855.jpg",
    rating: 4.7,
    highlights: ["Dutch Fort", "Lighthouse", "Colonial charm"],
    travelTime: "2h from Colombo"
  },
  {
    id: 7,
    name: "Mirissa",
    type: "beach",
    position: { x: 30, y: 90 },
    image: "/pexels-srkportraits-10850860.jpg",
    rating: 4.5,
    highlights: ["Whale watching", "Beach relaxation", "Coconut Hill"],
    travelTime: "2.5h from Colombo"
  },
  {
    id: 8,
    name: "Nuwara Eliya",
    type: "mountain",
    position: { x: 50, y: 55 },
    image: "/wp4359097-sri-lanka-4k-wallpapers.jpg",
    rating: 4.4,
    highlights: ["Tea country", "Cool climate", "Colonial architecture"],
    travelTime: "4h from Colombo"
  },
  {
    id: 9,
    name: "Anuradhapura",
    type: "cultural",
    position: { x: 40, y: 15 },
    image: "/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass.jpg",
    rating: 4.6,
    highlights: ["Ancient stupas", "Sacred Bodhi Tree", "Archaeological ruins"],
    travelTime: "4h from Colombo"
  },
  {
    id: 10,
    name: "Bentota",
    type: "beach",
    position: { x: 20, y: 75 },
    image: "/backiee-126197-landscape.jpg",
    rating: 4.3,
    highlights: ["Water sports", "Beach resorts", "River safari"],
    travelTime: "1.5h from Colombo"
  }
];

const typeIcons = {
  cultural: Mountain,
  beach: Waves,
  mountain: TreePine,
  wildlife: Camera,
  city: Navigation
};

const typeColors = {
  cultural: "bg-amber-500",
  beach: "bg-blue-500",
  mountain: "bg-green-500",
  wildlife: "bg-orange-500",
  city: "bg-purple-500"
};

export default function ViewMap() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredDestinations = activeFilter === "all" 
    ? destinations 
    : destinations.filter(dest => dest.type === activeFilter);

  const filterOptions = [
    { id: "all", name: "All Destinations", icon: MapPin, color: "bg-gray-500" },
    { id: "cultural", name: "Cultural Sites", icon: Mountain, color: "bg-amber-500" },
    { id: "beach", name: "Beaches", icon: Waves, color: "bg-blue-500" },
    { id: "mountain", name: "Mountains", icon: TreePine, color: "bg-green-500" },
    { id: "wildlife", name: "Wildlife", icon: Camera, color: "bg-orange-500" },
    { id: "city", name: "Cities", icon: Navigation, color: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <Image
          src="/wp4359097-sri-lanka-4k-wallpapers.jpg"
          alt="Sri Lanka Map View"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Compass className="w-8 h-8 text-blue-400" />
            <span className="text-blue-400 text-lg font-semibold">Interactive Travel Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Explore Sri Lanka
          </h1>
          <p className="text-xl leading-relaxed">
            Discover amazing destinations across the Pearl of the Indian Ocean
          </p>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="py-8 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filterOptions.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                    activeFilter === filter.id
                      ? `${filter.color} text-white shadow-lg scale-105`
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{filter.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Interactive Destination Map
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Click on any destination to explore details, photos, and travel information
            </p>
          </div>

          {/* Map Container */}
          <div
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl"
            style={{ aspectRatio: "16/10" }}
          >
            {/* Map Background */}
            <div className="absolute inset-0">
              <Image
                src="/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass.jpg"
                alt="Sri Lanka Map"
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-green-100/50 dark:from-blue-900/30 dark:to-green-900/30" />
            </div>

            {/* Destination Markers */}
            {filteredDestinations.map((destination) => {
              const IconComponent = typeIcons[destination.type];
              return (
                <button
                  key={destination.id}
                  onClick={() => setSelectedDestination(destination)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${destination.position.x}%`,
                    top: `${destination.position.y}%`,
                  }}
                >
                  <div className={`w-8 h-8 ${typeColors[destination.type]} rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-gray-200 dark:border-gray-600">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{destination.name}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span>{destination.rating}</span>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-600">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Map Legend</h4>
              <div className="space-y-2">
                {filterOptions.slice(1).map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <div key={type.id} className="flex items-center gap-2">
                      <div className={`w-4 h-4 ${type.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-2 h-2 text-white" />
                      </div>
                      <span className="text-xs text-gray-700 dark:text-gray-300">{type.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scale Indicator */}
            <div className="absolute bottom-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-600">
              <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                <Route className="w-4 h-4" />
                <span>Click markers for details</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Travel Routes */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Travel Routes
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Suggested itineraries connecting major destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cultural Triangle</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Colombo → Kandy → Sigiriya → Anuradhapura</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>5-7 days</span>
                </div>
                <div className="flex items-center gap-1">
                  <Route className="w-4 h-4" />
                  <span>450 km</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Waves className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Southern Coast</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Colombo → Bentota → Galle → Mirissa</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>3-5 days</span>
                </div>
                <div className="flex items-center gap-1">
                  <Route className="w-4 h-4" />
                  <span>180 km</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <TreePine className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Hill Country</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Kandy → Nuwara Eliya → Ella → Yala</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>4-6 days</span>
                </div>
                <div className="flex items-center gap-1">
                  <Route className="w-4 h-4" />
                  <span>320 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Plan Your Perfect Journey
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get personalized route recommendations and travel guides
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                <Route className="w-5 h-5" />
                Create Custom Route
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
                Download Travel Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedDestination(null)}>
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48">
              <Image
                src={selectedDestination.image}
                alt={selectedDestination.name}
                fill
                className="object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
              >
                ✕
              </button>
              <div className={`absolute top-4 left-4 w-8 h-8 ${typeColors[selectedDestination.type]} rounded-full flex items-center justify-center`}>
                {(() => {
                  const IconComponent = typeIcons[selectedDestination.type];
                  return <IconComponent className="w-4 h-4 text-white" />;
                })()}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedDestination.name}</h3>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-lg font-medium text-gray-900 dark:text-white">{selectedDestination.rating}</span>
                <span className="text-gray-500 dark:text-gray-400">• {selectedDestination.type}</span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">{selectedDestination.travelTime}</span>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Highlights</h4>
              <ul className="space-y-2 mb-6">
                {selectedDestination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                  <Route className="w-4 h-4" />
                  Plan Route
                </button>
                <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
