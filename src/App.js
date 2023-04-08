import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Icon } from "./components/Icons";
import Sidebar from "./layout/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Ecommerce from "./pages/ecommerce/Ecommerce";
import Projects from "./pages/projects/Projects";
import Data from "./pages/data/Data";
import "./style.css";

export default function App() {
  const [sideToggle, setSideToggle] = useState(false);
 
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
      </div>
    </BrowserRouter>
  );
}
