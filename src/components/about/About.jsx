import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./About.scss";
import MultiStepProgressBar from "./progressBar/MultiStepProgressBar";
import PageOne from "./progressBar/pages/PageOne";
import PageTwo from "./progressBar/pages/PageTwo";
import PageThree from "./progressBar/pages/PageThree";

const About = () => {
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      default:
        setPage("1");
    }
  };
  return (
    <div className="about-container" id="about">
      <Container
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h4 style={{ textAlign: "center", margin: "40px 0px" }}>
            Why Choose Us?
          </h4>
          <MultiStepProgressBar
            page={page}
            onPageNumberClick={nextPageNumber}
          />
          {
            {
              pageone: <PageOne onButtonClick={nextPage} />,
              pagetwo: <PageTwo onButtonClick={nextPage} />,
              pagethree: <PageThree onButtonClick={nextPage} />,
            }[page]
          }
        </div>
      </Container>
    </div>
  );
};

export default About;
