"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { CiSearch, CiShoppingCart, CiMenuBurger, CiCircleRemove } from 'react-icons/ci';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full p-4 z-50">
      <div className="max-w-7xl mx-auto border border-gray-200 dark:border-gray-700 bg-[#f3f3f3]/40 dark:bg-black/80 backdrop-blur-md rounded-2xl px-6 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="text-xl font-bold tracking-tight">
            <Link href="/">
              RE / UP
            </Link>
          </div>

          {/* Desktop Nav Links (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/features" className="hover:text-gray-100 transition-colors">
              About
            </Link>
            <Link href="/about" className="hover:text-gray-100 transition-colors">
              Collection
            </Link>
            <Link href="/pricing" className="hover:text-gray-100 transition-colors">
              Sign Up
            </Link>
          </div>

          {/* Icons and Mobile Menu Trigger */}
          <div className='flex items-center gap-4'>
            <Link href="/cart" className="text-2xl hover:text-gray-100 transition-colors">
              <CiShoppingCart />
            </Link>
            
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="text-2xl hover:text-gray-100 transition-colors"
              aria-label="Search"
            >
              <CiSearch />
            </button>
            
            {/* Mobile Menu Button - Visible only on mobile screens */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-2xl hover:text-gray-100 focus:outline-none transition-colors text-black"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <CiCircleRemove /> : <CiMenuBurger />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Hidden on desktop) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-4 text-sm font-medium">
            <Link 
              href="/features" 
              onClick={() => setIsMenuOpen(false)} 
              className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMenuOpen(false)} 
              className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              Collection
            </Link>
            <Link 
              href="/pricing" 
              onClick={() => setIsMenuOpen(false)} 
              className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;