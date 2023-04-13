import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Icon } from "../../components/Icons";
import useTheme from "../../hooks/useTheme";
import "./style.css";

export default function Sidebar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.modal.sidebar);
  const [theme] = useTheme();
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={`sidebar ${theme}`} style={sidebar ? { display: "flex" } : { display: "none" }}>
      <div className="items">
        <div className="brand">
          <span></span>
          <Link to="/" className="brand-text light-text">
            <h1>ZERA</h1>
          </Link>
          <div className="nav-close-btn" onClick={() => dispatch({ type: "setSidebar" })}>
            <Icon name="close" size={25} />
          </div>
        </div>

        <div className="links">
          {pages.map((item, id) => (
            <NavLink key={id} to={item.t} className="navlink light-text">
              <Icon name={item.i} size={20} />
              <span>{item.n}</span>
            </NavLink>
          ))}
          <div className="dropdown">
            <div className="navlink light-text" onClick={() => setDropdown(!dropdown)}>
              <Icon name="projects" size={20} />
              <span>Projects</span>
            </div>
            <div className="dropdown-menu" style={dropdown ? { display: "flex" } : { display: "none" }}>
              <span>Project 1</span>
              <span>Project 2</span>
              <span>Project 3</span>
            </div>
          </div>
        </div>

        <NavLink to="/" className="navlink light-text">
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
