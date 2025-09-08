import { useState } from "react";

export default function MenuModal({ onClose, onAdd, defaultCategory }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(
    defaultCategory !== "All" ? defaultCategory : "Appetizers"
  );
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      category,
      description,
      image: image || "https://via.placeholder.com/150",
      available: true,
    };
    onAdd(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-2">Add New Menu Item</h2>
        <p className="text-gray-500 text-sm mb-6">
          Add a new item to your restaurant menu. Fill in all the details below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Item Name */}
         <div>
            <label className="font-bold">Item Name</label>
              <input
            type="text"
            placeholder="e.g, Gizzard Dodo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-100 rounded-full bg-gray-100 focus:outline-none focus:ring focus:ring-red-200"
            required
          />
         </div>

          {/* Price */}
         <div>
            <label className="font-bold">Price</label>
             <input
            type="number"
            placeholder="0.00"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-100 rounded-full bg-gray-100 focus:outline-none focus:ring focus:ring-red-200"
            required
          />
         </div>

          {/* Category */}
         <div>
            <label className="font-bold">Category</label>
              <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-full border-gray-100 focus:outline-none bg-gray-100 focus:ring focus:ring-red-200"
            required
          >
            <option value="Appetizers">Appetizers</option>
            <option value="Main Course">Main Course</option>
            <option value="Drinks">Drinks</option>
            <option value="Desserts">Desserts</option>
          </select>

         </div>
          {/* Description */}
         <div>
            <label className="font-bold">Description</label>
              <textarea
            placeholder="Brief description of the item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-100 rounded-lg text-center bg-gray-100 focus:outline-none focus:ring focus:ring-red-200"
            rows="3"
            required
          />
         </div>

          {/* Image URL */}
          <div>
            <label className="font-bold">Image</label>
             <input
            type="text"
            placeholder="Image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-100 rounded-lg bg-gray-100 focus:outline-none focus:ring focus:ring-red-200"
          />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
