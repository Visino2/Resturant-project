			
import { useState } from "react";
import { MdPerson, MdLock } from "react-icons/md";

export default function Account() {
const [showPassword, setShowPassword] = useState(false);
const [formData, setFormData] = useState({
fullName: "Tasty Hub",
phone: "(555)123-4567",
emailAddress: "contact@tastyhub.com",
newPassword: "",
confirmPassword: ""
});

// handle form input changes
const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
};

// handle save action
const handleSubmit = (e) => {
e.preventDefault();

if (showPassword && formData.newPassword !== formData.confirmPassword) {
alert("Passwords do not match!");
return;
}

console.log("Account Data Saved:", formData);
alert("Account information saved successfully!");
};

return (
<div className="account-tab">
{/* Heading */}
<div className="form-header">
<MdPerson className="form-icon" />
<h3 className="form-title">Account Information</h3>
</div>
<p className="form-subtext">
Manage your personal account details and login information.
</p>

{/* Form */}
<form className="settings-form" onSubmit={handleSubmit}>
<div>
<label>Full Name</label>
<input
type="text"
name="fullName"
value={formData.fullName}
onChange={handleChange}
/>
</div>

<div>
<label>Phone Number</label>
<input
type="tel"
name="phone"
value={formData.phone}
onChange={handleChange}
/>
</div>

<div className="left-only">
<label>Email Address</label>
<input
type="email"
name="emailAddress"
value={formData.emailAddress}
onChange={handleChange}
/>
</div>

{/* Security Section */}
<div className="security-section">
<h4 className="security-title">Security</h4>

{showPassword && (
<>
<div>
<label>New Password</label>
<input
type="password"
name="newPassword"
value={formData.newPassword}
onChange={handleChange}
placeholder="Enter new password"
/>
</div>
<div>
<label>Confirm Password</label>
<input
type="password"
name="confirmPassword"
value={formData.confirmPassword}
onChange={handleChange}
placeholder="Confirm new password"
/>
</div>
</>
)}

{/* Save first, then Change Password */}
<button type="submit" className="save-btn">
Save Account Information
</button>

<button
type="button"
className="change-btn"
onClick={() => setShowPassword(!showPassword)}
>
<MdLock className="btn-icon" />
{showPassword ? "Cancel Password Change" : "Change Password"}
</button>
</div>

</form>
</div>
);
}
