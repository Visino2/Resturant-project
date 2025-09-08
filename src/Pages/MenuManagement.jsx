import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import MenuCard from "../Components/MenuCard";
import MenuModal from "../Components/MenuModal";
import Cart from "../Data/Cart";

export default function MenuManagement() {
  const [activeTab, setActiveTab] = useState("All");
  const [menuItems, setMenuItems] = useState(Cart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Appetizers", "Main Course", "Drinks", "Desserts"];

  // Filter items by category
  let filteredItems =
    activeTab === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeTab);

  // Apply search filter
  filteredItems = filteredItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle new item
  const handleAddItem = (newItem) => {
    setMenuItems((prev) => [...prev, newItem]);

    // 👇 Ensure correct tab stays updated
    if (activeTab !== "All" && activeTab !== newItem.category) {
      setActiveTab("All"); // fallback to "All" so you can see it immediately
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mt-30 ">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Menu Management</h1>
          <p className="text-gray-600">Add and edit menu items</p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          + Menu
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mt-6 mb-4 w-full sm:w-1/3">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-100 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded ${
              activeTab === category
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <MenuCard key={item.id} item={item} />)
        ) : (
          <p className="text-gray-500 text-center col-span-3">No items found</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <MenuModal
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddItem}
          defaultCategory={activeTab} // 👈 pass current tab to modal
        />
      )}
    </div>
  );
}
