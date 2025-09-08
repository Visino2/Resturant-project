import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import MenuManagement from "./MenuManagement";
import CreateOrder from "./CreateOrder";
import Navbar from "../Components/Navbar";

export default function Dashboard() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar />
                {/* <main className="p-6 bg-gray-50  min-h-screen">
                    <Routes>
                        <Route path="/dashboard/menu" Component={MenuManagement} />
                        <Route path="/dashboard/create-order" Component={CreateOrder} />
                        <Route path="*" element={<Navigate to="/dashboard/menu" />} />
                    </Routes>
                </main> */}
            </div>
        </div>
    )
}
              