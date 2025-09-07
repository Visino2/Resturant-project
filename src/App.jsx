import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import CreateOrder from "./pages/CreateOrder";
import Menu from "./pages/Menu";
import "./App.css";

// Settings imports
import Settings from "./pages/settings/Settings.jsx";
import RestaurantTab from "./pages/settings/Restaurant.jsx";
import AccountTab from "./pages/settings/Account.jsx";
import NotificationsTab from "./pages/settings/Notifications.jsx";
import BillingTab from "./pages/settings/Billing.jsx";

function App() {
return (
<Router>
<div className="app-container">
<Sidebar />
<div className="main">
<Topbar />
<div className="content">
<Routes>
{/* Main pages */}
<Route path="/" element={<Dashboard />} />
<Route path="/create-order" element={<CreateOrder />} />
<Route path="/menu" element={<Menu />} />

{/* Settings with nested tabs */}
<Route path="/settings" element={<Settings />}>
<Route path="restaurant" element={<RestaurantTab />} />
<Route path="account" element={<AccountTab />} />
<Route path="notifications" element={<NotificationsTab />} />
<Route path="billing" element={<BillingTab />} />
</Route>
</Routes>
</div>
</div>
</div>
</Router>
);
}

export default App;