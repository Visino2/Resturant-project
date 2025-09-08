import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Signed in successfully!");
            navigate("/dashboard");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl space-y-5 flex flex-col items-center justify-center mx-auto">
                <div className="flex  justify-center text-center item-center bg-red-500 rounded-full w-10 h-10 mb-4">
                    <img src="/Group.png" alt="logo"  className="w-7 h-7 object-contain "/>
                </div>
                <h2 className="text-3xl font-bold text-center mb-2">Resturant0S</h2>
                <p className="text-center text-gray-500 mb-6 text-sm">Modern menu ordering system for resturants</p>

                <h2 className="text-2xl font-bold text-center mb-2">Access your Dashboard</h2>
                 <p className="text-center text-gray-500 mb-6 text-sm">Sign in to manage your menu and orders</p>

                 <div className="flex mb-6 bg-gray-100 rounded-full overflow-hidden w-full">
                    <Link to="/" className="flex-1 py-2 text-center font-semibold bg-red-500 text-white">Sign In</Link>
                    <Link to="/signup" className="flex-1 py-2 text-center font-semibold text-gray-600 hover:bg-gray-200 transition">Sign Up</Link>
                 </div>

                  <form onSubmit={handleSignIn} className="space-y-4">
                <div className="relative">
                    <FaEnvelope className="absolute left-4 top-9 text-gray-400" />
                    <label className="text-gray-500">Email</label>
                    <input type="email"
                     placeholder="Resturant@gmail.com" className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="relative">
                    <FaLock className="absolute left-4 top-9 text-gray-400" />
                    <label className="text-gray-500">Password</label>
                    <input type={showPassword ? "text" : "password"}
                     placeholder="********" className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="absolute right-4 top-9 text-gray-400 cursor-pointer">
                        {showPassword ? (
                            <AiOutlineEyeInvisible size={22} onClick={() => setShowPassword(false)} />
                        ) : (
                            <AiOutlineEye size={22} onClick={() => setShowPassword(true)} />
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span></span>
                    <Link to="/forgot-password" className="text-sm text-red-500 hover:underline">Forgot Password?</Link>
                </div>
                <button type="submit" disabled={loading} className="w-full py-3 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition">
                    {loading ? "Signing In..." : "Sign In"}
                </button>
               </form>
               <p className="text-center text-gray-500 mb-6 text-sm">
                Need help? Contact at{" "}
                <a href="mailto:support@restaurant0s.com" className="text-red-500 hover:underline">
                    support@restaurant0s.com
                </a>
               </p>
            </div>
        </div>
           
    );
}
