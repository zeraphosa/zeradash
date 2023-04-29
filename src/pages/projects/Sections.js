import { useNavigate } from "react-router-dom";
import { Icon } from "../../components/Icons";
import useTheme from "../../hooks/useTheme";
import blogdata from "../../utils/cms/blog.json";
import projectdata from "../../utils/cms/project.json";
import gallerydata from "../../utils/cms/gallery.json";
import productsdata from "../../utils/cms/products.json";
import testimonialsdata from "../../utils/cms/testimonials.json";
import "./style.scss";

export default function Sections({ name, project, defaultSections, setDefaultSections, buttons, setButtons }) {
  const [theme] = useTheme();
  const navigate = useNavigate();

  function addNewContent() {
    if (name === "Blog") navigate(`/projects/${project}/newblogpost/null`);
    else if (name === "Gallery") navigate(`/projects/${project}/newgallerypost/null`);
    else if (name === "Product") navigate(`/projects/${project}/newproduct/null`);
    else if (name === "Project") navigate(`/projects/${project}/newproject/null`);
    else if (name === "Testimonial") navigate(`/projects/${project}/newreview/null`);
  }
  function deleteSection() {
    setDefaultSections([defaultSections.filter((p) => p !== name)]);
    setButtons([name, ...buttons])
  }
  return (
    <>
      <div className={`header ${theme}`}>
        <h2>{name}</h2>
        <div onClick={deleteSection}>Delete</div>
      </div>
      <div className="items">
        <div className={`create-card ${theme}`} onClick={addNewContent}>
          <div className="card-inner">
            <Icon name="add" size={30} />
            Add new content
          </div>
        </div>
        {name === "Blog" && BlogData(theme, navigate, project)}
        {name === "Project" && ProjectData(theme, navigate, project)}
        {name === "Gallery" && GalleryData(theme, navigate, project)}
        {name === "Product" && ProductData(theme, navigate, project)}
        {name === "Testimonial" && TestimonialData(theme, navigate, project)}
      </div>
    </>
  );
}

function BlogData(theme, navigate, project) {
  return blogdata?.map((item, id) => (
    <div key={id} className={`create-card ${theme}`} onClick={() => navigate(`/projects/${project}/newblogpost/${id}`)}>
      <div className="card-inner inner-content">
        <div>{item.image}</div>
        <div>{item.title}</div>
        <div>{item.tags}</div>
      </div>
    </div>
  ));
}
function ProjectData(theme, navigate, project) {
  return projectdata?.map((item, id) => (
    <div key={id} className={`create-card ${theme}`} onClick={() => navigate(`/projects/${project}/newproject/${id}`)}>
      <div className="card-inner inner-content">
        <div>{item.image}</div>
        <div>{item.title}</div>
        <div>{item.link}</div>
      </div>
    </div>
  ));
}
function GalleryData(theme, navigate, project) {
  return gallerydata?.map((item, id) => (
    <div key={id} className={`create-card ${theme}`} onClick={() => navigate(`/projects/${project}/newproject/${id}`)}>
      <div className="card-inner inner-content">
        <div>{item.image}</div>
        <div>{item.title}</div>
        <div>{item.link}</div>
      </div>
    </div>
  ));
}
function ProductData(theme, navigate, project) {
  return productsdata?.map((item, id) => (
    <div key={id} className={`create-card ${theme}`} onClick={() => navigate(`/projects/${project}/newproject/${id}`)}>
      <div className="card-inner inner-content">
        <div>{item.image}</div>
        <div>{item.title}</div>
        <div>{item.link}</div>
      </div>
    </div>
  ));
}
function TestimonialData(theme, navigate, project) {
  return testimonialsdata?.map((item, id) => (
    <div key={id} className={`create-card ${theme}`} onClick={() => navigate(`/projects/${project}/newproject/${id}`)}>
      <div className="card-inner inner-content">
        <div>{item.image}</div>
        <div>{item.title}</div>
        <div>{item.link}</div>
      </div>
    </div>
  ));
}
