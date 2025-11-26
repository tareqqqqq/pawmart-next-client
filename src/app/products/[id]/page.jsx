import Link from "next/link";

export default async function ProductDetails({params}) {

  //
    const {id}= await params
    const res =await fetch (`https://pawmart-next.vercel.app/products/${id}`)
    const data=await res.json()
    console.log(data.result);

    const {title,image,shortDescription,fullDescription,price,}=data.result
  return (
    <div>
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
  <div className="card bg-white shadow-lg border border-gray-100 rounded-3xl overflow-hidden">
    <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10">
      
      {/* 🐶 Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover rounded-2xl shadow-md hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

      {/* 📝 Info Section */}
      <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          {title}
        </h1>

        {/* 🏷️ Category + Price */}
        <div className="flex flex-wrap gap-3 mt-2">
          <div className="badge badge-lg bg-pink-100 text-pink-600 font-semibold px-4 py-2 border-0">
            {shortDescription}
          </div>
          <div className="badge badge-lg bg-green-100 text-green-700 font-semibold px-4 py-2 border-0">
            ৳ {price}
          </div>
        </div>

       

        {/*  Description */}
        <p className="text-gray-700 leading-relaxed text-base md:text-lg border-t pt-4 mt-4">
          {fullDescription}
        </p>

        {/*  Order Button */}
        <div className="flex gap-3 mt-6">
          <Link
            href="/products"
            className="btn text-white rounded-full px-8 bg-linear-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 border-none shadow-md"
          >
             Back
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  )
  
}