// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">E-Store</h2>
          <p className="text-sm">
            Your one-stop shop for fashion, electronics, and more. Quality
            products, best prices.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-pink-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/store" className="hover:text-pink-500 transition">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-pink-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-pink-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/faq" className="hover:text-pink-500 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-pink-500 transition">
                Returns
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-pink-500 transition">
                Shipping
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-pink-500 transition">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Stay Updated
          </h3>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg focus:outline-none text-black"
            />
            <button
              type="submit"
              className="bg-pink-500 px-4 py-2 rounded-r-lg text-white hover:bg-pink-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} E-Store. All rights reserved.
      </div>
    </footer>
  );
}
