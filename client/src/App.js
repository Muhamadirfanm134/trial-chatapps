import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Videos from "./pages/videos/videos";
import Groups from "./pages/groups/groups";
import Bookmarks from "./pages/bookmarks/bookmarks";
import Questions from "./pages/questions/questions";
import Events from "./pages/events/events";
import Courses from "./pages/courses/courses";
import Jobs from "./pages/jobs/jobs";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
        <Route path="/videos">{!user ? <Redirect to="/" /> : <Videos />}</Route>
        <Route path="/groups">{!user ? <Redirect to="/" /> : <Groups />}</Route>
        <Route path="/bookmarks">
          {!user ? <Redirect to="/" /> : <Bookmarks />}
        </Route>
        <Route path="/questions">
          {!user ? <Redirect to="/" /> : <Questions />}
        </Route>
        <Route path="/jobs">{!user ? <Redirect to="/" /> : <Jobs />}</Route>
        <Route path="/events">{!user ? <Redirect to="/" /> : <Events />}</Route>
        <Route path="/courses">
          {!user ? <Redirect to="/" /> : <Courses />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
