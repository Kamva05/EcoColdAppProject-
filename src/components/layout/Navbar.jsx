import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{background:"#2E865F",color:"white",padding:"12px"}}>
      <Link to="/" style={{color:"white",textDecoration:"none"}}>
        EcoCold
      </Link>
    </div>
  );
}