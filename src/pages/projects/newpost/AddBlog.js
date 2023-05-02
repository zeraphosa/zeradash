import { useEffect, useRef, useState } from "react";
import { useQuill } from "react-quilljs";
import { Icon } from "../../../components/Icons";
import useTheme from "../../../hooks/useTheme";
import "quill/dist/quill.snow.css";
import "./style.scss";
import blogData from "../../../utils/cms/blog.json";

export default function AddBlog() {
  const { quill, quillRef } = useQuill();
  const [theme] = useTheme();
  const [newTag, setNewTag] = useState("");
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const [dataTitle, setDataTitle] = useState("");
  const [dataArticle, setDataArticle] = useState("");
  const [dataComments, setDataComments] = useState([]);
  const [dataTags, setDataTags] = useState([]);
  const [articleInput, setArticleInput] = useState("");

  function handleKeyDown(e) {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      buttonRef.current.click();
    }
  }

  function handleAddTag() {
    setDataTags([...dataTags, newTag]);
    setNewTag("");
  }

  function handleSave() {
    // send to db
    // setDataArticle(articleInput);
    console.log("dataTitle:", dataTitle);
    console.log("dataArticle:", articleInput);
  }

  useEffect(() => {
    const urlpath = window.location.pathname;
    const urlhelper = urlpath.slice(urlpath.indexOf("newblogpost/"));
    const urlBlog = urlhelper.slice(urlhelper.indexOf("/") + 1);

    blogData?.map((item) => {
      if (item.id === parseInt(urlBlog)) {
        setDataTitle(item.title);
        setDataArticle(item.article);
        setDataComments(item.comments);
        setDataTags(item.tags);
      }
      return null;
    });
    if (quill) {
      quill.on("text-change", () => {
        const text = quill.getText();
        setArticleInput(text);
      });
    }
  }, [quill]);

  return (
    <div className="post">
      <div className="header-container">
        <div className={`inputs ${theme}`}>
          <input type="text" placeholder="Type new title" defaultValue={dataTitle} onChange={(e) => setDataTitle(e.target.value)} />
          <div className={`tag-input ${theme}`} onClick={() => inputRef.current.focus()}>
            {dataTags?.map((item, id) => (
              <button key={id}>
                <p>{item}</p>
                <span onClick={() => setDataTags(dataTags.filter((i) => i !== item))}>
                  <Icon name="close" size={15} />
                </span>
              </button>
            ))}
            <input type="text" placeholder="Type new tag" ref={inputRef} value={newTag} onChange={(e) => setNewTag(e.target.value)} onKeyDown={handleKeyDown} />
            <button className="buttonref" ref={buttonRef} onClick={handleAddTag}></button>
          </div>
        </div>

        <div className={`info ${theme}`}>
          <div className="info-item">
            <p>{dataComments.length}</p>
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
        <div ref={quillRef}>{dataArticle}</div>
      </div>

      {dataComments.length === 0 ? (
        <div className={`comment-null ${theme}`}>Comments will show here</div>
      ) : (
        <div className="comments">
          {dataComments?.map((item) => (
            <div key={item.id} className={`comment-item ${theme}`}>
              <div className="comment-content">
                <div>{item.user}</div>
                <div>{item.comment}</div>
              </div>
              <div className="comment-btn" onClick={() => setDataComments(dataComments.filter((p) => p.id !== item.id))}>
                <Icon name="delete" size={25} />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="save">
        <div className="info-mob">
          <div className="info-mob-item">
            <span>comments:</span>
            <p>{dataComments.length}</p>
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
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
