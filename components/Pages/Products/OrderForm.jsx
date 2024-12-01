import React, { useState } from 'react';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        notes: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order Submitted:', formData);
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded shadow w-full md:w-1/2">
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Contact Number:</label>
                <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Notes:</label>
                <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    rows="4"
                />
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded justify-center">
                Submit Order
            </button>
        </form>
    );
};

export default OrderForm;
