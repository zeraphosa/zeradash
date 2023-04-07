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
            <span>D</span>
            <span>Dashboard</span>
          </a>
          <a href="/" className="item-link">
            <span>E</span>
            <span>E Commerce</span>
          </a>
          <a href="/" className="item-link">
            <span>P</span>
            <span>Private</span>
          </a>
        </div>
        <div className="shapes">shapes</div>
      </div>
    </div>
  );
}
