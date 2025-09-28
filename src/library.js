const getCategories = async () => {
  try {
    const categoryResponse = await fetch("https://fakestoreapi.com/products");
    const data = await categoryResponse.json();
    // const categories = data.filter((product) => product.category === category);
    const categories = [...new Set(data.map((product) => product.category))];

    return categories;
  } catch (error) {
    console.error("Error fetching product categories:", error);
  }
};
const getProducts = async (product_id = null, category = null) => {
  let API = "https://fakestoreapi.com/products";
  try {
    if (product_id != null) {
      API += "/" + product_id;
    } else if (category != null) {
      API += "/category/" + encodeURIComponent(category);
    }
    const productResponse = await fetch(API);
    const data = await productResponse.json();
    return data; // just return products
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // return empty array if error
  }
  // return new Error("Something went wrong");
};

const toCamelCase = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
export { getCategories, getProducts, toCamelCase };
