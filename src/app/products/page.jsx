"use client"; 

import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Products() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch products from backend
  const fetchProducts = async (searchText = "") => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://pawmart-next.vercel.app/search?search=${searchText}`
      );
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // initial load (all products)
  useEffect(() => {
    fetchProducts();
  }, []);

  // dynamic search with debounce
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchProducts(query);
    }, 400); // wait 400ms after typing stops

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="container mx-auto mt-10">
      <div className="text-center font-bold text-3xl"> Products </div>
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-1/5 border px-4 py-2 rounded mb-5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Loading */}
      {loading && <p className="text-gray-500 mb-2">Loading...</p>}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {products.length === 0 && !loading ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <Card key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
