import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'antd';
import { getSliderConfig } from '../../utils/sliderConfig';
import { SliderNextArrow, SliderPrevArrow } from './sliderNavigation.component';
import classes from './style.css'

import './style.css';
import { Link } from 'react-router-dom';

const card = [
  {
    name: 'Name 1',
    status: 'Finished',
    location: 'Lahore',
    team1Score: '159',
    team1Name: 'MS',
    overs: '20',
    team2Score: '149',
    team2Name: 'LQ',
    won: 'MS won by 5 Wickets',
  },
  {
    name: 'Name 1',
    status: 'Finished',
    location: 'Lahore',
    team1Score: '159',
    team1Name: 'MS',
    overs: '20',
    team2Score: '149',
    team2Name: 'LQ',
    won: 'MS won by 5 Wickets',
  },
  {
    name: 'Name 1',
    status: 'Finished',
    location: 'Lahore',
    team1Score: '159',
    team1Name: 'MS',
    overs: '20',
    team2Score: '149',
    team2Name: 'LQ',
    won: 'MS won by 5 Wickets',
  },
  {
    name: 'Name 1',
    status: 'Finished',
    location: 'Lahore',
    team1Score: '159',
    team1Name: 'MS',
    overs: '20',
    team2Score: '149',
    team2Name: 'LQ',
    won: 'MS won by 5 Wickets',
  },
  {
    name: 'Name 1',
    status: 'Finished',
    location: 'Lahore',
    team1Score: '159',
    team1Name: 'MS',
    overs: '20',
    team2Score: '149',
    team2Name: 'LQ',
    won: 'MS won by 5 Wickets',
  },
  {
    name: 'Name 1',
    status: 'Finished',
    location: 'Lahore',
    team1Score: '159',
    team1Name: 'MS',
    overs: '20',
    team2Score: '149',
    team2Name: 'LQ',
    won: 'MS won by 5 Wickets',
  },
  {
    name: 'Name 1',
    status: 'Finished',
    location: 'Lahore',
    team1Score: '159',
    team1Name: 'MS',
    overs: '20',
    team2Score: '149',
    team2Name: 'LQ',
    won: 'MS won by 5 Wickets',
  },
  {
    name: 'Name 1',
    status: 'Finished',
    location: 'Lahore',
    team1Score: '159',
    team1Name: 'MS',
    overs: '20',
    team2Score: '149',
    team2Name: 'LQ',
    won: 'MS won by 5 Wickets',
  },
  {
    name: 'Name 1',
    status: 'Finished',
    location: 'Lahore',
    team1Score: '159',
    team1Name: 'MS',
    overs: '20',
    team2Score: '149',
    team2Name: 'LQ',
    won: 'MS won by 5 Wickets',
  },
  {
    name: 'Name 1',
    status: 'Finished',
    location: 'Lahore',
    team1Score: '159',
    team1Name: 'MS',
    overs: '20',
    team2Score: '149',
    team2Name: 'LQ',
    won: 'MS won by 5 Wickets',
  },
  {
    name: 'Name 1',
    status: 'Finished',
    location: 'Lahore',
    team1Score: '159',
    team1Name: 'MS',
    overs: '20',
    team2Score: '149',
    team2Name: 'LQ',
    won: 'MS won by 5 Wickets',
  },
];

const CardSlider = () => {
  const settings = getSliderConfig(<SliderNextArrow/>, <SliderPrevArrow />);
  return (
    <div className="browse-brand-main">
      <div className="browse-brand-container">
        <Slider {...settings}>
          {/* <div className="d-flex"> */}
          {card &&
            card.map((i, index) => (
              // <Link className="text-muted">
              <div key={index} className="container" >
                <div style={{backgroundColor: '#282C2F', color: 'whitesmoke', borderRadius: '10px'}}>
                <div className="border-bottom-white d-flex justify-content-center">
                    <p>
                      <br/>
                    <b>{i.name}</b>
                  </p>
                </div>
                <div className="d-flex justify-content-between p-2">
                  <div className="border-none">
                    <p className="m-0 p-0 d-flex justify-content-center p-2">
                      <b>{i.status}</b>
                    </p>
                  </div>
                  <div className="p-2">
                    <p className="m-0 p-0">{i.location}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-2">
                  <div>
                    <div>
                      <p className="m-0 p-0">{i.team1Score}</p>
                    </div>
                    <div>
                      <p>({i.overs})</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="m-0 p-0">{i.team1Score}</p>
                    </div>
                    <div>
                      <p>({i.overs})</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <p>{i.team1Name}</p>
                  <p>{i.team2Name}</p>
                </div>
                <div className="border-top-black d-flex justify-content-center">
                  <p>
                    <b>{i.won}</b>
                  </p>
                  </div>
                  </div>
              </div>
              // </Link>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
