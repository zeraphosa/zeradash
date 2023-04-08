import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Icon } from "./components/Icons";
import SettingsModal from "./components/modals/SettingsModal";
import ProfileModal from "./components/modals/ProfileModal";
import Sidebar from "./layout/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Ecommerce from "./pages/ecommerce/Ecommerce";
import Projects from "./pages/projects/Projects";
import Data from "./pages/data/Data";
import "./style.css";

export default function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const profile = useSelector((state) => state.modal.profile);
  const settings = useSelector((state) => state.modal.settings);

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar sideToggle={sideToggle} />
        <div className="content">
          <button className="nav" onClick={() => setSideToggle(!sideToggle)}>
            <Icon name="menu" size={35} />
          </button>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </div>
        {profile && <ProfileModal />}
        {settings && <SettingsModal />}
      </div>
    </BrowserRouter>
  );
}
