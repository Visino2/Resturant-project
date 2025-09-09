import React, { useState } from "react";
import OrderList from "./OrderList";

export default function Dashboard() {
const [filter, setFilter] = useState("All"); // All, Completed, Pending

return (
<div>
{/* Section title */}
<h2>Order History</h2>
<p className="section-desc">Track and manage all your restaurant orders</p>

{/* Summary cards */}
<div className="cards">
<div className="card">
<p>Total Orders</p>
<h3>3</h3>
<small className="card-subtitle">All time</small>
</div>

<div className="card">
<p>Completed Orders</p>
<h3>2</h3>
<small className="card-subtitle">Successfully completed</small>
</div>

<div className="card">
<p>Total Revenue</p>
<h3>₦150,000</h3>
<small className="card-subtitle">From completed orders</small>
</div>
</div>

{/* Filter buttons */}
<div className="filter-buttons">
<button
className={`filter-btn ${filter === "Completed" ? "active" : ""}`}
onClick={() => setFilter("Completed")}
>
Completed
</button>
<button
className={`filter-btn ${filter === "Pending" ? "active" : ""}`}
onClick={() => setFilter("Pending")}
>
Pending
</button>
<button
className={`filter-btn ${filter === "All" ? "active" : ""}`}
onClick={() => setFilter("All")}
>
All
</button>
</div>

{/* Orders list */}
<OrderList filter={filter} />
</div>
);
}