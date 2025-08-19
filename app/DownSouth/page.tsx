import DownSouth from "@/app/components/destinations/downSouth"
import BookingForm from "@/app/components/forms/bookingForm"

export default function DownSouthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Down South
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the stunning southern coast with beautiful beaches, historic Galle Fort, and vibrant coastal culture.
          </p>
        </div>
        <DownSouth />
        
        {/* Booking Form Section */}
        <div className="mt-16">
          <BookingForm 
            destination="Down South" 
            packageType="Beach & Culture Tour"
            defaultDuration="2-3 days"
          />
        </div>
      </div>
    </div>
  )
}