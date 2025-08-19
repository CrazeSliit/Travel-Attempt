"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Star, CheckCircle, Crown, Gem, Utensils, Car, Plane, Shield } from "lucide-react";
import Image from "next/image";

interface LuxuryPackage {
  id: number;
  title: string;
  locations: string[];
  description: string;
  image: string;
  duration: string;
  groupSize: string;
  rating: number;
  price: string;
  originalPrice: string;
  category: "ultra-luxury" | "heritage" | "exclusive" | "presidential";
  features: {
    accommodation: string;
    transport: string;
    dining: string;
    experiences: string[];
  };
  itinerary: {
    day: string;
    location: string;
    activities: string[];
    accommodation: string;
    dining: string;
  }[];
  included: string[];
  exclusives: string[];
}

const luxuryPackages: LuxuryPackage[] = [
  {
    id: 1,
    title: "Presidential Sri Lanka Experience",
    locations: ["Colombo", "Kandy", "Nuwara Eliya", "Yala", "Galle"],
    description: "The ultimate luxury experience with presidential suite accommodations, private jets, and exclusive access to restricted areas.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    duration: "7 Days / 6 Nights",
    groupSize: "2-4 people",
    rating: 5.0,
    price: "$4,500",
    originalPrice: "$6,200",
    category: "presidential",
    features: {
      accommodation: "Presidential suites & royal residences",
      transport: "Private helicopter & luxury limousine",
      dining: "Michelin-starred chefs & royal cuisine",
      experiences: ["Private temple ceremonies", "Exclusive wildlife reserves", "Royal tea plantation", "Presidential yacht cruise"]
    },
    itinerary: [
      {
        day: "Day 1",
        location: "Colombo",
        activities: ["Private jet arrival", "Presidential suite check-in", "Private city tour with historian", "Exclusive rooftop dinner"],
        accommodation: "Presidential Suite - Shangri-La Colombo",
        dining: "Private chef dinner on helipad"
      },
      {
        day: "Day 2",
        location: "Kandy",
        activities: ["Helicopter transfer", "Private Temple of Tooth ceremony", "Royal botanical gardens exclusive tour", "Traditional dance performance"],
        accommodation: "Royal residence - Kandy House",
        dining: "Royal cuisine with former palace chef"
      },
      {
        day: "Day 3",
        location: "Nuwara Eliya",
        activities: ["Scenic helicopter flight", "Private tea plantation ownership experience", "Colonial mansion tour", "Exclusive golf at Hill Club"],
        accommodation: "Presidential villa - Grand Hotel",
        dining: "Victorian era themed dinner"
      },
      {
        day: "Day 4",
        location: "Yala",
        activities: ["Private wildlife reserve access", "Exclusive leopard tracking", "Bush dinner under stars", "Photography masterclass"],
        accommodation: "Luxury safari pavilion - Chena Huts",
        dining: "Safari camp gourmet experience"
      },
      {
        day: "Day 5",
        location: "Galle",
        activities: ["Helicopter coastal flight", "Private fort restoration tour", "Exclusive art gallery visits", "Sunset yacht cruise"],
        accommodation: "Heritage suite - Amangalla",
        dining: "Colonial mansion fine dining"
      }
    ],
    included: ["Private helicopter", "Presidential accommodations", "Personal butler", "Private guides", "All gourmet meals", "Exclusive experiences"],
    exclusives: ["Access to restricted heritage sites", "Private ceremonies", "Presidential security detail", "24/7 concierge", "Custom itinerary modifications"]
  },
  {
    id: 2,
    title: "Heritage Palace Collection",
    locations: ["Sigiriya", "Dambulla", "Polonnaruwa", "Anuradhapura"],
    description: "Stay in restored palaces and heritage properties while exploring ancient kingdoms with archaeological experts.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    duration: "5 Days / 4 Nights",
    groupSize: "2-6 people",
    rating: 4.9,
    price: "$2,800",
    originalPrice: "$3,500",
    category: "heritage",
    features: {
      accommodation: "Restored palaces & heritage hotels",
      transport: "Vintage Rolls Royce & private helicopter",
      dining: "Royal cuisine & traditional feasts",
      experiences: ["Archaeological expeditions", "Private museum tours", "Ancient craft workshops", "Royal ceremony recreations"]
    },
    itinerary: [
      {
        day: "Day 1",
        location: "Sigiriya",
        activities: ["Royal arrival at palace hotel", "Private Sigiriya climb before dawn", "Archaeological breakfast", "Rock fortress exclusive access"],
        accommodation: "Palace wing - Heritance Kandalama",
        dining: "Ancient royal feast recreation"
      },
      {
        day: "Day 2",
        location: "Dambulla",
        activities: ["Cave temple private blessing", "Golden temple exclusive tour", "Traditional painting workshop", "Meditation with monks"],
        accommodation: "Heritage villa - Kalundewa Retreat",
        dining: "Monastery cuisine experience"
      },
      {
        day: "Day 3",
        location: "Polonnaruwa",
        activities: ["Royal palace ruins private tour", "Gal Vihara exclusive access", "Archaeological dig participation", "Ancient irrigation system tour"],
        accommodation: "Palace suite - The Lake House",
        dining: "Medieval banquet recreation"
      },
      {
        day: "Day 4",
        location: "Anuradhapura",
        activities: ["Sacred Bodhi Tree private ceremony", "Ancient stupas sunrise visit", "Royal gardens restoration tour", "Archaeological museum curator tour"],
        accommodation: "Heritage mansion - Ulagalla Resort",
        dining: "Ancient kingdom cuisine"
      }
    ],
    included: ["Heritage accommodations", "Archaeological guides", "Vintage transport", "Traditional crafts", "Royal dining", "Private ceremonies"],
    exclusives: ["After-hours monument access", "Archaeological dig participation", "Restored palace stays", "Royal ceremony recreations"]
  },
  {
    id: 3,
    title: "Ultra-Luxury Beach & Spa Retreat",
    locations: ["Bentota", "Mirissa", "Unawatuna", "Hikkaduwa"],
    description: "Ultimate relaxation with overwater villas, world-class spas, and exclusive beach experiences along the southern coast.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    duration: "6 Days / 5 Nights",
    groupSize: "2-4 people",
    rating: 4.8,
    price: "$3,200",
    originalPrice: "$4,000",
    category: "ultra-luxury",
    features: {
      accommodation: "Overwater villas & beachfront suites",
      transport: "Private yacht & helicopter transfers",
      dining: "Underwater restaurant & beach fine dining",
      experiences: ["Private island access", "Whale watching luxury cruise", "Spa treatments", "Exclusive beach clubs"]
    },
    itinerary: [
      {
        day: "Day 1",
        location: "Bentota",
        activities: ["Seaplane arrival", "Overwater villa check-in", "Private beach setup", "Sunset champagne cruise"],
        accommodation: "Overwater villa - Centara Ceysands",
        dining: "Underwater glass dining experience"
      },
      {
        day: "Day 2",
        location: "Bentota",
        activities: ["Private yacht day cruise", "Exclusive water sports", "Floating spa treatments", "Beach butler service"],
        accommodation: "Overwater villa - Centara Ceysands",
        dining: "Private beach dinner setup"
      },
      {
        day: "Day 3",
        location: "Mirissa",
        activities: ["Luxury whale watching expedition", "Private island picnic", "Helicopter coastal tour", "Spa couple treatments"],
        accommodation: "Clifftop villa - Cape Weligama",
        dining: "Michelin-starred chef experience"
      },
      {
        day: "Day 4",
        location: "Unawatuna",
        activities: ["Private coral reef diving", "Exclusive turtle sanctuary", "Beach photography session", "Ayurvedic spa day"],
        accommodation: "Beach villa - Thaproban Pavilion",
        dining: "Traditional Sri Lankan feast on beach"
      },
      {
        day: "Day 5",
        location: "Hikkaduwa",
        activities: ["Glass-bottom boat private tour", "Exclusive diving with marine biologist", "Beach club membership", "Farewell sunset cruise"],
        accommodation: "Luxury suite - Coral Rock Hotel",
        dining: "Seafood tasting menu by celebrity chef"
      }
    ],
    included: ["Overwater villas", "Private yacht", "Spa treatments", "Water sports", "Fine dining", "Personal butler"],
    exclusives: ["Private island access", "Underwater dining", "Celebrity chef experiences", "Exclusive marine expeditions"]
  },
  {
    id: 4,
    title: "Exclusive Wildlife & Adventure Elite",
    locations: ["Yala", "Udawalawe", "Sinharaja", "Horton Plains"],
    description: "VIP wildlife experiences with luxury safari lodges, private reserves, and exclusive conservation programs.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
    duration: "5 Days / 4 Nights",
    groupSize: "2-6 people",
    rating: 4.9,
    price: "$2,600",
    originalPrice: "$3,200",
    category: "exclusive",
    features: {
      accommodation: "Luxury safari lodges & eco pavilions",
      transport: "Private 4WD & helicopter safari",
      dining: "Bush dining & conservation cuisine",
      experiences: ["Private wildlife reserves", "Conservation participation", "Research expeditions", "Exclusive animal encounters"]
    },
    itinerary: [
      {
        day: "Day 1",
        location: "Yala",
        activities: ["Helicopter safari arrival", "Private Block 5 access", "Luxury lodge check-in", "Evening leopard tracking"],
        accommodation: "Safari pavilion - Chena Huts",
        dining: "Bush dinner under baobab tree"
      },
      {
        day: "Day 2",
        location: "Yala",
        activities: ["Dawn leopard expedition", "Private reserve tour", "Wildlife photography masterclass", "Conservation project visit"],
        accommodation: "Safari pavilion - Chena Huts",
        dining: "Traditional village feast with locals"
      },
      {
        day: "Day 3",
        location: "Udawalawe",
        activities: ["Elephant orphanage exclusive access", "Private tank safari", "Research center tour", "Mahout experience"],
        accommodation: "Eco lodge - Grand Udawalawe Safari",
        dining: "Conservation cuisine experience"
      },
      {
        day: "Day 4",
        location: "Sinharaja",
        activities: ["Rainforest canopy walk", "Endemic species tracking", "Research expedition", "Night jungle sounds"],
        accommodation: "Luxury treehouse - Rainforest Edge",
        dining: "Organic rainforest cuisine"
      }
    ],
    included: ["Luxury safari lodges", "Private guides", "Conservation experiences", "Photography equipment", "Research participation"],
    exclusives: ["Private reserve access", "Research expedition participation", "Conservation project involvement", "After-hours park access"]
  }
];

