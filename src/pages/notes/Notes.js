import "./style.css";

export default function Notes() {
  return (
    <div className="notes">
      <div className="notes-inner">
        <div className="note-nav">
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
          <div className="add">
            <button>Add new note</button>
          </div>
        </div>
        <div className="note-content">
          <div className="note-header">aas</div>
          <div className="note-text">asdf</div>
        </div>
      </div>
    </div>
  );
}
