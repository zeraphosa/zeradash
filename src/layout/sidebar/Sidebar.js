import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Icon } from "../../components/Icons";
import useTheme from "../../hooks/useTheme";
import "./style.css";
import Time from "../../components/Time";

export default function Sidebar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.general.sidebar);
  const [theme] = useTheme();
  const [dropdown, setDropdown] = useState(false);

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
            <div key={id}>
              <NavLink
                to={item.t}
                className={"navlink"}
                style={item.d === true ? { backgroundColor: "transparent" } : null}
                onClick={() => {
                  item.d && setDropdown(!dropdown);
                }}
              >
                <Icon name={item.i} size={20} />
                <span>{item.n}</span>
                <div onClick={() => setDropdown(!dropdown)}>{item.d ? dropdown ? <Icon name="arrowUp" size={10} /> : <Icon name="arrowDown" size={10} /> : null}</div>
              </NavLink>
              {item.d && (
                <div className="dropdown-menu" style={dropdown ? { display: "flex" } : { display: "none" }}>
                  {projects.map((item, id) => (
                    <NavLink key={id} to={item.t} className="navlink">
                      {item.n}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="info">
        <span>Baku, 16C</span>
        <Time />
      </div>
    </div>
  );
}

const pages = [
  { n: "Dashboard", t: "/", i: "dashboard", d: false },
  { n: "Ecommerce", t: "/ecommerce", i: "ecommerce", d: false },
  { n: "Projects", t: "#", i: "projects", d: true },
  { n: "Notes", t: "/notes", i: "notes", d: false },
];

const projects = [
  {
    n: "portfolio",
    t: "/projects/project1",
  },
  {
    n: "basic projects",
    t: "/projects/project2",
  },
  {
    n: "gerda butter",
    t: "/projects/project3",
  },
  {
    n: "create new project",
    t: "/projects/createproject",
  },
];
