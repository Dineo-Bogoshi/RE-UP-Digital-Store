"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Sample image data - replace these with your actual image paths and upcycled item details
const lookBookItems = [
  {
    id: 1,
    title: 'Reclaimed Denim Utility Jacket',
    category: 'Upcycled Outerwear',
    image: '/images/lookbook-1.jpg', // Replace with your image path
    alt: 'Upcycled denim jacket with contrast stitching',
  },
  {
    id: 2,
    title: 'Vintage Cargo Patchwork Trousers',
    category: 'Pants & Bottoms',
    image: '/images/lookbook-2.jpg', // Replace with your image path
    alt: 'Patchwork cargo pants made from deadstock fabrics',
  },
  {
    id: 3,
    title: 'Asymmetrical Boxy Knit Top',
    category: 'Tops',
    image: '/images/lookbook-3.jpg', // Replace with your image path
    alt: 'Upcycled wool knit top with raw hem',
  },
  {
    id: 4,
    title: 'Deconstructed Puffer Tote',
    category: 'Accessories',
    image: '/images/lookbook-4.jpg', // Replace with your image path
    alt: 'Tote bag made from upcycled quilted jackets',
  },
];

export default function LookBookSection() {
  return (
    <section className="w-full py-16 bg-black dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header & Aesthetic Subtitle */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">
              Curated / 2026
            </span>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-neutral-50">
              This Week's Look Book
            </h2>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
            Every piece has a past. Discover our latest limited-run transformations, blending deadstock materials with modern utility.
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-800 scrollbar-track-transparent snap-x snap-mandatory">
          {lookBookItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-70 sm:w-87.5 md:w-100 snap-center group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-900 aspect-3/4 shadow-sm hover:shadow-md transition-all duration-300">
                {/* Image Placeholder / Frame */}
                <div className="w-full h-full bg-neutral-300 dark:bg-neutral-800 animate-pulse group-hover:scale-105 transition-transform duration-500 ease-out">
                  {/* Replace the div above with an <Image /> component in Next.js:
                    <Image 
                      src={item.image} 
                      alt={item.alt} 
                      fill 
                      sizes="(max-width: 768px) 280px, 400px"
                      className="object-cover" 
                      priority 
                    /> 
                  */}
                </div>

                {/* Hover Details overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-neutral-300 tracking-wide uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-white text-lg font-medium mt-1 leading-tight">
                    {item.title}
                  </h3>
                  <button className="mt-4 py-2 px-4 bg-white/25 backdrop-blur-md border border-white/20 text-white text-xs font-medium rounded-lg hover:bg-white hover:text-black transition-colors w-fit">
                    View Details
                  </button>
                </div>
              </div>
              
              {/* Visible Info Below the Card (Optional for quick scanning) */}
              <div className="mt-4 px-1">
                <p className="text-xs text-neutral-400 uppercase tracking-wider">
                  {item.category}
                </p>
                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mt-0.5">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Scroll Indicator for Desktop/Mobile */}
        <div className="flex items-center justify-center mt-6 text-xs text-neutral-400 tracking-wider">
          <span className="animate-pulse">→ Swipe to explore</span>
        </div>
        
      </div>
    </section>
  );
}