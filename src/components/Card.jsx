import Link from "next/link";

export default function Card({ product }) {
  const { title, image, shortDescription, price, _id } = product;

  return (
    <div className="p-3 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
      
      {/* Image */}
      <figure className="h-48 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>

      {/* Body */}
      <div className="flex-1 flex flex-col p-4">
        
        {/* Title */}
       <h2 className="text-lg font-bold text-gray-800  px-2 py-1 rounded-md mb-3">
  {title}
</h2>


        {/* Short Description & Price */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-700 text-sm line-clamp-1">{shortDescription}</p>
          <p className="font-bold text-lg text-gray-900">${price}</p>
        </div>

        {/* View Details Button */}
        <Link
          href={`/products/${_id}`}
          className="bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white rounded-full py-2 text-center w-full font-medium transition-all"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}
