import { FaTrash, FaEdit } from "react-icons/fa";

export default function MenuCard({ item }) {
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
                <p className="text-red-500 font-semibold">₦{item.price.toLocaleString()}</p>
            </div>

            {/* Category & Availability */}
            <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 text-xs bg-green-100 text-green-900 rounded">
                    {item.category}
                </span>
                <span
                    className={`px-3 py-1 text-xs rounded ${
                        item.available
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {item.available ? "Available" : "Unavailable"}
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {item.description}
            </p>

            {/* Action Buttons (bottom right) */}
            <div className="flex gap-2 justify-end mt-auto pt-4">
                <button
                    onClick={() => console.log("Edit", item.id)}
                    className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
                >
                    <FaEdit />
                </button>
                <button
                    onClick={() => console.log("Delete", item.id)}
                    className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    );
}