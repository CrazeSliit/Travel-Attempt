"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Heart,
  Star,
  Camera,
  Compass,
  Plane,
  Mountain,
  Waves
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const destinations = [
    { name: "Sigiriya", href: "/destinations" },
    { name: "Kandy", href: "/Kandy" },
    { name: "Ella", href: "/Ella" },
    { name: "Yala National Park", href: "/Yala" },
    { name: "Down South", href: "/DownSouth" },
    { name: "Mirissa Beach", href: "/beaches" }
  ];

  const experiences = [
    { name: "Cultural Heritage", href: "/cultural" },
    { name: "Adventure Sports", href: "/adventure" },
    { name: "Beach Retreats", href: "/beaches" },
    { name: "Wildlife Safaris", href: "/Yala" },
    { name: "Sri Lanka Tours", href: "/sri-lanka" },
    { name: "Tea Plantation Tours", href: "/Ella" }
  ];

  const travelPlans = [
    { name: "Day Trips", href: "/day-trips" },
    { name: "Weekend Getaways", href: "/weekend" },
    { name: "Week-long Adventures", href: "/week-long" },
    { name: "Luxury Packages", href: "/luxury" }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
    { name: "Map", href: "/map" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" }
  ];

  const socialLinks = [
    { 
      name: "Facebook", 
      href: "https://facebook.com", 
      icon: Facebook,
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    { 
      name: "Instagram", 
      href: "https://instagram.com", 
      icon: Instagram,
      color: "hover:text-pink-600 dark:hover:text-pink-400"
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com", 
      icon: Twitter,
      color: "hover:text-sky-600 dark:hover:text-sky-400"
    },
    { 
      name: "YouTube", 
      href: "https://youtube.com", 
      icon: Youtube,
      color: "hover:text-red-600 dark:hover:text-red-400"
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-black opacity-95"></div>
      
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 transform rotate-45">
          <Mountain className="w-20 h-20 text-white" />
        </div>
        <div className="absolute top-20 right-20 transform -rotate-12">
          <Waves className="w-16 h-16 text-white" />
        </div>
        <div className="absolute bottom-20 left-1/4 transform rotate-12">
          <Compass className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-10 right-1/3 transform -rotate-45">
          <Camera className="w-14 h-14 text-white" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Sri Lanka Travel
                  </h3>
                </div>
                <p className="text-emerald-100 leading-relaxed">
                  Discover the pearl of the Indian Ocean with authentic experiences, 
                  breathtaking destinations, and memories that last a lifetime.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-emerald-100">
                  <MapPin className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                  <span className="text-sm">123 Galle Road, Colombo 03, Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-3 text-emerald-100">
                  <Phone className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                  <span className="text-sm">+94 11 234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-emerald-100">
                  <Mail className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                  <span className="text-sm">info@srilankatravel.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                        aria-label={social.name}
                      >
                        <IconComponent className="w-5 h-5" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white border-b border-emerald-400 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-emerald-100 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-emerald-400 rounded-full transition-all duration-300 group-hover:w-2"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white border-b border-emerald-400 pb-2">
                Top Destinations
              </h4>
              <ul className="space-y-3">
                {destinations.map((destination) => (
                  <li key={destination.name}>
                    <Link
                      href={destination.href}
                      className="text-emerald-100 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-2 group"
                    >
                      <Star className="w-3 h-3 text-emerald-400 transition-all duration-300 group-hover:text-yellow-400" />
                      <span>{destination.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experiences & Travel Plans */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white border-b border-emerald-400 pb-2">
                Experiences
              </h4>
              <ul className="space-y-3">
                {experiences.slice(0, 4).map((experience) => (
                  <li key={experience.name}>
                    <Link
                      href={experience.href}
                      className="text-emerald-100 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-2 group"
                    >
                      <Heart className="w-3 h-3 text-emerald-400 transition-all duration-300 group-hover:text-red-400" />
                      <span>{experience.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-white border-b border-emerald-400 pb-2 pt-4">
                Travel Plans
              </h4>
              <ul className="space-y-3">
                {travelPlans.map((plan) => (
                  <li key={plan.name}>
                    <Link
                      href={plan.href}
                      className="text-emerald-100 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-2 group"
                    >
                      <Compass className="w-3 h-3 text-emerald-400 transition-all duration-300 group-hover:text-blue-400" />
                      <span>{plan.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-emerald-400/30">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Stay Updated with Our Latest Adventures
                </h4>
                <p className="text-emerald-100 text-sm">
                  Subscribe to our newsletter for exclusive travel deals and destination insights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-white/10 border border-emerald-400/30 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-400/30 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-emerald-100 text-sm text-center md:text-left">
                © {currentYear} Sri Lanka Travel. All rights reserved. 
                <span className="mx-2">|</span>
                Made with <Heart className="w-4 h-4 inline text-red-400 fill-current" /> for travelers
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-emerald-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-emerald-100 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/contact" className="text-emerald-100 hover:text-white transition-colors">
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
