import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Icon } from "../../components/Icons";
import useTheme from "../../hooks/useTheme";
import Sections from "./Sections";
import "./style.scss";

export default function ProjectDetails() {
  const projectName = useParams();
  const projects = useSelector((state) => state.projects.find((p) => p.projectName === projectName.undefined));
  const [theme] = useTheme();
  const [defaultSections, setDefaultSections] = useState([]);
  const [buttons, setButtons] = useState(["Blog", "Project", "Product", "Gallery", "Testimonial"]);

  function addNewSection(item) {
    setDefaultSections([...defaultSections, item]);
    setButtons(buttons.filter((p) => p !== item));
  }

  return (
    <div className="project">
      <p>{projects.projectName}</p>
      <div className={`add-section `}>
        {buttons.map((item, id) => (
          <button key={id} className={`add-button ${theme}`} onClick={() => addNewSection(item)}>
            <span>{item}</span> <Icon name="add" size={20} />
          </button>
        ))}
      </div>
      <div className="content-create">
        {defaultSections.includes("Blog") && <Sections name={"Blog"} project={projects.projectName} setDefaultSections={setDefaultSections} defaultSections={defaultSections} buttons={buttons} setButtons={setButtons} />}
        {defaultSections.includes("Project") && <Sections name={"Project"} project={projects.projectName} />}
        {defaultSections.includes("Product") && <Sections name={"Product"} project={projects.projectName} />}
        {defaultSections.includes("Gallery") && <Sections name={"Gallery"} project={projects.projectName} />}
        {defaultSections.includes("Testimonial") && <Sections name={"Testimonial"} project={projects.projectName} />}
      </div>
    </div>
  );
}
