import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{display:"flex"}}>
        <Sidebar />
        <div style={{flex:1}}>{children}</div>
      </div>
    </>
  );
}