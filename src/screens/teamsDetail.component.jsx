import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProfileDetail from '../components/popularTeams/profile';
import SquardTable from '../components/popularTeams/squadTable';
import TopScorer from '../components/popularTeams/topScorer';
import TopWicketTaker from '../components/popularTeams/topWicketTaker';
import './style.css';

const TeamsDetail = (props) => {
  alert('hah')
  console.log(props)
  const [detail, setDetail] = useState({});
  const [home, setHome] = useState(true);
  const [fixture, setFixture] = useState(false);
  const [news, setNews] = useState(false);

  useEffect(() => {
    setDetail(props.location.state.teamDetail);
  });

  const selectHome = () => {
    setHome(true);
    setFixture(false);
    setNews(false);
  };

  const selectFixture = () => {
    setHome(false);
    setFixture(true);
    setNews(false);
  };

  const selectNews = () => {
    setHome(false);
    setFixture(false);
    setNews(true);
  };

  return (
    <>
      <div style={{ height: '80%' }} className="w-100">
        <img className="w-100 h-100" src={detail.img} />
      </div>
      <Row className="m-0">
        <Col lg={3}>
          <div className="d-flex align-items-center justify-content-center">
            <div style={{ width: '20%' }}>
              <img className="w-100" src={detail.logo} />
            </div>
            <h4>{detail.country}</h4>
          </div>
        </Col>
        <Col lg={3}>
          <div
            onClick={selectHome}
            className={
              home
                ? 'd-flex align-items-center justify-content-center border-red p-2 bkgrnd-black pointer'
                : 'd-flex align-items-center justify-content-center border-red p-2 pointer'
            }
          >
            <h3 className={home ? 'clr-white' : null}>HOME</h3>
          </div>
        </Col>
        <Col lg={3}>
          <div
            onClick={selectFixture}
            className={
              fixture
                ? 'd-flex align-items-center justify-content-center border-red p-2 bkgrnd-black pointer'
                : 'd-flex align-items-center justify-content-center border-red p-2 pointer'
            }
          >
            <h3 className={fixture ? 'clr-white' : null}>FIXTURES</h3>
          </div>
        </Col>
        <Col lg={3}>
          <div
            onClick={selectNews}
            className={
              news
                ? 'd-flex align-items-center justify-content-center border-red p-2 bkgrnd-black pointer'
                : 'd-flex align-items-center justify-content-center border-red p-2 pointer'
            }
          >
            <h3 className={news ? 'clr-white' : null}>NEWS</h3>
          </div>
        </Col>
        <Col lg={3} className="mt-2">
          <ProfileDetail detail={detail} />
        </Col>
        <Col lg={4}>
          <div className="border-right-green">
            <h1 className="text-center">Squad</h1>
            <SquardTable squad={detail.squad} />
          </div>
        </Col>
        <Col lg={5}>
          <div>
            <h1 className="text-center">Top Run Scorer</h1>
            <TopScorer topScorer={detail.topScorer} />
          </div>
          <div>
            <h1 className="text-center">Top Wicket Taker</h1>
            <TopWicketTaker topWicket={detail.topWicket} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TeamsDetail;
