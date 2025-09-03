import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={SignIn} />
                <Route path="/signup" Component={SignUp} />
                 <Route path="/forgot-password" Component={ForgotPassword} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


