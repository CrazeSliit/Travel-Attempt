"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { MapPin, Star, Route } from "lucide-react";
import Image from "next/image";

// Dynamically import leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface Destination {
  id: number;
  name: string;
  position: [number, number]; // [lat, lng] for Leaflet
  type: string;
  description: string;
  image: string;
  rating: number;
  highlights: string[];
}

// Popular Sri Lankan destinations with Leaflet coordinates
const destinations: Destination[] = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    position: [7.9570, 80.7603],
    type: "historical",
    description: "Ancient rock fortress and palace ruins",
    image: "/pexels-charithk-6624969.jpg",
    rating: 4.9,
    highlights: ["Lion Rock Fortress", "Ancient frescoes", "Water gardens"]
  },
  {
    id: 2,
    name: "Kandy Temple",
    position: [7.2906, 80.6337],
    type: "cultural",
    description: "Sacred Buddhist temple complex",
    image: "/pexels-charithk-7538610.jpg",
    rating: 4.8,
    highlights: ["Temple of Tooth", "Royal Botanical Gardens", "Cultural shows"]
  },
  {
    id: 3,
    name: "Galle Fort",
    position: [6.0329, 80.2168],
    type: "historical",
    description: "Dutch colonial fortification",
    image: "/pexels-dilen-arunodya-291179593-15553254.jpg",
    rating: 4.7,
    highlights: ["Dutch Fort", "Lighthouse", "Colonial charm"]
  },
  {
    id: 4,
    name: "Mirissa Beach",
    position: [5.9467, 80.4611],
    type: "beach",
    description: "Beautiful beach for relaxation and whale watching",
    image: "/pexels-malindabandaralk-16508228.jpg",
    rating: 4.5,
    highlights: ["Whale watching", "Beach relaxation", "Coconut Hill"]
  },
  {
    id: 5,
    name: "Ella Rock",
    position: [6.8667, 81.0500],
    type: "adventure",
    description: "Hiking destination with stunning views",
    image: "/pexels-malindabandaralk-16508232.jpg",
    rating: 4.7,
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Tea plantations"]
  },
  {
    id: 6,
    name: "Yala National Park",
    position: [6.3667, 81.5167],
    type: "wildlife",
    description: "Wildlife safari and leopard spotting",
    image: "/pexels-srkportraits-10850855.jpg",
    rating: 4.6,
    highlights: ["Leopard spotting", "Safari adventures", "Wildlife diversity"]
  },
  {
    id: 7,
    name: "Nuwara Eliya",
    position: [6.9497, 80.7891],
    type: "mountain",
    description: "Tea country with cool climate",
    image: "/wp4359097-sri-lanka-4k-wallpapers.jpg",
    rating: 4.4,
    highlights: ["Tea country", "Cool climate", "Colonial architecture"]
  },
  {
    id: 8,
    name: "Anuradhapura",
    position: [8.3114, 80.4037],
    type: "historical",
    description: "Ancient city with archaeological ruins",
    image: "/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass.jpg",
    rating: 4.6,
    highlights: ["Ancient stupas", "Sacred Bodhi Tree", "Archaeological ruins"]
  }
];

interface InteractiveMapProps {
  onDestinationSelect?: (destination: Destination) => void;
}

export default function InteractiveMap({ onDestinationSelect }: InteractiveMapProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isClient, setIsClient] = useState(false);
  const [L, setL] = useState<typeof import('leaflet') | null>(null);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import leaflet
    import('leaflet').then((leaflet) => {
      setL(leaflet.default);
      
      // Fix for default markers in Leaflet
      const IconPrototype = leaflet.default.Icon.Default.prototype as unknown as Record<string, unknown>;
      delete IconPrototype._getIconUrl;
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    });
  }, []);

  const filteredDestinations = activeFilter === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.type === activeFilter);

  const onMarkerClick = (destination: Destination) => {
    if (onDestinationSelect) {
      onDestinationSelect(destination);
    }
  };

  const filterButtons = [
    { key: 'all', label: 'All Destinations', icon: '🗺️' },
    { key: 'historical', label: 'Historical', icon: '🏛️' },
    { key: 'cultural', label: 'Cultural', icon: '🕉️' },
    { key: 'beach', label: 'Beaches', icon: '🏖️' },
    { key: 'adventure', label: 'Adventure', icon: '🏔️' },
    { key: 'wildlife', label: 'Wildlife', icon: '🦁' },
    { key: 'mountain', label: 'Mountains', icon: '⛰️' }
  ];

  // Show loading state until client-side
  if (!isClient || !L) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Interactive Map
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Loading interactive map...
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 h-96 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Include Leaflet CSS */}
      <link 
        rel="stylesheet" 
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Interactive Map
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Explore Sri Lanka&apos;s top destinations with our interactive map
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filterButtons.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                <span className="mr-2">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Map Container */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
          <div style={{ height: '500px', width: '100%' }}>
            <MapContainer
              center={[7.8731, 80.7718]} // Center of Sri Lanka
              zoom={8}
              style={{ height: '100%', width: '100%', borderRadius: '12px' }}
              className="leaflet-container"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {filteredDestinations.map((destination) => (
                <Marker
                  key={destination.id}
                  position={destination.position}
                  eventHandlers={{
                    click: () => onMarkerClick(destination)
                  }}
                >
                  <Popup>
                    <div className="p-2 max-w-xs">
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        width={200}
                        height={128}
                        className="w-full h-32 object-cover rounded-lg mb-2"
                      />
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {destination.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {destination.description}
                      </p>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">{destination.rating}</span>
                      </div>
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full capitalize">
                        {destination.type}
                      </span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Destination Cards */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {activeFilter === 'all' ? 'All Destinations' : `${filterButtons.find(f => f.key === activeFilter)?.label} Destinations`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer group"
                onClick={() => onMarkerClick(destination)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-medium">{destination.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full capitalize">
                      {destination.type}
                    </span>
                    <MapPin className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-lg mb-6 opacity-90">
              Click on any destination marker or card to learn more about these amazing places in Sri Lanka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                <Route className="w-5 h-5" />
                Plan Your Route
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold transition-all">
                View All Destinations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}