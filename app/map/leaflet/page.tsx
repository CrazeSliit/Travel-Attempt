import LeafletInteractiveMap from "@/app/components/map/leafletMap"

export default function LeafletMapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Leaflet Map
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience Sri Lanka through our detailed Leaflet-powered map with comprehensive destination information.
          </p>
        </div>
        <LeafletInteractiveMap />
      </div>
    </div>
  )
}