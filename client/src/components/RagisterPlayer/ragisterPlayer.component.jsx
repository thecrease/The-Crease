import React from 'react';
import { getSliderConfig } from '../../utils/sliderConfig';
import { SliderNextArrow, SliderPrevArrow } from '../CardSlider/sliderNavigation.component';
import Slider from 'react-slick';
import "./style.css"

import '../RagisterTeams/style.css';
import firebase from './../../firebase/Firebase'

const team = [
  {
    name: 'Adeel Aslam',
    level: 'Club',
    position: '1',
  },
  {
    name: 'Fahad Butt',
    level: 'Uni',
    position: '2',
  },
  {
    name: 'Shabi Rai',
    level: 'Other',
    position: '3',
  },
  {
    name: 'Ali Goraya',
    level: 'Club',
    position: '4',
  },
  {
    name: 'Haseeb Araie',
    level: 'Uni',
    position: '5',
  },
  {
    name: 'Saad Shafi',
    level: 'Club',
    position: '6',
  },
  {
    name: 'Abdul Ahad',
    level: 'Uni',
    position: '7',
  },
  {
    name: 'Umaid Asif',
    level: 'Club',
    position: '8',
  },
];

const RegisterPlayers = () => {
  const [data, setdata] = React.useState([]);

  const loadData =async () => {
    
    await firebase.database().ref("Users").on("value", snapshot => {
      let registersPlayer = [];
      snapshot.forEach(snap => {
        let object = {
          name:snap.val().name,
          level:snap.val().level,
          profilePic:snap.val().profileImage,
          team:snap.val().teamName
        }
          registersPlayer.push(object);
      });

      setdata(registersPlayer)
      // console.log("this is the register data = " ,registersPlayer)
    });


//   firebase.database().ref("PlayerRankings").push({Allrounder :[ {
//     rank: 1,
//     name: '	Shakib Al Hasan',
//     country: 'BAN',
//   },
//   {
//     rank: 2,
//     name: '	Mohammad Nabi',
//     country: 'AFG',
//   },
//   {
//     rank: 3,
//     name: '	C.R. Woakes',
//     country: 'ENG',
//   },
//   {
//     rank: 4,
//     name: 'B.A. Stokes',
//     country: 'ENG',
//   },
//   {
//     rank: 5,
//     name: 'Imad Wasim',
//     points: 'PAK',
//     country: '1549',
//   },
//   {
//     rank: 6,
//     name: '	C. de Grandhomme',
//     country: 'NZ',

//   },
//   {
//     rank: 7,
//     name: '	R.A. Jadeja',
//     country: 'IND',
  
//   },
//   {
//     rank: 8,
//     name: 'Rashid Kha	',
//     country: 'AFG',
//   },
//   {
//     rank: 9,
//     name: 'M.J. Santner',
//     country: 'NZ',
//   },
//   {
//     rank: 10,
//     name: 'S.C. Williams',
//     country: 'ZIM',

//   },],


// })

  }


  React.useEffect(() => {
    loadData();
  }, []);
  const settings = getSliderConfig(<SliderNextArrow />, <SliderPrevArrow />);
  return (
    <div className="browse-brand-main custom_registerPlayers">
      <div className="browse-brand-container">
        <div className="text-center heading mb-4">
          <h1 className="clr-white">REGISTERED PLAYERS</h1>
        </div>
        <Slider {...settings}>
          {data &&
            data.map((i, index) => (
              <div key={index} className="container">
                <div style={{backgroundColor: '#282C2F', padding: '5px', borderRadius: '10px'}}>
                <div className="w-100">
                  <img className="w-100" src={require('../../assets/teamLogo.jpg')} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <p className="m-0 p-0" style={{color: 'whitesmoke'}}>{i.name}</p>
                </div>
                <div className="d-flex w-100">
                  <div className="w-50 d-flex justify-content-center align-items-center">
                    <p className="m-0 p-0" style={{color: 'whitesmoke'}}>{i.team}</p>
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

export default RegisterPlayers;
