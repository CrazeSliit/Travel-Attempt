"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { X, MapPin, Star } from "lucide-react";
import Image from "next/image";

// Dynamically import leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  highlight: {
    id: number;
    name: string;
    description: string;
    image: string;
    rating: number;
    coordinates: { lat: number; lng: number };
    highlights: string[];
  } | null;
}

export default function MapModal({ isOpen, onClose, highlight }: MapModalProps) {
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

  if (!isOpen || !highlight) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      {/* Include Leaflet CSS */}
      <link 
        rel="stylesheet" 
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />
      
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{highlight.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-gray-600 dark:text-gray-400">{highlight.rating}</span>
              <span className="text-gray-400 dark:text-gray-500">•</span>
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 dark:text-gray-400">
                {highlight.coordinates.lat.toFixed(4)}, {highlight.coordinates.lng.toFixed(4)}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Map Content */}
        <div className="p-6">
          {isClient && L ? (
            <div style={{ height: '400px', width: '100%' }}>
              <MapContainer
                center={[highlight.coordinates.lat, highlight.coordinates.lng]}
                zoom={13}
                style={{ height: '100%', width: '100%', borderRadius: '12px' }}
                className="leaflet-container"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                
                <Marker position={[highlight.coordinates.lat, highlight.coordinates.lng]}>
                  <Popup>
                    <div className="p-2 max-w-xs">
                      <Image
                        src={highlight.image}
                        alt={highlight.name}
                        width={200}
                        height={128}
                        className="w-full h-32 object-cover rounded-lg mb-2"
                      />
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {highlight.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {highlight.description}
                      </p>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">{highlight.rating}</span>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          ) : (
            <div className="h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4 mx-auto"></div>
                <p className="text-gray-600 dark:text-gray-400">Loading map...</p>
              </div>
            </div>
          )}

          {/* Highlights Information */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Location Highlights</h3>
              <ul className="space-y-2">
                {highlight.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-emerald-500 dark:text-emerald-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Plan Your Visit</h3>
              <div className="space-y-3">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Get Directions
                </button>
                <button className="w-full border border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-4 py-2 rounded-lg transition-colors">
                  Book Tour
                </button>
                <button className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
                  Save to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}