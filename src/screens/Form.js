import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Container,
  Row,
  Col,
  Button,
  Table,
  Nav,
} from "react-bootstrap";
import DataCall from "./DataCall";
import RightPane from "./RightPane";
import "./style.css";
import firebase from "./../firebase/Firebase";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";

const popularTeams = [
  {
    id: 1,
    img: require("../assets/pak-flag.jpg"),
    logo: require("../assets/pak-logo.png"),
    country: "Pakistan",
    captan: "Azhar Ali",
    coach: "Mickey Arther",
    venue: "Lahore",
    rating: "10.9",
    ranking: "1",
    trophies: "12",
    owner: "PCB",
    squad: [
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali (C)",
        rating: "2.7",
      },
      {
        img: require("../assets/allRounder.png"),
        name: "Ahmad Ali (VC)",
        rating: "2.7",
      },
      {
        img: require("../assets/keeper.png"),
        name: "Junaid Ali (WK)",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },

      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/ball.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/ball.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
    ],
    topScorer: [
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
    ],
    topWicket: [
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "100",
        avg: "27.10",
        bowling: "LAFM",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "Spin",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "RAF",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "RAS",
      },
    ],
  },
  {
    id: 2,
    img: require("../assets/Cricket_India_Crest.svg"),
    logo: require("../assets/Cricket_India_Crest.svg"),
    country: "India",
    captan: "Azhar Ali",
    coach: "Mickey Arther",
    venue: "Lahore",
    rating: "10.9",
    ranking: "1",
    trophies: "12",
    owner: "PCB",
    squad: [
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali (C)",
        rating: "2.7",
      },
      {
        img: require("../assets/allRounder.png"),
        name: "Ahmad Ali (VC)",
        rating: "2.7",
      },
      {
        img: require("../assets/keeper.png"),
        name: "Junaid Ali (WK)",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },

      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/ball.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/ball.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
    ],
    topScorer: [
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
    ],
    topWicket: [
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "100",
        avg: "27.10",
        bowling: "LAFM",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "Spin",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "RAF",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "RAS",
      },
    ],
  },
  {
    id: 3,
    img: require("../assets/england-cricket-logo.png"),
    logo: require("../assets/england-cricket-logo.png"),
    country: "England",
    captan: "Azhar Ali",
    coach: "Mickey Arther",
    venue: "Lahore",
    rating: "10.9",
    ranking: "1",
    trophies: "12",
    owner: "PCB",
    squad: [
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali (C)",
        rating: "2.7",
      },
      {
        img: require("../assets/allRounder.png"),
        name: "Ahmad Ali (VC)",
        rating: "2.7",
      },
      {
        img: require("../assets/keeper.png"),
        name: "Junaid Ali (WK)",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },

      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/ball.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/ball.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
    ],
    topScorer: [
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
    ],
    topWicket: [
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "100",
        avg: "27.10",
        bowling: "LAFM",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "Spin",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "RAF",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "RAS",
      },
    ],
  },
  {
    id: 4,
    img: require("../assets/Flag_of_Iran.svg"),
    logo: require("../assets/Flag_of_Iran.svg"),
    country: "Pakistan",
    captan: "Azhar Ali",
    coach: "Mickey Arther",
    venue: "Lahore",
    rating: "10.9",
    ranking: "1",
    trophies: "12",
    owner: "PCB",
    squad: [
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali (C)",
        rating: "2.7",
      },
      {
        img: require("../assets/allRounder.png"),
        name: "Ahmad Ali (VC)",
        rating: "2.7",
      },
      {
        img: require("../assets/keeper.png"),
        name: "Junaid Ali (WK)",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },

      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/ball.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/ball.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
    ],
    topScorer: [
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
    ],
    topWicket: [
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "100",
        avg: "27.10",
        bowling: "LAFM",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "Spin",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "RAF",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "RAS",
      },
    ],
  },
  {
    id: 5,
    img: require("../assets/afghanistan-cricket-flag.png"),
    logo: require("../assets/afghanistan-cricket-flag.png"),
    country: "India",
    captan: "Azhar Ali",
    coach: "Mickey Arther",
    venue: "Lahore",
    rating: "10.9",
    ranking: "1",
    trophies: "12",
    owner: "PCB",
    squad: [
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali (C)",
        rating: "2.7",
      },
      {
        img: require("../assets/allRounder.png"),
        name: "Ahmad Ali (VC)",
        rating: "2.7",
      },
      {
        img: require("../assets/keeper.png"),
        name: "Junaid Ali (WK)",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },

      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/ball.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/ball.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
    ],
    topScorer: [
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
    ],
    topWicket: [
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "100",
        avg: "27.10",
        bowling: "LAFM",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "Spin",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "RAF",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "RAS",
      },
    ],
  },
  {
    id: 6,
    img: require("../assets/srilanka-cricket-flag.png"),
    logo: require("../assets/srilanka-cricket-flag.png"),
    country: "England",
    captan: "Azhar Ali",
    coach: "Mickey Arther",
    venue: "Lahore",
    rating: "10.9",
    ranking: "1",
    trophies: "12",
    owner: "PCB",
    squad: [
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali (C)",
        rating: "2.7",
      },
      {
        img: require("../assets/allRounder.png"),
        name: "Ahmad Ali (VC)",
        rating: "2.7",
      },
      {
        img: require("../assets/keeper.png"),
        name: "Junaid Ali (WK)",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },

      {
        img: require("../assets/bat.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/ball.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
      {
        img: require("../assets/ball.png"),
        name: "Azhar Ali",
        rating: "2.7",
      },
    ],
    topScorer: [
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topScore: "1000",
        avg: "27.10",
        batting: "RHB",
      },
    ],
    topWicket: [
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "100",
        avg: "27.10",
        bowling: "LAFM",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "Spin",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "RAF",
      },
      {
        pic: require("../assets/player.jpg"),
        name: "Ali",
        topWickets: "1000",
        avg: "27.10",
        bowling: "RAS",
      },
    ],
  },
];
const Form = (props) => {
  const [key1, setKey1] = useState("International");
  const [hide, setHide] = useState(false);

  const [data, setdata] = React.useState([]);
  const [pakdata, setPaksetdata] = React.useState([]);
  const [inddata, setIndsetdata] = React.useState([]);
  const [engdata, setEngsetdata] = React.useState([]);
  const [ausdata, setAusdata] = React.useState([]);

  const loadData = async () => {
    await firebase
      .database()
      .ref("Users")
      .on("value", (snapshot) => {
        let registersPlayer = [];
        let register_teams = [];
        snapshot.forEach((snap) => {
          if (
            !registersPlayer.includes(snap.val().teamName) &&
            snap.val().teamName != ""
          ) {
            registersPlayer.push(snap.val().teamName);
          }
        });

        registersPlayer.forEach((value) => {
          let object = {
            name: value,
            level: "Team",
          };
          register_teams.push(object);
        });

        setdata(register_teams);
        // console.log("this is the register data = " ,registersPlayer)
      });

    await firebase
      .database()
      .ref("TeamPlayers")
      .on("value", (snapshot) => {
        snapshot.forEach(async function (snap) {
          let test_data = [];
          for (let i = 0; i < 30; i++) {
            console.log("the snap value", snap.val().pakistan[i].n);
            test_data.push({
              id: snap.val().pakistan[i].Id,
              name: snap.val().pakistan[i].n,
            });
          }
          await setPaksetdata(test_data);

          let india_data = [];
          for (let i = 0; i < 30; i++) {
            india_data.push({
              id: snap.val().india[i].Id,
              name: snap.val().india[i].n,
            });
          }
          await setIndsetdata(india_data);

          let eng_data = [];
          for (let i = 0; i < 30; i++) {
            eng_data.push({
              id: snap.val().england[i].Id,
              name: snap.val().england[i].n,
            });
          }
          await setEngsetdata(eng_data);

          let aus_data = [];
          for (let i = 0; i < 30; i++) {
            aus_data.push({
              id: snap.val().australia[i].Id,
              name: snap.val().australia[i].n,
            });
          }
          await setAusdata(aus_data);
        });

        // setdata(registersPlayer)
        // console.log("this is the register data = " ,registersPlayer)
      });
  };

  React.useEffect(() => {
    loadData();
  }, []);
  const array = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const getPlayerIndex = [
    {
      C: "Test",
    },
    {
      C: "One-day International",
    },
    {
      C: "Twenty20 International",
    },
  ];
  console.log(getPlayerIndex);

  function onSelectCountry(e) {
    document.getElementsByClassName("active")[0].classList.remove("active");
    e.target.classList.add("active");
  }

  return (
    <div style={{ margin: "3% 8% 6% 8%" }}>
      {/* <div style={{ backgroundColor: 'white', height: 'auto', width: 'auto', border: '1px solid gray', borderRadius: '5px' }}>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key1}
                    onSelect={(k) => setKey1(k)}
                >
                    <Tab eventKey="International" title="International">
                        <Container>
                            <Row style={{ lineHeight: '15px', marginTop: '10px' }}>
                                <Col sm={4}>1 of 3</Col>
                                <Col sm={2}><Button variant="primary">Search</Button></Col>
                                <Col sm={6}>
                                    <p style={{ color: 'gray' }}>SQL, PHP, Python, Bootstrap, Java and XML. ... Learn how to add a search box inside a responsive navigation menu.
                                </p>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="Club" title="Club">
                        Club
            </Tab>
                    <Tab eventKey="Uni" title="Uni">
                        Uni
            </Tab>
                </Tabs>
            </div> */}
      <br></br>
      <br></br>

      <div
        style={{
          backgroundColor: "white",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      >
        <Tab.Container id="left-tabs-example" defaultActiveKey="Pakistan">
          <Row className="no-gutters">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="Pakistan">Pakistan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="India">India</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="England">England</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Austrlia">Australia</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="Pakistan">
                  <div className="container">
                    <Table striped bordered hover variant="light">
                      <tbody>
                        {pakdata.map((movie) => (
                          <tr key={movie.id}>
                            <td>
                              <Link to={`/player/${movie.id}/pakistan`}>
                                {movie.name}
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="India">
                  <div className="container">
                    <Table striped bordered hover variant="light">
                      <tbody>
                        {inddata.map((movie) => (
                          <tr key={movie.id}>
                            <td>
                              <Link to={`/player/${movie.id}/india`}>
                                {movie.name}
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="England">
                  <div className="container">
                    <Table striped bordered hover variant="light">
                      <tbody>
                        {engdata.map((movie) => (
                          <tr key={movie.id}>
                            <td>
                              <Link to={`/player/${movie.id}/england`}>
                                {movie.name}
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Austrlia">
                  <div className="container">
                    <Table striped bordered hover variant="light">
                      <tbody>
                        {ausdata.map((movie) => (
                          <tr key={movie.id}>
                            <td>
                              <Link to={`/player/${movie.id}/aus`}>
                                {movie.name}
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {/* <Container>
                    <Row>
                        <Col sm={6}>
                            <Table striped bordered hover style={{ border: 'none' }}>
                                <thead>
                                    <tr>
                                        <th>Player index by type:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getPlayerIndex.map(pIndex =>
                                        <tr key={pIndex.C} >
                                            <td style={{ borderBottom: '1px dotted black', borderTop: '1px dotted black' }}>{pIndex.C}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Col>
                        <Col sm={6}>
                            <b>Players Index by Letter:</b>
                            <hr />
                            {
                                array.map((i, k) => {
                                    return (
                                        (i == 'I' || i == 'R') ? <><span className="alpha" style={{ padding: '6px', border: '1px solid gray', borderRadius: '5px', marginLeft: '10px', }}>{i}</span>< br ></br><br></br></> : <span className="alpha" style={{ padding: '8px', border: '1px solid gray', borderRadius: '5px', marginLeft: '10px' }}>{i}</span>)
                                })
                            }
                        </Col>
                    </Row>
                </Container> */}
        {/* <div style={{ backgroundColor: 'white', height: 'auto', width: '96%', border: '1px solid gray', borderRadius: '5px' }}>
           </div> */}
      </div>
    </div>
  );
};

export default Form;
