"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Calendar, Star, CheckCircle } from 'lucide-react'

function ContactSection() {
  const [isAnimated, setIsAnimated] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    destination: '',
    groupSize: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setIsAnimated(true)
  }, [])

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+94 11 234 5678", "+94 77 123 4567"],
      description: "Available 24/7 for emergencies"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@srilankatravel.com", "bookings@srilankatravel.com"],
      description: "We respond within 2 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["123 Galle Road", "Colombo 03, Sri Lanka"],
      description: "Visit our office Mon-Sat"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon-Sat: 8AM-8PM", "Sun: 9AM-6PM"],
      description: "Local time (GMT+5:30)"
    }
  ]

  const popularDestinations = [
    "Sigiriya & Cultural Triangle",
    "Kandy & Hill Country",
    "Southern Beaches",
    "Wildlife Safari (Yala/Udawalawe)",
    "Adam&apos;s Peak Pilgrimage",
    "Tea Country Experience",
    "Galle & Colonial Heritage",
    "Complete Island Tour"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after success
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        travelDate: '',
        destination: '',
        groupSize: '',
        message: ''
      })
    }, 3000)
  }

  const isFormValid = formData.name && formData.email && formData.message

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/pexels-charithk-6624969.jpg')`,
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
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-slate-900 dark:text-white block">Start Your</span>
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block my-2">
              Journey
            </span>
            <span className="text-slate-900 dark:text-white block">With Us</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            Ready to explore Sri Lanka? Get in touch with our travel experts to plan your perfect adventure. 
            We&apos;re here to make your dream trip a reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Plan Your Trip
              </h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    We&apos;ve received your inquiry and will get back to you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="travelDate" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Travel Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                          type="date"
                          id="travelDate"
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Preferred Destination
                      </label>
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                      >
                        <option value="">Select a destination</option>
                        {popularDestinations.map((dest, index) => (
                          <option key={index} value={dest} className="bg-slate-800">
                            {dest}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="groupSize" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Group Size
                      </label>
                      <select
                        id="groupSize"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                      >
                        <option value="">Select group size</option>
                        <option value="1" className="bg-slate-800">Solo Traveler</option>
                        <option value="2" className="bg-slate-800">Couple (2 people)</option>
                        <option value="3-5" className="bg-slate-800">Small Group (3-5 people)</option>
                        <option value="6-10" className="bg-slate-800">Medium Group (6-10 people)</option>
                        <option value="10+" className="bg-slate-800">Large Group (10+ people)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
                      placeholder="Tell us about your dream trip, interests, and any special requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-emerald-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Info & Map */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-400 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-emerald-600 dark:text-emerald-400">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {info.title}
                    </h3>
                  </div>
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-slate-600 dark:text-slate-300 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Office Image */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              <div className="relative h-64">
                <Image 
                  src="/pexels-malindabandaralk-16508232.jpg"
                  alt="Our Office Location"
                  fill
                  className="object-cover"
                  sizes="600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
                  <p className="text-white/90 text-sm">
                    Located in the heart of Colombo, our friendly team is ready to help plan your perfect Sri Lankan adventure.
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Office Hours
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Open 6 days a week for consultations
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-slate-900 dark:text-white">4.9</span>
                    <span className="text-xs text-slate-500">(500+ reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Our Response Promise
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">Email response within 2 hours</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">Phone support 24/7 for emergencies</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">Free consultation & trip planning</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">Personalized itinerary creation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection