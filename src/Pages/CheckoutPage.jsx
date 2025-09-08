import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";

export default function CheckoutPage() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            const docRef = doc(db, "orders", orderId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setOrder(docSnap.data());
            } else {
                console.log("No such document!");
            }
        };

        fetchOrder();
    }, [orderId]);

    if (!order) return <div>Loading order...</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>

            <h2 className="text-xl font-semibold">Order Summary</h2>
            <ul>
                {order.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between py-2 border-b">
                        <span>{item.name} x {item.quantity}</span>
                        <span>₦{(item.price * item.quantity).toLocaleString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}