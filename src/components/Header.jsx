import styles from "@/styles/header.module.css";
import Container from "./Container";
import Link from "next/link";
import { FiSearch, FiShoppingCart } from "react-icons/fi"; // make sure you have react-icons installed

export default function Header() {
  return (
    <header className={`${styles.header} py-3 px-1 shadow`}>
      <Container className="flex item-center justify-between">
        <Link href="/">
          <div className="flex item-center">
            <span className="text-pink-500 font-bold text-4xl">
              E-Store<b className="text-black">.</b>
            </span>
          </div>
        </Link>
        {/* Search Box */}
        <div className={`${styles.searchBar} flex items-center`}>
          <input
            type="text"
            placeholder="Search for products ..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            {/* React Icon for search */}
            <FiSearch size={18} />
          </button>
        </div>
        {/* Navigation text here */}
        <NavBar />
      </Container>
    </header>
  );
}
const NavBar = () => {
  return (
    <nav className="flex items-center gap-5">
      <ul className="flex items-center gap-3 font-semibold">
        <Link className={styles.navLink} href="/">
          Home
        </Link>
        <Link className={styles.navLink} href="/store">
          Store
        </Link>
      </ul>
      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Cart Icon */}
        <Link href="\cart">
          <div className="relative">
            <FiShoppingCart color="black" size={24} />
            <span
              className={`${styles.cartBadge} absolute bg-pink-500 top-[-15px] right-[-20px] rounded-full w-5 h-5 flex text-white text-xs items-center justify-center`}
            >
              3
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
