import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'antd';
import { getSliderConfig } from '../../utils/sliderConfig';
import { SliderNextArrow, SliderPrevArrow } from './sliderNavigation.component';
import classes from './style.css'
import axios from 'axios'

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
  const [data, setdata] = React.useState([]);
  const [data1, setdata1] = React.useState([]);
  const [data2, setdata2] = React.useState([]);
  const [data3, setdat3] = React.useState([]);
  const [data4, setdat4] = React.useState([]);
  const loadData = async ()=>{
    let match_data = []
    await axios.get("https://webapi.cricingif.com/api/tours/1475/matches/latest").then(async result=>{
      match_data.push(result.data)
      await axios.get("https://webapi.cricingif.com/api/tours/1449/matches/latest").then(async result=>{
        match_data.push(result.data)
        await axios.get("https://webapi.cricingif.com/api/tours/1473/matches/latest").then(async result=>{
          match_data.push(result.data)
          await axios.get("https://webapi.cricingif.com/api/tours/1478/matches/latest").then(async result=>{
           match_data.push(result.data)
      await axios.get("https://webapi.cricingif.com/api/tours/1476/matches/latest").then(async result=>{
      match_data.push(result.data)
    })
    })

    })
      })
      console.log("hello" , match_data)
      setdata(match_data)
    })
   
    
    
    
  }


  React.useEffect(() => {
    loadData();
  }, []);
  const settings = getSliderConfig(<SliderNextArrow/>, <SliderPrevArrow />);
  return (
    <div className="browse-brand-main">
      <div className="browse-brand-container">
        <Slider {...settings}>
          {/* <div className="d-flex"> */}
          {data.length == 0 ?  null :
            data.map((i, index) => (
              
              // <Link className="text-muted">
              <div key={index} className="container" >
                <div style={{backgroundColor: '#282C2F', color: 'whitesmoke', borderRadius: '10px'}}>
                <div className="border-bottom-white d-flex justify-content-center">
                    <p>
                      <br/>
                    <b>{i[0].slug}</b>
                  </p>
                </div>
                <div className="d-flex justify-content-between p-2">
                  <div className="border-none">
                    <p className="m-0 p-0 d-flex justify-content-center p-2">
                      <b>{i[0].cs}</b>
                    </p>
                  </div>
                  <div className="p-2">
                    <p className="m-0 p-0">{i[0].ml}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-2">
                  <div>
                    <div>
                      <p className="m-0 p-0">{i[0].t1i1s}</p>
                    </div>
                    <div>
                      <p>({i[0].t1i1o})</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="m-0 p-0">{i[0].t1i2s}</p>
                    </div>
                    <div>
                      <p>({i[0].t1i2o})</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <p>{i[0].t1t}</p>
                  <p>{i[0].t2t}</p>
                </div>
                <div className="border-top-black d-flex justify-content-center">
                  <p>
                    <b>{i[0].cs}</b>
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
