import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import RankingTable from './RankingTables/rankingTables.component';

import './style.css';

const clubsColumn = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Points',
    dataIndex: 'points',
    key: 'points',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
  },
];

const clubData = [
  {
    rank: 1,
    name: 'Club1',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 2,
    name: 'Club2',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 3,
    name: 'Club3',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 4,
    name: 'Club4',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 5,
    name: 'Club5',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 6,
    name: 'Club6',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 7,
    name: 'Club7',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 8,
    name: 'Club8',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 9,
    name: 'Club9',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 10,
    name: 'Club10',
    points: '2.5',
    rating: '9.5',
  },
];

const UnisData = [
  {
    rank: 1,
    name: 'Uni1',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 2,
    name: 'Uni2',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 3,
    name: 'Uni3',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 4,
    name: 'Uni4',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 5,
    name: 'Uni5',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 6,
    name: 'Uni6',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 7,
    name: 'Uni7',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 8,
    name: 'Uni8',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 9,
    name: 'Uni9',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 10,
    name: 'Uni10',
    points: '2.5',
    rating: '9.5',
  },
];

const Others = [
  {
    rank: 1,
    name: 'Others1',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 2,
    name: 'Others2',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 3,
    name: 'Others3',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 4,
    name: 'Others4',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 5,
    name: 'Others5',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 6,
    name: 'Others6',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 7,
    name: 'Others7',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 8,
    name: 'Others8',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 9,
    name: 'Others9',
    points: '2.5',
    rating: '9.5',
  },
  {
    rank: 10,
    name: 'Others10',
    points: '2.5',
    rating: '9.5',
  },
];

const Rankings = () => {
  return (
    <Container className="width-max custom_ranking">
      <Row>
        <Col lg={12} md={12}>
          <div className=" text-center my-4">
            <h1 className="clr-white">RANKINGS</h1>
          </div>
        </Col>
        <Col lg={3} md={12}>
          <RankingTable
            title="TEAM"
            clubsColumn={clubsColumn}
            clubData={clubData}
            UnisData={UnisData}
            Others={Others}
            style={{backgroundColor: '#282C2F'}}
          />
        </Col>
        <Col lg={3} md={12}>
          <RankingTable
            title="BOWLERS"
            clubsColumn={clubsColumn}
            clubData={clubData}
            UnisData={UnisData}
            Others={Others}
          />
        </Col>
        <Col lg={3} md={12}>
          <RankingTable
            title="BATSMAN"
            clubsColumn={clubsColumn}
            clubData={clubData}
            UnisData={UnisData}
            Others={Others}
          />
        </Col>
        <Col lg={3} md={12}>
          <RankingTable
            title="All ROUNDERS"
            clubsColumn={clubsColumn}
            clubData={clubData}
            UnisData={UnisData}
            Others={Others}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Rankings;
