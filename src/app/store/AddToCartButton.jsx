"use client";

export default function AddToCartButton({ product }) {
  return (
    <button
      className="cursor-pointer bg-pink-500 w-50 md:w-auto text-white font-semibold px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300"
      onClick={() => alert(`Added "${product.title}" to cart`)}
    >
      🛒 Add to Cart
    </button>
  );
}
