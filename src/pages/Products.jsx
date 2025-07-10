import React from "react";

const products = [
  {
    id: 1,
    name: "Rustic Sourdough Bread",
    description: "Slow-fermented for deep flavor and a crisp, golden crust.",
    price: "€4.50",
    image: "/assets/products/sourdough.jpg",
  },
  {
    id: 2,
    name: "Butter Croissants",
    description: "Flaky, buttery, and freshly baked every morning.",
    price: "€3.00",
    image: "/assets/products/croissant.jpg",
  },
  {
    id: 3,
    name: "Fresh Egg Pasta",
    description: "Traditional handmade pasta using local free-range eggs.",
    price: "€5.00",
    image: "/assets/products/pasta.jpg",
  },
  {
    id: 4,
    name: "Seeded Whole Wheat Loaf",
    description: "Nutritious and hearty — packed with sunflower and flax seeds.",
    price: "€4.00",
    image: "/assets/products/wholewheat.jpg",
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-green-800 mb-3">
            Our Products
          </h1>
          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            Handcrafted gluten-rich goodness — baked fresh with love and care.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(({ id, name, description, price, image }) => (
            <div
              key={id}
              className="border-2 border-blue-300 rounded-3xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-semibold text-green-700">{name}</h2>
                <p className="text-gray-600">{description}</p>
                <p className="text-green-800 font-bold text-lg">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
