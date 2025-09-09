import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
import OrderHistoryCard from "./OrderHistoryCard";
import { useOrders } from "./OrderProvider";
import { motion } from "framer-motion";

export default function OrderHistory() {
  const { orders } = useOrders();
  const [filter, setFilter] = useState("All");

  const totalOrders = orders.length;
  const completedOrders = orders.filter((o) => o.status === "Completed").length;
  const totalRevenue = orders
    .filter((o) => o.status === "Completed")
    .reduce((sum, o) => sum + o.total, 0);

  const filteredOrders =
    filter === "All" ? orders : orders.filter((o) => o.status === filter);

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative p-6 mt-15 bg-gray-50 w-full min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Order History</h2>
        <p className="text-gray-600">
          Track and manage all your restaurant orders
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[ 
          { title: "Total Orders", value: totalOrders, note: "All time" },
          { title: "Completed Orders", value: completedOrders, note: "Successfully completed" },
          { title: "Total Revenue", value: `₦${totalRevenue.toLocaleString()}`, note: "From completed orders" }
        ].map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -6, scale: 1.02, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.97 }}
            className="bg-white p-4 rounded-lg shadow-sm relative"
          >
            <div className="absolute top-4 right-4">
              <FaClock className="text-gray-400 text-lg" />
            </div>
            <p className="text-gray-600 text-sm font-medium mb-1">{card.title}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{card.value}</h3>
            <small className="text-gray-500 text-sm">{card.note}</small>
          </motion.div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {["All", "Completed", "Pending"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === tab
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderHistoryCard key={order.id} order={order} />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No orders found for the selected filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
