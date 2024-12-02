import React, {useState} from "react";
import Modal from "../Components/Modal.jsx";
import AddToCart from "./AddToCart.jsx";
import OrderNow from "./OrderNow.jsx";
import ExpandableText from "./ExpandableText.jsx";
import OrderForm from "./OrderForm.jsx";


const Product = ({id, title, description, image}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpeOrder, setIsOpenOrder] = useState(false);

    const handleClose = () => {
        setIsOpen(!isOpen)
    }
    const handleOrderModalClose = () => {
        setIsOpen(false);
        setIsOpenOrder(!isOpeOrder);
    }

    return (
        <>
            <Modal isOpen={isOpeOrder} handleClose={handleOrderModalClose}>
                <OrderForm/>
            </Modal>

            <Modal isOpen={isOpen} handleClose={handleClose}>
                <div className="w-full md:w-1/2">
                    <img src={image} alt={title} className="w-full rounded-lg"/>
                    
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-gray-600">
                        <ExpandableText description={description}/>
                    </p>

                    <p className="text-lg font-semibold text-green-600">$99.99</p>

                    <AddToCart/>
                    <OrderNow handleOrderNow={handleOrderModalClose}/>

                </div>
            </Modal>


            <div className="border border-gray-200
                                     rounded-md
                                     hover:shadow-lg
                                     max-w-[300px]
                                     transition-transform duration-300 hover:scale-105 group">
                <div className="relative">
                    <a href="#" className="block">
                        <img
                            onClick={() => setIsOpen(true)}
                            src={image}
                            alt={title}
                            className="object-cover
                                        h-[200px] w-full rounded-md
                                        group-hover:scale-105
                                        transition-transform
                                        duration-300"
                            width="300"
                            height="300"
                        />
                    </a>
                </div>
                <div className="p-4 border-t border-gray-200">
                    <a href="#"
                       onClick={() => setIsOpen(true)}
                       className="text-lg font-bold no-underline block">
                        {title}
                    </a>

                    <p className="block
                                  py-2 font-normal
                                  text-sm text-gray-700">
                        <ExpandableText description={description}/>
                    </p>


                    <span className="block pb-2 font-bold text-lg">$2.99</span>
                    {/* Add to Cart and Order buttons */}
                    <div className="relative flex space-x-2 mt-4"> {/* Use flexbox for side-by-side alignment */}
                        <AddToCart/>
                        <OrderNow handleOrderNow={handleOrderModalClose}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;
