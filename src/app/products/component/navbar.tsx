"use client";
import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

// for Google Fonts
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className={`${inter.className} w-full`}>
      {/* Top bar */}
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Search Icon */}
        <IoSearch className="w-6 h-6 text-gray-600" />
        
        {/* Logo */}
        <h3 className="font-bold text-xl text-center md:text-2xl">Avion</h3>

        {/* Cart and User Icons */}
        <div className="flex items-center gap-4">
          <MdOutlineShoppingCart className="w-6 h-6 text-gray-600" />
          <FaRegCircleUser className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="text-center">
        <ul className="flex flex-wrap justify-center space-x-4 text-gray-600 py-4 text-sm md:space-x-8 md:text-base">
          <li><Link href="/product-listings">Plant pots</Link></li>
          <li><Link href="/product-listings">Ceramics</Link></li>
          <li><Link href="/product-listings">Tables</Link></li>
          <li><Link href="/product-listings">Chairs</Link></li>
          <li><Link href="/product-listings">Crockery</Link></li>
          <li><Link href="/product-listings">Tableware</Link></li>
          <li><Link href="/product-listings">Cutlery</Link></li>
        </ul>
      </div>
      
      {/* Divider */}
      <hr className="border-t border-gray-300 mx-4 md:mx-8" />
    </div>
  );
};

export default Navbar;
