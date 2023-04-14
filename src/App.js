import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./pages/dashboard/Dashboard";
import Ecommerce from "./pages/ecommerce/Ecommerce";
import Projects from "./pages/projects/Projects";
import Project1 from "./pages/projects/project-contents/Project1";
import Project2 from "./pages/projects/project-contents/Project2";
import Sidebar from "./layout/sidebar/Sidebar";
import Navbar from "./layout/navbar/Navbar";
import Notes from "./pages/notes/Notes";
import "./style.css";

export default function App() {
  const sidebar = useSelector((state) => state.general.sidebar);

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className={`main ${sidebar && "main-mob"}`} style={sidebar ? { marginLeft: "240px" } : { marginLeft: "0px" }}>
          <Navbar />
          {/* ${appearance ? "dark" : "light"} */}
          <div className={`content`}>
            <div className="container">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/project1" element={<Project1 />} />
                <Route path="/projects/project2" element={<Project2 />} />
                <Route path="/notes" element={<Notes />} /> 
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
