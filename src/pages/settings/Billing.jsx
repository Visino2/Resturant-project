// Billing.jsx
import { useState } from "react";
import { MdCreditCard } from "react-icons/md";

export default function Billing() {
const [showModal, setShowModal] = useState(false);
const [cardNumber, setCardNumber] = useState("");
const [expiry, setExpiry] = useState("");

const plan = {
name: "Professional Plan",
price: "₦34,500 per month",
features: "Unlimited menu items, advanced analytics, priority support",
status: "Active",
};

const payment = {
brand: "Visa",
last4: "4242",
expiry: "6/12/2026",
};

const history = [
{ id: 1, month: "January 2024", plan: "Professional Plan", amount: "₦34,500", status: "Paid" },
];

// ===== Handlers =====
const handleDownload = () => {
const link = document.createElement("a");
link.href = "/dummy-invoice.pdf"; // replace with API path
link.download = "invoice-jan-2024.pdf";
link.click();
alert("Invoice downloaded (demo)");
};

const handleCancel = () => {
if (window.confirm("Are you sure you want to cancel your subscription?")) {
console.log("Subscription cancelled (demo)");
alert("Your subscription has been cancelled (demo)");
}
};

const handleSavePayment = () => {
alert(`New card saved (demo): ${cardNumber}, exp: ${expiry}`);
setShowModal(false);
setCardNumber("");
setExpiry("");
};

return (
<div className="billing-tab">
<div className="billing-card">
{/* Header */}
<div className="billing-card-title">
<h3>Billing & Subscription</h3>
<p className="muted">Manage your subscription and payment methods.</p>
</div>

{/* Current Plan */}
<div className="row-head">
<h4>Current Plan</h4>
<span className="pill-success">{plan.status}</span>
</div>
<div className="plan-block">
<div className="plan-name">{plan.name}</div>
<div className="plan-price">{plan.price}</div>
<div className="plan-features">{plan.features}</div>
</div>

{/* Payment Method */}
<div className="row-head">
<h4>Payment Method</h4>
<button className="chip-btn" type="button" onClick={() => setShowModal(true)}>
Update
</button>
</div>
<div className="payment-block">
<MdCreditCard className="form-icon" />
<div className="payment-text">
<div className="masked">•••• •••• •••• {payment.last4}</div>
<div className="muted">Expires {payment.expiry}</div>
</div>
</div>

{/* Billing History */}
<div className="row-head">
<h4>Billing History</h4>
</div>
<div className="history-list">
{history.map((h) => (
<div className="history-item" key={h.id}>
<div>
<div className="history-title">{h.month}</div>
<div className="muted">{h.plan}</div>
</div>
<div className="history-meta">
<div className="amount">{h.amount}</div>
<div className="muted">{h.status}</div>
</div>
</div>
))}
</div>

{/* Footer */}
<div className="billing-actions-footer">
<button className="btn-grey" type="button" onClick={handleDownload}>
Download Invoice
</button>
<button className="btn-danger" type="button" onClick={handleCancel}>
Cancel Subscription
</button>
</div>
</div>

{/* ===== Modal Overlay ===== */}
{showModal && (
<div className="modal-overlay">
<div className="modal">
<h3>Update Payment Method</h3>
<label>
Card Number
<input
type="text"
placeholder="1234 5678 9012 3456"
value={cardNumber}
onChange={(e) => setCardNumber(e.target.value)}
/>
</label>
<label>
Expiry Date
<input
type="text"
placeholder="MM/YY"
value={expiry}
onChange={(e) => setExpiry(e.target.value)}
/>
</label>
<div className="modal-actions">
<button className="btn-grey" onClick={() => setShowModal(false)}>
Cancel
</button>
<button className="btn-danger" onClick={handleSavePayment}>
Save
</button>
</div>
</div>
</div>
)}
</div>
);
}
