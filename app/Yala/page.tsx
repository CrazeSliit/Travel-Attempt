import Yala from "@/app/components/destinations/yala"
import BookingForm from "@/app/components/forms/bookingForm"

export default function YalaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Yala National Park
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Embark on wildlife safaris and spot leopards, elephants and exotic birds in Sri Lanka&apos;s premier national park.
          </p>
        </div>
        <Yala />
        
        {/* Booking Form Section */}
        <div className="mt-16">
          <BookingForm 
            destination="Yala" 
            packageType="Wildlife Safari"
            defaultDuration="2-3 days"
          />
        </div>
      </div>
    </div>
  )
}