import React from "react";
import { Container } from "react-bootstrap";
import "./BannerFooter.scss";
import key from "../../assets/key.png";
import add from "../../assets/add.png";
import shield from "../../assets/shield.png";
import browser from "../../assets/browser-(1).png";
import password from "../../assets/password (2).png";
import { IoIosArrowForward } from "react-icons/io";

const BannerFooter = () => {
  return (
    <div>
      <Container className="banner-footer-container">
        <div className="banner-footer">
          <div className="banner-elements">
            <div className="banner-items">
              <img src={key} alt="" />
              <h5>Service Title</h5>
              <p>Description</p>
            </div>
            <div className="banner-arrow-container">
              <div className="banner-hide">
                <IoIosArrowForward style={{ margin: "17px" }} />
              </div>
            </div>
          </div>

          <div className="verticalLine"></div>

          <div className="banner-elements">
            <div className="banner-items">
              <img src={add} alt="" />
              <h5>Service Title</h5>
              <p>Description</p>
            </div>
            <div className="banner-arrow-container">
              <div className="banner-hide">
                <IoIosArrowForward style={{ margin: "17px" }} />
              </div>
            </div>
          </div>

          <div className="verticalLine"></div>

          <div className="banner-elements">
            <div className="banner-items">
              <img src={shield} alt="" />
              <h5>Service Title</h5>
              <p>Description</p>
            </div>
            <div className="banner-arrow-container">
              <div className="banner-hide">
                <IoIosArrowForward style={{ margin: "17px" }} />
              </div>
            </div>
          </div>

          <div className="verticalLine"></div>

          <div className="banner-elements">
            <div className="banner-items">
              <img src={browser} alt="" />
              <h5>Service Title</h5>
              <p>Description</p>
            </div>
            <div className="banner-arrow-container">
              <div className="banner-hide">
                <IoIosArrowForward style={{ margin: "17px" }} />
              </div>
            </div>
          </div>
          <div className="verticalLine"></div>

          <div className="banner-elements">
            <div className="banner-items">
              <img src={password} alt="" />
              <h5>Service Title</h5>
              <p>Description</p>
            </div>
            <div className="banner-arrow-container">
              <div className="banner-hide">
                <IoIosArrowForward style={{ margin: "17px" }} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerFooter;
