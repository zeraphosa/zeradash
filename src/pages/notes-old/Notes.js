import { useState } from "react";
import { Icon } from "../../components/Icons";
import "./style.css";

export default function Notes() {
  const [active, setActive] = useState(null);
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  function handleAdd() {
    setNotes([...notes, { text: note, date: "10/04/2023" }]);
    setNote("");
  }
  function handleShow(item) {
    setActive(item);
    setNote(item.text);
  }
  function handleDelete(e) {
    setNotes(notes.filter((item) => item !== e));
  }

  return (
    <div className="note-container">
      <div className="notes">
        <div className="note-nav">
          <div className="search">
            <input className="search-input" type="text" placeholder="Search notes" />
          </div>
          <div className="note-header">
            {notes.map((item, id) => (
              <div key={id} className={`header-item ${active === item && "active"}`} onClick={() => handleShow(item)}>
                <div className={`item-text ${active === item && "item-border"}`}>
                  <p>{item.text.slice(0,20)}</p>
                  <span>{item.date}</span>
                </div>
                <div className="close-btn" onClick={() => handleDelete(item)}>
                  <Icon name="close" size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="note-content">
          <div className="add">
            <button onClick={handleAdd}>Add new note</button>
          </div>
          <div className="note-text">
            <textarea placeholder="New Note" wrap="on" onChange={(e) => setNote(e.target.value)} value={note}>
              {note}
            </textarea>
          </div>
        </div>
      </div>
    </div>
  );
}