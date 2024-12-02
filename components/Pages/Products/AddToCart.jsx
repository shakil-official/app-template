import React from 'react';
import {FaShoppingCart} from "react-icons/fa";

const AddToCart = ({handleAddToCart}) => {

    return (
        <>
            <button className="bg-green-500
                                text-white font-bold text-sm py-2
                                px-2 rounded-md hover:opacity-100
                                transition-all duration-300 w-full"
                    onClick={handleAddToCart}>
                <FaShoppingCart size={14} className="inline mr-2"/>Add to cart
            </button>

        </>
    )
}

export default AddToCart;
