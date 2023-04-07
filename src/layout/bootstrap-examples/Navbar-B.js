export default function NavbarB({ handleToggle }) {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
        <i className="navbar-brand bi bi-justify-left fs-4" onClick={handleToggle}></i>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <i className="bi bi-justify"></i>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <a href="/" className="nav-link dropdown-toggle" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Zera
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a href="/" className="dropdown-item">
                  Profile
                </a>
                <a href="/" className="dropdown-item">
                  Settings
                </a>
                <a href="/" className="dropdown-item">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }