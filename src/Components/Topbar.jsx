import React from "react";

export default function Topbar() {
return (
<div className="topbar">
<h2>Dashboard</h2>
<input type="text" placeholder="Search menu items..." />
<div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#ccc" }}></div>
</div>
);
}

