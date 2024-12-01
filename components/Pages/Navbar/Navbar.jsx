import React from "react";
import {HiOutlineShoppingBag} from "react-icons/hi";

const Navbar = () => {

    return (
        <>
            <div className="border-b border-gray-200 py-6">
                <div className="container sm:flex justify-between items-center">
                    The Basket Shop
                    <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
                        {/*<BiUser/>*/}
                        <div className="relative">
                            <HiOutlineShoppingBag/>
                            <div className="bg-red-600 rounded-full
                                            absolute top-0 right-0 w-[18px] h-[18px]
                                            text-[12px] text-white grid place-items-center
                                            translate-x-1 -translate-y-1">
                                2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
