import { Icon } from "../../components/Icons";
import "./style.css";
export default function Sidebar({ sideToggle }) {
  return (
    <div className={`sidebar ${sideToggle && "side-mob"}`}>
      <div className="sidebar-inner">
        <div className="items">
          <div className="brand">
            <h1 className={`brand-letter ${!sideToggle && "d-none"}`}>Z</h1>
            <a href="/" className={sideToggle ? "d-none" : "brand-text"}>
              <h1>ZERA</h1>
            </a>
          </div>
          <a href="/" className={`item-link active ${sideToggle && "item-link-mob"}`}>
            <Icon name="dashboard" size={20} />
            <span className={`link-text ${sideToggle && "d-none"}`}>Dashboard</span>
          </a>
          <a href="/" className={`item-link ${sideToggle && "item-link-mob"}`}>
            <Icon name="ecommerce" size={20} />
            <span className={`link-text ${sideToggle && "d-none"}`}>Ecommerce</span>
          </a>
          <a href="/" className={`item-link ${sideToggle && "item-link-mob"}`}>
            <Icon name="projects" size={20} />
            <span className={`link-text ${sideToggle && "d-none"}`}>Projects</span>
          </a>
          <a href="/" className={`item-link ${sideToggle && "item-link-mob"}`}>
            <Icon name="data" size={20} />
            <span className={`link-text ${sideToggle && "d-none"}`}>Data</span>
          </a>
        </div>
        <div className="shapes">shapes</div>
      </div>
    </div>
  );
}
