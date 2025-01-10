"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// for google fonts
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${inter.className} w-full bg-white shadow-md`}>
      {/* Top Row */}
      <div className="flex justify-between items-center px-4 py-4 md:px-8">
        {/* Logo - Left aligned on mobile and centered on desktop */}
        <div className="flex-1 text-left md:text-center">
          <h3 className="text-lg font-bold">Avion</h3>
        </div>

        {/* Icons and Hamburger Menu */}
        <div className="flex items-center gap-4">
          <IoSearch className="w-5 h-5 text-gray-600 cursor-pointer" />
          <div className="hidden md:flex gap-4">
            <MdOutlineShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
            <FaRegCircleUser className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>

          {/* Hamburger Menu on mobile */}
          <div className="md:hidden flex items-center">
            {isMenuOpen ? (
              <HiOutlineX
                className="w-6 h-6 text-gray-600 cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <HiOutlineMenu
                className="w-6 h-6 text-gray-600 cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block bg-white w-full`}
      >
        <ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-600 py-4 text-sm md:text-base">
          <li>
            <Link href="/product-listings">Plant Pots</Link>
          </li>
          <li>
            <Link href="/product-listings">Ceramics</Link>
          </li>
          <li>
            <Link href="/product-listings">Tables</Link>
          </li>
          <li>
            <Link href="/product-listings">Chairs</Link>
          </li>
          <li>
            <Link href="/product-listings">Crockery</Link>
          </li>
          <li>
            <Link href="/product-listings">Tableware</Link>
          </li>
          <li>
            <Link href="/product-listings">Cutlery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
