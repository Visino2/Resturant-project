import { FaPlus } from "react-icons/fa";
import { useCart } from "./CartProvider";

export default function OrderCard({ item }) {
    const { addToCart, toggleCartItem } = useCart();

    const handleAddToOrder = () => {
        addToCart(item);
        toggleCartItem(true);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col relative">
            {/* Image */}
            <img
                src={item.Image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-3"
            />

            {/* Name & Price */}
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-red-500 font-semibold">
                    ₦{Number(item.price).toLocaleString()}
                </p>
            </div>

            {/* Add to Order Button */}
            <button
                onClick={handleAddToOrder}
                className="w-full flex items-center gap-2 mt-4 bg-red-500 text-white justify-center py-2 px-4 rounded-lg hover:bg-red-600 transition"
            >
                <FaPlus /> Add to Order
            </button>
        </div>
    );
}
