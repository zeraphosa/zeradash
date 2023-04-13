import { Link, NavLink } from "react-router-dom";
import { Icon } from "../components/Icons";
import "./style.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="items">
        <div className="brand">
          <Link to="/" className="brand-text">
            <h1>ZERA</h1>
          </Link>
        </div>
        <div className="links">
          {pages.map((item, id) => (
            <NavLink key={id} to={item.t} className="navlink">
              <Icon name={item.i} size={20} />
              <span>{item.n}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="info">
        <span>Baku, 16C</span>
        <span>11:38</span>
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
