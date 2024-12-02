import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-gray-200 shadow-md">
      <div className="container flex justify-between items-center py-4 px-6">
        {/* Logo / Shop Name */}
        <div className="text-2xl font-semibold text-gray-800">The Basket Shop</div>

        {/* Right Side (Shopping Cart) */}
        <div className="relative flex items-center gap-6">
          {/* You can add other icons like user, login, etc. here */}
          {/* <BiUser /> */}

          {/* Shopping Bag Icon */}
          <div className="relative">
            <HiOutlineShoppingBag className="text-3xl text-gray-800" />
            {/* Cart Badge */}
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-5 h-5 text-xs text-white flex items-center justify-center translate-x-1 -translate-y-1">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
