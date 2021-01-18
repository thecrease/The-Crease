import React from 'react';
import { getSliderConfig } from '../../utils/sliderConfig';
import { SliderNextArrow, SliderPrevArrow } from '../CardSlider/sliderNavigation.component';
import Slider from 'react-slick';
import firebase from './../../firebase/Firebase'

import './style.css';

const team = [
  {
    name: 'Lahore Qalandars',
    level: 'Club',
    position: '1',
  },
  {
    name: 'COMSATS Lahore',
    level: 'Uni',
    position: '2',
  },
  {
    name: 'Multan Sultan',
    level: 'PSL',
    position: '3',
  },
  {
    name: 'PENAXIS',
    level: 'Other',
    position: '4',
  },
  {
    name: 'Karachi Kings',
    level: 'Club',
    position: '5',
  },
  {
    name: 'Peshawar Zalmi',
    level: 'PSL',
    position: '6',
  },
  {
    name: 'Quetta Gladiators',
    level: 'PSL',
    position: '7',
  },
  {
    name: 'Model Town-G',
    level: 'Club',
    position: '8',
  },
];

const RegisterTeams = () => {
  const [data, setdata] = React.useState([]);

  const loadData =async () => {
    
    await firebase.database().ref("Users").on("value", snapshot => {
      let registersPlayer = [];
      let register_teams = [];
      snapshot.forEach(snap => {
        if (!registersPlayer.includes(snap.val().teamName) && snap.val().teamName != ""){
          registersPlayer.push(snap.val().teamName);
        }
          
      });

      registersPlayer.forEach(value=>{
        let object = {
          name:value,
          level:'Team'
        }
        register_teams.push(object)
      })

      setdata(register_teams)
      // console.log("this is the register data = " ,registersPlayer)
    });

  }


  React.useEffect(() => {
    loadData();
  }, []);
  const settings = getSliderConfig(<SliderNextArrow />, <SliderPrevArrow />);
  return (
    <div className="browse-brand-main custom_registerTeam">
      <div className="browse-brand-container">
        <div className="text-center mb-4">
          <h1 className="clr-white">REGISTERED TEAMS</h1>
        </div>
        <Slider {...settings}>
          {data &&
            data.map((i, index) => (
              <div key={index} className="container" > 
                <div style={{backgroundColor: '#282C2F', padding: '5px', borderRadius: '10px'}}>
                <div className="w-100">
                  <img className="w-100" src={require('../../assets/teamLogo.jpg')} />
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{borderBottom: 'white'}}>
                  <p className="m-0 p-0" style={{color: 'whitesmoke'}}>{i.name}</p>
                </div>
                <div className="d-flex w-100">
                  <div className="w-50 d-flex justify-content-center align-items-center">
                    <p className="m-0 p-0" style={{color: 'whitesmoke'}}>{i.level}</p>
                  </div>
                  <div className="w-50 d-flex justify-content-center align-items-center">
                    <p className="m-0 p-0" style={{color: 'whitesmoke'}}>{index}</p>
                  </div>
                  </div>
                  </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default RegisterTeams;
