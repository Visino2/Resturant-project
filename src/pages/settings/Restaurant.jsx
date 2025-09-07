import { MdPerson } from "react-icons/md";

export default function Restaurant() {
return (
<div className="restaurant-tab">
<div className="form-header">
<MdPerson className="form-icon" />
<h3 className="form-title">Restaurant Information</h3>
</div>
<p className="form-subtext">
Update your restaurant details. This information will be visible to customers.
</p>

<form className="settings-form">
<div>
<label>Restaurant Name</label>
<input type="text" defaultValue="Tasty Hub" />
</div>

<div>
<label>Phone Number</label>
<input type="text" defaultValue="(555)123-4567" />
</div>

<div className="left-only">
<label>Address</label>
<input type="text" defaultValue="123 Lens Plaza, Ikeja, Lagos." />
</div>

<div className="left-only">
<label>Contact Email</label>
<input type="email" defaultValue="contact@tastyhub.com" />
</div>
</form>
</div>
);
}

