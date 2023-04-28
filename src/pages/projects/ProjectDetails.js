import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Icon } from "../../components/Icons";
import useTheme from "../../hooks/useTheme";
import "./style.scss";

export default function ProjectDetails() {
  const projectName = useParams();
  const projects = useSelector((state) => state.projects.find((p) => p.projectName === projectName.undefined));
  const [theme] = useTheme();

  return (
    <div className="project">
      {/* <h1>{projects.projectName}</h1> */}
      <div className={`add-section `}>
        <button className={`add-button ${theme}`}>
          <span>Blog</span> <Icon name="add" size={20} />
        </button>
        <button className={`add-button ${theme}`}>
          <span>Project</span> <Icon name="add" size={20} />
        </button>
        <button className={`add-button ${theme}`}>
          <span>Product</span> <Icon name="add" size={20} />
        </button>
        <button className={`add-button ${theme}`}>
          <span>Galery</span> <Icon name="add" size={20} />
        </button>
        <button className={`add-button ${theme}`}>
          <span>Testimonial</span> <Icon name="add" size={20} />
        </button>
        <button className={`add-button ${theme}`}>
          <span>Custom Section</span> <Icon name="add" size={20} />
        </button>
      </div>
      <div className="content-create">
        <div className={`header ${theme}`}>
          <h2>Blog</h2>
          <div>Delete 0 post</div>
        </div>
        <div className="items">
          <div className={`create-card ${theme}`}>
            <div className="card-inner">
              <Icon name="add" size={30} />
              Add new post
            </div>
          </div>

          <div className={`create-card ${theme}`}>
            <div className="card-inner">
              <Icon name="add" size={30} />
              Add new post
            </div>
          </div>
          <div className={`create-card ${theme}`}>
            <div className="card-inner">
              <Icon name="add" size={30} />
              Add new post
            </div>
          </div>
          <div className={`create-card ${theme}`}>
            <div className="card-inner">
              <Icon name="add" size={30} />
              Add new post
            </div>
          </div>
          <div className={`create-card ${theme}`}>
            <div className="card-inner">
              <Icon name="add" size={30} />
              Add new post
            </div>
          </div>

          <div className={`create-card ${theme}`}>
            <div className="card-inner">
              <Icon name="add" size={30} />
              Add new post
            </div>
          </div>
          <div className={`create-card ${theme}`}>
            <div className="card-inner">
              <Icon name="add" size={30} />
              Add new post
            </div>
          </div>
          <div className={`create-card ${theme}`}>
            <div className="card-inner">
              <Icon name="add" size={30} />
              Add new post
            </div>
          </div>
          <div className={`create-card ${theme}`}>
            <div className="card-inner">
              <Icon name="add" size={30} />
              Add new post
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}
