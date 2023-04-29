import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./style.scss";

export default function AddBlog() {
  return (
    <div className="post">
      <div className="header-container">
        <div className="post-input">
          title, comments, tags
        </div>
        <div className="post-image">image</div>
      </div>
      <div className="article">
        <Editor toolbarClassName="toolbarClassName" wrapperClassName="wrapperClassName" editorClassName="editorClassName" />
      </div>
      <div className="save">Save</div>
    </div>
  );
}
