import "./style.scss";
import { useQuill } from "react-quilljs";
import { Icon } from "../../../components/Icons";
import useTheme from "../../../hooks/useTheme";
import "quill/dist/quill.snow.css";

export default function AddBlog() {
  const { quillRef } = useQuill();
  const [theme] = useTheme();

  return (
    <div className="post">
      <div className="header-container">
        <div className={`inputs ${theme}`}>
          <input type="text" placeholder="Type new title" />
          <div className={`tag-input ${theme}`}>
            <button>
              <p>technology</p>
              <Icon name="close" size={15} />
            </button>
            <button>
              <p>technology</p>
              <Icon name="close" size={15} />
            </button>
            <input type="text" placeholder="type new tag" />
          </div>
          <label>
            Add comment section
            <input type="checkbox" />
          </label>
        </div>
        <div className={`info ${theme}`}>
          <div className="info-item">
            <p>4</p>
            <span>comments</span>
          </div>
          <div className="info-item">
            <p>1459</p>
            <span>views</span>
          </div>
          <div className="info-item">
            <p>32</p>
            <span>likes</span>
          </div>
        </div>
      </div>

      <div className="article">
        <div ref={quillRef}></div>
      </div>
      <div className="save">
        <button>Save</button>
      </div>
    </div>
  );
}

// <div className="tags">
// <button className={`${theme}`}>
//   technology <Icon name="close" size={15} />
// </button>
// <button className={`${theme}`}>
//   space <Icon name="close" size={15} />
// </button>
// </div>
