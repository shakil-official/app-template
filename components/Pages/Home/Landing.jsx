"use client"

import React from "react";
import {HiShoppingBag} from "react-icons/hi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopNav from "../Navbar/TopNav.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import HeroSlider from "./HeroSlider.jsx";
import Product from "../Products/Product.jsx";
import {TbCategoryFilled} from "react-icons/tb";

const Landing = () => {


    const card = [
        {
            id: 1,
            title: "This is a product ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
            image: "https://images.pexels.com/photos/229789/pexels-photo-229789.jpeg"

        },
        {
            id: 1,
            title: "This is a product ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://images.pexels.com/photos/3650159/pexels-photo-3650159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id: 1,
            title: "This is a product ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://images.pexels.com/photos/8886399/pexels-photo-8886399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id: 1,
            title: "This is a product ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://images.pexels.com/photos/28451931/pexels-photo-28451931/free-photo-of-fresh-red-snapper-fish-displayed-by-chef-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id: 1,
            title: "This is a product ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://images.pexels.com/photos/12151716/pexels-photo-12151716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id: 1,
            title: "This is a product ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://images.pexels.com/photos/8352771/pexels-photo-8352771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id: 1,
            title: "This is a product ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://images.pexels.com/photos/52964/fish-seafood-silver-contrast-52964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id: 1,
            title: "This is a product ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://images.pexels.com/photos/3680164/pexels-photo-3680164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id: 1,
            title: "This is a product ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://images.pexels.com/photos/14062144/pexels-photo-14062144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
    ];

    const slideData = [
        {
            id: 0,
            img: "https://placehold.co/1920x600", // Ensure this image exists in your public folder
            title: "Trending Item",
            mainTitle: "Vegetables for Good",
            price: "$20",
        },
        {
            id: 1,
            img: "https://placehold.co/1920x600", // Ensure this image exists in your public folder
            title: "Trending Item2",
            mainTitle: "Vegetables for Good",
            price: "$20",
        },
        {
            id: 2,
            img: "https://placehold.co/1920x600", // Ensure this image exists in your public folder
            title: "On Sale",
            mainTitle: "Coffee for Relax",
            price: "$20",
        },
        // Add more slide data as needed
    ];

    const categories = [
         {"id": 2, "name": "Fashion"},
        {"id": 4, "name": "Books"},
        {"id": 5, "name": "Toys"},
        {"id": 6, "name": "Groceries"},
        {"id": 8, "name": "Automotive"},
        {"id": 10, "name": "Jewelry"},
        {"id": 11, "name": "Furniture"},
        {"id": 12, "name": "Gardening"},
     ];


    return (
        <>
            <TopNav/>

            <Navbar/>

            {/*slider*/}
            <HeroSlider slideData={slideData}/>


            <div className="container p-8">
                <div className="flex justify-center items-center space-x-2  ">

                    <button className="bg-yellow-400 text-black
                                        font-bold text-sm py-2
                                        px-4 rounded-md opacity-60
                                        group-hover:opacity-100
                                        transition-all duration-300 w-full">


                        <HiShoppingBag size={14} className="inline mr-2"/>
                        The Basket Shop
                    </button>

                    <button className="bg-yellow-400 text-black
                                        font-bold text-sm py-2
                                        px-4 rounded-md opacity-60
                                        group-hover:opacity-100
                                        transition-all duration-300 w-full">


                        <HiShoppingBag size={14} className="inline mr-2"/>
                        The Basket Shop
                    </button>
                </div>
            </div>


            <div className="container p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Category</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-6">
                    {
                        categories.map((category, index) => (

                                <React.Fragment key={index}>
                                    <button className="bg-black text-white
                                                        font-bold text-sm py-1
                                                        px-4 rounded-md opacity-60
                                                        group-hover:opacity-100
                                                        transition-all duration-300 w-full">
                                        <TbCategoryFilled size={14} className="inline mr-2"/>
                                        {category.name}
                                    </button>
                                </React.Fragment>
                            )
                        )}

                </div>
            </div>


            <div className="container p-8">
                <h2 className="text-3xl font-bold mb-6 text-left">Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {card.map((item, index) => (

                            <React.Fragment key={index}>
                                <Product key={item.id}
                                         id={item.id}
                                         title={item.title}
                                         description={item.description}
                                         image={item.image}
                                />
                            </React.Fragment>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default Landing;




