import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./layout/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Ecommerce from "./pages/ecommerce/Ecommerce";
import Projects from "./pages/projects/Projects";
import Notes from "./pages/notes/Notes";
import "./style.css";
import Navbar from "./layout/navbar/Navbar";
import { useSelector } from "react-redux";

export default function App() {
  // const profile = useSelector((state) => state.modal.profile);
  // const settings = useSelector((state) => state.modal.settings);
  const sidebar = useSelector((state)=> state.modal.sidebar);

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className={`main`} style={sidebar ? {marginLeft: "240px"} : {marginLeft: "0px"}}>
          <Navbar />
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
