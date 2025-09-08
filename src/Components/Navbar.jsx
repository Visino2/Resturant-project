import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className=" flex items-center justify-between bg-white px-6 py-4 shadow-md fixed top-0 left-64 right-0  z-40">
            <h2 className="text-xl font-bold text-red-500">Dashboard</h2>
            <div className="flex items-center gap-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-100 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
                <img src="/profile.png" alt="Profile" className="w-8 h-8 rounded-full border border-gray-100" />
            </div>
        </header>
    )
}