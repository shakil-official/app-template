"use client";

import React, { useState } from "react";
import ExpandableText from "./ExpandableText.jsx";
import AddToCart from "./AddToCart.jsx";
import OrderNow from "./OrderNow.jsx";
import Modal from "../Components/Modal.jsx";
import OrderForm from "./OrderForm.jsx";
import TopNav from "../Navbar/TopNav.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import QuantityInput from "./QuantityInput.jsx";

const ProductDetails = () => {
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    const toggleOrderModal = () => {
        setIsOrderModalOpen(!isOrderModalOpen);
    };

    const handleQuantityChange = (newQuantity) => {
        console.log("Updated Quantity:", newQuantity);
    };

    const product = {
        id: 1,
        title: "Premium Organic Product",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. With its popularity surging in the 1960s, it has continued to serve as placeholder text in the design world. Its adaptability across various applications makes it a staple in digital and print layouts.",
        image: "https://images.pexels.com/photos/229789/pexels-photo-229789.jpeg",
        price: 99.99,
        unit: "Per Kg",
    };

    return (
        <>
            <TopNav />
            <Navbar />

            <div className="container mx-auto p-6 lg:p-12">
                {/* Page Header */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8 ">Product Details</h1>

                {/* Product Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Product Image */}
                    <div className="w-full">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Product Information */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>

                        {/* Expandable Description */}
                        <ExpandableText description={product.description} limit={300} />

                        {/* Price and Quantity */}
                        <div className="flex items-center justify-between">
                            <QuantityInput
                                initialValue={1}
                                min={1}
                                step={1}
                                onQuantityChange={handleQuantityChange}
                            />
                           <p className="text-2xl font-semibold text-green-600">
    ${product.price.toFixed(2)} 
    <span className="text-sm text-gray-500 font-normal ml-2">{product.unit}</span>
</p>

                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <AddToCart />
                            <OrderNow handleOrderNow={toggleOrderModal} />
                        </div>
                    </div>
                </div>

                {/* Order Form Modal */}
                <Modal isOpen={isOrderModalOpen} handleClose={toggleOrderModal}>
                    <OrderForm />
                </Modal>
            </div>
        </>
    );
};

export default ProductDetails;
