import React from 'react';
import {FaShoppingCart} from "react-icons/fa";

const OrderNow = ({handleOrderNow}) => {

    return (
        <>
            <button
                className="bg-green-500 text-white font-bold text-sm
                            py-2 px-4 rounded-md hover:opacity-100
                            transition-all duration-300 w-full"
                onClick={handleOrderNow}>
                {/* <FaShoppingCart size={14} className="inline mr-2"/>  */}
                Order
            </button>

        </>
    )
}

export default OrderNow;
