import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useCart } from "./CartProvider";

export default function OrderCard({ item }) {
  const { addToCart } = useCart();

  const handleAddToOrder = () => {
    addToCart(item);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.97 }}
      className="bg-white p-4 rounded-lg shadow-md flex flex-col relative"
    >
      {/* Image */}
      <motion.img
        src={item.Image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-md mb-3"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      {/* Name & Price */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-red-500 font-semibold">
          ₦{Number(item.price).toLocaleString()}
        </p>
      </div>

      {/* Add to Order Button */}
      <motion.button
        onClick={handleAddToOrder}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full flex items-center gap-2 mt-4 bg-red-500 text-white justify-center py-2 px-4 rounded-lg hover:bg-red-600 transition"
      >
        <FaPlus /> Add to Order
      </motion.button>
    </motion.div>
  );
}
