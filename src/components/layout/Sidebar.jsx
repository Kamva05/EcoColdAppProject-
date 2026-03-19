import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{width:200,background:"#fff",padding:20}}>
      <p><Link to="/farmer-dashboard">Dashboard</Link></p>
      <p><Link to="/discover">Discover</Link></p>
      <p><Link to="/farmer-bookings1">Bookings</Link></p>
      <p><Link to="/farmer-profile">Profile</Link></p>
    </div>
  );
}