import { Icon } from "../../../components/Icons";
import useTheme from "../../../hooks/useTheme";
import "../style.scss";

export default function Blog() {
  const [theme] = useTheme();

  return (
    <>
      <div className={`header ${theme}`}>
        <h2>BLOG</h2>
        <div>Delete 0 post</div>
      </div>
      <div className="items">
        <div className={`create-card ${theme}`}>
          <div className="card-inner">
            <Icon name="add" size={30} />
            Add new post
          </div>
        </div>
      </div>
    </>
  );
}