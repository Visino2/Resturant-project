import { createContext, useContext, useState } from "react";
import { useOrders } from "./OrderProvider";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { addOrder } = useOrders();

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, i.quantity + amount) } : i
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const checkout = () => {
    if (cart.length === 0) return;

    const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const tax = subtotal * 0.0825;
    const total = subtotal + tax;

    const newOrder = {
      id: Date.now().toString(),
      date: new Date().toLocaleString(),
      items: cart.map((i) => `${i.quantity}× ${i.name}`),
      itemPrices: cart.map((i) => i.price * i.quantity),
      subtotal,
      tax,
      total,
      payment: "Card", // 👉 can change later to dynamic
      status: "Completed",
    };

    addOrder(newOrder);
    setCart([]); // clear cart
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
