import React from "react";
import Product from "./Product.jsx";

const Products = ({products}) => {

    return (
        <>
            <div className="row mb-5" key={1}>
                {products.map((value) => {
                    return (
                        <div className="col-md-6 col-sm-6 col-xxl-6 mt-2 mb-2" key={value.id}>
                            <Product
                                id={value.id}
                                title={value.title}
                                image={value.images[0]}
                                description={value.description.length > 15 ? `${value.description.substring(0, 50)}...` : value.description}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Products;
