import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./groups.css";

export default function Groups() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="wrapper">GROUPSsjbsjsjks</div>
        <Rightbar />
      </div>
    </>
  );
}
