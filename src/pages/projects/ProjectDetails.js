import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Icon } from "../../components/Icons";
import useTheme from "../../hooks/useTheme";
import Blog from "./sections/Blog";
import Project from "./sections/Project";
import Product from "./sections/Product";
import Gallery from "./sections/Gallery";
import Testimonial from "./sections/Testimonial";
import Custom from "./sections/Custom";
import "./style.scss";

export default function ProjectDetails() {
  const projectName = useParams();
  const projects = useSelector((state) => state.projects.find((p) => p.projectName === projectName.undefined));
  const [theme] = useTheme();
  const [defaultSections, setDefaultSections] = useState([]);
  const [buttons, setButtons] = useState(["Blog", "Project", "Product", "Gallery", "Testimonial", "Custom"]);

  function addNewContent(item) {
    setDefaultSections([...defaultSections, item]);
    setButtons(buttons.filter((p) => p !== item));
  }

  return (
    <div className="project">
      <p>{projects.projectName}</p>
      <div className={`add-section `}>
        {buttons?.map((item, id) => (
          <button key={id} className={`add-button ${theme}`} onClick={() => addNewContent(item)}>
            <span>{item}</span> <Icon name="add" size={20} />
          </button>
        ))}
      </div>
      <div className="content-create">
        {defaultSections.includes("Blog") && <Blog />}
        {defaultSections.includes("Project") && <Project />}
        {defaultSections.includes("Product") && <Product />}
        {defaultSections.includes("Gallery") && <Gallery />}
        {defaultSections.includes("Testimonial") && <Testimonial />}
        {defaultSections.includes("Custom") && <Custom />}
      </div>
    </div>
  );
}
