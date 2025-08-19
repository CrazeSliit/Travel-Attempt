"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Star, MapPin, Camera, Car, Utensils, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

interface DayTrip {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  duration: string;
  groupSize: string;
  rating: number;
  price: string;
  originalPrice: string;
  category: "cultural" | "adventure" | "nature" | "beach" | "city";
  highlights: string[];
  itinerary: {
    time: string;
    activity: string;
    location: string;
  }[];
  included: string[];
  difficulty: "Easy" | "Moderate" | "Challenging";
}

const dayTrips: DayTrip[] = [
  {
    id: 1,
    title: "Sigiriya Rock Fortress Adventure",
    location: "Sigiriya",
    description: "Climb the ancient Lion Rock fortress and explore the UNESCO World Heritage site with stunning views and ancient frescoes.",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop",
    duration: "8 hours",
    groupSize: "2-12 people",
    rating: 4.9,
    price: "$65",
    originalPrice: "$85",
    category: "cultural",
    highlights: ["UNESCO World Heritage Site", "Ancient frescoes", "Panoramic views", "Archaeological museum"],
    itinerary: [
      { time: "06:00", activity: "Hotel pickup from Colombo", location: "Colombo" },
      { time: "09:30", activity: "Arrive at Sigiriya Rock", location: "Sigiriya" },
      { time: "10:00", activity: "Begin climbing Lion Rock", location: "Sigiriya" },
      { time: "12:00", activity: "Explore ancient frescoes", location: "Sigiriya" },
      { time: "13:00", activity: "Traditional Sri Lankan lunch", location: "Local restaurant" },
      { time: "14:30", activity: "Sigiriya Museum visit", location: "Sigiriya" },
      { time: "16:00", activity: "Return journey begins", location: "Sigiriya" },
      { time: "19:00", activity: "Drop-off at hotel", location: "Colombo" }
    ],
    included: ["Transport", "Entry fees", "Lunch", "Guide", "Water bottles"],
    difficulty: "Moderate"
  },
  {
    id: 2,
    title: "Kandy Cultural Discovery",
    location: "Kandy",
    description: "Experience the cultural heart of Sri Lanka with temple visits, traditional dancing, and scenic lake views.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    duration: "7 hours",
    groupSize: "2-15 people",
    rating: 4.7,
    price: "$55",
    originalPrice: "$75",
    category: "cultural",
    highlights: ["Temple of the Tooth", "Cultural dance show", "Royal Botanical Gardens", "Kandy Lake"],
    itinerary: [
      { time: "07:00", activity: "Hotel pickup", location: "Colombo" },
      { time: "10:00", activity: "Temple of the Tooth visit", location: "Kandy" },
      { time: "11:30", activity: "Kandy Lake walk", location: "Kandy" },
      { time: "12:30", activity: "Traditional lunch", location: "Kandy" },
      { time: "14:00", activity: "Royal Botanical Gardens", location: "Peradeniya" },
      { time: "16:00", activity: "Cultural dance performance", location: "Kandy" },
      { time: "17:30", activity: "Return journey", location: "Kandy" },
      { time: "20:00", activity: "Hotel drop-off", location: "Colombo" }
    ],
    included: ["AC vehicle", "Entry tickets", "Lunch", "Professional guide", "Cultural show"],
    difficulty: "Easy"
  },
  {
    id: 3,
    title: "Yala Safari Wildlife Experience",
    location: "Yala National Park",
    description: "Full-day safari adventure in Sri Lanka's most famous national park, home to leopards, elephants, and exotic birds.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
    duration: "10 hours",
    groupSize: "2-6 people",
    rating: 4.8,
    price: "$85",
    originalPrice: "$110",
    category: "adventure",
    highlights: ["Leopard spotting", "Elephant herds", "Bird watching", "Safari jeep experience"],
    itinerary: [
      { time: "05:30", activity: "Early morning pickup", location: "Colombo" },
      { time: "09:30", activity: "Arrive at Yala National Park", location: "Yala" },
      { time: "10:00", activity: "Morning safari (3 hours)", location: "Yala" },
      { time: "13:00", activity: "Lunch at safari lodge", location: "Yala" },
      { time: "14:30", activity: "Afternoon safari (3 hours)", location: "Yala" },
      { time: "17:30", activity: "Tea break", location: "Yala" },
      { time: "18:30", activity: "Return journey", location: "Yala" },
      { time: "22:00", activity: "Hotel drop-off", location: "Colombo" }
    ],
    included: ["Safari jeep", "Park fees", "Lunch", "Naturalist guide", "Refreshments"],
    difficulty: "Easy"
  },
  {
    id: 4,
    title: "Galle Fort & Southern Coast",
    location: "Galle",
    description: "Explore the historic Dutch fort, colonial architecture, and beautiful southern beaches in this UNESCO site.",
    image: "https://images.unsplash.com/photo-1541832676-3d0f06cdc64a?w=800&h=600&fit=crop",
    duration: "6 hours",
    groupSize: "2-10 people",
    rating: 4.6,
    price: "$45",
    originalPrice: "$60",
    category: "cultural",
    highlights: ["Dutch Fort", "Lighthouse", "Colonial architecture", "Beach time"],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup", location: "Colombo" },
      { time: "10:30", activity: "Galle Fort exploration", location: "Galle" },
      { time: "12:00", activity: "Lighthouse visit", location: "Galle" },
      { time: "13:00", activity: "Seafood lunch", location: "Galle" },
      { time: "14:30", activity: "Unawatuna Beach time", location: "Unawatuna" },
      { time: "16:30", activity: "Return journey", location: "Galle" },
      { time: "19:00", activity: "Hotel drop-off", location: "Colombo" }
    ],
    included: ["Transport", "Fort entry", "Lunch", "Guide", "Beach access"],
    difficulty: "Easy"
  },
  {
    id: 5,
    title: "Ella Tea Country Adventure",
    location: "Ella",
    description: "Scenic train journey, tea plantation visits, and hiking to Little Adam's Peak with breathtaking mountain views.",
    image: "https://images.unsplash.com/photo-1504885802065-7115bffdfb23?w=800&h=600&fit=crop",
    duration: "12 hours",
    groupSize: "2-8 people",
    rating: 4.9,
    price: "$95",
    originalPrice: "$125",
    category: "nature",
    highlights: ["Scenic train ride", "Tea plantation", "Little Adam's Peak", "Nine Arch Bridge"],
    itinerary: [
      { time: "05:00", activity: "Very early pickup", location: "Colombo" },
      { time: "08:30", activity: "Board scenic train", location: "Kandy" },
      { time: "12:00", activity: "Arrive in Ella", location: "Ella" },
      { time: "12:30", activity: "Lunch at local restaurant", location: "Ella" },
      { time: "14:00", activity: "Little Adam's Peak hike", location: "Ella" },
      { time: "16:00", activity: "Nine Arch Bridge visit", location: "Ella" },
      { time: "17:00", activity: "Tea plantation tour", location: "Ella" },
      { time: "18:30", activity: "Return by vehicle", location: "Ella" },
      { time: "22:30", activity: "Hotel drop-off", location: "Colombo" }
    ],
    included: ["Train tickets", "Vehicle transport", "Lunch", "Guide", "Tea tasting"],
    difficulty: "Moderate"
  },
  {
    id: 6,
    title: "Bentota Beach & Water Sports",
    location: "Bentota",
    description: "Relax on golden beaches and enjoy exciting water sports including jet skiing, banana boat rides, and river safari.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    duration: "8 hours",
    groupSize: "2-12 people",
    rating: 4.5,
    price: "$60",
    originalPrice: "$80",
    category: "beach",
    highlights: ["Water sports", "River safari", "Beach relaxation", "Seafood lunch"],
    itinerary: [
      { time: "07:30", activity: "Hotel pickup", location: "Colombo" },
      { time: "09:00", activity: "Arrive at Bentota Beach", location: "Bentota" },
      { time: "09:30", activity: "Water sports activities", location: "Bentota" },
      { time: "12:00", activity: "Beach relaxation time", location: "Bentota" },
      { time: "13:00", activity: "Seafood lunch", location: "Bentota" },
      { time: "14:30", activity: "Madu River safari", location: "Balapitiya" },
      { time: "16:30", activity: "Return journey", location: "Bentota" },
      { time: "18:00", activity: "Hotel drop-off", location: "Colombo" }
    ],
    included: ["Transport", "Water sports", "Lunch", "River safari", "Life jackets"],
    difficulty: "Easy"
  }
];

