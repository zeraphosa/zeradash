import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Icon } from "../../components/Icons";
import useTheme from "../../hooks/useTheme";
import "./style.scss";

export default function Navbar() {
  const dispatch = useDispatch();
  const [theme, toggleTheme] = useTheme();
  const [lanDropdown, setLanDropdown] = useState(false);
  const [curDropdown, setCurDropdown] = useState(false);
  const [language, setLanguage] = useState(JSON.parse(localStorage.getItem("lang")));
  const [currency, setCurrency] = useState("USD");
  const dropdownRef = useRef(null);
  const { i18n } = useTranslation();

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

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("lang")) === language) {
      i18n.changeLanguage(JSON.parse(localStorage.getItem("lang")));
    }
    localStorage.setItem("lang", JSON.stringify(language));
  }, [language, i18n]);

  return (
    <div className={`navbar ${theme}`}>
      <div className="container">
        <div className="nav-btn" onClick={() => dispatch({ type: "setSidebar" })}>
          <Icon name="menu" size={30} />
        </div>
        <ul>
          <li onClick={() => setCurDropdown(!curDropdown)} ref={dropdownRef}>
            {currency} <Icon name="arrowDown" size={10} />
            <div className={`nav-dropdown ${theme}`} style={curDropdown ? { display: "flex" } : { display: "none" }}>
              {cur.map((item, id) => (
                <button key={id} onClick={() => setCurrency({ item })}>
                  {item}
                </button>
              ))}
            </div>
          </li>
          <li onClick={() => setLanDropdown(!lanDropdown)} ref={dropdownRef}>
            <p>
              {language}
              <Icon name="arrowDown" size={10} />
            </p>
            <div className={`nav-dropdown ${theme}`} style={lanDropdown ? { display: "flex" } : { display: "none" }}>
              {lan.map((item, id) => (
                <button
                  key={id}
                  value={item.v}
                  onClick={(e) => {
                    setLanguage(item.v);
                    i18n.changeLanguage(e.target.value);
                  }}
                >
                  {item.l}
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

const lan = [
  {
    l: "English",
    v: "en",
  },
  {
    l: "Turkish",
    v: "tr",
  },
  {
    l: "Azerbaijani",
    v: "az",
  },
];
const cur = ["USD", "CAD", "AZN", "TL", "RB"];
