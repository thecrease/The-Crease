import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

const Blogs = () => {
  return (
    <Container className="custom_blogs" style={{ marginTop: "20px" }}>
      <div className="heading">
        <h1>BLOGS</h1>
      </div>
      <Row>
        <Col md={12} lg={6}>
          <div
            className="border-none p-2"
            style={{
              backgroundColor: "#282C2F",
              borderRadius: "15px",
              color: "whitesmoke",
            }}
          >
            <h3 style={{ color: "white" }}>Most Recent</h3>
            <div className="h-270px">
              <iframe
                width="458"
                height="230"
                style={{ marginLeft: 36, marginTop: 13 }}
                src="https://cricblog.net/"
                frameborder="0"
              ></iframe>
            </div>
            <div className="d-flex justify-content-between">
              <div className="border-none font-weight-bold d-flex justify-content-center">
                <p className="m-0 p-0">Tornament Name</p>
              </div>
              <div className="d-flex justify-content-center">
                <p className="m-0 p-0 font-weight-bold">29/09/2019</p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div
            className="border-none p-2"
            style={{
              backgroundColor: "#282C2F",
              borderRadius: "15px",
              color: "whitesmoke",
            }}
          >
            <h5 style={{ color: "white" }}>2nd Recent</h5>
            <div className="h-180px">
              <iframe
                width="458"
                height="110"
                style={{ marginLeft: 36, marginTop: 5 }}
                src="https://cricblog.net/"
                frameborder="0"
              ></iframe>
            </div>
            <div className="d-flex justify-content-between">
              <div className="border-none d-flex justify-content-center font-weight-bold">
                <p className="m-0 p-0 ">Tornament Name</p>
              </div>
              <div className="d-flex justify-content-center">
                <p className="m-0 p-0 font-weight-bold">29/09/2019</p>
              </div>
            </div>
          </div>
          <div
            className="border-none p-2"
            style={{
              marginTop: "5px",
              backgroundColor: "#282C2F",
              borderRadius: "15px",
              color: "whitesmoke",
            }}
          >
            <h5 style={{ color: "white" }}>2nd Recent</h5>
            <div className="h-180px">
              <iframe
                width="458"
                height="110"
                style={{ marginLeft: 36, marginTop: 5 }}
                src="https://cricblog.net/"
                frameborder="0"
              ></iframe>
            </div>

            <div className="d-flex justify-content-between">
              <div className="border-none d-flex justify-content-center">
                <p className="m-0 p-0 font-weight-bold">Tornament Name</p>
              </div>
              <div className="d-flex justify-content-center">
                <p className="m-0 p-0 font-weight-bold">29/09/2019</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
