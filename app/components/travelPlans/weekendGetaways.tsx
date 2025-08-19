"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Star, Calendar, CheckCircle, Camera, Utensils } from "lucide-react";
import Image from "next/image";

interface WeekendPlan {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  duration: string;
  groupSize: string;
  rating: number;
  price: string;
  category: "cultural" | "adventure" | "relaxation" | "beach";
  itinerary: {
    day: string;
    activities: string[];
  }[];
  included: string[];
}

const weekendPlans: WeekendPlan[] = [
  {
    id: 1,
    title: "Hill Country Escape",
    location: "Kandy & Ella",
    description: "Perfect 2-day retreat through tea plantations, temples, and mountain views.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    duration: "2 Days / 1 Night",
    groupSize: "2-6 people",
    rating: 4.8,
    price: "$180",
    category: "cultural",
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Temple of the Sacred Tooth Relic visit",
          "Kandy Lake walk",
          "Traditional cultural show",
          "Overnight in Kandy"
        ]
      },
      {
        day: "Day 2", 
        activities: [
          "Scenic train to Ella",
          "Nine Arch Bridge photography",
          "Little Adam's Peak hike",
          "Tea factory tour"
        ]
      }
    ],
    included: ["Accommodation", "Breakfast", "Transport", "Guide"]
  },
  {
    id: 2,
    title: "Beach & Adventure",
    location: "Bentota & Hikkaduwa",
    description: "Action-packed weekend with water sports, beaches, and coastal adventures.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop",
    duration: "2 Days / 1 Night",
    groupSize: "2-8 people",
    rating: 4.7,
    price: "$150",
    category: "adventure",
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Jet skiing in Bentota",
          "Banana boat rides",
          "Beach volleyball",
          "Sunset dinner on beach"
        ]
      },
      {
        day: "Day 2",
        activities: [
          "Snorkeling at Hikkaduwa",
          "Glass bottom boat tour",
          "Turtle hatchery visit",
          "Coastal drive return"
        ]
      }
    ],
    included: ["Beach resort", "Water sports", "Equipment", "Meals"]
  },
  {
    id: 3,
    title: "Wellness Retreat",
    location: "Dambulla & Sigiriya",
    description: "Rejuvenating weekend with spa treatments, meditation, and cultural sites.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    duration: "2 Days / 1 Night",
    groupSize: "2-4 people",
    rating: 4.9,
    price: "$220",
    category: "relaxation",
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Ayurvedic spa treatments",
          "Meditation at cave temple",
          "Organic farm lunch",
          "Evening yoga session"
        ]
      },
      {
        day: "Day 2",
        activities: [
          "Sunrise at Sigiriya Rock",
          "Royal gardens exploration",
          "Traditional healing session",
          "Herbal tea tasting"
        ]
      }
    ],
    included: ["Luxury accommodation", "Spa treatments", "Organic meals", "Private guide"]
  },
  {
    id: 4,
    title: "Southern Coast Explorer",
    location: "Galle & Unawatuna",
    description: "Historic fort, pristine beaches, and colonial charm in the south.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    duration: "2 Days / 1 Night",
    groupSize: "2-6 people", 
    rating: 4.6,
    price: "$160",
    category: "beach",
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Galle Fort exploration",
          "Colonial architecture tour",
          "Art gallery visits",
          "Sunset from ramparts"
        ]
      },
      {
        day: "Day 2",
        activities: [
          "Unawatuna beach relaxation",
          "Snorkeling at coral reef",
          "Local seafood lunch",
          "Stilt fishermen photography"
        ]
      }
    ],
    included: ["Heritage hotel", "Fort guide", "Beach activities", "Local cuisine"]
  }
];

const categoryColors = {
  cultural: "bg-orange-100 text-orange-800",
  adventure: "bg-blue-100 text-blue-800", 
  relaxation: "bg-green-100 text-green-800",
  beach: "bg-cyan-100 text-cyan-800"
};

const categoryIcons = {
  cultural: Camera,
  adventure: CheckCircle,
  relaxation: Star,
  beach: MapPin
};

export default function WeekendGetaways() {
  const [selectedPlan, setSelectedPlan] = useState<WeekendPlan | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPlans = selectedCategory === "all" 
    ? weekendPlans 
    : weekendPlans.filter(plan => plan.category === selectedCategory);

  const categories = [
    { id: "all", name: "All Packages", icon: Star },
    { id: "cultural", name: "Cultural", icon: Camera },
    { id: "adventure", name: "Adventure", icon: CheckCircle },
    { id: "relaxation", name: "Wellness", icon: Star },
    { id: "beach", name: "Beach", icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Weekend Getaway"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Weekend Getaways
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
          >
            Perfect 2-3 day escapes to Sri Lanka&apos;s most beautiful destinations
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>2-3 Day Trips</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Small Groups</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>Premium Experiences</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-200"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weekend Plans Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Curated Weekend Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Short breaks designed for maximum adventure, relaxation, and cultural immersion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPlans.map((plan, index) => {
              const IconComponent = categoryIcons[plan.category];
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedPlan(plan)}
                >
                  <div className="relative h-64">
                    <Image
                      src={plan.image}
                      alt={plan.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <IconComponent className="w-6 h-6 text-white bg-black/30 backdrop-blur-sm rounded-full p-1" />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{plan.rating}</span>
                    </div>
                    <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[plan.category]}`}>
                      {plan.category.charAt(0).toUpperCase() + plan.category.slice(1)}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{plan.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{plan.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{plan.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{plan.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{plan.groupSize}</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500">Starting from</span>
                          <div className="text-2xl font-bold text-purple-600">{plan.price}</div>
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold transition-colors text-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Weekend Getaways */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Weekend Getaways?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Perfect for busy schedules, our weekend packages offer maximum experience in minimal time
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Escapes</h3>
                <p className="text-gray-600">Perfect for short breaks without lengthy planning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">All Inclusive</h3>
                <p className="text-gray-600">Accommodation, meals, and activities included</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Small Groups</h3>
                <p className="text-gray-600">Intimate experiences with personalized attention</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready for Your Weekend Adventure?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book your perfect weekend getaway and create lasting memories in just a few days
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
                Book Weekend Package
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Customize Trip
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plan Detail Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedPlan(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={selectedPlan.image}
                alt={selectedPlan.title}
                fill
                className="object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
              >
                ✕
              </button>
              <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[selectedPlan.category]}`}>
                {selectedPlan.category.charAt(0).toUpperCase() + selectedPlan.category.slice(1)}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <MapPin className="w-4 h-4" />
                <span>{selectedPlan.location}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedPlan.title}</h3>
              <p className="text-gray-600 mb-6">{selectedPlan.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{selectedPlan.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{selectedPlan.groupSize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-600">{selectedPlan.rating} rating</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Itinerary</h4>
                  <div className="space-y-4">
                    {selectedPlan.itinerary.map((day, index) => (
                      <div key={index} className="border-l-2 border-purple-200 pl-4">
                        <h5 className="font-semibold text-gray-800 mb-2">{day.day}</h5>
                        <ul className="space-y-1">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What&apos;s Included</h4>
                  <div className="space-y-2">
                    {selectedPlan.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t pt-6">
                <div>
                  <span className="text-sm text-gray-500">Package price from</span>
                  <div className="text-3xl font-bold text-purple-600">{selectedPlan.price}</div>
                  <span className="text-sm text-gray-500">per person</span>
                </div>
                <div className="flex gap-3">
                  <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all">
                    Customize
                  </button>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
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