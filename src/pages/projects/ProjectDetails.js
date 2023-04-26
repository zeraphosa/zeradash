import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const projectName = useParams();
  const projects = useSelector((state) => state.projects.find(p => p.projectName === projectName.undefined));

  return (
    <div>
      <h1>{projects.projectName}</h1>
      <p>This page is for {projects.projectName}.</p>
    </div>
  );
}
