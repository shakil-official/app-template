import React, { useState } from "react";

function QuantityInput({ initialValue = 100, min = 1, step = 1, onQuantityChange }) {
    const [quantity, setQuantity] = useState(initialValue);

    const handleIncrease = () => {
        const newQuantity = quantity + step;
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
    };

    const handleDecrease = () => {
         if (quantity > min) {
            const newQuantity = quantity - step;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    const handleChange = (e) => {
        const value = Math.max(min, Number(e.target.value) || min);
        setQuantity(value);
        onQuantityChange(value);
    };

    return (
        <div className="quantity">
            <button className="count" name="minus" type="button" onClick={handleDecrease}>
                -
            </button>
            <input
                className="quantity_input"
                type="number"
                name="quantity"
                value={quantity}
                onChange={handleChange}
                min={min}
                step={step}
            />
            <button className="count" name="plus" type="button" onClick={handleIncrease}>
                +
            </button>
        </div>
    );
}

export default QuantityInput;
