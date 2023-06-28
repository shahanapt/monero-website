import React from "react";
import Container from "react-bootstrap/Container";
import "./LandingPage.scss";
import logo from "../../assets/logo.png";
import BannerFooter from "../../components/banner-footer/BannerFooter";
import About from "../../components/about/About";
import Services from "../../components/services/Services";
import Works from "../../components/works/Works";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const LandingPage = () => {
  return (
    <Container>
      <div className="header-container">
        <nav>
          <div style={{ marginBottom: "20px" }}>
            <img src={logo} alt="" />
          </div>
          <div className="justify-content-end">
            <ul className="header-lists d-flex">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li className="dropdown">
                <a href="#services">Services</a>
                <div className="dropdown-content">
                  <a href="#service1">Architecture</a>
                  <a href="#service2">Interiors</a>
                  <a href="#service3">Landscapes</a>
                  <a href="#service3">Renovation</a>
                  <a href="#service3">Project Management</a>
                </div>
              </li>
              <li>
                <a href="#works">Works</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="title">
          <p>Ship Anything</p>
          <h1>
            <span>AROUND</span> THE WORLD
          </h1>
        </div>
      </div>

      <div>
        <BannerFooter />
      </div>

      <div>
        <About />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Works />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </Container>
  );
};

export default LandingPage;
