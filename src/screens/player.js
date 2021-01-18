import React, { Component } from "react";
import { getBatting, getBowling, getInningsStats } from "../data/player-data";
import { Table, Button } from "react-bootstrap";
import img from "../assets/img.jpg";
import firebase from "./../firebase/Firebase";
import axios from "axios";
export default class Player extends Component {
  state = {
    batting: getBatting(),
    bowling: getBowling(),
    careerStats: getInningsStats(),
    playerData: [],
    stats: [],
    bowlStat: [],
    name: "",
  };

  async componentDidMount() {
    let country = this.props.match.params.country;
    let id = this.props.match.params.id;
    let temp_data = [];
    await firebase
      .database()
      .ref("TeamPlayers")
      .on("value", (snapshot) => {
        snapshot.forEach(function (data) {
          let player_data = [];
          if (country === "pakistan") {
            for (let i = 0; i < data.val().pakistan.length; i++) {
              if (id == data.val().pakistan[i].Id) {
                player_data.push(data.val().pakistan[i]);
              }
            }
            temp_data = player_data;
          } else if (country === "india") {
            for (let i = 0; i < data.val().india.length; i++) {
              if (id == data.val().india[i].Id) {
                player_data.push(data.val().india[i]);
              }
            }
            temp_data = player_data;
          } else if (country === "england") {
            for (let i = 0; i < data.val().england.length; i++) {
              if (id == data.val().england[i].Id) {
                player_data.push(data.val().england[i]);
              }
            }
            temp_data = player_data;
          } else if (country === "aus") {
            for (let i = 0; i < data.val().australia.length; i++) {
              if (id == data.val().australia[i].Id) {
                player_data.push(data.val().australia[i]);
              }
            }
            temp_data = player_data;
          }
        });

        this.setState({ playerData: temp_data, name: temp_data[0].n });
      });

    await axios
      .get(
        "https://webapi.cricingif.com/api/player/" +
          this.props.match.params.id +
          "/batting/career"
      )
      .then((result) => {
        this.setState({ stats: result.data });
      });

    await axios
      .get(
        "https://webapi.cricingif.com/api/player/" +
          this.props.match.params.id +
          "/bowling/career"
      )
      .then((result) => {
        this.setState({ bowlStat: result.data });
      });
    console.log(
      "this is player data ",
      this.props.match.params.id,
      this.state.playerData
    );
  }

  render() {
    return (
      <div className="container">
        <Button
          class="btn btn-primary"
          onClick={() => {
            // console.log("the star ", this.state.playerData[0].n);
            window.location.href = "/players";
          }}
        >
          {" "}
          Go Back
        </Button>
        <div className="container" style={{ borderBottom: "2px solid grey" }}>
          <p
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "25px",
              textAlign: "left",
              marginBottom: "0px",
            }}
          >
            {this.state.playerData.length === 0
              ? null
              : this.state.playerData[0].n}
          </p>
          <p
            style={{
              color: "grey",
              fontWeight: "bold",
              fontSize: "15px",
              textAlign: "left",
            }}
          >
            {this.props.match.params.country}
          </p>
        </div>

