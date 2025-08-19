import InteractiveMap from "@/app/components/map/interactiveMap"

export default function InteractiveMapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Interactive Map
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore Sri Lanka&apos;s destinations with our interactive map. Click on markers to learn more about each location.
          </p>
        </div>
        <InteractiveMap />
      </div>
    </div>
  )
}