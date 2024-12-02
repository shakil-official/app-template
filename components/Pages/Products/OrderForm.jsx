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
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-300 space-y-6">
      {/* Name Input */}
      <div className="space-y-2">
        <label className="block text-gray-700 text-lg font-semibold">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Contact Input */}
      <div className="space-y-2">
        <label className="block text-gray-700 text-lg font-semibold">Contact Number</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Enter your contact number"
          required
        />
      </div>

      {/* Notes Input */}
      <div className="space-y-2">
        <label className="block text-gray-700 text-lg font-semibold">Additional Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          rows="4"
          placeholder="Enter any special instructions or notes"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
      >
        Submit Order
      </button>
    </form>
  );
};

export default OrderForm;
