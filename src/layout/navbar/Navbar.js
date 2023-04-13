import { useDispatch } from "react-redux";
import "./style.css";
import { Icon } from "../../components/Icons";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <div className="navbar light">
      <div className="container">
        <div className="nav-btn" onClick={() => dispatch({ type: "setSidebar" })}>
          <Icon name="menu" size={30} />
        </div>
        <ul>
          <li>USD</li>
          <li>English</li>
          <li>
            <Icon name="dark" size={25} />
          </li>
          <li>
            <Icon name="user" size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
}
