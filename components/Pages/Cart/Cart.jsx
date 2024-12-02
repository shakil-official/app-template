"use client";

import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";


const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Product 1",
            price: 20,
            quantity: 1,
            image: "https://images.pexels.com/photos/229789/pexels-photo-229789.jpeg",
        },
        {
            id: 2,
            name: "Product 2",
            price: 35,
            quantity: 2,
            image: "https://images.pexels.com/photos/3650159/pexels-photo-3650159.jpeg",
        },
        {
            id: 3,
            name: "Product 3",
            price: 15,
            quantity: 1,
            image: "https://images.pexels.com/photos/8886399/pexels-photo-8886399.jpeg",
        },
    ]);

    const handleRemove = (id) => {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems);
    };

    const handleQuantityChange = (id, delta) => {
        const updatedItems = cartItems.map((item) =>
            item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                : item
        );
        setCartItems(updatedItems);
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
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
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 gap-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border-b py-4"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-md"
                                    />
                                    <div>
                                        <h2 className="font-bold text-lg">{item.name}</h2>
                                        <p className="text-gray-500">${item.price}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={() => handleQuantityChange(item.id, -1)}
                                        className="px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-200"
                                    >
                                        -
                                    </button>
                                    <span className="font-bold">{item.quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange(item.id, 1)}
                                        className="px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-200"
                                    >
                                        +
                                    </button>

                                    <p className="text-2xl font-semibold text-green-600">
    ${product.price.toFixed(2)} 
    <span className="text-sm text-gray-500 font-normal ml-2">{product.unit}</span>
</p>
                                </div>

                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <HiTrash size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6">
                        <h2 className="text-xl font-bold mb-4">Summary</h2>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="font-bold">${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-gray-700">Tax (10%)</p>
                            <p className="font-bold">${(totalPrice * 0.1).toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between items-center border-t pt-4">
                            <p className="text-xl font-bold">Total</p>
                            <p className="text-xl font-bold">
                                ${(totalPrice * 1.1).toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
