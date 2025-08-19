import DestinationsSection from "@/app/components/Home/destinationsSection"

export default function Destinations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Destinations
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover amazing destinations across Sri Lanka, from ancient cities to pristine beaches and lush mountains.
          </p>
        </div>
        <DestinationsSection />
      </div>
    </div>
  )
}