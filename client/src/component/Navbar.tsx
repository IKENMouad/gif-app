import { useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth.helper";

const Navbar = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="#">
          Logo
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gifs">
                Gifs
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          {isAuthenticated() ? (
            <li className="nav-item">
              <Link className="nav-link" to="#">
                {isAuthenticated().email}
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/auth">
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
