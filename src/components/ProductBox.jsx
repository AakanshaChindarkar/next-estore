import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/productbox.module.css";
export default function ProductBox({ product }) {
  return (
    <div className={`${styles.card} bg-white p-4 rounded-ld`}>
      <Link href={`/store/product-details/${product.id}`}>
        <Image
          width={300}
          height={150}
          src={product.image}
          alt={product.title}
          className={`${styles.productImage} w-full h-48 object-cover rounded-md`}
        ></Image>
      </Link>
      <div className="mt-4">
        <h3 className="text-sm min-h-[70px] font-semibold text-gray-800">
          {product.title}
        </h3>
        <p className="text-gray-900 font-semibold mt-2"> {product.price} </p>
        <button
          className={`${styles.buybtn} mt-4 bg-pink-500 text-white duration-300`}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
