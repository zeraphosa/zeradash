import { useNavigate } from "react-router-dom";
import { Icon } from "../../components/Icons";
import useTheme from "../../hooks/useTheme";
import blogdata from "../../utils/cms/blog.json";
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
        <div>
          <span>0 content </span>
          <span> Delete</span>
        </div>
      </div>
      <div className="items">
        <div className={`create-card ${theme}`} onClick={addNewContent}>
          <div className="card-inner">
            <Icon name="add" size={30} />
            Add new content
          </div>
        </div>
        {name === "Blog" &&
          blogdata.map((item, id) => (
            <div key={id} className={`create-card ${theme}`} onClick={()=> navigate(`/projects/${project}/newblogpost/${id}`)}>
              <div className="card-inner inner-content">
                <div>{item.image}</div>
                <div>{item.title}</div>
                <div>{item.tags}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
