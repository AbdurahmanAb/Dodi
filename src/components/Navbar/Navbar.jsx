import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-sm navbar-light bg-light">
        <h1 className="navbar__logo">DODi</h1>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul
          className="collapse navbar-collapse navbar__list"
          id="navbarCollapse"
        >
          <li className="navbar__item">
            <Link to="/reports" className="navbar__link">
              Reports
            </Link>
          </li>
          <li className="nav-item dropdown navbar__item">
            <a
              href="#"
              className="nav-link dropdown-toggle navbar__link"
              data-bs-toggle="dropdown"
            >
              Manage
            </a>
            <div className="dropdown-menu">
              <Link to="/contrats" className="navbar__link dropdown-item">
                Contrats
              </Link>
              <Link to="/employee" className="navbar__link dropdown-item">
                Employee
              </Link>
              <Link to="/reports" className="navbar__link dropdown-item">
                Reports
              </Link>

              <div className="dropdown-divider"></div>
              <Link to="/change" className="navbar__link dropdown-item">
                Change Password
              </Link>
              <Link to="/login" className="navbar__link dropdown-item">
                Logout
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </> // <div className="">
    //   <nav className="navbar navbar-expand-sm navbar-light bg-light ">
    //     <div className="container-fluid  ">
    //       <a href="#" className="navbar-brand">
    //         Brand
    //       </a>
    //       <button
    //         type="button"
    //         className="navbar-toggler"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarCollapse"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div id="navbarCollapse" className="collapse navbar-collapse ">
    //         <ul className="nav navbar-nav">
    //           <ul className="nav navbar-nav ">
    //             <li className="nav-item  ">
    //               <a href="#" className="nav-link">
    //                 Home
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a href="#" className="nav-link">
    //                 Profile
    //               </a>
    //             </li>

    //           </ul>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Navbar;
