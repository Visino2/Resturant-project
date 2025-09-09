import { useState } from "react";
import { MdCreditCard } from "react-icons/md";

export default function Billing() {
    const [showModal, setShowModal] = useState(false);
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");

    const plan = {
        name: "Professional Plan",
        price: "₦34,500 per month",
        features: "Unlimited menu items, advanced analytics, priority support",
        status: "Active",
    };

    const payment = {
        brand: "Visa",
        last4: "4242",
        expiry: "6/12/2026",
    };

    const history = [
        { id: 1, month: "January 2024", plan: "Professional Plan", amount: "₦34,500", status: "Paid" },
    ];

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/dummy-invoice.pdf";
        link.download = "invoice-jan-2024.pdf";
        link.click();
        alert("Invoice downloaded (demo)");
    };

    const handleCancel = () => {
        if (window.confirm("Are you sure you want to cancel your subscription?")) {
            console.log("Subscription cancelled (demo)");
            alert("Your subscription has been cancelled (demo)");
        }
    };

    const handleSavePayment = () => {
        alert(`New card saved (demo): ${cardNumber}, exp: ${expiry}`);
        setShowModal(false);
        setCardNumber("");
        setExpiry("");
    };

    return (
        <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
                <MdCreditCard className="text-gray-700 text-lg" />
                <h3 className="text-lg font-semibold text-gray-900">Billing & Subscription</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
                Manage your subscription and payment methods.
            </p>

            {/* Current Plan */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-semibold text-gray-900">Current Plan</h4>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {plan.status}
                    </span>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                    <div className="text-base font-semibold text-gray-900 mb-1">{plan.name}</div>
                    <div className="text-sm text-gray-900 mb-2">{plan.price}</div>
                    <div className="text-sm text-gray-600">{plan.features}</div>
                </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-semibold text-gray-900">Payment Method</h4>
                    <button
                        onClick={() => setShowModal(true)}
                        className="text-xs px-3 py-1 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Update
                    </button>
                </div>
                <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-4">
                    <MdCreditCard className="text-gray-700 text-lg" />
                    <div>
                        <div className="font-semibold text-gray-900">•••• •••• •••• {payment.last4}</div>
                        <div className="text-sm text-gray-600">Expires {payment.expiry}</div>
                    </div>
                </div>
            </div>

            {/* Billing History */}
            <div className="mb-6">
                <h4 className="text-base font-semibold text-gray-900 mb-3">Billing History</h4>
                <div className="space-y-2">
                    {history.map((h) => (
                        <div key={h.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-4">
                            <div>
                                <div className="font-semibold text-gray-900">{h.month}</div>
                                <div className="text-sm text-gray-600">{h.plan}</div>
                            </div>
                            <div className="text-right">
                                <div className="font-medium text-gray-900">{h.amount}</div>
                                <div className="text-sm text-gray-600">{h.status}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
                <button
                    onClick={handleDownload}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                    Download Invoice
                </button>
                <button
                    onClick={handleCancel}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                    Cancel Subscription
                </button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96 max-w-full mx-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Payment Method</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="1234 5678 9012 3456"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    value={expiry}
                                    onChange={(e) => setExpiry(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSavePayment}
                                className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
