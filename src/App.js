import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import SettingsModal from "./components/modals/SettingsModal";
import ProfileModal from "./components/modals/ProfileModal";
import Sidebar from "./layout/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Ecommerce from "./pages/ecommerce/Ecommerce";
import Projects from "./pages/projects/Projects";
import Notes from "./pages/notes/Notes";
import "./style.css";

export default function App() {
  const profile = useSelector((state) => state.modal.profile);
  const settings = useSelector((state) => state.modal.settings);

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
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
        {profile && <ProfileModal />}
        {settings && <SettingsModal />}
      </div>
    </BrowserRouter>
  );
}
