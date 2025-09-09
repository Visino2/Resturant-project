import { useState } from "react";
import { FaUtensils, FaShoppingCart, FaHistory, FaCog } from "react-icons/fa";
import MenuManagement from "../Pages/MenuManagement";
import CreateOrder from "../Pages/CreateOrder";
import OrderHistory from "./OrderHistory";
import Settings from "../Pages/settings/Settings";

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState("menu");

    return (
        <div className="flex w-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-white h-screen shadow-md fixed left-0 top-0 p-6 flex flex-col">

                {/* Logo & Title */}
                <div className="flex flex-col items-center mb-10">
                    <div className="flex justify-center items-center bg-red-500 rounded-full w-16 h-16">
                        <img src="/Group.png" alt="logo" className="w-8 h-8 object-contain" />
                    </div>
                    <h1 className="text-xl font-bold text-black mt-3">RestaurantOS</h1>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-3">
                    {[
                        { id: "menu", label: "Menu Management", icon: <FaUtensils /> },
                        { id: "create", label: "Create Order", icon: <FaShoppingCart /> },
                        { id: "orders", label: "Order History", icon: <FaHistory /> },
                        { id: "settings", label: "Settings", icon: <FaCog /> },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveItem(item.id)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 
                                ${activeItem === item.id
                                    ? "bg-gray-200 text-black font-semibold"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                                }`}
                        >
                            {item.icon} {item.label}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="ml-64 w-full">
                {activeItem === "menu" && <MenuManagement />}
                {activeItem === "create" && <CreateOrder />}
                {activeItem === "orders" && <OrderHistory />}
                {activeItem === "settings" && <Settings />}
            </main>
        </div>
    );
}
