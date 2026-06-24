"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const NewsletterSection = () => {
  // 1. Setup the scroll trigger for this specific section
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // 2. The Reveal Animation (Clip Path)
  // Starts as a thin line in the center and expands to full width/height
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <section 
      ref={containerRef} 
      className="relative flex min-h-[40vh] items-center justify-center bg-white"
    >
      <motion.div
        style={{ clipPath }}
        className="w-full max-w-10xl overflow-hidden bg-[#f3f3f3] p-5 md:p-10 flex flex-col items-center text-center shadow-2xl"
      >
        {/* Newsletter Content */}
        <h2 className="text-xs md:text-xl font-semibold tracking-tight text-black mb-6">
          Sign up for our newsletter
        </h2>
        <p className="max-w-md text-xs text-gray-700 mb-10">
          Subscribe to get early access to drops, exclusive content, and 10% off your first order.
        </p>

        <form 
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-md flex-col gap-4 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full flex-1 border-b border-black bg-transparent px-2 py-3 outline-none focus:placeholder-transparent"
            required
          />
          <button
            type="submit"
            className="bg-black px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:text-black"
          >
            Join
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;