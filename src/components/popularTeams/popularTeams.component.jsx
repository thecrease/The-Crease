import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PopularTeam = ({ title, popularTeams, handleTeamClick }) => {
  return (
    <Container>
      <Row>
        <Col lg={12} md={12}>
          <div style={{ border: '1px solid red' }} className="d-flex justify-content-center mt-1">
            <h1>{title}</h1>
          </div>
        </Col>
        <Col lg={12} md={12}>
          <Row>
            {popularTeams.map((i, index) => (
              <Col key={index} lg={4}>
                <div
                  onClick={() => handleTeamClick(i)}
                  style={{ cursor: 'pointer' }}
                  className="d-flex justify-content-center align-items-center p-2"
                >
                  <div style={{ width: '30%' }}>
                    <img style={{ width: '100%' }} src={i.img} />
                  </div>
                  <p className="p-1 m-0">
                    <b>{i.country}</b>
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PopularTeam;
