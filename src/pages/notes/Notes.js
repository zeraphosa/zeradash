import "./style.css";
import useTheme from "../../hooks/useTheme";
import { Icon } from "../../components/Icons";
import { useState } from "react";

export default function Notes() {
  const [theme] = useTheme();
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
    <div className={`notes ${theme}`}>
      <div className="titles">
        <div className="title-inner">
          {notes.map((item, id) => (
            <div key={id} className={`title-item ${active === item && "item-active"}`} onClick={() => handleShow(item)}>
              <div className="title-text">
                <p>{item.text.slice(0, 30)}</p>
                <span>{item.date}</span>
              </div>
              <div onClick={() => handleDelete(item)}>
                <Icon name="close" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        <div className="add-btn">
          <button onClick={handleAdd}>Add new note</button>
        </div>
        <div className="content-text">
          <textarea placeholder="New Note" wrap="on" autoFocus="true" onChange={(e) => setNote(e.target.value)} value={note}></textarea>
        </div>
      </div>
    </div>
  );
}