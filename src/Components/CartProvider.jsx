
import { createContext, useContext, useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../Context.jsx/AuthProvider";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth(); // get logged-in user
  const [cart, setCart] = useState([]);

  // Add item to cart
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

  // Remove item completely
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => setCart([]);

  // Checkout → save order in Firestore
  const checkout = async () => {
    if (!user) {
      alert("You must be logged in to place an order!");
      return;
    }

    const order = {
      userId: user.uid,
      items: cart,
      total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "orders"), order);
      clearCart();
      alert("Order placed successfully!");
    } catch (err) {
      console.error("Error saving order:", err);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
