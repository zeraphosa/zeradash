import { useEffect, useRef, useState } from "react";
import { useQuill } from "react-quilljs";
import { Icon } from "../../../components/Icons";
import useTheme from "../../../hooks/useTheme";
import "quill/dist/quill.snow.css";
import "./style.scss";
import blogData from "../../../utils/cms/blog.json";

export default function AddBlog() {
  const { quillRef } = useQuill();
  const [theme] = useTheme();
  const [newTag, setNewTag] = useState("");
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const [dataTitle, setDataTitle] = useState("");
  const [dataArticle, setDataArticle] = useState("");
  const [dataComments, setDataComments] = useState({});
  const [dataTags, setDataTags] = useState([]);
  const [commentStatus, setCommentStatus] = useState(true);
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Jhon doe",
      text: " ametlorem ametlorem ipsum dolor ametlorem em ipsum dolor ametlorem em ipsum dolor ametlorem em ipsum dolor ametlorem em ipsum dolor ametlorem em ipsum dolor ametlorem em ipsum dolor ametlorem em ipsum dolor ametlorem ipsum dolor amet",
    },
    {
      id: 2,
      name: "Jhon doe",
      text: "lorem ipsum dolor amet",
    },
    {
      id: 3,
      name: "Jhon doe",
      text: "lorem ipsum dolor amet",
    },
    {
      id: 4,
      name: "Jhon doe",
      text: "lorem ipsum dolor amet",
    },
  ]);
  console.log(dataComments);

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
  }, []);

  function dosomething() {}

  return (
    <div className="post">
      <div className="header-container">
        <div className={`inputs ${theme}`}>
          <input type="text" placeholder="Type new title" defaultValue={dataTitle} onChange={dosomething} />
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
          <label>
            Add comment section
            <input type="checkbox" checked={commentStatus} onChange={() => setCommentStatus(!commentStatus)} />
            <span className="checkmark"></span>
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
        <div ref={quillRef}>{dataArticle}</div>
      </div>

      {commentStatus &&
        (comments.length === 0 ? (
          <div className={`comment-null ${theme}`}>Comments will show here</div>
        ) : (
          <div className="comments">
            {comments?.map((item) => (
              <div key={item.id} className={`comment-item ${theme}`}>
                <div className="comment-content">
                  <div>{item.name}</div>
                  <div>{item.text}</div>
                </div>
                <div className="comment-btn" onClick={() => setComments(comments.filter((p) => p.id !== item.id))}>
                  <Icon name="delete" size={25} />
                </div>
              </div>
            ))}
          </div>
        ))}

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
