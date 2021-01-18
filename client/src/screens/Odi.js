//BATSMAN COMPONENT

import React, { Component } from "react";
import { getBatsman } from "../data/teamrankings";
import { Table } from "react-bootstrap";
import firebase from "./../firebase/Firebase";
import axios from "axios";
class Odi extends Component {
  state = {
    odi: [],
  };

  async componentDidMount() {
    await firebase
      .database()
      .ref("PlayerRankings")
      .on("value", (snapshot) => {
        snapshot.forEach((snap) => {
          let test_datas = [];
          if (snap.key === "-MRB6C5n-ynjWAbhFVdD") {
            for (let i = 0; i < snap.val().batsmen.length; i++) {
              test_datas.push({
                rank: snap.val().batsmen[i].rank,
                name: snap.val().batsmen[i].name,
                points: snap.val().batsmen[i].country,
                country: snap.val().batsmen[i].points,
              });
            }

            this.setState({ odi: test_datas });
          }
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <br />
        <div className="container my-0">
          <center>
            <h1 style={{ marginTop: "-10px", marginBottom: "20px" }}>
              Batting Ranking
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
              {this.state.odi.map((match) => (
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

export default Odi;
