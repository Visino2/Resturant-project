	
import React from "react";
import OrderCard from "./OrderCard";

export default function OrderList({ filter }) {
const orders = [
{
id: "001",
date: "1/9/2023, 3:00 PM",
items: ["2× Small Chops", "1× Fruit Salad"],
itemPrices: [8000, 2000],
subtotal: 8000,
tax: 200,
total: 10200,
payment: "Card",
status: "Completed",
},
{
id: "002",
date: "2/9/2023, 5:00 PM",
items: ["1× Jollof Rice", "2× Fruit Juice"],
itemPrices: [7000, 4000],
subtotal: 11000,
tax: 200,
total: 11200,
payment: "Cash",
status: "Completed",
},
{
id: "003",
date: "1/9/2023, 3:00 PM",
items: ["1× Pounded Yam", "1× Bottled Water"],
itemPrices: [6000, 500],
subtotal: 6500,
tax: 200,
total: 6700,
payment: "Mobile",
status: "Pending",
},
];


// Apply filter
const filteredOrders =
filter === "All" ? orders : orders.filter((o) => o.status === filter);

return (
<div>
{filteredOrders.map((order) => (
<OrderCard key={order.id} order={order} />
))}
</div>
);
}