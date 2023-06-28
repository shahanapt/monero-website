import React from "react";
import { Card, Container } from "react-bootstrap";
import img from "../../assets/photo-1593642634524-b40b5baae6bb.png";
import img1 from "../../assets/photo-1593643946890-b5b85ade6451.png";
import "./Services.scss";
import { IoIosArrowForward } from "react-icons/io";

const Services = () => {
  return (
    <Container>
      <div className="d-flex services-container" id="services">
        <div className="services-text">
          <h4>
            Fright Company<br></br> With a <span>Difference.</span>
            <br></br>
            Fright Company<br></br> Innovation.
          </h4>
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five{" "}
          </p>
          <input type="checkbox" className="text-btn" />
        </div>

        <div className="d-flex services-card-div">
          <Card className="services-card">
            <div>
              <img src={img} alt=""></img>
              <h5>What is Lorem Ipsum?</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="services-icon">
                <IoIosArrowForward style={{ margin: "13px" }} />
              </div>
            </div>
          </Card>
          <Card className="services-card">
            <div>
              <img src={img1} alt=""></img>
              <h5>What is Lorem Ipsum?</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="services-icon">
                <IoIosArrowForward style={{ margin: "13px" }} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Services;
