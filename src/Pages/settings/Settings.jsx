import { useState } from "react";
import Restaurant from "./Restaurant";
import Account from "./Account";
import Notifications from "./Notifications";
import Billing from "./Billing";

export default function Settings() {
    const [activeTab, setActiveTab] = useState("Restaurant");
    const tabs = ["Restaurant", "Account", "Notifications", "Billing"];

    return (
        <div className="relative p-6 mt-15 bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Settings</h2>
                <p className="text-gray-600">Manage your restaurant and account settings</p>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-full p-2 shadow-sm mb-6">
                <div className="flex justify-between">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab
                                ? "bg-gray-200 text-gray-900 font-semibold"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                {activeTab === "Restaurant" && <Restaurant />}
                {activeTab === "Account" && <Account />}
                {activeTab === "Notifications" && <Notifications />}
                {activeTab === "Billing" && <Billing />}
            </div>
        </div>
    );
}
