import React from "react";

export default function OrderCard({ order }) {
return (
<div className="order-card">
{/* ===== Top row: title + big total/status ===== */}
<div className="order-top">
{/* Left side */}
<div className="order-left">
<h4>Order-{order.id}</h4>
<p className="muted">{order.date}</p>
</div>

{/* Right side */}
<div className="order-right">
<h3 className="order-price">₦{order.total.toLocaleString()}</h3>
<span
className={`order-status ${
order.status === "Completed" ? "completed" : "pending"
}`}
>
{order.status}
</span>
</div>
</div>

{/* ===== Items row ===== */}
<div className="order-row">
{/* Item names */}
<div className="order-left">
{order.items.map((item, i) => (
<p key={i} className="muted">{item}</p>
))}
</div>

{/* Item prices */}
<div className="order-right">
{order.itemPrices.map((price, i) => (
<p key={i} className="muted">₦{price.toLocaleString()}</p>
))}
</div>
</div>

{/* ===== Divider ===== */}
<hr className="divider" />

{/* ===== Breakdown row ===== */}
<div className="order-row">
{/* Labels */}
<div className="order-left">
<p className="muted">Subtotal:</p>
<p className="muted">Tax:</p>
<p className="total-label">Total:</p>
<p className="muted">Payment Method:</p>
</div>

{/* Values */}
<div className="order-right">
<p className="muted">₦{order.subtotal.toLocaleString()}</p>
<p className="muted">₦{order.tax.toLocaleString()}</p>
<p className="total-amount">₦{order.total.toLocaleString()}</p>
<p className="muted">{order.payment}</p>
</div>
</div>
</div>
);
}
