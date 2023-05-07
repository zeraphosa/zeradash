import "./style.scss";
import useTheme from "../../hooks/useTheme";

export default function Dashboard() {
  const [theme] = useTheme();

  return (
    <div className="dashboard">
      <div className="header">
        <div className={`sales ${theme}`}>sales</div>
        <div className={`products ${theme}`}>products</div>
        <div className={`projects ${theme}`}>projects</div>
        <div className={`tasks ${theme}`}>
          <div>
            <span>143</span>
            <p>tasks</p>
          </div>
        </div>
      </div>
      <div className="graphics">Graphic about project views</div>
      <div className="last10">Last 10 task info</div>
    </div>
  );
}