const categoryColors = {
  "ultra-luxury": "bg-purple-100 text-purple-800",
  heritage: "bg-amber-100 text-amber-800",
  exclusive: "bg-emerald-100 text-emerald-800",
  presidential: "bg-red-100 text-red-800"
};

const categoryIcons = {
  "ultra-luxury": Gem,
  heritage: Crown,
  exclusive: Star,
  presidential: Shield
};

export default function LuxuryPackages() {
  const [selectedPackage, setSelectedPackage] = useState<LuxuryPackage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPackages = selectedCategory === "all" 
    ? luxuryPackages 
    : luxuryPackages.filter(pkg => pkg.category === selectedCategory);

  const categories = [
    { id: "all", name: "All Luxury", icon: Crown },
    { id: "presidential", name: "Presidential", icon: Shield },
    { id: "ultra-luxury", name: "Ultra-Luxury", icon: Gem },
    { id: "heritage", name: "Heritage", icon: Crown },
    { id: "exclusive", name: "Exclusive", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop"
          alt="Luxury Travel"
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
            <Crown className="w-8 h-8 text-amber-400" />
            <span className="text-amber-400 text-lg font-semibold">Ultra-Premium Experiences</span>
            <Crown className="w-8 h-8 text-amber-400" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Luxury Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
          >
            Indulge in extraordinary experiences with presidential suites, private jets, and exclusive access to Sri Lanka&apos;s finest
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5" />
              <span>Private Aviation</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5" />
              <span>Royal Treatment</span>
            </div>
            <div className="flex items-center gap-2">
              <Gem className="w-5 h-5" />
              <span>Exclusive Access</span>
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
                      ? "bg-amber-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-amber-50 border border-gray-200"
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

      {/* Luxury Packages Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ultra-Premium Travel Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover unparalleled luxury with exclusive access, presidential accommodations, and world-class service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPackages.map((pkg, index) => {
              const IconComponent = categoryIcons[pkg.category];
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border border-amber-100"
                  onClick={() => setSelectedPackage(pkg)}
                >
                  <div className="relative h-64">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <IconComponent className="w-6 h-6 text-amber-400 bg-black/30 backdrop-blur-sm rounded-full p-1" />
                      <span className="bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm font-semibold">
                        LUXURY
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                    </div>
                    <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[pkg.category]}`}>
                      {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1).replace('-', ' ')}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{pkg.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{pkg.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Luxury Features:</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-1">
                          <Crown className="w-3 h-3 text-amber-500" />
                          <span className="text-gray-600">{pkg.features.accommodation}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Car className="w-3 h-3 text-amber-500" />
                          <span className="text-gray-600">{pkg.features.transport}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{pkg.groupSize}</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold">
                              Save {Math.round((1 - parseInt(pkg.price.replace(/[^0-9]/g, '')) / parseInt(pkg.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-amber-600">{pkg.price}</div>
                          <span className="text-sm text-gray-500">per person</span>
                        </div>
                        <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-semibold transition-colors text-sm flex items-center gap-2">
                          <Crown className="w-4 h-4" />
                          View Luxury Details
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

      {/* Luxury Benefits */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Pinnacle of Luxury Travel
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Experience unmatched elegance with services and amenities reserved for the most discerning travelers
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Private Aviation</h3>
                <p className="text-gray-600">Helicopters, private jets, and exclusive transport</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Royal Treatment</h3>
                <p className="text-gray-600">Presidential suites and royal residences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gem className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Exclusive Access</h3>
                <p className="text-gray-600">Private ceremonies and restricted locations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Ultimate Luxury?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our luxury travel specialists to create your bespoke presidential experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                <Crown className="w-5 h-5" />
                Book Luxury Experience
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Speak to Specialist
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedPackage(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={selectedPackage.image}
                alt={selectedPackage.title}
                fill
                className="object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
              >
                ✕
              </button>
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <Crown className="w-6 h-6 text-amber-400" />
                <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full font-semibold">
                  LUXURY EXPERIENCE
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedPackage.title}</h3>
              <p className="text-gray-600 mb-6">{selectedPackage.description}</p>
              
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{selectedPackage.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{selectedPackage.groupSize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-600">{selectedPackage.rating} rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-600">Ultra-Premium</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Luxury Itinerary</h4>
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {selectedPackage.itinerary.map((day, index) => (
                      <div key={index} className="border-l-2 border-amber-200 pl-4">
                        <h5 className="font-semibold text-gray-800 mb-1">{day.day} - {day.location}</h5>
                        <p className="text-sm text-amber-600 mb-1">{day.accommodation}</p>
                        <p className="text-sm text-purple-600 mb-2">{day.dining}</p>
                        <ul className="space-y-1">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 text-amber-500 mt-1 flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Luxury Inclusions</h4>
                  <div className="space-y-2 mb-4">
                    {selectedPackage.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Crown className="w-4 h-4 text-amber-500" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Exclusive Benefits</h4>
                  <div className="space-y-2">
                    {selectedPackage.exclusives.map((exclusive, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Gem className="w-4 h-4 text-purple-500" />
                        <span className="text-gray-600 text-sm">{exclusive}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t pt-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-500 line-through">{selectedPackage.originalPrice}</span>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold">
                      Limited Time Offer
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-amber-600">{selectedPackage.price}</div>
                  <span className="text-sm text-gray-500">per person - All inclusive luxury</span>
                </div>
                <div className="flex gap-3">
                  <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2">
                    <Utensils className="w-4 h-4" />
                    Customize
                  </button>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Book Luxury Experience
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