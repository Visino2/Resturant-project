import { useCart } from "./CartProvider";

export default function CartPopup() {
  const { cart, updateQuantity, removeFromCart, checkout } = useCart();

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * 0.0825;
  const total = subtotal + tax;

  const handleCheckout = () => {
    checkout(); // ✅ process checkout
    alert("✅ Your order has been placed successfully!"); // ✅ show alert
  };

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 border-l border-gray-200 mt-20">
      <h2 className="font-bold text-lg flex justify-between items-center">
        Current Order
        <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
          {cart.length} items
        </span>
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 mt-3">No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  ₦{item.price.toLocaleString()} each
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={item.quantity === 1}
                  className="px-2 border rounded disabled:opacity-50"
                >
                  –
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 border rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 font-bold"
                >
                  ×
                </button>
              </div>
            </div>
          ))}

          {/* Totals */}
          <div className="mt-4 text-sm space-y-1">
            <div className="flex justify-between">
              <span>Subtotal;</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (8.25%);</span>
              <span>₦{tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total;</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
          </div>

          <button
            onClick={handleCheckout} 
            className="w-full bg-red-500 text-white py-3 rounded mt-4 hover:bg-red-600"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}
