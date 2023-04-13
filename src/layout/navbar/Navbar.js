import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { Icon } from "../../components/Icons";

export default function Navbar() {
  const dispatch = useDispatch();
  const appearance = useSelector((state) => state.modal.appearance);

  return (
    <div className={`navbar ${appearance ? "dark" : "light"}`}>
      <div className="container">
        <div className="nav-btn" onClick={() => dispatch({ type: "setSidebar" })}>
          <Icon name="menu" size={30} />
        </div>
        <ul>
          <li>USD</li>
          <li>English</li>
          <li onClick={()=>dispatch({type: "setAppearance"})}>{appearance ? <Icon name="light" size={25} /> : <Icon name="dark" size={25} />}</li>
          <li>
            <Icon name="user" size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
}
