import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import NavBar from './navBar/navBar.component';

import './style.css';

const HeaderComponent = () => {
  return (
    <div className="header">
      {/* <Container> */}
      <NavBar />
      {/* <Row>
          <Col lg={12}>
            <div className="w-100">
              <img className="w-100" src={require('../../assets/headerPhoto.jpg')} />
            </div>
          </Col>
        </Row> */}
      {/* </Container> */}
    </div>
  );
};

export default HeaderComponent;
