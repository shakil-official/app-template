import React, {useState} from 'react';
import ExpandableText from "./ExpandableText.jsx";
import AddToCart from "./AddToCart.jsx";
import OrderNow from "./OrderNow.jsx";
import Modal from "../Components/Modal.jsx";
import OrderForm from "./OrderForm.jsx";
import TopNav from "../Navbar/TopNav.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import QuantityInput from "./QuantityInput.jsx";

const ProductDetails = ({}) => {
    const [isOpeOrder, setIsOpenOrder] = useState(false);

    const handleOrderModalClose = () => {
        setIsOpenOrder(!isOpeOrder);
    }

    const handleQuantityChange = (newQuantity) => {
         console.log("Updated Quantity:", newQuantity);
    };


    const {title, description, id, image} = {
        id: 1,
        title: "This is a product ",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
        image: "https://images.pexels.com/photos/229789/pexels-photo-229789.jpeg"

    };

    return (
        <>
            <TopNav/>

            <Navbar/>

            <div className="container p-8">
                <h2 className="text-3xl font-bold mb-6 text-left">Products Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

                    <Modal isOpen={isOpeOrder} handleClose={handleOrderModalClose}>
                        <OrderForm/>
                    </Modal>


                    <div className="w-full md:w-1/1">
                        <img src={image} alt={title} className="w-full rounded-lg"/>
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-1/1 space-y-4">
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p className="text-gray-600">
                            <ExpandableText description={description} limit={700}/>
                        </p>

                        <div className="product-cost">
                            <QuantityInput initialValue={1} min={1} step={1} onQuantityChange={handleQuantityChange} />

                            <p className="text-lg font-semibold text-green-600 main-cost">$99.99 <span className="unit"> Per Kg</span>   </p>
                        </div>


                        <AddToCart/>
                        <OrderNow handleOrderNow={handleOrderModalClose}/>

                    </div>
                </div>
            </div>


        </>
    )
}

export default ProductDetails;
