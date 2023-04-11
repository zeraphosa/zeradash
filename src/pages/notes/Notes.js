import { Icon } from "../../components/Icons";
import "./style.css";

export default function Notes() {
  return (
    <div className="note-container">
      <div className="notes">
        <div className="note-nav">
          <div className="search">
            <input type="text" placeholder="Search notes" />
          </div>
          <div className="note-header">
            {data.map((item, id) => (
              <div key={id} className="header-item">
                <div className="item-text">
                  <p>{item.text}</p>
                  <span>{item.date}</span>
                </div>
                <div className="close-btn">
                  <Icon name="close" size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="note-content">
          <div className="add">
            <button>Add new note</button>
          </div>
          <div className="note-text">
            <textarea placeholder="New Note" wrap="on"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    text: "header",
    date: "10/04/2023",
  },

  {
    text: "header",
    date: "10/04/2023",
  },
  {
    text: "header",
    date: "10/04/2023",
  },
  {
    text: "asdfasdf",
    date: "12/04/2023",
  },
  {
    text: "heasdfasdader",
    date: "10/04/2023",
  },
  {
    text: "headeasdfasdr",
    date: "10/04/2023",
  },
  {
    text: "headeasdfr",
    date: "10/04/2023",
  },
  {
    text: "asdfasdfaeader",
    date: "10/04/2023",
  },
  {
    text: "asdfasdfaeader",
    date: "10/04/2023",
  },
];
