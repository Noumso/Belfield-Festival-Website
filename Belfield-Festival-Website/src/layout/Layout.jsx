import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/info">Info</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer>
        <p>Belfield Festival © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default Layout;