import { BrowserRouter } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./style.css";

export default function App() {
  // const profile = useSelector((state) => state.modal.profile);
  // const settings = useSelector((state) => state.modal.settings);

  return (
    <BrowserRouter>
      <div className="app">
        <div className="sidebar">slider</div>
        <div className="main">
          <div className="navbar">
            <div className="container">
              <div className="nav-btn">=</div>
              <ul>
                <li>Cur</li>
                <li>Lan</li>
                <li>Dark</li>
                <li>Prof</li>
              </ul>
            </div>
          </div>
          <div className="content">
            <div className="container">content</div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
