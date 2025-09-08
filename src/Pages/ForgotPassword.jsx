import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase";
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleReset = async (e) => {
        e.preventDefault();
        if (!email) return alert("Please enter your email");
        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Password reset email sent!");
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl space-y-5 flex flex-col items-center justify-center mx-auto">
                <button onClick={() => navigate("/")} className="absolute top-4 left-4 flex item-center text-gray-500 hover:text-red-700 transition">
                    <IoArrowBack size={24} className="mr-1" />
                </button>
                  <div className="flex  justify-center text-center item-center bg-red-500 rounded-full w-10 h-10 mb-4">
                    <img src="/Group.png" alt="logo"  className="w-7 h-7 object-contain "/>
                </div>
                 <h2 className="text-3xl font-bold text-center mb-2">Resturant0S</h2>
                 <p className="text-center text-gray-500 mb-6 text-sm">Modern menu ordering system for resturants</p>
                 <h2 className="text-xl font-bold text-center mb-2">Forgot Password</h2>
                 <p className="text-center text-gray-500 mb-6 text-sm">Enter your email to reset your password</p>

                 <form onSubmit={handleReset} className="space-y-4 w-full">
                      <div className="relative">
                    <FaEnvelope className="absolute left-4 top-9 text-gray-400" />
                    <label className="text-gray-500">Email</label>
                    <input type="email" placeholder="Resturant@gmail.com" className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                     <div className="text-right text-sm">
                        <Link to="/" className="text-blue-500 hover:underline">Back to Sign in</Link>
                     </div>

                     <button className="w-full py-3 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition">
                         {loading ? "Sending..." : "Send Reset Link"}
                     </button>
                          
                 </form>

            </div>

        </div>
    )

}