const categoryColors = {
  cultural: "bg-amber-100 text-amber-800",
  adventure: "bg-red-100 text-red-800",
  nature: "bg-green-100 text-green-800",
  beach: "bg-blue-100 text-blue-800",
  city: "bg-purple-100 text-purple-800"
};

const difficultyColors = {
  Easy: "bg-green-100 text-green-800",
  Moderate: "bg-yellow-100 text-yellow-800",
  Challenging: "bg-red-100 text-red-800"
};

export default function DayTrips() {
  const [selectedTrip, setSelectedTrip] = useState<DayTrip | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTrips = selectedCategory === "all" 
    ? dayTrips 
    : dayTrips.filter(trip => trip.category === selectedCategory);

  const categories = [
    { id: "all", name: "All Trips" },
    { id: "cultural", name: "Cultural" },
    { id: "adventure", name: "Adventure" },
    { id: "nature", name: "Nature" },
    { id: "beach", name: "Beach" },
    { id: "city", name: "City" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586237705245-9a15a5e8b4a3?w=1920&h=1080&fit=crop"
          alt="Day Trips Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Calendar className="w-8 h-8 text-orange-400" />
            <span className="text-orange-400 text-lg font-semibold">Perfect Day Adventures</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Day Trips
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
          >
            Discover Sri Lanka&apos;s highlights in perfectly planned single-day adventures
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>6-12 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5" />
              <span>Transport Included</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              <span>Photo Opportunities</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-orange-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-200"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Day Trips Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Perfect Day Adventures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best of Sri Lanka with our carefully crafted day trips, each offering unique insights into local culture, nature, and adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedTrip(trip)}
              >
                <div className="relative h-48">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{trip.rating}</span>
                  </div>
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[trip.category]}`}>
                    {trip.category}
                  </div>
                  <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[trip.difficulty]}`}>
                    {trip.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{trip.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 text-sm">{trip.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{trip.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{trip.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{trip.groupSize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500 line-through">{trip.originalPrice}</span>
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold">
                            Save {Math.round((1 - parseInt(trip.price.replace(/[^0-9]/g, '')) / parseInt(trip.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-orange-600">{trip.price}</div>
                        <span className="text-sm text-gray-500">per person</span>
                      </div>
                      <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-semibold transition-colors text-sm flex items-center gap-2">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Day Trips */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Day Trips?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Perfect for travelers with limited time who want to experience the best of Sri Lanka
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hassle-Free Transport</h3>
                <p className="text-gray-600">AC vehicles with experienced drivers for comfortable journeys</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Local Guides</h3>
                <p className="text-gray-600">Knowledgeable guides sharing insider stories and cultural insights</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Authentic Experiences</h3>
                <p className="text-gray-600">Local cuisine, cultural sites, and authentic Sri Lankan experiences</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Book Your Perfect Day Trip
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Choose from our curated selection of day adventures and create unforgettable memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Custom Day Trip
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trip Detail Modal */}
      {selectedTrip && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedTrip(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={selectedTrip.image}
                alt={selectedTrip.title}
                fill
                className="object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedTrip(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
              >
                ✕
              </button>
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[selectedTrip.category]}`}>
                {selectedTrip.category}
              </div>
              <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[selectedTrip.difficulty]}`}>
                {selectedTrip.difficulty}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedTrip.title}</h3>
              <p className="text-gray-600 mb-6">{selectedTrip.description}</p>
              
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{selectedTrip.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{selectedTrip.groupSize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-600">{selectedTrip.rating} rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">{selectedTrip.location}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Daily Itinerary</h4>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {selectedTrip.itinerary.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-medium min-w-fit">
                          {item.time}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{item.activity}</p>
                          <p className="text-sm text-gray-600">{item.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What&apos;s Included</h4>
                  <div className="space-y-2 mb-4">
                    {selectedTrip.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Highlights</h4>
                  <div className="space-y-2">
                    {selectedTrip.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-600 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t pt-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-500 line-through">{selectedTrip.originalPrice}</span>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold">
                      Limited Time Offer
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-orange-600">{selectedTrip.price}</div>
                  <span className="text-sm text-gray-500">per person - All inclusive</span>
                </div>
                <div className="flex gap-3">
                  <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Check Availability
                  </button>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}