import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { projectName } = useParams();
  const projects = useSelector((state) => state.projects.find((p) => p.name === projectName));
  return (
    <div>
      <h1>{projects.name}</h1>
      <p>This page is for {projectName}.</p>
    </div>
  );
}
