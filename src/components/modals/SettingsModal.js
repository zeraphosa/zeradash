import { useDispatch } from "react-redux";
import { Icon } from "../Icons";
import "./style.css";

export default function SettingsModal() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="modal" onClick={() => dispatch({ type: "setSettings" })}></div>
      <div className="modal-inner">
        <div className="modal-header">
          <h2>Settings</h2>
          <button className="close-btn" onClick={() => dispatch({ type: "setSettings" })}>
            <Icon name="close" size={25} />
          </button>
        </div>
        <div className="modal-container">
          <div className="modal-items">
            <div className="item">
              <span>Currency</span>
              <select>
                <option>USD $</option>
                <option>TL ₺</option>
                <option>AZN ₼</option>
              </select>
            </div>
            <div className="item">
              <span>Language</span>
              <select>
                <option>🇺🇸</option>
                <option>🇹🇷</option>
                <option>🇦🇿</option>
              </select>
            </div>
            <div className="item">
              <span>Appearance</span>
              <select>
                <option>Dark</option>
                <option>Light</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
