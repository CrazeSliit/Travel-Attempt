"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, Users, Globe, Heart, Shield, Compass } from 'lucide-react'

function AboutUsSection() {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    setIsAnimated(true)
  }, [])

  const teamMembers = [
    {
      id: 1,
      name: "Tharindu Chamuditha",
      role: "Travel Director",
      image: "/chamuditha.jpg",
      experience: "15+ years",
      specialty: "Cultural Heritage Tours"
    },
    {
      id: 2,
      name: "Udeshan K Rathnayake",
      role: "Adventure Guide",
      image: "/udeshan.jpg",
      experience: "12+ years",
      specialty: "Mountain & Wildlife Expeditions"
    },
    {
      id: 3,
      name: "Harindu Weligepola",
      role: "Guest Relations",
      image: "/jaye.jpg",
      experience: "8+ years",
      specialty: "Luxury Travel Experiences"
    }
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passionate Service",
      description: "We pour our heart into every journey, ensuring unforgettable experiences for our travelers."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "Your safety and security are our top priorities on every adventure we curate."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainable Tourism",
      description: "We promote responsible travel that preserves Sri Lanka's natural and cultural heritage."
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Our local expertise ensures authentic experiences and hidden gems discovery."
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/backiee-126197-landscape.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Navbar spacing */}
      <div className="h-20 lg:h-24"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        
        {/* Hero Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 backdrop-blur-md border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 px-5 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Users className="w-4 h-4" />
            About Our Journey
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-slate-900 dark:text-white block">Crafting</span>
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block my-2">
              Unforgettable
            </span>
            <span className="text-slate-900 dark:text-white block">Journeys</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            For over two decades, we&apos;ve been the trusted gateway to Sri Lanka&apos;s wonders, 
            creating personalized adventures that connect travelers with the heart and soul of our beautiful island.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">
          <div className={`transform transition-all duration-1000 delay-200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Born from a passion for sharing Sri Lanka&apos;s incredible beauty with the world, 
                our journey began in 2001 with a simple mission: to showcase the authentic 
                spirit of the Pearl of the Indian Ocean.
              </p>
              <p>
                What started as a small family business has grown into Sri Lanka&apos;s premier 
                travel experience company, trusted by over 100,000 travelers from around 
                the globe. We&apos;ve witnessed countless magical moments and created lifelong 
                memories for adventurers seeking authentic experiences.
              </p>
              <p>
                Today, we continue to innovate while staying true to our roots, combining 
                traditional Sri Lankan hospitality with modern travel expertise to deliver 
                extraordinary journeys that touch the heart and inspire the soul.
              </p>
            </div>
          </div>
          
          <div className={`relative transform transition-all duration-1000 delay-400 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/pexels-malindabandaralk-16508228.jpg"
                alt="Our Story"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Since 2001</h3>
                <p className="text-white/90 text-sm">Creating memories that last a lifetime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-600 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              These core principles guide everything we do and shape every experience we create.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-800 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Passionate locals who know every hidden gem and secret spot in Sri Lanka.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-64">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
                    {member.role}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                    <span>{member.experience}</span>
                    <span>•</span>
                    <span>{member.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                100K+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Happy Travelers</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                20+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Years Experience</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Tour Packages</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center gap-1 mb-2">
                <div className="text-3xl lg:text-4xl font-bold group-hover:scale-110 transition-transform bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">4.9</div>
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection