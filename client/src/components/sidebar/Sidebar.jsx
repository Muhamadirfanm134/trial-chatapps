import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link
            style={{ color: "#000", textDecoration: "none" }}
            to="/"
            className="sidebarListItem"
          >
            <RssFeed className="sidebarIcon" />
            Feed
          </Link>
          <Link
            style={{ color: "#000", textDecoration: "none" }}
            to="/messenger"
            className="sidebarListItem"
          >
            <Chat className="sidebarIcon" />
            Chats
          </Link>
          <Link
            style={{ color: "#000", textDecoration: "none" }}
            to="/videos"
            className="sidebarListItem"
          >
            <PlayCircleFilledOutlined className="sidebarIcon" />
            Videos
          </Link>
          <Link
            style={{ color: "#000", textDecoration: "none" }}
            to="/groups"
            className="sidebarListItem"
          >
            <Group className="sidebarIcon" />
            Groups
          </Link>

          <Link
            style={{ color: "#000", textDecoration: "none" }}
            to="/bookmarks"
            className="sidebarListItem"
          >
            <Bookmark className="sidebarIcon" />
            Bookmarks
          </Link>
          <Link
            style={{ color: "#000", textDecoration: "none" }}
            to="/questions"
            className="sidebarListItem"
          >
            <HelpOutline className="sidebarIcon" />
            Questions
          </Link>
          <Link
            style={{ color: "#000", textDecoration: "none" }}
            to="/jobs"
            className="sidebarListItem"
          >
            <WorkOutline className="sidebarIcon" />
            Jobs
          </Link>
          <Link
            style={{ color: "#000", textDecoration: "none" }}
            to="/events"
            className="sidebarListItem"
          >
            <Event className="sidebarIcon" />
            Events
          </Link>
          <Link
            style={{ color: "#000", textDecoration: "none" }}
            to="/courses"
            className="sidebarListItem"
          >
            <School className="sidebarIcon" />
            Courses
          </Link>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
