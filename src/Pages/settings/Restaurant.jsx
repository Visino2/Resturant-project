import { useState } from "react";
import { MdRestaurant } from "react-icons/md";

export default function Restaurant() {
    const [formData, setFormData] = useState({
        restaurantName: "Tasty Hub",
        phoneNumber: "(555) 123-4567",
        address: "123 Lagos Plaza, Ikeja, Lagos",
        contactEmail: "contact@tastyhub.com"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Restaurant data saved:", formData);
        alert("Restaurant information saved successfully!");
    };

    return (
        <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
                <MdRestaurant className="text-gray-700 text-lg" />
                <h3 className="text-lg font-semibold text-gray-900">Restaurant Information</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
                Update your restaurant's basic information and contact details.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Restaurant Name
                    </label>
                    <input
                        type="text"
                        name="restaurantName"
                        value={formData.restaurantName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Email
                    </label>
                    <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                </div>

                {/* Save Button */}
                <div className="md:col-span-2 mt-4">
                    <button
                        type="submit"
                        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

