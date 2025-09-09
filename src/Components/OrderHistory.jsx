import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
import OrderHistoryCard from "./OrderHistoryCard";

export default function OrderHistory() {
    const [filter, setFilter] = useState("All");

    // Order data matching the design
    const orders = [
        {
            id: "001",
            date: "1/9/2025, 3:00 PM",
            items: ["2× Small Chops", "1× Fruit Salad"],
            itemPrices: [8000, 2000],
            subtotal: 8000,
            tax: 200,
            total: 10200,
            payment: "Card",
            status: "Completed",
        },
        {
            id: "002",
            date: "2/9/2025, 3:00 PM",
            items: ["1× Jollof Rice", "2× Fruit Juice"],
            itemPrices: [7000, 4000],
            subtotal: 11000,
            tax: 200,
            total: 11200,
            payment: "Cash",
            status: "Completed",
        },
        {
            id: "003",
            date: "1/9/2025, 3:00 PM",
            items: ["1× Pounded Yam", "1× Bottled Water"],
            itemPrices: [6000, 500],
            subtotal: 6500,
            tax: 200,
            total: 6700,
            payment: "Mobile",
            status: "Pending",
        },
    ];

    // Calculate summary statistics
    const totalOrders = orders.length;
    const completedOrders = orders.filter(order => order.status === "Completed").length;
    const totalRevenue = orders
        .filter(order => order.status === "Completed")
        .reduce((sum, order) => sum + order.total, 0);

    // Apply filter
    const filteredOrders = filter === "All"
        ? orders
        : orders.filter(order => order.status === filter);

    return (
        <div className="relative p-6 mt-15 bg-gray-50 w-full min-h-screen">
            {/* Header Section */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Order History</h2>
                <p className="text-gray-600">Track and manage all your restaurant orders</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm relative">
                    <div className="absolute top-4 right-4">
                        <FaClock className="text-gray-400 text-lg" />
                    </div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Total Orders</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{totalOrders}</h3>
                    <small className="text-gray-500 text-sm">All time</small>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm relative">
                    <div className="absolute top-4 right-4">
                        <FaClock className="text-gray-400 text-lg" />
                    </div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Completed Orders</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{completedOrders}</h3>
                    <small className="text-gray-500 text-sm">Successfully completed</small>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm relative">
                    <div className="absolute top-4 right-4">
                        <FaClock className="text-gray-400 text-lg" />
                    </div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Total Revenue</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">₦{totalRevenue.toLocaleString()}</h3>
                    <small className="text-gray-500 text-sm">From completed orders</small>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6">
                <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === "All"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    onClick={() => setFilter("All")}
                >
                    All
                </button>
                <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === "Completed"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    onClick={() => setFilter("Completed")}
                >
                    Completed
                </button>
                <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === "Pending"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    onClick={() => setFilter("Pending")}
                >
                    Pending
                </button>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
                {filteredOrders.length > 0 ? (
                    filteredOrders.map((order, index) => (
                        <OrderHistoryCard key={index} order={order} />
                    ))
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No orders found for the selected filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
