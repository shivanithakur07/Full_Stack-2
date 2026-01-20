import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <FaHome className="icon" />
          Home
        </li>
        <li>
          <FaUser className="icon" />
          About
        </li>
        <li className="active">
          <FaEnvelope className="icon" />
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
