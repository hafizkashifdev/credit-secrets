import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assects/images/logo.png";
import { Circle } from "@mui/icons-material";
import './navbar.css';


const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = React.useState(
    "transparent"
  );

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > 0) {
      setNavbarBackground("inherit");
    } else {
      setNavbarBackground("transparent");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{ backgroundColor: navbarBackground }}
    >
      <div className="container">
        <Link to="/" className="navbar-brand" >
          <img
            src={logoImage}
            alt="Logo"
            style={{ marginRight: "2px", width: "60px", height: "60px" }}
          />
       <span style={{fontSize:'19px',fontWeight:700,}}>  Credit Repair Ai&nbsp;</span> 
          <span style={{ fontSize: "6px", color: "#D22126" }}>
            <Circle sx={{ fontSize: "inherit", mt: 1 }} />
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/sign-in" replace={true} className="nav-link">
                <button className="btn btn-outline-danger nav-btn" style={{borderRadius: "100px", padding: "0.6rem 2rem",}} >
                  Login
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" replace={true} className="nav-link">
      <button
        className="btn btn-danger nav-btn"
        style={{
          borderRadius: "100px",
          backgroundColor: "#D22126",
          fontFamily: "Poppins, sans-serif",
          fontSize: "16px",
          padding: "0.6rem 2rem",
          textTransform: "capitalize",
          // transition: "background-color 0.3s, border-color 0.3s",
          width: "175px",
          height: "44px",
        }}
      >
        Register Now
      </button>
    </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

