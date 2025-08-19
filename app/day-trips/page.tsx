import DayTrips from "@/app/components/travelPlans/dayTrips"
import BookingForm from "@/app/components/forms/bookingForm"

export default function DayTripsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Day Trips
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Perfect single-day adventures to explore nearby attractions and local experiences across Sri Lanka.
          </p>
        </div>
        <DayTrips />
        
        {/* Booking Form Section */}
        <div className="mt-16">
          <BookingForm 
            packageType="Day Trip" 
            defaultDuration="1 day"
          />
        </div>
      </div>
    </div>
  )
}