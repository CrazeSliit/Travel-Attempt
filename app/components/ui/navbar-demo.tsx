"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeToggleDropdown } from "./theme-toggle";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-3xl mx-auto z-[100]", className)}
    >
      <div className="flex items-center justify-between w-full">
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
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
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
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
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
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
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
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
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
        
        <div className="ml-4">
          <ThemeToggleDropdown />
        </div>
      </div>
    </div>
  );
}