import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./layout/sidebar/Sidebar";
import Navbar from "./layout/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Ecommerce from "./pages/ecommerce/Ecommerce";
import Projects from "./pages/projects/Projects";
import Data from "./pages/data/Data";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Navbar />
        <div className="content">
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
