"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeToggleDropdown } from "./theme-toggle";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={cn("fixed top-4 inset-x-0 max-w-7xl mx-auto z-[100] px-4", className)}
    >
      <div className="flex items-center justify-between w-full bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl border border-gray-200/20 dark:border-white/[0.2] shadow-xl px-4 py-3">
        {/* Logo/Brand */}
        <div className="flex items-center">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent">
            Sri Lanka Tours
            </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/">Home Page</HoveredLink>
                <HoveredLink href="/about">About Us</HoveredLink>
                <HoveredLink href="/contact">Contact</HoveredLink>
                <HoveredLink href="/gallery">Photo Gallery</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Destinations">
              <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-screen-sm">
                <ProductItem
                  title="Down South"
                  href="/DownSouth"
                  src="/pexels-malindabandaralk-16508232.jpg"
                  description="Explore the stunning southern coast with beautiful beaches and historic Galle Fort."
                />
                <ProductItem
                  title="Kandy"
                  href="/Kandy"
                  src="/pexels-charithk-7538610.jpg"
                  description="Visit the cultural capital with the Temple of the Tooth and royal botanical gardens."
                />
                <ProductItem
                  title="Ella"
                  href="/Ella"
                  src="/pexels-dilen-arunodya-291179593-15553254.jpg"
                  description="Experience breathtaking mountain views, tea plantations and the famous Nine Arch Bridge."
                />
                <ProductItem
                  title="Yala National Park"
                  href="/Yala"
                  src="/pexels-srkportraits-10850860.jpg"
                  description="Embark on wildlife safaris and spot leopards, elephants and exotic birds."
                />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Experiences">
              <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-screen-sm">
                <ProductItem
                  title="Sri Lanka Tours"
                  href="/sri-lanka"
                  src="/pexels-srkportraits-10850855.jpg"
                  description="Discover the pearl of the Indian Ocean with ancient temples and pristine beaches."
                />
                <ProductItem
                  title="Cultural Heritage"
                  href="/cultural"
                  src="/pexels-charithk-6624969.jpg"
                  description="Explore ancient cities, traditional festivals and local craftsmanship."
                />
                <ProductItem
                  title="Adventure Sports"
                  href="/adventure"
                  src="/pexels-dilen-arunodya-291179593-15553254.jpg"
                  description="Hiking, surfing, white-water rafting and wildlife safaris."
                />
                <ProductItem
                  title="Beach Retreats"
                  href="/beaches"
                  src="/pexels-malindabandaralk-16508228.jpg"
                  description="Relax on golden beaches with crystal clear waters and palm trees."
                />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Travel Plans">
              <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-screen-sm">
                <ProductItem
                  title="Day Trips"
                  href="/day-trips"
                  src="/pexels-charithk-6624969.jpg"
                  description="Perfect single-day adventures to explore nearby attractions and local experiences."
                />
                <ProductItem
                  title="Weekend Getaways"
                  href="/weekend"
                  src="/pexels-malindabandaralk-16508228.jpg"
                  description="Two to three day escapes combining relaxation with cultural discoveries."
                />
                <ProductItem
                  title="Week-long Adventures"
                  href="/week-long"
                  src="/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass.jpg"
                  description="Comprehensive tours covering multiple regions and diverse experiences across Sri Lanka."
                />
                <ProductItem
                  title="Luxury Packages"
                  href="/luxury"
                  src="/backiee-126197-landscape.jpg"
                  description="Premium travel experiences with luxury accommodations and exclusive services."
                />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Map">
              <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-screen-sm">
                <ProductItem
                  title="Interactive Map"
                  href="/map/leaflet"
                  src="/wp4359097-sri-lanka-4k-wallpapers.jpg"
                  description="Explore Sri Lanka with our interactive Leaflet map featuring all major destinations."
                />
                <ProductItem
                  title="Map Highlights"
                  href="/map/highlights"
                  src="/pexels-charithk-6624969.jpg"
                  description="Discover the most popular tourist destinations and hidden gems across the island."
                />
                <ProductItem
                  title="Travel Routes"
                  href="/map/routes"
                  src="/pexels-dilen-arunodya-291179593-15553254.jpg"
                  description="Plan your journey with suggested travel routes and itineraries."
                />
                <ProductItem
                  title="Map Overview"
                  href="/map"
                  src="/pexels-malindabandaralk-16508228.jpg"
                  description="Overview of all map features and navigation to different map sections."
                />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Account">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/login">Sign In</HoveredLink>
                <HoveredLink href="/register">Create Account</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Right side - Theme toggle and mobile menu button */}
        <div className="flex items-center space-x-2">
          <ThemeToggleDropdown />
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm" 
            onClick={closeMobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Sidebar */}
            <motion.div 
              className="fixed top-0 right-0 h-full w-80 bg-white/95 dark:bg-black/95 backdrop-blur-md border-l border-gray-200/20 dark:border-white/[0.2] shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200/20 dark:border-white/[0.2]">
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Sri Lanka Tours
              </span>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Sidebar Content */}
            <div className="p-4 space-y-6">
              {/* Home Links */}
              <div className="border-b border-gray-200/20 dark:border-white/[0.1] pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Home</h3>
                <div className="space-y-1">
                  <Link href="/" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Home Page</Link>
                  <Link href="/about" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">About Us</Link>
                  <Link href="/contact" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Contact</Link>
                  <Link href="/gallery" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Photo Gallery</Link>
                </div>
              </div>

              {/* Destinations */}
              <div className="border-b border-gray-200/20 dark:border-white/[0.1] pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Destinations</h3>
                <div className="space-y-1">
                  <Link href="/DownSouth" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Down South</Link>
                  <Link href="/Kandy" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Kandy</Link>
                  <Link href="/Ella" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Ella</Link>
                  <Link href="/Yala" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Yala National Park</Link>
                </div>
              </div>

              {/* Experiences */}
              <div className="border-b border-gray-200/20 dark:border-white/[0.1] pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Experiences</h3>
                <div className="space-y-1">
                  <Link href="/sri-lanka" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Sri Lanka Tours</Link>
                  <Link href="/cultural" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Cultural Heritage</Link>
                  <Link href="/adventure" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Adventure Sports</Link>
                  <Link href="/beaches" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Beach Retreats</Link>
                </div>
              </div>

              {/* Travel Plans */}
              <div className="border-b border-gray-200/20 dark:border-white/[0.1] pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Travel Plans</h3>
                <div className="space-y-1">
                  <Link href="/day-trips" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Day Trips</Link>
                  <Link href="/weekend" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Weekend Getaways</Link>
                  <Link href="/week-long" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Week-long Adventures</Link>
                  <Link href="/luxury" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Luxury Packages</Link>
                </div>
              </div>

              {/* Map */}
              <div className="border-b border-gray-200/20 dark:border-white/[0.1] pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Map</h3>
                <div className="space-y-1">
                  <Link href="/map/leaflet" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Interactive Map</Link>
                  <Link href="/map/highlights" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Map Highlights</Link>
                  <Link href="/map/routes" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Travel Routes</Link>
                  <Link href="/map" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Map Overview</Link>
                </div>
              </div>

              {/* Account */}
              <div className="pb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Account</h3>
                <div className="space-y-1">
                  <Link href="/login" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Sign In</Link>
                  <Link href="/register" onClick={closeMobileMenu} className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Create Account</Link>
                </div>
              </div>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}