import { useState } from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaShoppingCart, FaHistory, FaCog } from "react-icons/fa";
import MenuManagement from "../Pages/MenuManagement";
import CreateOrder from "../Pages/CreateOrder";
import OrderHistory from "./OrderHistory";
import Settings from "../Pages/settings/Settings";

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState("menu");

    const navItems = [
        { id: "menu", label: "Menu Management", icon: <FaUtensils /> },
        { id: "create", label: "Create Order", icon: <FaShoppingCart /> },
        { id: "orders", label: "Order History", icon: <FaHistory /> },
        { id: "settings", label: "Settings", icon: <FaCog /> },
    ];

    return (
        <div className="flex w-screen">

        
            <motion.aside
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="w-64 bg-white h-screen shadow-md fixed left-0 top-0 p-6 flex flex-col"
            >
                {/* Logo & Title */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="flex flex-col items-center mb-10"
                >
                    <div className="flex justify-center items-center bg-red-500 rounded-full w-16 h-16">
                        <img src="/Group.png" alt="logo" className="w-8 h-8 object-contain" />
                    </div>
                    <h1 className="text-xl font-bold text-black mt-3">TASTY HUB</h1>
                </motion.div>

                {/* Navigation */}
                <nav className="flex flex-col gap-3 relative">
                    {navItems.map((item) => (
                        <motion.button
                            key={item.id}
                            onClick={() => setActiveItem(item.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg relative z-10 font-medium
                                ${activeItem === item.id ? "text-black" : "text-gray-700"}`}
                        >
                            {item.icon} {item.label}
                            {activeItem === item.id && (
                                <motion.div
                                    layoutId="activeBackground"
                                    className="absolute inset-0 bg-gray-200 rounded-lg -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </nav>
            </motion.aside>

            
            <motion.main
                key={activeItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="ml-64 w-full"
            >
                {activeItem === "menu" && <MenuManagement />}
                {activeItem === "create" && <CreateOrder />}
                {activeItem === "orders" && <OrderHistory />}
                {activeItem === "settings" && <Settings />}
            </motion.main>
        </div>
    );
}
