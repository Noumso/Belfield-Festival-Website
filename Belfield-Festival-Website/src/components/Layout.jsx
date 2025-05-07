import { Link } from "react-router-dom";
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav className="navbar">
          <h1>Belfield Festival</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/info">Info</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 Belfield Festival Association</p>
      </footer>
    </div>
  );
}