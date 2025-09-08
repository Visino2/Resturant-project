import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaStore, FaSadCry } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignUp() {
    const [restaurantName, setRestaurantName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account created successfully!");
            navigate("/dashboard");
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center min-h-screen bg-gray-50 px-4">
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

                 <form onSubmit={handleSignUp} className="space-y-4">
                      <div className="relative">
                         <FaStore className="absolute left-4 top-9 text-gray-400" />
                         <label className=" text-gray-500">Restaurant Name</label>
                         <input type="text" placeholder=" Your Restaurant Name" value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
                      </div>

                      <div className="relative">
                         <FaUser className="absolute left-4 top-9 text-gray-400" />
                         <label className=" text-gray-500">Owner Name</label>
                         <input type="text" placeholder=" Your Name" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
                      </div>

                      <div className="relative">
                         <FaEnvelope className="absolute left-4 top-9 text-gray-400" />
                         <label className=" text-gray-500">Email</label>
                         <input type="email" placeholder=" Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
                      </div>

                      <div className="relative">
                         <FaLock className="absolute left-4 top-9 text-gray-400" />
                         <label className=" text-gray-500">Password</label>
                         <input type={showPassword ? "text" : "password"}
                          placeholder=" Your Password" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
                          <div className="absolute right-4 top-9 text-gray-400 cursor-pointer">
                             {showPassword ? (
                                <AiOutlineEyeInvisible size={22} onClick={() => setShowPassword(false)} />
                             ) : (
                                <AiOutlineEye size={22} onClick={() => setShowPassword(true)} />
                             )}
                          </div>
                      </div>

                      <div className="text-right text-sm">
                         <Link to="/" className="text-red-500 hover:underline">
                            Already have an account? Sign In
                         </Link>
                      </div>
                      <button className="w-full py-3 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition" type="submit" disabled={loading}>
                          {loading ? "Creating..." : "Create Account"}
                      </button>
                 </form>
            </div>

        </div>
    )
}