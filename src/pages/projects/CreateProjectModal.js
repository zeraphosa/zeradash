import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../store/projects";
import { Icon } from "../../components/Icons";
import useTheme from "../../hooks/useTheme";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function CreateProjectModal() {
  const navigate = useNavigate();
  const [theme] = useTheme();
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState("");
  //   const [projects, setProjects] = useState([]);

  function addNewProject() {
    const newProject = { projectName };
    dispatch(addProject(newProject));
    // setProjects([...projects, newProject]);
    setProjectName("");
    navigate(`/${!projectName}`);
  }

  return (
    <>
      <div className="modal" onClick={() => navigate("/")}></div>
      <div className={`modal-inner ${theme}`}>
        <div className="modal-header">
          <div></div>
          <button className="close-btn" onClick={() => navigate("/")}>
            <Icon name="close" size={25} />
          </button>
        </div>
        <div className="modal-content">
          <input type="text" placeholder="Project name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
          <button onClick={addNewProject}>Add Project</button>
        </div>
      </div>
    </>
  );
}
