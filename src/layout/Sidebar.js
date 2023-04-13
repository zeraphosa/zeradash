import { Link, NavLink } from "react-router-dom";
import { Icon } from "../components/Icons";
import "./style.css";
import { useState } from "react";

export default function Sidebar() {
  const [dropdown, setDropdown] = useState(false);
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
          <div className="dropdown">
            <div className="navlink" onClick={() => setDropdown(!dropdown)}>
              <Icon name="projects" size={20} />
              <span>Projects</span>
            </div>
            <div className="dropdown-menu" style={dropdown ? {display: "flex"} : {display: "none"}}>
              <span>Project 1</span>
              <span>Project 2</span>
              <span>Project 3</span>
            </div>
          </div>
        </div>

        <NavLink to="/" className="navlink">
          <Icon name="ecommerce" size={20} />
          <span>Deneme</span>
        </NavLink>
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
  { n: "Notes", t: "/notes", i: "notes" },
];
