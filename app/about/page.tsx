import AboutUsSection from "@/app/components/Home/aboutUsSection"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn about our passion for showcasing Sri Lanka&apos;s beauty and our commitment to exceptional travel experiences.
          </p>
        </div>
        <AboutUsSection />
      </div>
    </div>
  )
}