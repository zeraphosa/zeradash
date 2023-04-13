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
  console.log("sidebar", sidebar);

  return (
    <div className={`sidebar ${theme}`} style={sidebar ? { display: "flex" } : { display: "none" }}>
      <div className="items">
        <div className="brand">
          <span></span>
          <Link to="/" className="brand-text">
            <h1>ZERA</h1>
          </Link>
          <div className="nav-close-btn" onClick={() => dispatch({ type: "setSidebar" })}>
            <Icon name="close" size={25} />
          </div>
        </div>

        <div className="links">
          {pages.map((item, id) => (
            <>
              <NavLink key={id} to={item.t} className="navlink">
                <Icon name={item.i} size={20} />
                <span>{item.n}</span>
                <div onClick={() => setDropdown(!dropdown)}>{item.d && <Icon name="arrowDown" size={10} />}</div>
              </NavLink>
              {item.d && (
                <div className="dropdown-menu" style={dropdown ? { display: "flex" } : { display: "none" }}>
                  <NavLink to="/projects/project1">Project 1</NavLink>
                  <NavLink to="/projects/project2">Project 2</NavLink>
                </div>
              )}
            </>
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
  { n: "Dashboard", t: "/", i: "dashboard", d: false },
  { n: "Ecommerce", t: "/ecommerce", i: "ecommerce", d: false },
  { n: "Projects", t: "/projects", i: "projects", d: true },
  { n: "Notes", t: "/notes", i: "notes", d: false },
];
