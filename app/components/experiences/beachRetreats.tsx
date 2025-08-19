"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Star, Waves, Sun, Umbrella, Fish } from "lucide-react";
import Image from "next/image";

interface BeachRetreat {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  duration: string;
  rating: number;
  price: string;
  type: "resort" | "beach" | "activity" | "dining";
  highlights: string[];
}

const beachRetreats: BeachRetreat[] = [
  {
    id: 1,
    name: "Unawatuna Beach Paradise",
    location: "Unawatuna",
    description: "Golden sandy beach with crystal clear waters, perfect for swimming and snorkeling.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    duration: "Full day",
    rating: 4.8,
    price: "$25",
    type: "beach",
    highlights: ["Protected bay", "Coral reef", "Beach bars", "Water sports"]
  },
  {
    id: 2,
    name: "Mirissa Whale Watching",
    location: "Mirissa",
    description: "Encounter majestic blue whales and dolphins in their natural habitat.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    duration: "4-6 hours",
    rating: 4.9,
    price: "$45",
    type: "activity",
    highlights: ["Blue whales", "Dolphins", "Expert guides", "Breakfast included"]
  },
  {
    id: 3,
    name: "Bentota Water Sports",
    location: "Bentota",
    description: "Thrilling jet skiing, banana boat rides, and windsurfing adventures.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop",
    duration: "2-3 hours",
    rating: 4.6,
    price: "$35",
    type: "activity",
    highlights: ["Jet skiing", "Banana boats", "Windsurfing", "Professional instruction"]
  },
  {
    id: 4,
    name: "Luxury Beach Resort",
    location: "Hikkaduwa",
    description: "Premium beachfront accommodation with spa services and gourmet dining.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    duration: "Overnight",
    rating: 4.7,
    price: "$150",
    type: "resort",
    highlights: ["Beachfront location", "Spa services", "Fine dining", "Private beach"]
  },
  {
    id: 5,
    name: "Arugam Bay Surfing",
    location: "Arugam Bay",
    description: "World-class surfing spot with consistent waves and surf schools.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop",
    duration: "Half day",
    rating: 4.8,
    price: "$30",
    type: "activity",
    highlights: ["World-class waves", "Surf lessons", "Board rental", "Beach cafes"]
  },
  {
    id: 6,
    name: "Seafood Beach Dining",
    location: "Negombo",
    description: "Fresh seafood grilled on the beach with ocean views and local flavors.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
    duration: "2 hours",
    rating: 4.5,
    price: "$20",
    type: "dining",
    highlights: ["Fresh catch", "Beach setting", "Local cuisine", "Sunset views"]
  }
];

const beachActivities = [
  {
    title: "Snorkeling Tours",
    description: "Explore vibrant coral reefs and tropical marine life",
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400&h=300&fit=crop",
    icon: Fish
  },
  {
    title: "Beach Volleyball",
    description: "Join friendly matches on pristine sandy beaches",
    image: "https://images.unsplash.com/photo-1594736797933-d0fa71d8e3ae?w=400&h=300&fit=crop",
    icon: Sun
  },
  {
    title: "Sunset Cruises",
    description: "Romantic boat trips with spectacular ocean sunsets",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    icon: Waves
  },
  {
    title: "Beach Relaxation",
    description: "Unwind under palm trees with tropical drinks",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    icon: Umbrella
  }
];

const typeIcons = {
  resort: Umbrella,
  beach: Sun,
  activity: Waves,
  dining: Fish
};

const typeColors = {
  resort: "bg-purple-100 text-purple-800",
  beach: "bg-yellow-100 text-yellow-800",
  activity: "bg-blue-100 text-blue-800",
  dining: "bg-green-100 text-green-800"
};

export default function BeachRetreats() {
  const [selectedRetreat, setSelectedRetreat] = useState<BeachRetreat | null>(null);
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredRetreats = selectedType === "all" 
    ? beachRetreats 
    : beachRetreats.filter(retreat => retreat.type === selectedType);

  const types = [
    { id: "all", name: "All Experiences", icon: Waves },
    { id: "beach", name: "Beaches", icon: Sun },
    { id: "resort", name: "Resorts", icon: Umbrella },
    { id: "activity", name: "Activities", icon: Waves },
    { id: "dining", name: "Dining", icon: Fish }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Beach Paradise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Beach Retreats
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
          >
            Escape to pristine beaches, crystal waters, and tropical paradise along Sri Lanka&apos;s stunning coastline
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5" />
              <span>Golden Beaches</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-5 h-5" />
              <span>Water Sports</span>
            </div>
            <div className="flex items-center gap-2">
              <Umbrella className="w-5 h-5" />
              <span>Luxury Resorts</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Type Filter */}
      <section className="py-12 px-4 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {types.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.button
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedType === type.id
                      ? "bg-cyan-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-cyan-50 border border-gray-200"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{type.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beach Retreats Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tropical Beach Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover pristine beaches, luxury resorts, and exciting water activities along our beautiful coast
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRetreats.map((retreat, index) => {
              const IconComponent = typeIcons[retreat.type];
              return (
                <motion.div
                  key={retreat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedRetreat(retreat)}
                >
                  <div className="relative h-64">
                    <Image
                      src={retreat.image}
                      alt={retreat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <IconComponent className="w-6 h-6 text-white bg-black/30 backdrop-blur-sm rounded-full p-1" />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{retreat.rating}</span>
                    </div>
                    <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${typeColors[retreat.type]}`}>
                      {retreat.type.charAt(0).toUpperCase() + retreat.type.slice(1)}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{retreat.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{retreat.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{retreat.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{retreat.duration}</span>
                      </div>
                      <div className="text-lg font-bold text-cyan-600">{retreat.price}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beach Activities */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Beach Activities & Fun
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From relaxation to adventure, find the perfect beach activity for your tropical getaway
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beachActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-cyan-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h3>
                    <p className="text-gray-600 text-sm">{activity.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beach Tips */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perfect Beach Weather Year-Round
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sri Lanka&apos;s tropical climate ensures beautiful beach conditions throughout the year
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sunshine</h3>
                <p className="text-gray-600">Average 8 hours of sunshine daily</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect Waters</h3>
                <p className="text-gray-600">Warm ocean temperatures year-round</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Umbrella className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comfort</h3>
                <p className="text-gray-600">Gentle tropical breezes and shade</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Beach Escape?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your perfect beach retreat and create unforgettable tropical memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
                Book Beach Retreat
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                View All Beaches
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Retreat Detail Modal */}
      {selectedRetreat && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedRetreat(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={selectedRetreat.image}
                alt={selectedRetreat.name}
                fill
                className="object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedRetreat(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
              >
                ✕
              </button>
              <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${typeColors[selectedRetreat.type]}`}>
                {selectedRetreat.type.charAt(0).toUpperCase() + selectedRetreat.type.slice(1)}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <MapPin className="w-4 h-4" />
                <span>{selectedRetreat.location}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedRetreat.name}</h3>
              <p className="text-gray-600 mb-6">{selectedRetreat.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{selectedRetreat.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-600">{selectedRetreat.rating} rating</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Experience Highlights</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedRetreat.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      <span className="text-gray-600 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-cyan-600">{selectedRetreat.price}</div>
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}