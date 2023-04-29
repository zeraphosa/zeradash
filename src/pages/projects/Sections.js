import { useNavigate } from "react-router-dom";
import { Icon } from "../../components/Icons";
import useTheme from "../../hooks/useTheme";
import "./style.scss";

export default function Sections({ name, project }) {
  const [theme] = useTheme();
  const navigate = useNavigate();

  function addNewContent() {
    if (name === "Blog") navigate(`/projects/${project}/newblogpost`);
    else if (name === "Gallery") navigate(`/projects/${project}/newgallerypost`);
    else if (name === "Product") navigate(`/projects/${project}/newproduct`);
    else if (name === "Project") navigate(`/projects/${project}/newproject`);
    else if (name === "Custom") navigate(`/projects/${project}/newcustom`);
    else if (name === "Testimonial") navigate(`/projects/${project}/newreview`);
  }

  return (
    <>
      <div className={`header ${theme}`}>
        <h2>{name}</h2>
        <div>Delete 0 post</div>
      </div>
      <div className="items">
        <div className={`create-card ${theme}`} onClick={addNewContent}>
          <div className="card-inner">
            <Icon name="add" size={30} />
            Add new {name}
          </div>
        </div>
      </div>
    </>
  );
}
