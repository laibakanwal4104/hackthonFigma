import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";

const Features = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h3 className="text-center text-[#2A254B] text-xl font-semibold mb-8">
          What makes our brand different
        </h3>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center">
            <TbTruckDelivery className="mx-auto text-4xl text-[#2A254B] mb-4" />
            <h4 className="font-semibold text-lg text-[#2A254B]">
              Next day as standard
            </h4>
            <p className="text-sm mt-2 text-gray-600">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center">
            <IoIosCheckmarkCircleOutline className="mx-auto text-4xl text-[#2A254B] mb-4" />
            <h4 className="font-semibold text-lg text-[#2A254B]">
              Made by true artisans
            </h4>
            <p className="text-sm mt-2 text-gray-600">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center">
            <TbTruckDelivery className="mx-auto text-4xl text-[#2A254B] mb-4" />
            <h4 className="font-semibold text-lg text-[#2A254B]">
              Unbeatable prices
            </h4>
            <p className="text-sm mt-2 text-gray-600">
              For our materials and quality, you won’t find better prices
              anywhere.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center">
            <LuSprout className="mx-auto text-4xl text-[#2A254B] mb-4" />
            <h4 className="font-semibold text-lg text-[#2A254B]">
              Recycled packaging
            </h4>
            <p className="text-sm mt-2 text-gray-600">
              We use 100% recycled packaging to ensure our footprint is
              manageable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
