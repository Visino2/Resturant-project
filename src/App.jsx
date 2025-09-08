import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import CheckoutPage from "./Pages/CheckoutPage";
import ProtectedRoute from "./Components/ProtectedRoute";
// import { CartProvider } from "./Context/CartContext.jsx";
import { CartProvider } from "./Components/CartProvider";
import { AuthProvider } from "./Context.jsx/AuthProvider";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <CartProvider>
                    <Routes>
                        <Route path="/" Component={SignIn} />
                        <Route path="/signup" Component={SignUp} />
                        <Route path="/forgot-password" Component={ForgotPassword} />
                        <Route
                            path="/dashboard/*"
                            Component={() => (
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            )}
                        />
                        <Route
                            path="/checkout/:orderId"
                            Component={() => (
                                <ProtectedRoute>
                                    <CheckoutPage />
                                </ProtectedRoute>
                            )}
                        />
                    </Routes>
                </CartProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;


