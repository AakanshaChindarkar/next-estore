import Container from "../Container";
import ProductBox from "../ProductBox";

export default async function FeaturedProducts() {
  const response = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await response.json();
  return (
    <div className="p-3">
      <Container>
        <h1 className="text-center text-3xl font-bold mt-4">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 mb-4">
          {data.map((prod) => {
            return <ProductBox key={prod.id} product={prod} />;
          })}
        </div>
      </Container>
    </div>
  );
}
