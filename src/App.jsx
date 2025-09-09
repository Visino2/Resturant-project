import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import CheckoutPage from "./Pages/CheckoutPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import { CartProvider } from "./Components/CartProvider";
import { OrderProvider } from "./Components/OrderProvider"; 

function App() {
  return (
    <BrowserRouter>
      <OrderProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout/:orderId"
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </CartProvider>
      </OrderProvider>
    </BrowserRouter>
  );
}

export default App;
