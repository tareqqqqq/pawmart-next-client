"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ManageProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://pawmart-next.vercel.app/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`https://pawmart-next.vercel.app/products/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
        Swal.fire("Deleted!", "Product has been deleted.", "success");
      } else {
        Swal.fire("Error!", "Failed to delete product", "error");
      }
    } catch (err) {
      Swal.fire("Server Error!", "Something went wrong!", "error");
    }
  };

  if (loading)
    return <p className="text-center mt-10 text-gray-700">Loading...</p>;
  if (!products.length)
    return <p className="text-center mt-10 text-gray-700">No products found.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Manage Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-2 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
          >
            <img
              src={product.image || "https://via.placeholder.com/400x250"}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-2">
                {product.shortDescription}
              </p>
              <p className="font-bold mb-3">Price: {product.price} Tk</p>

              <div className="flex  gap-5">
                <button
                  onClick={() =>
                    Swal.fire({
                      title: product.title,
                      text:
                        product.fullDescription || product.shortDescription,
                      imageUrl: product.image,
                      imageHeight: 200,
                    })
                  }
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-1 py-2 rounded-2xl text-sm transition w-full"
                >
                  View
                </button>

                <button
                  onClick={() => deleteProduct(product._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold px-1 py-2 rounded-2xl text-sm transition w-full"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
