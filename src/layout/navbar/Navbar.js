import { useDispatch } from "react-redux";
import "./style.css";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-btn" onClick={() => dispatch({type: "setSidebar"})}>
          =
        </div>
        <ul>
          <li>Cur</li>
          <li>Lan</li>
          <li>Dark</li>
          <li>Prof</li>
        </ul>
      </div>
    </div>
  );
}
