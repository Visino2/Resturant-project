import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import CreateOrder from "./pages/CreateOrder";
import Settings from "./pages/Settings";
import Menu from "./pages/Menu";
import "./App.css";

function App() {
return (
<Router>
<div className="app-container">
<Sidebar />
<div className="main">
<Topbar />
<div className="content">
<Routes>
<Route path="/" element={<Dashboard />} />
<Route path="/create-order" element={<CreateOrder />} />
<Route path="/settings" element={<Settings />} />
<Route path="/menu" element={<Menu />} />
</Routes>
</div>
</div>
</div>
</Router>
);
}

export default App;
