import Container from "@/components/Container";
import { getProducts } from "@/library";
import AddToCartButton from "../../AddToCartButton";

export default async function ProductDetails({ params }) {
  const { product_id } = await params; // ✅ Await params
  const product = await getProducts(product_id);

  if (!product) {
    return <div className="p-4 text-red-500">Product not found</div>;
  }

  return (
    <Container>
      <div className="py-12 px-4">
        <div className="flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-md overflow-hidden">
          {/* Product image */}
          <div className="md:w-1/2 flex">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[400px] object-contain bg-gray-50"
            />
          </div>

          {/* Product details */}
          <div className="p-6 md:w-1/2 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <p className="text-lg font-semibold mb-2">${product.price}</p>
            <p className="text-black-700 mb-4">{product.description}</p>
            <p className="text-base text-black-500 mb-2">
              Category: <span className="font-medium">{product.category}</span>
            </p>
            <p className="text-sm text-yellow-600 mb-6">
              ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
            </p>

            {/* Add to Cart will go in Client Component */}
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </Container>
  );
}
