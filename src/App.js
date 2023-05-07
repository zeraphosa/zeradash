import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CreateProjectModal from "./pages/projects/CreateProjectModal";
import Dashboard from "./pages/dashboard/Dashboard";
import Ecommerce from "./pages/ecommerce/Ecommerce";
import ProjectDetails from "./pages/projects/ProjectDetails";
import Sidebar from "./layout/sidebar/Sidebar";
import Navbar from "./layout/navbar/Navbar";
import Notes from "./pages/notes/Notes";
import AddBlog from "./pages/projects/newpost/AddBlog";
import AddGallery from "./pages/projects/newpost/AddGallery";
import AddProduct from "./pages/projects/newpost/AddProduct";
import AddProject from "./pages/projects/newpost/AddProject";
import AddTestimonial from "./pages/projects/newpost/AddTestimonial";
import SignIn from "./pages/login/SignIn";
import "./style.css";

export default function App() {
  const sidebar = useSelector((state) => state.general.sidebar);
  const createproject = useSelector((state) => state.general.createproject);
  const project = useSelector((state) => state.projects.projectName);
  const [loginStatus, setLoginStatus] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setLoginStatus(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className={`main ${sidebar && loginStatus && "main-mob"}`} style={sidebar ? { marginLeft: "240px" } : { marginLeft: "0px" }}>
          <Navbar />
          <div className="content">
            <div className="container">
              {loginStatus ? (
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/ecommerce" element={<Ecommerce />} />
                  <Route path={`/projects/:${project}`} element={<ProjectDetails />} />
                  <Route path={`/projects/:${project}/newblogpost?/:id`} element={<AddBlog />} />
                  <Route path={`/projects/:${project}/newgallerypost?/:id`} element={<AddGallery />} />
                  <Route path={`/projects/:${project}/newproduct?/:id`} element={<AddProduct />} />
                  <Route path={`/projects/:${project}/newproject?/:id`} element={<AddProject />} />
                  <Route path={`/projects/:${project}/newreview?/:id`} element={<AddTestimonial />} />
                  <Route path="/notes" element={<Notes />} />
                </Routes>
              ) : (
                <SignIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              )}
              {createproject && <CreateProjectModal />}
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
