import { useState } from "react";
import Restaurant from "./Restaurant";
import Account from "./Account";
import Notifications from "./Notifications";
import Billing from "./Billing";

export default function Settings() {
const [activeTab, setActiveTab] = useState("Restaurant");
const tabs = ["Restaurant", "Account", "Notifications", "Billing"];

return (
<div className="settings-page">
{/* Rounded white box for Tabs */}
<div className="settings-tabs-card">
<div className="settings-tabs">
{tabs.map((tab) => (
<button
key={tab}
onClick={() => setActiveTab(tab)}
className={`tab-button ${activeTab === tab ? "active" : ""}`}
>
{tab}
</button>
))}
</div>
</div>

{/* White card for Content */}
<div className="settings-card">
{activeTab === "Restaurant" && <Restaurant />}
{activeTab === "Account" && <Account />}
{activeTab === "Notifications" && <Notifications />}
{activeTab === "Billing" && <Billing />}
</div>
</div>
);
}
