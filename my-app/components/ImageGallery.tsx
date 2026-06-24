"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: "Essential Tee", price: "ZAR 80", sizes: ["S", "M", "L"], img: "" },
  { id: 2, name: "Studio Pant", price: "ZAR 120", sizes: ["30", "32", "34"], img: "" },
  { id: 3, name: "Classic Cap", price: "ZAR 150", sizes: ["OS"], img: "" },
  { id: 4, name: "Wool Jacket", price: "ZAR 210", sizes: ["M", "L", "XL"], img: "" },
  { id: 5, name: "Silk Scarf", price: "ZAR 85", sizes: ["OS"], img: "" },
  { id: 6, name: "Leather Boots", price: "ZAR 350", sizes: ["9", "10", "11"], img: "" },
];

const ImageGallery = () => {
  return (
    <section className="bg-[#f3f3f3] px-4 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500">The Collection</span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-black">LATEST DROPS</h2>
          </div>
        </div>

        {/* 6-Piece Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative aspect-4/5 overflow-hidden group bg-white"
            >
              {/* Product Image */}
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                <p className="text-white text-xl font-bold">{product.price}</p>
                <div className="flex gap-2 my-2">
                    {product.sizes.map(size => (
                        <span key={size} className="text-white/80 text-xs border border-white/40 px-2 py-1 uppercase">{size}</span>
                    ))}
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
                >
                  Add to Cart
                </motion.button>
              </div>

              {/* Bottom Label (Visible always) */}
              <div className="absolute bottom-4 left-4 text-white group-hover:hidden transition-all">
                <p className="text-xs uppercase tracking-tighter opacity-80">{product.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
