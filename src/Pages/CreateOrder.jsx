import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../Components/CartProvider";
import OrderCard from "../Components/OrderCard";
import Cart from "../Data/Cart";
import CartPopup from "../Components/CartPopup"; // 👈 import popup

export default function CreateOrder() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { toggleCart, cart } = useCart();

  const categories = ["All", "Appetizers", "Main Course", "Drinks", "Desserts"];

  // Filter menu items by category
  let filteredItems =
    activeTab === "All"
      ? Cart
      : Cart.filter((item) => item.category === activeTab);

  // Apply search filter
  filteredItems = filteredItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative p-6 mt-15">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Create New Order</h1>
          <p className="text-gray-600">
            Select items from the menu to create an order
          </p>
        </div>

        {/* Cart button */}
        <button
          onClick={() => toggleCart(true)}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          <FaShoppingCart />
          Cart ({cart.length})
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6 w-full sm:w-1/3">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search Order..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded ${activeTab === category
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pr-80 mt-30">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <OrderCard key={item.id} item={item} />)
        ) : (
          <p className="text-gray-500 text-center col-span-3">
            No items found
          </p>
        )}
      </div>


      <CartPopup />
    </div>
  );
}
