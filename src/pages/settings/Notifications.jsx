import { useState } from "react";
import { MdNotifications } from "react-icons/md";

export default function Notifications() {
const [prefs, setPrefs] = useState({
newOrders: true,
lowStock: true,
dailyReports: false,
promotions: true,
});

const handleToggle = (key) => {
setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
};

return (
<div className="notifications-tab">
{/* Header */}
<div className="notification-header">
<MdNotifications className="form-icon" />
<h3 className="notification-title">Notification Preferences</h3>
</div>
<p className="notification-subtext">
Choose what notifications you want to receive
</p>

{/* Items */}
<div className="notification-item">
<div className="notification-text">
<h4>New Orders</h4>
<p>Get notified when new orders are placed</p>
</div>
<label className="switch">
<input
type="checkbox"
checked={prefs.newOrders}
onChange={() => handleToggle("newOrders")}
/>
<span className="slider round"></span>
</label>
</div>

<div className="notification-item">
<div className="notification-text">
<h4>Low Stock Alerts</h4>
<p>Alert when menu items are running low</p>
</div>
<label className="switch">
<input
type="checkbox"
checked={prefs.lowStock}
onChange={() => handleToggle("lowStock")}
/>
<span className="slider round"></span>
</label>
</div>

<div className="notification-item">
<div className="notification-text">
<h4>Daily Reports</h4>
<p>Receive daily sales and performance reports</p>
</div>
<label className="switch">
<input
type="checkbox"
checked={prefs.dailyReports}
onChange={() => handleToggle("dailyReports")}
/>
<span className="slider round"></span>
</label>
</div>

<div className="notification-item">
<div className="notification-text">
<h4>Promotions & Updates</h4>
<p>Get updates about new features and promotions</p>
</div>
<label className="switch">
<input
type="checkbox"
checked={prefs.promotions}
onChange={() => handleToggle("promotions")}
/>
<span className="slider round"></span>
</label>
</div>

{/* Save Button */}
<button className="save-notifications-btn">
Save Notification Preferences
</button>
</div>
);
}
