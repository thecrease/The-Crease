import React, { Component } from "react";
import { getBowler } from "../data/teamrankings";
import { Table } from "react-bootstrap";
import firebase from "./../firebase/Firebase";
class T20 extends Component {
  state = {
    t20: [],
  };

  async componentDidMount() {
    await firebase
      .database()
      .ref("PlayerRankings")
      .on("value", (snapshot) => {
        snapshot.forEach((snap) => {
          let test_datas = [];
          if (snap.key === "-MRB797NZX33OrONCUgy") {
            for (let i = 0; i < snap.val().bowlers.length; i++) {
              test_datas.push({
                rank: snap.val().bowlers[i].rank,
                name: snap.val().bowlers[i].name,
                points: snap.val().bowlers[i].country,
                country: snap.val().bowlers[i].points,
              });
            }

            this.setState({ t20: test_datas });
          }
        });
      });
  }
  render() {
    return (
      <React.Fragment>
        <br />
        <div className="container">
          <center>
            <h1 style={{ marginTop: "-10px", marginBottom: "20px" }}>
              Bowlers Rankings
            </h1>
          </center>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Team</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {this.state.t20.map((match) => (
                <tr key={match.rank}>
                  <td>{match.rank}</td>
                  <td>{match.name}</td>
                  <td>{match.points}</td>
                  <td>{match.country}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}

export default T20;
