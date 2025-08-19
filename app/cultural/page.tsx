import CulturalHeritage from "@/app/components/experiences/culturalHeritage"
import BookingForm from "@/app/components/forms/bookingForm"

export default function CulturalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Cultural Heritage
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore ancient cities, traditional festivals and local craftsmanship throughout Sri Lanka&apos;s rich heritage.
          </p>
        </div>
        <CulturalHeritage />
        
        {/* Booking Form Section */}
        <div className="mt-16">
          <BookingForm 
            packageType="Cultural Heritage" 
            defaultDuration="3-5 days"
          />
        </div>
      </div>
    </div>
  )
}