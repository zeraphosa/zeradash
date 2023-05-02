import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProject } from "../../store/projects";
import { useState } from "react";
import { Icon } from "../../components/Icons";
import useTheme from "../../hooks/useTheme";
import "./style.scss";

export default function CreateProjectModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState("");
  const [theme] = useTheme();

  function addNewProject() {
    const newProject = { projectName };
    dispatch(addProject(newProject));
    setProjectName("");
    if(projectName) navigate(`/projects/${projectName}`);
    dispatch({ type: "setCreateProject" })
  }

  return (
    <>
      <div className="modal" onClick={() => dispatch({ type: "setCreateProject" })}></div>
      <div className={`modal-inner ${theme}`}>
        <div className="modal-header">
          <div></div>
          <button className="close-btn" onClick={() => dispatch({ type: "setCreateProject" })}>
            <Icon name="close" size={25} />
          </button>
        </div>
        <div className="modal-content">
          <input type="text" placeholder="Project name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
          <button onClick={addNewProject}>Add</button>
        </div>
      </div>
    </>
  );
}
