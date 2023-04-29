import { Icon } from "../../../components/Icons";
import useTheme from "../../../hooks/useTheme";
import "../style.scss";

export default function Custom() {
  const [theme] = useTheme();

  return (
    <>
      <div className={`header ${theme}`}>
        <h2>CUSTOM SECTION</h2>
        <div>Delete 0 post</div>
      </div>
      <div className="items">
        <div className={`create-card ${theme}`}>
          <div className="card-inner">
            <Icon name="add" size={30} />
            Add new content
          </div>
        </div>
      </div>
    </>
  );
}
