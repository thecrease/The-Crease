import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import FormFileLabel from 'react-bootstrap/esm/FormFileLabel';
import RankingTable from './RankingTables/rankingTables.component';

import './style.css';
import firebase from './../../firebase/Firebase'

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
    title: 'Matches',
    dataIndex: 'points',
    key: 'points',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
  },
];

const callRouderColumn = [
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
    title: 'Country',
    dataIndex: 'points',
    key: 'points',
  },
 
];
 const Rankings = () => {

    const [testteamdata, settestTeamdata] = React.useState([]);
    const [oditeamdata, setodiTeamdata] = React.useState([]);
    const [t20teamdata, sett20Teamdata] = React.useState([]);
    const [allRouderdata, setaLLRounderdata] = React.useState([]);
  
    const loadData =async () => {
      
      await firebase.database().ref("Rankings").on("value", snapshot => {
        let registersPlayer = [];
        snapshot.forEach(snap => {
          let test_data = []
          for (let i=0; i<snap.val().test.length ; i++){
            test_data.push({
              rank:snap.val().test[i].rank,
            name:snap.val().test[i].name,
            points:snap.val().test[i].points,
            rating:snap.val().test[i].rating
            })
          }

          let odi_data = []
          for (let i=0; i<snap.val().odi.length ; i++){
            odi_data.push({
              rank:snap.val().odi[i].rank,
            name:snap.val().odi[i].name,
            points:snap.val().odi[i].points,
            rating:snap.val().odi[i].rating
            })
          }

          let t20 = []
          for (let i=0; i<snap.val().t20.length ; i++){
            t20.push({
              rank:snap.val().t20[i].rank,
            name:snap.val().t20[i].name,
            points:snap.val().t20[i].points,
            rating:snap.val().t20[i].rating
            })
          }

          settestTeamdata(test_data)
          setodiTeamdata(odi_data)
          sett20Teamdata(t20)
          
        });

        

        // console.log("this is the register data = " ,registersPlayer)
      });

    
      
        await firebase.database().ref("PlayerRankings").limitToFirst(1).on("value", snapshot => {
          let registersPlayer = [];
          snapshot.forEach(snap => {
            let test_data = []
            for (let i=0; i<snap.val().Allrounder.length ; i++){
              test_data.push({
                rank:snap.val().Allrounder[i].rank,
              name:snap.val().Allrounder[i].name,
              points:snap.val().Allrounder[i].country,
              })
            }

            setaLLRounderdata(test_data)
          });
  
          
  
          // console.log("this is the register data = " ,registersPlayer)
        });
   
    }

  React.useEffect(() => {
    loadData();
  }, []);
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
            title="Test"
            clubsColumn={clubsColumn}
            clubData={testteamdata}
           
            style={{backgroundColor: '#282C2F'}}
          />
        </Col>
        <Col lg={3} md={12}>
          <RankingTable
            title="One day"
            clubsColumn={clubsColumn}
            clubData={oditeamdata}
           
          />
        </Col>
        <Col lg={3} md={12}>
          <RankingTable
            title="T20"
            clubsColumn={clubsColumn}
            clubData={t20teamdata}
          />
        </Col>
        <Col lg={3} md={12}>
          <RankingTable
            title="All ROUNDERS"
            clubsColumn={callRouderColumn}
            clubData={allRouderdata}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Rankings;
