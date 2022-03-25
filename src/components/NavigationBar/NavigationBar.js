import { Link } from "react-router-dom";
export const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Anab Warsame
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link active" aria-current="page" to="/">
              <li className="nav-item"> Home</li>
            </Link>

            <Link className="nav-link" to="/contact">
              <li className="nav-item">Contact</li>
            </Link>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1pWeUReAg89-dBFsH_oscHy7tWYC2I1PO/view?usp=sharing"
              >
                Hire Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/anab-warsame-3004b1221/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
