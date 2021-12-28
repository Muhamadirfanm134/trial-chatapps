import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./bookmarks.css";

export default function Bookmarks() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="wrapper">BOOKMARKS</div>
        <Rightbar />
      </div>
    </>
  );
}
