import "./style.scss";

export default function Sidebar() {
  return (
    <div className="sidebar ">
      <div className="row">
        <div className="bg-dark col-md-2 col-auto min-vh-100 d-flex flex-column justify-content-between align-items-center py-3">
          <ul className="nav nav-pills flex-column" id="menu">
            <li className="nav-item border my-1 py-2 py-sm-0 fs-5">
              <a href="/" className="nav-link text-white d-flex gap-3">
                <i className="bi bi-house"></i>
                <span className="d-none d-sm-inline">Dashboard</span>
              </a>
            </li>
            <li className="nav-item border my-1 py-2 py-sm-0 fs-5">
              <a href="#sidemenu" className="nav-link text-white d-flex gap-3"  data-bs-toggle="collapse">
                <i className="bi bi-cart"></i>
                <span className="d-none d-sm-inline">Ecommerce</span>
              </a>
              <ul className="nav collapse ms-1 flex-column" id="sidemenu" data-bs-parent="#menu">
                <li className="nav-item">
                  <a href="/" className="nav-link text-white">
                    Sales
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link text-white">
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link text-white">
                    Products
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item border my-1 py-2 py-sm-0 fs-5">
              <a href="#sidemenu" className="nav-link text-white d-flex gap-3"  data-bs-toggle="collapse">
                <i className="bi bi-shield-lock"></i>
                <span className="d-none d-sm-inline">Private</span>
              </a>
              <ul className="nav collapse ms-1 flex-column" id="sidemenu" data-bs-parent="#menu">
                <li className="nav-item">
                  <a href="/" className="nav-link text-white">
                    Sales
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link text-white">
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link text-white">
                    Products
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="text-white d-none d-sm-inline">Shapes</div>
        </div>
      </div>
    </div>
  );
}
