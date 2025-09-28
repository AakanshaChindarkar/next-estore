// components/Error.jsx
"use client";

import Link from "next/link";

export default function Error({ message = "Something went wrong!" }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-6">{message}</p>
      <Link
        href="/"
        className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
