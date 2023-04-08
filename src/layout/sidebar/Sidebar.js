import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "../../components/Icons";
import "./style.css";

export default function Sidebar({ sideToggle }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.modal.profile);
  const settings = useSelector((state) => state.modal.settings);

  return (
    <div className={`sidebar ${sideToggle && "side-mob"}`}>
      <div className="sidebar-inner">
        <div className="items">
          <div className="brand">
            <Link to="/">
              <h1 className={`brand-letter ${!sideToggle && "d-none"}`}>Z</h1>
            </Link>
            <Link to="/" className={sideToggle ? "d-none" : "brand-text"}>
              <h1>ZERA</h1>
            </Link>
          </div>
          {pages.map((item, id) => (
            <NavLink key={id} to={item.t} className={`item-link ${sideToggle && "item-link-mob"}`}>
              <Icon name={item.i} size={20} />
              <span className={`link-text ${sideToggle && "d-none"}`}>{item.n}</span>
            </NavLink>
          ))}
        </div>
        <div className="settings">
          <button className={`item-link ${settings && "active"} ${sideToggle && "item-link-mob"}`} onClick={() => dispatch({ type: "setSettings" })}>
            <Icon name="settings" size={22} />
            <span className={`link-text ${sideToggle && "d-none"}`}>Settings</span>
          </button>
          <button className={`item-link ${profile && "active"} ${sideToggle && "item-link-mob"}`} onClick={() => dispatch({ type: "setProfile" })}>
            <Icon name="user" size={22} />
            <span className={`link-text ${sideToggle && "d-none"}`}>Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const pages = [
  { n: "Dashboard", t: "/", i: "dashboard" },
  { n: "Ecommerce", t: "/ecommerce", i: "ecommerce" },
  { n: "Projects", t: "/projects", i: "projects" },
  { n: "Data", t: "/data", i: "data" },
];
