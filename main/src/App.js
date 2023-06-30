import { BrowserRouter as Router, NavLink } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="header">
        <NavLink exact to="/" className="link" activeClassName="active-link">
          Home-Page
        </NavLink>
        <NavLink
          exact
          to="/microapp1"
          className="link"
          activeClassName="active-link"
        >
          micro-app1
        </NavLink>
        <NavLink
          exact
          to="/microapp2"
          className="link"
          activeClassName="active-link"
        >
          micro-app2
        </NavLink>
      </div>
      <div id="subapp-viewport"></div>
    </Router>

  );
}

export default App;
