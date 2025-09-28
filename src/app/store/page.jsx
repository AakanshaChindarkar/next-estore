import Container from "@/components/Container";
import ProductBox from "@/components/ProductBox";
import { getCategories, getProducts, toCamelCase } from "@/library";
import Link from "next/link";
import { Suspense } from "react";
export default async function StorePage({ searchParams }) {
  const category = searchParams?.category || null;

  return (
    <Container className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-4">
      <CategoryListing />
      <Suspense
        fallback={<div className="col-span-4 text-center p-4">Loading...</div>}
      >
        <ProductListing category={category} />
      </Suspense>
    </Container>
  );
}

const CategoryListing = async () => {
  const data = await getCategories();
  return (
    <div className="mb-4 lg:mb-0">
      <h2 className="text-pink-500 text-2xl font-bold mb-2">Categories</h2>
      <ul className="space-y-2">
        {data.map((cat, index) => (
          <li
            key={"category-" + index}
            className="cursor-pointer  hover:text-white-600 hover:bg-pink-200 transition-colors duration-300 rounded-[5px] border border-pink-500 px-4 pt-2 pb-2"
          >
            <Link href={`/store?category=${cat}`}>{toCamelCase(cat)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductListing = async ({ category }) => {
  // const data = await getProducts({ category });
  const data = await getProducts(null, category);
  return (
    <div className="col-span-4 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((product) => (
        <ProductBox product={product} key={"product-" + product.id} />
      ))}
    </div>
  );
};
