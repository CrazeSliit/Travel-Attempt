import BeachRetreats from "@/app/components/experiences/beachRetreats"
import BookingForm from "@/app/components/forms/bookingForm"

export default function BeachesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Beach Retreats
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Relax on golden beaches with crystal clear waters and palm trees along Sri Lanka&apos;s stunning coastline.
          </p>
        </div>
        <BeachRetreats />
        
        {/* Booking Form Section */}
        <div className="mt-16">
          <BookingForm 
            packageType="Beach Retreat" 
            defaultDuration="3-7 days"
          />
        </div>
      </div>
    </div>
  )
}