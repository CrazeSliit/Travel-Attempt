"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Star, Camera } from "lucide-react";
import Image from "next/image";

interface CulturalSite {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  duration: string;
  rating: number;
  price: string;
  highlights: string[];
}

const culturalSites: CulturalSite[] = [
  {
    id: 1,
    name: "Temple of the Sacred Tooth Relic",
    location: "Kandy",
    description: "One of the most sacred Buddhist temples in the world, housing the tooth relic of Lord Buddha.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    duration: "2-3 hours",
    rating: 4.8,
    price: "$15",
    highlights: ["Sacred tooth relic", "Traditional architecture", "Evening ceremonies", "Cultural museum"]
  },
  {
    id: 2,
    name: "Sigiriya Rock Fortress",
    location: "Dambulla",
    description: "Ancient rock fortress and palace ruins with stunning frescoes and panoramic views.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    duration: "4-5 hours",
    rating: 4.9,
    price: "$30",
    highlights: ["Lion Rock climb", "Ancient frescoes", "Mirror wall", "Royal gardens"]
  },
  {
    id: 3,
    name: "Dambulla Cave Temple",
    location: "Dambulla",
    description: "UNESCO World Heritage site with spectacular Buddhist cave paintings and statues.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    duration: "2-3 hours",
    rating: 4.7,
    price: "$20",
    highlights: ["Cave paintings", "Buddha statues", "Golden temple", "Panoramic views"]
  },
  {
    id: 4,
    name: "Polonnaruwa Ancient City",
    location: "Polonnaruwa",
    description: "Medieval capital of Sri Lanka with well-preserved ruins and archaeological treasures.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    duration: "Full day",
    rating: 4.6,
    price: "$25",
    highlights: ["Ancient ruins", "Gal Vihara", "Royal palace", "Archaeological museum"]
  },
  {
    id: 5,
    name: "Anuradhapura Sacred City",
    location: "Anuradhapura",
    description: "First capital of Sri Lanka with ancient stupas, monasteries, and the sacred Bodhi Tree.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    duration: "Full day",
    rating: 4.8,
    price: "$30",
    highlights: ["Sacred Bodhi Tree", "Ancient stupas", "Monasteries", "Archaeological sites"]
  },
  {
    id: 6,
    name: "Galle Fort",
    location: "Galle",
    description: "Dutch colonial fortress with charming streets, galleries, and ocean views.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    duration: "Half day",
    rating: 4.5,
    price: "$10",
    highlights: ["Dutch architecture", "Art galleries", "Lighthouse", "Ocean views"]
  }
];

const culturalExperiences = [
  {
    title: "Traditional Dance Performance",
    description: "Experience authentic Kandyan dance with colorful costumes and drumming",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    duration: "2 hours"
  },
  {
    title: "Cooking Class",
    description: "Learn to prepare authentic Sri Lankan curry and traditional dishes",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    duration: "3 hours"
  },
  {
    title: "Temple Meditation",
    description: "Join monks for morning meditation and Buddhist teachings",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    duration: "1 hour"
  },
  {
    title: "Artisan Workshop",
    description: "Watch traditional craftsmen create batik, wood carvings, and jewelry",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    duration: "2 hours"
  }
];

export default function CulturalHeritage() {
  const [selectedSite, setSelectedSite] = useState<CulturalSite | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
          alt="Sri Lankan Temple"
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
            Cultural Heritage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
          >
            Discover 2,500 years of history through ancient temples, royal palaces, and sacred sites
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              <span>UNESCO Sites</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Ancient Cities</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Cultural Experiences</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cultural Sites Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sacred Sites & Ancient Wonders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Sri Lanka&apos;s most significant cultural and religious sites, each telling a unique story of our rich heritage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalSites.map((site, index) => (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSite(site)}
              >
                <div className="relative h-64">
                  <Image
                    src={site.image}
                    alt={site.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{site.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{site.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{site.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{site.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{site.duration}</span>
                    </div>
                    <div className="text-lg font-bold text-orange-600">{site.price}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Immersive Cultural Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engage with living traditions and learn from local artisans and spiritual leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{experience.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{experience.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Explore Our Heritage?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us on a journey through time and discover the spiritual and cultural treasures of Sri Lanka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
                Book Cultural Tour
              </button>
              <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                View All Experiences
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Site Detail Modal */}
      {selectedSite && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedSite(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={selectedSite.image}
                alt={selectedSite.name}
                fill
                className="object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedSite(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <MapPin className="w-4 h-4" />
                <span>{selectedSite.location}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedSite.name}</h3>
              <p className="text-gray-600 mb-6">{selectedSite.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{selectedSite.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-600">{selectedSite.rating} rating</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Highlights</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedSite.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span className="text-gray-600 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-orange-600">{selectedSite.price}</div>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
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