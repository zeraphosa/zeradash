import { useQuill } from "react-quilljs";
import { Icon } from "../../../components/Icons";
import useTheme from "../../../hooks/useTheme";
import "quill/dist/quill.snow.css";
import "./style.scss";
import { useRef, useState } from "react";

export default function AddBlog() {
  const { quillRef } = useQuill();
  const [theme] = useTheme();
  const [tag, setTag] = useState(["technology", "space"]);
  const [newTag, setNewTag] = useState("");
  const buttonRef = useRef(null);

  function tagChangeHandle(e) {
    setNewTag(e.target.value);
    // window.addEventListener("keydown", (e) => {
    //   if (e.keyCode === 32) {
    //   }
    // });
  }
  function handleKeyDown(e) {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      buttonRef.current.click();
    }
  }
  function handleAddClick() {
    setTag([...tag, newTag]);
    setNewTag("");
  }

  return (
    <div className="post">
      <div className="header-container">
        <div className={`inputs ${theme}`}>
          <input type="text" placeholder="Type new title" />
          <div className={`tag-input ${theme}`}>
            {tag.map((item, id) => (
              <button key={id}>
                <p>{item}</p>
                <Icon name="close" size={15} />
              </button>
            ))}
            <input type="text" placeholder="type new tag" value={newTag} onChange={(e) => tagChangeHandle(e)} onKeyDown={handleKeyDown} />
            <button className="buttonref" ref={buttonRef} onClick={handleAddClick}></button>
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
        <div className="info-mob">
          <div className="info-mob-item">
            <span>comments:</span>
            <p>4</p>
          </div>
          <div className="info-mob-item">
            <span>views:</span>
            <p>1459</p>
          </div>
          <div className="info-mob-item">
            <span>likes:</span>
            <p>32</p>
          </div>
        </div>
        <button>Save</button>
      </div>
    </div>
  );
}
