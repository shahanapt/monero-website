import React from "react";
import img3 from "../../../../assets/srv3.png";
import { Container } from "react-bootstrap";
import "./Pages.scss";

const PageThree = () => {
  return (
    <div>
      <Container>
        <div className="d-flex page-container">
          <div>
            <img src={img3}></img>
          </div>
          <div className="page-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five
            </p>
            <h5 className="page-heading">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or
            </h5>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PageThree;
