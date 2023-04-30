import "./style.scss";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export default function AddBlog() {
  const { quill, quillRef } = useQuill();

  return (
    <div className="post">
      <div className="save">Save</div>
      <div className="header-container">
        <div className="post-input">title, comments, tags</div>
        <div className="post-image">image</div>
      </div>
      <div className="article">
        <div ref={quillRef}></div>
      </div>
    </div>
  );
}
