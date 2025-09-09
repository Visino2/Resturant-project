import { useState } from "react";
import { MdNotifications } from "react-icons/md";

export default function Notifications() {
    const [prefs, setPrefs] = useState({
        newOrders: true,
        lowStock: true,
        dailyReports: false,
        promotions: true,
    });

    const handleToggle = (key) => {
        setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSave = () => {
        console.log("Notification preferences saved:", prefs);
        alert("Notification preferences saved successfully!");
    };

    return (
        <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
                <MdNotifications className="text-gray-700 text-lg" />
                <h3 className="text-lg font-semibold text-gray-900">Notification Preferences</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
                Choose what notifications you want to receive.
            </p>

            {/* Notification Items */}
            <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3">
                    <div className="flex-1">
                        <h4 className="text-base font-semibold text-gray-900 mb-1">New Orders</h4>
                        <p className="text-sm text-gray-600">Get notified when new orders are placed.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={prefs.newOrders}
                            onChange={() => handleToggle("newOrders")}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                    </label>
                </div>

                <div className="flex items-center justify-between py-3">
                    <div className="flex-1">
                        <h4 className="text-base font-semibold text-gray-900 mb-1">Low Stock Alerts</h4>
                        <p className="text-sm text-gray-600">Alert when menu items are running low.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={prefs.lowStock}
                            onChange={() => handleToggle("lowStock")}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                    </label>
                </div>

                <div className="flex items-center justify-between py-3">
                    <div className="flex-1">
                        <h4 className="text-base font-semibold text-gray-900 mb-1">Daily Reports</h4>
                        <p className="text-sm text-gray-600">Receive daily sales and performance reports.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={prefs.dailyReports}
                            onChange={() => handleToggle("dailyReports")}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                    </label>
                </div>

                <div className="flex items-center justify-between py-3">
                    <div className="flex-1">
                        <h4 className="text-base font-semibold text-gray-900 mb-1">Promotion & Updates</h4>
                        <p className="text-sm text-gray-600">Get updates about new features and promotions.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={prefs.promotions}
                            onChange={() => handleToggle("promotions")}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                    </label>
                </div>
            </div>

            {/* Save Button */}
            <button
                onClick={handleSave}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
            >
                Save Notification Preferences
            </button>
        </div>
    );
}
