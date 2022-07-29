import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/Header.css";

const navLinks = [
  {
    path: "/home",
    display: "Accueil",
  },
  {
    path: "/cars",
    display: "Collection",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/about",
    display: "A propos",
  },
  {
    path: "/contact",
    display: "Contactez-nous",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const menuToggle = () => menuRef.current.classList.toggle("menu_active");
  return (
    <header className="header">
      {/*==================header top=============*/}

      <div className="header_top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_left">
                <span>Besoin d'aide?</span>
                <span className="header_top_help">
                  <i className="ri-phone-line"></i>+33621456056
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i>Connexion
                </Link>
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i>Inscription
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*==============Header_middle====================*/}
      <div className="header_middle">
        {" "}
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>GOMISAUTO</span>
                  </Link>
                </h1>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-fill"></i>
                </span>
                <div className="header_location_content">
                  <h4>Paris FRANCE</h4>
                  <h6>Champigny Sur Marne</h6>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header_location_content">
                  <h4>Du Lundi au Vendredi</h4>
                  <h6>09 h - 18h </h6>
                </div>
              </div>
            </Col>
            <Col lg="2" md="3" sm="0">
              <button className="header_btn btn d-flex align-items-center justify-content-end text-end">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Appel
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ======================Main navigation=======================*/}
      <div className="main_navbar">
        <Container>
          <div className="navigation_wrapper d-flex align-items-center justify-content-between">
            <span className="mobile_menu">
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <div className="menu">
                {navLinks.map((item, index) => {
                  return (
                    <NavLink
                      to={item.path}
                      key={index}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active " : "nav_item"
                      }
                    >
                      {item.display}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="nav_right">
              <div className="search_box">
                <input type="text" placeholder="Rechercher" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
