import React, { Component } from "react";
import { getTeam } from "../data/teamrankings";
import { Table } from "react-bootstrap";
import firebase from "./../firebase/Firebase";
class Team extends Component {
  state = {
    test_data: [],
    odi_data: [],
    t20: [],
  };

  async componentDidMount() {
    await firebase
      .database()
      .ref("Rankings")
      .on("value", (snapshot) => {
        let registersPlayer = [];
        snapshot.forEach((snap) => {
          let test_data = [];
          for (let i = 0; i < snap.val().test.length; i++) {
            test_data.push({
              rank: snap.val().test[i].rank,
              name: snap.val().test[i].name,
              points: snap.val().test[i].points,
              rating: snap.val().test[i].rating,
            });
          }

          let odi_data = [];
          for (let i = 0; i < snap.val().odi.length; i++) {
            odi_data.push({
              rank: snap.val().odi[i].rank,
              name: snap.val().odi[i].name,
              points: snap.val().odi[i].points,
              rating: snap.val().odi[i].rating,
            });
          }

          let t20 = [];
          for (let i = 0; i < snap.val().t20.length; i++) {
            t20.push({
              rank: snap.val().t20[i].rank,
              name: snap.val().t20[i].name,
              points: snap.val().t20[i].points,
              rating: snap.val().t20[i].rating,
            });
          }

          this.setState({ test_data: test_data });
          this.setState({ odi_data: odi_data });
          this.setState({ t20: t20 });
        });

        // console.log("this is the register data = " ,registersPlayer)
      });
  }
  render() {
    return (
      <React.Fragment>
        <br />
        <div className="container">
          <center>
            <h1 style={{ marginTop: "-10px", marginBottom: "20px" }}>
              Test Rankings
            </h1>
          </center>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Matches</th>
                <th>Ratings</th>
              </tr>
            </thead>
            <tbody>
              {this.state.test_data.map((match) => (
                <tr key={match.rank}>
                  <td>{match.rank}</td>
                  <td>{match.name}</td>
                  <td>{match.points}</td>
                  <td>{match.rating}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <br />
        <div className="container">
          <center>
            <h1 style={{ marginTop: "-10px", marginBottom: "20px" }}>
              One day Rankings
            </h1>
          </center>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Matches</th>
                <th>Ratings</th>
              </tr>
            </thead>
            <tbody>
              {this.state.odi_data.map((match) => (
                <tr key={match.rank}>
                  <td>{match.rank}</td>
                  <td>{match.name}</td>
                  <td>{match.points}</td>
                  <td>{match.rating}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <br />
        <div className="container">
          <center>
            <h1 style={{ marginTop: "-10px", marginBottom: "20px" }}>
              T20 Rankings
            </h1>
          </center>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Matches</th>
                <th>Ratings</th>
              </tr>
            </thead>
            <tbody>
              {this.state.t20.map((match) => (
                <tr key={match.rank}>
                  <td>{match.rank}</td>
                  <td>{match.name}</td>
                  <td>{match.points}</td>
                  <td>{match.rating}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}

export default Team;
