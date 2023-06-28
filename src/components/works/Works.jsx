import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Works.scss";
import tick from "../../assets/password-(2).png";
import www from "../../assets/world-wide-web icon.png";

const Works = () => {
  return (
    <div>
      <Container>
        <div id="works" className="works-container">
          <Row>
            <div className="d-flex works-content">
              <div className="d-flex works-elements">
                <div className="works-text">
                  <h5>
                    Unmatched<br></br> Services.
                    <span>
                      <br></br>Unmatched<br></br> Excellence
                    </span>
                  </h5>
                </div>
                <div className="works-border">
                  <div className="works-img">
                    <img src={tick} alt=""></img>
                  </div>
                  <h5>What is Lorem Ipsum? </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="works-border">
                  <div className="works-img">
                    <img src={tick} alt=""></img>
                  </div>
                  <h5>What is Lorem Ipsum? </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="d-flex works-content">
              {/* border element -1st row*/}
              <div className="d-flex works-elements">
                <div className="works-border">
                  <div className="works-img">
                    <img src={tick} alt=""></img>
                  </div>
                  <h5>What is Lorem Ipsum? </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="works-border">
                  <div className="works-img">
                    <img src={tick} alt=""></img>
                  </div>
                  <h5>What is Lorem Ipsum? </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="works-border">
                  <div className="works-img">
                    <img src={tick} alt=""></img>
                  </div>
                  <h5>What is Lorem Ipsum? </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ textAlignLast: "end" }}>
              <img style={{ width: "200px" }} src={www} alt=""></img>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Works;
