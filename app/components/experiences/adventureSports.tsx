"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Star, Mountain, Waves, TreePine } from "lucide-react";
import Image from "next/image";

interface AdventureActivity {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  duration: string;
  difficulty: string;
  rating: number;
  price: string;
  category: "hiking" | "water" | "extreme" | "wildlife";
  highlights: string[];
}

const adventureActivities: AdventureActivity[] = [
  {
    id: 1,
    name: "Adam's Peak Sunrise Hike",
    location: "Dalhousie",
    description: "Sacred mountain pilgrimage with breathtaking sunrise views from the summit.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    duration: "6-8 hours",
    difficulty: "Challenging",
    rating: 4.9,
    price: "$45",
    category: "hiking",
    highlights: ["Sacred footprint", "Sunrise views", "Night climb", "Pilgrimage route"]
  },
  {
    id: 2,
    name: "White Water Rafting",
    location: "Kitulgala",
    description: "Thrilling rapids through jungle landscapes on the Kelani River.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    duration: "3-4 hours",
    difficulty: "Moderate",
    rating: 4.7,
    price: "$35",
    category: "water",
    highlights: ["Grade 3 rapids", "Jungle scenery", "Team adventure", "Safety equipment"]
  },
  {
    id: 3,
    name: "Ella Rock Hiking",
    location: "Ella",
    description: "Spectacular hike through tea plantations to panoramic mountain views.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    duration: "4-5 hours",
    difficulty: "Moderate",
    rating: 4.8,
    price: "$25",
    category: "hiking",
    highlights: ["Tea plantation trek", "360° views", "Local guides", "Photo opportunities"]
  },
  {
    id: 4,
    name: "Surfing Lessons",
    location: "Arugam Bay",
    description: "Learn to surf on some of Asia's best waves with professional instructors.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop",
    duration: "2-3 hours",
    difficulty: "Beginner",
    rating: 4.6,
    price: "$30",
    category: "water",
    highlights: ["Professional instruction", "Equipment included", "Beach location", "All skill levels"]
  },
  {
    id: 5,
    name: "Zip Lining Canopy Tour",
    location: "Ella",
    description: "Soar through the treetops on an exhilarating zip line adventure.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
    duration: "2 hours",
    difficulty: "Easy",
    rating: 4.5,
    price: "$40",
    category: "extreme",
    highlights: ["Canopy views", "Safety certified", "Multiple lines", "Photo service"]
  },
  {
    id: 6,
    name: "Leopard Safari",
    location: "Yala National Park",
    description: "Track the elusive Sri Lankan leopard and diverse wildlife on an exciting safari.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
    duration: "Half day",
    difficulty: "Easy",
    rating: 4.8,
    price: "$55",
    category: "wildlife",
    highlights: ["Leopard sightings", "Expert guides", "4WD vehicle", "Bird watching"]
  }
];

const categoryIcons = {
  hiking: Mountain,
  water: Waves,
  extreme: TreePine,
  wildlife: TreePine
};

const difficultyColors: Record<string, string> = {
  "Easy": "bg-green-100 text-green-800",
  "Moderate": "bg-yellow-100 text-yellow-800",
  "Challenging": "bg-red-100 text-red-800"
};

export default function AdventureSports() {
  const [selectedActivity, setSelectedActivity] = useState<AdventureActivity | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredActivities = selectedCategory === "all" 
    ? adventureActivities 
    : adventureActivities.filter(activity => activity.category === selectedCategory);

  const categories = [
    { id: "all", name: "All Adventures", icon: Mountain },
    { id: "hiking", name: "Hiking & Trekking", icon: Mountain },
    { id: "water", name: "Water Sports", icon: Waves },
    { id: "extreme", name: "Extreme Sports", icon: TreePine },
    { id: "wildlife", name: "Wildlife Adventures", icon: TreePine }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Adventure Sports"
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
            Adventure Sports
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
          >
            Push your limits with thrilling adventures in Sri Lanka&apos;s stunning landscapes
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center gap-2">
              <Mountain className="w-5 h-5" />
              <span>Mountain Adventures</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-5 h-5" />
              <span>Water Sports</span>
            </div>
            <div className="flex items-center gap-2">
              <TreePine className="w-5 h-5" />
              <span>Extreme Activities</span>
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
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
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

      {/* Adventure Activities Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thrilling Adventures Await
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From mountain peaks to ocean waves, discover adrenaline-pumping activities in paradise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity, index) => {
              const IconComponent = categoryIcons[activity.category];
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedActivity(activity)}
                >
                  <div className="relative h-64">
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <IconComponent className="w-6 h-6 text-white bg-black/30 backdrop-blur-sm rounded-full p-1" />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{activity.rating}</span>
                    </div>
                    <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[activity.difficulty]}`}>
                      {activity.difficulty}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{activity.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{activity.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{activity.duration}</span>
                      </div>
                      <div className="text-lg font-bold text-blue-600">{activity.price}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Information */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Safety First, Adventure Always
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              All our adventure activities are conducted with certified guides and top-quality safety equipment
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guides</h3>
                <p className="text-gray-600">Certified professionals with years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Equipment</h3>
                <p className="text-gray-600">International standard safety gear and equipment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Knowledge</h3>
                <p className="text-gray-600">Deep understanding of terrain and conditions</p>
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
              Ready for Your Next Adventure?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us for unforgettable experiences that will challenge and inspire you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
                Book Adventure
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                View All Activities
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedActivity(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={selectedActivity.image}
                alt={selectedActivity.name}
                fill
                className="object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
              >
                ✕
              </button>
              <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[selectedActivity.difficulty]}`}>
                {selectedActivity.difficulty}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <MapPin className="w-4 h-4" />
                <span>{selectedActivity.location}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedActivity.name}</h3>
              <p className="text-gray-600 mb-6">{selectedActivity.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{selectedActivity.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-600">{selectedActivity.rating} rating</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What&apos;s Included</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedActivity.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-600 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">{selectedActivity.price}</div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  Book Adventure
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}