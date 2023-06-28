import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { RiEarthFill } from "react-icons/ri";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact">
      <Container className="contact-container">
        <Row className="d-flex contact-row">
          <Col md="3">
            <h5>Services</h5>
            <p>Website Services</p>
            <p>Mobile Application Services</p>
            <p>Branding</p>
            <p>Networking and CCTV</p>
            <p>Services</p>
          </Col>
          <Col md="3">
            <h5>Product</h5>
            <p>ERP solution</p>
            <p>POS Solution</p>
            <p>School Management</p>
            <p>Custom softwares</p>
          </Col>
          <Col md="3"></Col>
          <Col md="3" className="contact-column">
            <h5>Follow Us</h5>
            <div className="d-flex contact-col3">
              <div className="contact-icon">
                <BiLogoFacebook />
              </div>
              <div className="contact-icon">
                <BiLogoTwitter />
              </div>
              <div className="contact-icon">
                <BiLogoInstagram />
              </div>
              <div className="contact-icon">
                <RiEarthFill />
              </div>
            </div>
            <p>monero@gmail.com</p>
            <p>+919846123456</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
