import "./style.css";
import useTheme from "../../hooks/useTheme";

export default function Notes() {
  const [theme] = useTheme();

  return (
    <div className={`notes ${theme}`}>
      <div className="titles">
        <ul>
            <li>Not header</li>
            <li>Not header 2</li>
            <li>Not header 3</li>
        </ul>
      </div>
      <div className="content">
        <div className="add-btn">
            <button>Add new note</button>
        </div>
        <div className="content-text">
            <textarea></textarea>
        </div>
      </div>
    </div>
  );
}
