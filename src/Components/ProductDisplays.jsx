import React, { useState } from "react";

const ProductDetails = () => {
  const images = [
    "/images/front.png",
    "/images/back.png",
    "/images/model.png",
  ];
  const colors = ["#4E4637", "#2F4F4F", "#3D3B74"];
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(q => q + 1);
  const decreaseQty = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 max-w-6xl mx-auto font-sans">
      {/* Left images */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-24 object-cover cursor-pointer border ${
                selectedImage === img ? "border-black" : "border-transparent"
              }`}
            />
          ))}
        </div>
        <div className="flex-1">
          <img
            src={selectedImage}
            alt="selected"
            className="w-full max-w-md object-cover"
          />
        </div>
      </div>

      {/* Right details */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 text-xl">★★★★☆</span>
          <span className="ml-2 text-gray-600 text-sm">4.5/5</span>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-2xl font-semibold">${260}</span>
          <span className="line-through text-gray-400">${300}</span>
          <span className="bg-red-100 text-red-500 px-2 py-1 text-sm rounded">
            -40%
          </span>
        </div>
        <p className="text-gray-600 mb-6">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>

        {/* Colors */}
        <div className="mb-6">
          <h2 className="text-sm text-gray-500 mb-2">Select Colors</h2>
          <div className="flex gap-3">
            {colors.map((color, idx) => (
              <button
                key={idx}
                className={`w-7 h-7 rounded-full border-2 ${
                  selectedColor === color ? "border-black" : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <h2 className="text-sm text-gray-500 mb-2">Choose Size</h2>
          <div className="flex gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 rounded-full border ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-full overflow-hidden">
            <button
              onClick={decreaseQty}
              className="px-3 py-1 text-xl bg-gray-100 hover:bg-gray-200"
            >
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={increaseQty}
              className="px-3 py-1 text-xl bg-gray-100 hover:bg-gray-200"
            >
              +
            </button>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
