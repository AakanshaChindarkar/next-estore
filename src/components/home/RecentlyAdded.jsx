"use client";
import { useEffect, useState } from "react";
import Container from "../Container";
import ProductBox from "../ProductBox";

export default function RecentlyAdded() {
  const [products, setProduct] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=5");
      const data = await response.json();
      console.log("Data here", data);
      setProduct(data);
    } catch (error) {
      {
        console.error("Error fetching products:", error);
      }
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="bg-gray-100 p-3 mt-5">
      <Container>
        <h1 className="text-center text-3xl font-bold mt-4">
          Recently Added Products
        </h1>
        {/* Use CSS Grid to ensure equal size boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 mb-4">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductBox key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full ">Loading products...</p>
          )}
        </div>
      </Container>
    </div>
  );
}
