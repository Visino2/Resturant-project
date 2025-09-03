import React from "react";
import "./Desktop14.css";

export default function Desktop14() {
  // Sample orders data
  const orders = [
    {
      id: "Order-001",
      total: 10200,
      date: "1/9/2025, 3:00 PM",
      status: "Completed",
      items: [
        { name: "Small Chops", qty: 2, price: 8000 },
        { name: "Fruit Salad", qty: 1, price: 2000 },
      ],
      subtotal: 8000,
      tax: 200,
      payment: "Card",
    },
    {
      id: "Order-002",
      total: 11200,
      date: "2/9/2025, 3:00 PM",
      status: "Completed",
      items: [
        { name: "Jollof Rice", qty: 1, price: 7000 },
        { name: "Fruit Juice", qty: 2, price: 4000 },
      ],
      subtotal: 11000,
      tax: 200,
      payment: "Cash",
    },
    {
      id: "Order-003",
      total: 6700,
      date: "1/9/2025, 3:00 PM",
      status: "Pending",
      items: [
        { name: "Pounded Yam", qty: 1, price: 6000 },
        { name: "Bottled Water", qty: 1, price: 500 },
      ],
      subtotal: 6500,
      tax: 200,
      payment: "Mobile",
    },
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Tasty Hub</h1>
        <input type="text" placeholder="Search menu items..." />
      </header>

      <section className="dashboard-summary">
        <div className="card">
          <h3>Total Orders</h3>
          <p>3</p>
          <span>All time</span>
        </div>
        <div className="card">
          <h3>Completed Orders</h3>
          <p>2</p>
          <span>Successfully completed</span>
        </div>
        <div className="card">
          <h3>Total Revenue</h3>
          <p>#150,000</p>
          <span>From completed orders</span>
        </div>
      </section>

      <section className="dashboard-orders">
        <h2>Order History</h2>
        <nav className="order-tabs">
          <button>All</button>
          <button>Completed</button>
          <button>Pending</button>
        </nav>

        {orders.map((order) => (
          <div
            key={order.id}
            className={`order-card ${
              order.status === "Completed" ? "completed" : "pending"
            }`}
          >
            <h4>
              {order.id} — #{order.total}
            </h4>
            <p>Date: {order.date}</p>
            <p>Status: {order.status === "Completed" ? "✅ Completed" : "⏳ Pending"}</p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.qty}× {item.name} — #{item.price}
                </li>
              ))}
            </ul>
            <p>Subtotal: #{order.subtotal}</p>
            <p>Tax: #{order.tax}</p>
            <p>Total: #{order.total}</p>
            <p>Payment: {order.payment}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
