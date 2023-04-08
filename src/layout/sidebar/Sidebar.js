import { Icon } from "../../components/Icons";
import "./style.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="items">
          <div className="brand">
            <h1 className="brand-logo">Z</h1>
            <a href="/" className="brand-text">
              <h1>ZERA</h1>
            </a>
          </div>
          <a href="/" className="item-link">
            <Icon name="dashboard" size={20} />
            <span>Dashboard</span>
          </a>
          <a href="/" className="item-link">
            <Icon name="ecommerce" size={20} />
            <span>Ecommerce</span>
          </a>
          <a href="/" className="item-link">
            <Icon name="projects" size={20} />
            <span>Projects</span>
          </a>
          <a href="/" className="item-link">
            <Icon name="data" size={20} />
            <span>Data</span>
          </a>
        </div>
        <div className="shapes">shapes</div>
      </div>
    </div>
  );
}
