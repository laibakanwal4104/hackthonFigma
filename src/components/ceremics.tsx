"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Ceramics = () => {
  const router = useRouter();
  return (
    <div className="bg-white py-10">
      {/* Heading */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-[#494565] text-xl font-semibold mb-6">New ceramics</h3>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <Image
              src={"/assests/Photo.png"}
              alt="chair-image"
              width={305}
              height={375}
              className="rounded-md"
            />
            <h4 className="text-lg font-mono text-[#494565] mt-4">The Dandy chair</h4>
            <h4 className="text-lg font-mono text-[#494565]">£250</h4>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <Image
              src={"/assests/Photo (1).png"}
              alt="chair-image"
              width={305}
              height={375}
              className="rounded-md"
            />
            <h4 className="text-lg font-mono text-[#494565] mt-4">Rustic Vase Set</h4>
            <h4 className="text-lg font-mono text-[#494565]">£155</h4>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <Image
              src={"/assests/Photo (2).png"}
              alt="chair-image"
              width={305}
              height={375}
              className="rounded-md"
            />
            <h4 className="text-lg font-mono text-[#494565] mt-4">The Silky Vase</h4>
            <h4 className="text-lg font-mono text-[#494565]">£125</h4>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <Image
              src={"/assests/Photo (3).png"}
              alt="chair-image"
              width={305}
              height={375}
              className="rounded-md"
            />
            <h4 className="text-lg font-mono text-[#494565] mt-4">The Lucy Lamp</h4>
            <h4 className="text-lg font-mono text-[#494565]">£399</h4>
          </div>
        </div>

        {/* View Collection Button */}
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-3 bg-[#F9F9F9] text-[#494565] font-medium rounded-md hover:bg-gray-200 transition-colors duration-300"
            onClick={() => router.push("/products")}
          >
            View collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ceramics;
