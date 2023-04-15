import "./style.css";
import useTheme from "../../hooks/useTheme";
import { Icon } from "../../components/Icons";

export default function Notes() {
  const [theme] = useTheme();

  return (
    <div className={`notes ${theme}`}>
      <div className={`titles ${theme}`}>
        <div className="title-inner">
          {data.map((item, id) => (
            <div key={id} className="title-item">
              <div>
                <p>{item.slice(0,30)}</p>
                <span>15.04.2023</span>
              </div>
              <Icon name="close" size={20} />
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        <div className="add-btn">
          <button>Add new note</button>
        </div>
        <div className="content-text">
          <textarea placeholder="New Note" wrap="on" autoFocus="true"></textarea>
        </div>
      </div>
    </div>
  );
}

const data = ["Notes headerasdfasdasdfasdfsadfasdfasdfasfdasfasfd", "Notes header", "Notes header", "Notes header", "Notes header", "Notes header",];
