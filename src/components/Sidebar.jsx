import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
return (
<div className="sidebar">
<h1>Tasty Hub</h1>
<ul>
<li><NavLink to="/menu">Menu Management</NavLink></li>
<li><NavLink to="/create-order">Create Order</NavLink></li>
<li><NavLink to="/">Order History</NavLink></li>
<li><NavLink to="/settings">Settings</NavLink></li>
</ul>
</div>
);
}