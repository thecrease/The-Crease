import React, { Component } from "react";
import { getAllRounder } from "../data/teamrankings";
import { Table } from "react-bootstrap";
import firebase from "./../firebase/Firebase";
class Test extends Component {
  state = {
    test: [],
  };

  async componentDidMount() {
    await firebase
      .database()
      .ref("PlayerRankings")
      .limitToFirst(1)
      .on("value", (snapshot) => {
        snapshot.forEach((snap) => {
          let test_data = [];
          console.log(snap.ref);
          for (let i = 0; i < snap.val().Allrounder.length; i++) {
            test_data.push({
              rank: snap.val().Allrounder[i].rank,
              name: snap.val().Allrounder[i].name,
              points: snap.val().Allrounder[i].country,
            });
          }

          this.setState({ test: test_data });
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
              All-Rounders Rankings
            </h1>
          </center>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Team</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {this.state.test.map((match) => (
                <tr key={match.rank}>
                  <td>{match.rank}</td>
                  <td>{match.name}</td>
                  <td>{match.points}</td>
                  <td>{match.points}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}

export default Test;
