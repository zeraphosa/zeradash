import "./style.scss";
import useTheme from "../../hooks/useTheme";

export default function Dashboard() {
  const [theme] = useTheme();

  return (
    <div className="dashboard">
      <div className="header">
        <div className={`income ${theme}`}>
          <div className="info">
            <div className="count">4432 $</div>
            <div className="name">income</div>
          </div>
        </div>
        <div className={`products ${theme}`}>
          <div className="info">
            <div className="count">2347</div>
            <div className="name">products</div>
          </div>
        </div>
        <div className={`projects ${theme}`}>
          <div className="info">
            <div className="count">1</div>
            <div className="name">projects</div>
          </div>
        </div>
        <div className={`tasks ${theme}`}>
          <div className="info">
            <div className="count">143</div>
            <div className="name">tasks</div>
          </div>
        </div>
      </div>
      <div className="graphics">Graphic about project views</div>
      <div className="last10">Last 10 task info</div>
    </div>
  );
}
