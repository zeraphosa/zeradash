import { useDispatch } from "react-redux";
import { Icon } from "../../components/Icons";
import useTheme from "../../hooks/useTheme";
import "./style.css";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const dispatch = useDispatch();
  const [theme, toggleTheme] = useTheme();
  const [lanDropdown, setLanDropdown] = useState(false);
  const [curDropdown, setCurDropdown] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLanDropdown(false);
        setCurDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className={`navbar ${theme}`}>
      <div className="container">
        <div className="nav-btn" onClick={() => dispatch({ type: "setSidebar" })}>
          <Icon name="menu" size={30} />
        </div>
        <ul>
          <li onClick={() => setCurDropdown(!curDropdown)} ref={dropdownRef}>
            {currency}
            <div className={`nav-dropdown ${theme}`} style={curDropdown ? { display: "flex" } : { display: "none" }}>
              {cur.map((item, id) => (
                <button key={id} onClick={() => setCurrency({ item })}>
                  {item}
                </button>
              ))}
            </div>
          </li>
          <li onClick={() => setLanDropdown(!lanDropdown)} ref={dropdownRef}>
            {language}
            <div className={`nav-dropdown ${theme}`} style={lanDropdown ? { display: "flex" } : { display: "none" }}>
              {lan.map((item, id) => (
                <button key={id} onClick={() => setLanguage(`${item}`)}>
                  {item}
                </button>
              ))}
            </div>
          </li>
          <li onClick={toggleTheme}>{theme === "light" ? <Icon name="dark" size={25} /> : <Icon name="light" size={25} />}</li>
          <li>
            <Icon name="user" size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
}

const lan = ["English", "Turkish", "Azerbaijani"];
const cur = ["USD", "CAD", "AZN", "TL", "RB"];
