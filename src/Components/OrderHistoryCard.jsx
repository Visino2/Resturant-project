import React from "react";
import { FaCheck } from "react-icons/fa";

export default function OrderHistoryCard({ order }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4 transition-all duration-200 hover:bg-gray-50 hover:transform hover:-translate-y-1">
            {/* Order Header */}
            <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                    <h4 className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
                        <FaCheck className="text-green-500" />
                        Order-{order.id}
                    </h4>
                    <p className="text-gray-500 text-sm">{order.date}</p>
                </div>
                <div className="text-right">
                    <div className="text-red-500 text-lg font-bold mb-1">₦{order.total.toLocaleString()}</div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${order.status === "Completed"
                            ? "bg-red-500"
                            : "bg-green-500"
                        }`}>
                        {order.status}
                    </span>
                </div>
            </div>

            {/* Order Items */}
            <div className="my-2">
                {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center my-1">
                        <div className="flex-1">
                            <span className="text-gray-700">{item}</span>
                        </div>
                        <div className="text-right min-w-[120px]">
                            <span className="text-gray-700">₦{order.itemPrices[index].toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <hr className="border-gray-200 my-3" />

            {/* Order Summary */}
            <div className="space-y-1">
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <span className="text-gray-500 text-sm">Subtotal:</span>
                    </div>
                    <div className="text-right min-w-[120px]">
                        <span className="text-gray-500 text-sm">₦{order.subtotal.toLocaleString()}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <span className="text-gray-500 text-sm">Tax:</span>
                    </div>
                    <div className="text-right min-w-[120px]">
                        <span className="text-gray-500 text-sm">₦{order.tax.toLocaleString()}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <span className="text-gray-900 font-medium">Total:</span>
                    </div>
                    <div className="text-right min-w-[120px]">
                        <span className="text-gray-900 font-medium">₦{order.total.toLocaleString()}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <span className="text-gray-500 text-sm">Payment Method:</span>
                    </div>
                    <div className="text-right min-w-[120px]">
                        <span className="text-gray-500 text-sm">{order.payment}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
