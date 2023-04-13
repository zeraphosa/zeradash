import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Ecommerce from "./pages/ecommerce/Ecommerce";
import Projects from "./pages/projects/Projects";
import Notes from "./pages/notes/Notes";
import "./style.css";

export default function App() {
  // const profile = useSelector((state) => state.modal.profile);
  // const settings = useSelector((state) => state.modal.settings);

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
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
            <div className="container">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/notes" element={<Notes />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
