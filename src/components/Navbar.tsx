import { useNavigate } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  showLogout?: boolean;
}

const Navbar = ({ showLogout = false }: NavbarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => navigate("/")}>
        📚 Book Explorer
      </h2>

      {showLogout && (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;