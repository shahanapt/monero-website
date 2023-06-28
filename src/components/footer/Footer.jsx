import React from "react";
import { Container } from "react-bootstrap";
import { BiCopyright } from "react-icons/bi";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="d-flex footer-container">
          <p>
            <BiCopyright />
            2020 Monero All rights reserved
          </p>
          <p>Terms of use | Privacy Policy</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
