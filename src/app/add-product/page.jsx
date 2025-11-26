"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function AddProductForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const newProduct = {
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      fullDescription: form.fullDescription.value,
      price: Number(form.price.value),
      image: form.image.value || null,
    };

    try {
      const res = await fetch("https://pawmart-next.vercel.app/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        Swal.fire({
          title: "Success!",
          text: "Product added successfully!",
          icon: "success",
          confirmButtonColor: "#4CAF50",
        });
        form.reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: data.error || "Failed to add product",
          icon: "error",
          confirmButtonColor: "#d33",
        });
      }
    } catch (err) {
      setLoading(false);
      Swal.fire({
        title: "Server Error!",
        text: "Something went wrong!",
        icon: "error",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-6">
      <h2 className="text-3xl font-bold text-center mb-6">Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Title</label>
          <input
            required
            name="title"
            type="text"
            placeholder="Product title"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Short Description</label>
          <input
            required
            name="shortDescription"
            type="text"
            placeholder="Short description"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Full Description */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Full Description</label>
          <textarea
            required
            name="fullDescription"
            rows="4"
            placeholder="Detailed description"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Price (TK)</label>
          <input
            required
            name="price"
            type="number"
            placeholder="Price"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Image URL (optional)</label>
          <input
            name="image"
            type="text"
            placeholder="https://example.com/image.jpg"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-500 text-white font-medium py-2 rounded-md hover:bg-black-600 transition-colors"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
