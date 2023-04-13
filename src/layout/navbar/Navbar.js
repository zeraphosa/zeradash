import { useDispatch } from "react-redux";
import { Icon } from "../../components/Icons";
import useTheme from "../../hooks/useTheme";
import "./style.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={`navbar ${theme}`}>
      <div className="container">
        <div className="nav-btn" onClick={() => dispatch({ type: "setSidebar" })}>
          <Icon name="menu" size={30} />
        </div>
        <ul>
          <li>USD</li>
          <li>English</li>
          <li onClick={toggleTheme}>{theme === "light" ? <Icon name="light" size={25} /> : <Icon name="dark" size={25} />}</li>
          <li>
            <Icon name="user" size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
}
