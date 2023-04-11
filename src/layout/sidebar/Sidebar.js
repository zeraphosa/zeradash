import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "../../components/Icons";
import "./style.css";

export default function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar side-mob">
      <div className="sidebar-inner">
        <div className="items">
          <div className="brand">
            <Link to="/">
              <h1 className="brand-letter">Z</h1>
            </Link>
            <Link to="/" className="brand-text d-none">
              <h1>ZERA</h1>
            </Link>
          </div>
          <>
            {pages.map((item, id) => (
              <NavLink key={id} to={item.t} className="item-link item-link-mob">
                <Icon name={item.i} size={20} />
                <span className="link-text d-none">{item.n}</span>
              </NavLink>
            ))}
            <Link className="item-link item-link-mob" onClick={() => dispatch({ type: "setSettings" })}>
              <Icon name="settings" size={20} />
              <span className="link-text d-none">Settings</span>
            </Link>
            <Link className="item-link item-link-mob" onClick={() => dispatch({ type: "setProfile" })}>
              <Icon name="user" size={20} />
              <span className="link-text d-none">Profile</span>
            </Link>
          </>
        </div>
        <div className="info">
          <span>Baku, 16C</span>
          <span>12:23</span>
        </div>
      </div>
    </div>
  );
}

const pages = [
  { n: "Dashboard", t: "/", i: "dashboard" },
  { n: "Ecommerce", t: "/ecommerce", i: "ecommerce" },
  { n: "Projects", t: "/projects", i: "projects" },
  { n: "Notes", t: "/notes", i: "notes" },
];
