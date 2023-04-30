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
          <label>
            Title:
            <input type="text" placeholder="type title for new post" />
          </label>
          <div>
            <input type="text" placeholder="add new tag" />
            <button>Add</button>
          </div>
          <label>
            Add comment section
            <input type="checkbox" />
          </label>
        </div>
        <div className={`info ${theme}`}>
          <div>Comments</div>
          <div>Views</div>
          <div>Likes</div>
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