        <div
          className="container"
          style={{
            display: "inline-flex",
            marginTop: "10px",
            paddingBottom: "30px",
            marginLeft: "0px",
          }}
        >
          <span className="col-sm-9">
            <p
              style={{
                color: "grey",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              <b>Full Name:</b>{" "}
              {this.state.playerData.length === 0
                ? null
                : this.state.playerData[0].n}
            </p>

            <p style={{ color: "grey", fontSize: "15px", textAlign: "left" }}>
              <b>Born:</b> February 15, 2003
            </p>

            <p
              style={{
                color: "grey",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              <b>Current age:</b> 17 years 260 days
            </p>

            <p
              style={{
                color: "grey",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              <b>Major teams:</b> Pakistan, Centeral Punjab (Pakistan),
              <br />
              Pakistan Under-16s, Pakistan Under-19s, Quetta Gladiators,
              <br />
              Zarai Taraqiati Bank Limited
            </p>

            <p
              style={{
                color: "grey",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              <b>Playing Role:</b>
              {this.state.playerData.length === 0
                ? null
                : this.state.playerData[0].d}
            </p>

            <p
              style={{
                color: "grey",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              <b>Batting Style:</b> Right-hand Bat
            </p>

            <p
              style={{
                color: "grey",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              <b>Bowling Style:</b>{" "}
              {this.state.playerData.length === 0
                ? null
                : this.state.playerData[0].bs}
            </p>
          </span>

          {/* <span className="col-sm-3">
            <img
              src={img}
              style={{ width: "auto", height: "auto", textAlign: "right" }}
              alt="Some Pic"
            />
          </span> */}
        </div>

        <div className="container">
          <p
            style={{
              color: "grey",
              fontWeight: "bold",
              fontSize: "15px",
              textAlign: "left",
            }}
          >
            Batting Statistics
          </p>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th></th>
                <th>Mat</th>
                <th>Inns</th>
                <th>NO</th>
                <th>Runs</th>
                <th>HS</th>
                <th>Ave</th>
                <th>BF</th>
                <th>SR</th>
                <th>_100</th>
                <th>_50</th>
                <th>_4s</th>
                <th>_6s</th>
              </tr>
            </thead>
            <tbody>
              {this.state.stats.map((bat) => (
                <tr key={bat.C}>
                  <td style={{ fontWeight: "bold" }}>{bat.fmt}</td>
                  <td>{bat.m}</td>
                  <td>{bat.i}</td>
                  <td>{bat.no}</td>
                  <td>{bat.r}</td>
                  <td>{bat.hs}</td>
                  <td>{bat.av}</td>
                  <td>{bat.bf}</td>
                  <td>{bat.sr}</td>
                  <td>{bat.c}</td>
                  <td>{bat.fif}</td>
                  <td>{bat.fo}</td>
                  <td>{bat.s}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="container">
          <p
            style={{
              color: "grey",
              fontWeight: "bold",
              fontSize: "15px",
              textAlign: "left",
            }}
          >
            Bowling averages
          </p>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th></th>
                <th>Mat</th>
                <th>Inns</th>
                <th>Balls</th>
                <th>Runs</th>
                <th>Wkts</th>
                <th>BBI</th>
                <th>BBM</th>
                <th>Ave</th>
                <th>Econ</th>
                <th>SR</th>
                <th>_5w</th>
                <th>_10</th>
              </tr>
            </thead>
            <tbody>
              {this.state.bowlStat.map((bowl) => (
                <tr key={bowl.C}>
                  <td style={{ fontWeight: "bold" }}>{bowl.fmt}</td>
                  <td>{bowl.m}</td>
                  <td>{bowl.i}</td>
                  <td>{bowl.b}</td>
                  <td>{bowl.r}</td>
                  <td>{bowl.wk}</td>
                  <td>{bowl.bbi}</td>
                  <td>{bowl.bbm}</td>
                  <td>{bowl.av}</td>
                  <td>{bowl.e}</td>
                  <td>{bowl.sr}</td>
                  <td>{bowl.f}</td>
                  <td>{bowl.t}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        {/* 
        <div className="container">
          <p
            style={{
              color: "grey",
              fontWeight: "bold",
              fontSize: "15px",
              textAlign: "left",
            }}
          >
            Career statistics
          </p>
          <Table striped bordered hover variant="dark">
            <tbody>
              {this.state.careerStats.map((career) => (
                <tr key={career.C}>
                  <td style={{ fontWeight: "bold" }}>{career.C}</td>
                  <td>
                    {career.team1} v {career.team2} at {career.city},{" "}
                    {career.date} scorecard
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div> */}
        <br />
        <br />
      </div>
    );
  }
}
