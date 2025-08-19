"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Star, Calendar, CheckCircle, Camera, Utensils, Plane, Hotel } from "lucide-react";
import Image from "next/image";

interface WeekLongPlan {
  id: number;
  title: string;
  locations: string[];
  description: string;
  image: string;
  duration: string;
  groupSize: string;
  rating: number;
  price: string;
  category: "cultural" | "adventure" | "comprehensive" | "wildlife";
  itinerary: {
    day: string;
    location: string;
    activities: string[];
    accommodation: string;
  }[];
  included: string[];
  highlights: string[];
}

const weekLongPlans: WeekLongPlan[] = [
  {
    id: 1,
    title: "Cultural Triangle Explorer",
    locations: ["Colombo", "Dambulla", "Sigiriya", "Polonnaruwa", "Kandy"],
    description: "Comprehensive 7-day journey through Sri Lanka's ancient kingdoms and cultural heritage sites.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    duration: "7 Days / 6 Nights",
    groupSize: "2-8 people",
    rating: 4.9,
    price: "$850",
    category: "cultural",
    itinerary: [
      {
        day: "Day 1",
        location: "Colombo",
        activities: ["Airport pickup", "City orientation tour", "National Museum visit", "Galle Face Green sunset"],
        accommodation: "4-star city hotel"
      },
      {
        day: "Day 2",
        location: "Dambulla",
        activities: ["Travel to Dambulla", "Cave Temple exploration", "Golden Temple visit", "Local village tour"],
        accommodation: "Heritage resort"
      },
      {
        day: "Day 3",
        location: "Sigiriya",
        activities: ["Sunrise at Sigiriya Rock", "Royal Gardens tour", "Frescoes gallery", "Mirror Wall inscription"],
        accommodation: "Eco lodge"
      },
      {
        day: "Day 4",
        location: "Polonnaruwa",
        activities: ["Ancient city exploration", "Gal Vihara statues", "Royal palace ruins", "Archaeological museum"],
        accommodation: "Boutique hotel"
      },
      {
        day: "Day 5",
        location: "Kandy",
        activities: ["Temple of Tooth Relic", "Royal Botanical Gardens", "Cultural dance show", "Kandy Lake walk"],
        accommodation: "Hill country resort"
      },
      {
        day: "Day 6",
        location: "Kandy",
        activities: ["Tea plantation visit", "Factory tour and tasting", "Spice garden exploration", "Local market visit"],
        accommodation: "Hill country resort"
      },
      {
        day: "Day 7",
        location: "Colombo",
        activities: ["Return to Colombo", "Shopping at Pettah Market", "Departure preparation", "Airport transfer"],
        accommodation: "Day use hotel"
      }
    ],
    included: ["All accommodations", "Private transport", "Expert guide", "All entrance fees", "Daily breakfast"],
    highlights: ["UNESCO World Heritage sites", "Ancient rock fortress", "Sacred tooth relic", "Cultural performances", "Tea plantation experience"]
  },
  {
    id: 2,
    title: "Adventure Circuit",
    locations: ["Ella", "Yala", "Arugam Bay", "Mirissa", "Bentota"],
    description: "Action-packed week combining mountain adventures, wildlife safaris, and coastal activities.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    duration: "7 Days / 6 Nights",
    groupSize: "4-10 people",
    rating: 4.8,
    price: "$750",
    category: "adventure",
    itinerary: [
      {
        day: "Day 1",
        location: "Ella",
        activities: ["Arrival and check-in", "Little Adam's Peak hike", "Nine Arch Bridge visit", "Evening at leisure"],
        accommodation: "Mountain eco lodge"
      },
      {
        day: "Day 2",
        location: "Ella",
        activities: ["Ella Rock trekking", "Tea plantation walk", "Waterfall exploration", "Zip-lining adventure"],
        accommodation: "Mountain eco lodge"
      },
      {
        day: "Day 3",
        location: "Yala",
        activities: ["Travel to Yala", "Afternoon safari game drive", "Wildlife photography", "Bush dinner experience"],
        accommodation: "Safari camp"
      },
      {
        day: "Day 4",
        location: "Arugam Bay",
        activities: ["Morning safari", "Travel to coast", "Surfing lessons", "Beach volleyball"],
        accommodation: "Beach resort"
      },
      {
        day: "Day 5",
        location: "Mirissa",
        activities: ["Whale watching tour", "Snorkeling session", "Beach relaxation", "Sunset cruise"],
        accommodation: "Beachfront hotel"
      },
      {
        day: "Day 6",
        location: "Bentota",
        activities: ["Water sports activities", "Jet skiing", "Banana boat rides", "River safari"],
        accommodation: "Beach resort"
      },
      {
        day: "Day 7",
        location: "Colombo",
        activities: ["Return journey", "City tour", "Souvenir shopping", "Departure"],
        accommodation: "Airport hotel"
      }
    ],
    included: ["Adventure accommodations", "All activities", "Professional guides", "Safety equipment", "Transport"],
    highlights: ["Mountain trekking", "Wildlife safari", "Whale watching", "Surfing lessons", "Water sports"]
  },
  {
    id: 3,
    title: "Grand Sri Lanka Tour",
    locations: ["Colombo", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Galle", "Bentota"],
    description: "Complete island experience covering highlands, wildlife, culture, and coastal beauty.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    duration: "7 Days / 6 Nights",
    groupSize: "2-6 people",
    rating: 4.9,
    price: "$950",
    category: "comprehensive",
    itinerary: [
      {
        day: "Day 1",
        location: "Colombo & Kandy",
        activities: ["Arrival in Colombo", "City highlights tour", "Travel to Kandy", "Temple of Tooth evening visit"],
        accommodation: "Kandy boutique hotel"
      },
      {
        day: "Day 2",
        location: "Nuwara Eliya",
        activities: ["Scenic train journey", "Tea plantation tour", "Victoria Park visit", "Colonial architecture walk"],
        accommodation: "Hill station hotel"
      },
      {
        day: "Day 3",
        location: "Ella",
        activities: ["Little Adam's Peak", "Nine Arch Bridge", "Tea factory visit", "Local village experience"],
        accommodation: "Eco lodge"
      },
      {
        day: "Day 4",
        location: "Yala",
        activities: ["Morning travel", "Afternoon safari", "Leopard tracking", "Evening at camp"],
        accommodation: "Safari lodge"
      },
      {
        day: "Day 5",
        location: "Galle",
        activities: ["Travel to south coast", "Galle Fort exploration", "Art galleries visit", "Sunset from ramparts"],
        accommodation: "Heritage hotel"
      },
      {
        day: "Day 6",
        location: "Bentota",
        activities: ["Beach relaxation", "Water sports", "River boat safari", "Turtle hatchery visit"],
        accommodation: "Beach resort"
      },
      {
        day: "Day 7",
        location: "Colombo",
        activities: ["Return to capital", "Last-minute shopping", "Cultural center visit", "Departure"],
        accommodation: "Airport transit"
      }
    ],
    included: ["Luxury accommodations", "Private vehicle", "Expert guide", "All meals", "Activities"],
    highlights: ["Complete island coverage", "Scenic train ride", "Wildlife safari", "Cultural immersion", "Beach relaxation"]
  },
  {
    id: 4,
    title: "Wildlife & Nature Circuit",
    locations: ["Udawalawe", "Yala", "Sinharaja", "Horton Plains", "Minneriya"],
    description: "Nature lover's paradise focusing on national parks, endemic species, and biodiversity.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
    duration: "7 Days / 6 Nights",
    groupSize: "2-8 people",
    rating: 4.7,
    price: "$720",
    category: "wildlife",
    itinerary: [
      {
        day: "Day 1",
        location: "Udawalawe",
        activities: ["Arrival and check-in", "Afternoon elephant safari", "Udawalawe reservoir visit", "Wildlife photography"],
        accommodation: "Eco safari lodge"
      },
      {
        day: "Day 2",
        location: "Yala",
        activities: ["Early morning game drive", "Travel to Yala", "Afternoon leopard safari", "Block 1 exploration"],
        accommodation: "Jungle camp"
      },
      {
        day: "Day 3",
        location: "Sinharaja",
        activities: ["Rainforest trekking", "Endemic bird watching", "Canopy walk experience", "Nature guide talk"],
        accommodation: "Rainforest lodge"
      },
      {
        day: "Day 4",
        location: "Horton Plains",
        activities: ["World's End viewpoint", "Baker's Falls visit", "Cloud forest walk", "Endemic flora study"],
        accommodation: "Mountain resort"
      },
      {
        day: "Day 5",
        location: "Minneriya",
        activities: ["Elephant gathering safari", "Ancient tank system", "Bird watching", "Village experience"],
        accommodation: "Heritage hotel"
      },
      {
        day: "Day 6",
        location: "Sigiriya",
        activities: ["Rock fortress climb", "Pidurangala sunset", "Village cycling tour", "Traditional lunch"],
        accommodation: "Nature resort"
      },
      {
        day: "Day 7",
        location: "Colombo",
        activities: ["Return journey", "National Zoo visit", "Wildlife conservation center", "Departure"],
        accommodation: "City hotel"
      }
    ],
    included: ["Park accommodations", "All safari drives", "Nature guides", "Park fees", "Transportation"],
    highlights: ["Five national parks", "Leopard sightings", "Elephant gathering", "Endemic species", "Rainforest experience"]
  }
];

const categoryColors = {
  cultural: "bg-orange-100 text-orange-800",
  adventure: "bg-blue-100 text-blue-800",
  comprehensive: "bg-purple-100 text-purple-800",
  wildlife: "bg-green-100 text-green-800"
};

const categoryIcons = {
  cultural: Camera,
  adventure: CheckCircle,
  comprehensive: Star,
  wildlife: Users
};

export default function WeekLongAdventures() {
  const [selectedPlan, setSelectedPlan] = useState<WeekLongPlan | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPlans = selectedCategory === "all" 
    ? weekLongPlans 
    : weekLongPlans.filter(plan => plan.category === selectedCategory);

  const categories = [
    { id: "all", name: "All Tours", icon: Star },
    { id: "cultural", name: "Cultural", icon: Camera },
    { id: "adventure", name: "Adventure", icon: CheckCircle },
    { id: "comprehensive", name: "Complete", icon: Plane },
    { id: "wildlife", name: "Wildlife", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Week-long Adventures"
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
            Week-long Adventures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
          >
            Comprehensive 7-day journeys exploring the full beauty and diversity of Sri Lanka
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>7-Day Journeys</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Multiple Destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <Hotel className="w-5 h-5" />
              <span>Premium Accommodations</span>
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
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200"
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

      {/* Week-long Plans Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Epic 7-Day Adventures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tours designed to showcase the very best of Sri Lanka in one unforgettable week
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{plan.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{plan.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Tour Destinations:</h4>
                      <div className="flex flex-wrap gap-1">
                        {plan.locations.slice(0, 4).map((location, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                            {location}
                          </span>
                        ))}
                        {plan.locations.length > 4 && (
                          <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                            +{plan.locations.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

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
                          <span className="text-sm text-gray-500">Complete package from</span>
                          <div className="text-2xl font-bold text-indigo-600">{plan.price}</div>
                        </div>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold transition-colors text-sm">
                          View Itinerary
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

      {/* Tour Benefits */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Week-long Tours?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Experience the complete essence of Sri Lanka with our carefully crafted extended journeys
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Coverage</h3>
                <p className="text-gray-600">Visit multiple regions and experience diverse landscapes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hotel className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Comfort</h3>
                <p className="text-gray-600">Carefully selected accommodations for maximum comfort</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cultural Immersion</h3>
                <p className="text-gray-600">Deep dive into local culture, cuisine, and traditions</p>
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
              Ready for Your Week-long Adventure?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Embark on a comprehensive journey that will show you the true heart and soul of Sri Lanka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
                Book 7-Day Tour
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Customize Itinerary
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
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
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
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedPlan.title}</h3>
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

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Daily Itinerary</h4>
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {selectedPlan.itinerary.map((day, index) => (
                      <div key={index} className="border-l-2 border-indigo-200 pl-4">
                        <h5 className="font-semibold text-gray-800 mb-1">{day.day} - {day.location}</h5>
                        <p className="text-sm text-gray-500 mb-2">{day.accommodation}</p>
                        <ul className="space-y-1">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 text-indigo-500 mt-1 flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Package Includes</h4>
                  <div className="space-y-2 mb-4">
                    {selectedPlan.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Tour Highlights</h4>
                  <div className="space-y-2">
                    {selectedPlan.highlights.map((highlight, index) => (
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
                  <span className="text-sm text-gray-500">Complete 7-day package from</span>
                  <div className="text-3xl font-bold text-indigo-600">{selectedPlan.price}</div>
                  <span className="text-sm text-gray-500">per person</span>
                </div>
                <div className="flex gap-3">
                  <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all">
                    Customize Tour
                  </button>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
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