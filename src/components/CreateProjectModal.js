import { useState } from "react";
import { useDispatch } from "react-redux";

export default function CreateProjectModal() {
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState("");
  //   const [projects, setProjects] = useState([]);

  function addNewProject() {
    const newProject = { name: projectName };
    dispatch(newProject);
    // setProjects([...projects, newProject]);
    setProjectName("");
  }

  return (
    <div className="createproject">
      <input type="text" placeholder="Project name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
      <button onClick={addNewProject}>Add Project</button>
    </div>
  );
}
