import Link from "next/link";
import React from "react";
import { PiDribbbleLogoThin } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";


// ... (imports remain the same)

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f3f3f3] border-t border-gray-200 pt-16 pb-12 px-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: The TV Container - centered on mobile, left-aligned on desktop */}
          <div className="relative w-full max-w-[1000px] mx-auto md:mx-0 aspect-[8/8] bg-[url('/footer_sample.png')] bg-contain bg-no-repeat bg-center md:bg-top-left">
            
            {/* ABSOLUTE BOX: Recalculated coordinates based on asset centering */}
            <div className="absolute top-[40%] left-[6.5%] sm:left-[7.5%] md:left-[6.5%] w-[70%] h-[40%] flex flex-col justify-between p-8 sm:p-2 text-center overflow-hidden">
              
              {/* RE/UP & Socials */}
              <div>
                <h3 className="text-[25px] sm:text-sm md:text-[60px] font-bold tracking-tighter text-black leading-none mb-1">
                  RE / UP
                </h3>
                <div className="flex justify-center gap-1.5 text-black">
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <CiInstagram className="w-5 h-5 sm:w-4 sm:h-4 md:w-8 md:h-8" />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <PiDribbbleLogoThin className="w-5 h-5 sm:w-4 sm:h-4 md:w-8 md:h-8" />
                  </a>
                </div>
              </div>

              {/* All rights reserved */}
              <p className="text-[6px] sm:text-[8px] md:text-[9px] uppercase tracking-wider text-gray-700 font-medium leading-none">
                © All rights reserved
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Shop, Support, and Legal */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 text-gray-400">Shop</h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">All Collections</a></li>
                <li><a href="#" className="hover:text-black transition-colors">New Arrivals</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 text-gray-400">Support</h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 text-gray-400">Legal</h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;