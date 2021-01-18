import React, { Component } from "react";
import HeaderComponent from "../components/Headers/header.compoent";
import Footer from "../components/Footer/footer.component";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import HeroSection from "../components/HeroSection/HeroSection";
import web from "../images/web7.jpg";
import { Link } from "react-router-dom";
import { MDBInput } from "mdbreact";
import { Table } from "react-bootstrap";

import { MDBDataTable } from "mdbreact";

let teams = {
  test: [
    {
      position: "1",
      name: "tom latham",
      role: "batsman",
      Specification: "opener",
    },
    {
      position: "2",
      name: "tom blundell",
      role: "batsman",
      Specification: "opener",
    },
    {
      position: "3",
      name: "Kane Williamson",
      role: "batsman",
      Specification: "toporder",
    },
    {
      position: "4",
      name: "Ross Taylor",
      role: "batsman",
      Specification: "middleorder",
    },
    {
      position: "5",
      name: "Henry Nicholls",
      role: "batsman",
      Specification: "middleorder",
    },
    {
      position: "6",
      name: "BJ Watling",
      role: "wicketkeeper",
      Specification: "middleorder",
    },
    {
      position: "7",
      name: "Kyle Jamieson",
      role: "allrounder",
      Specification: "bowling",
    },
    {
      position: "8",
      name: "Mitchell Santner",
      role: "bowler",
      Specification: "offspin",
    },
    {
      position: "9",
      name: "Tim Southee",
      role: "bowler",
      Specification: "fast",
    },
    {
      position: "10",
      name: "Neil Wagner",
      role: "bowler",
      Specification: "medium",
    },
    {
      position: "11",
      name: "Trent Boult",
      role: "bowler",
      Specification: "fast",
    },
  ],

  limited_over: [
    {
      position: "1",
      name: "jason roy",
      role: "batsman",
      Specification: "opener",
    },
    {
      position: "2",
      name: "Jonny Bairstow",
      role: "batsman",
      Specification: "opener",
    },
    {
      position: "3",
      name: "Joe Root",
      role: "batsman",
      Specification: "toporder",
    },
    {
      position: "4",
      name: "Eoin Morgan",
      role: "batsman",
      Specification: "middleorder",
    },
    {
      position: "5",
      name: "Jos Buttler",
      role: "wicketkeeper",
      Specification: "finisher",
    },
    {
      position: "6",
      name: "Ben Stokes",
      role: "allrounder",
      Specification: "batting",
    },

    {
      position: "7",
      name: "Chris Woakes",
      role: "allrounder",
      Specification: "bowling",
    },
    {
      position: "8",
      name: "Liam Plunkett",
      role: "bowler",
      Specification: "medium",
    },
    {
      position: "9",
      name: "Jofra Archer",
      role: "bowler",
      Specification: "fast",
    },
    {
      position: "10",
      name: "Adil Rashid",
      role: "bowler",
      Specification: "leg break",
    },
    {
      position: "11",
      name: "Mark Wood",
      role: "bowler",
      Specification: "fast",
    },
  ],
};

class Guru extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specialization_flag: false,
      format_val: "",
      player_type: "",
      name_value: "",
      name: "",
      position: "",
      special_type: "",
      battsmen_type: ["opener", "toporder", "middleorder", "finisher"],
      allrounder_data: ["batting", "bowling"],
      wicker_keeper: ["toporder", "middleorder", "finisher"],
      special_bowler_data: [
        "fast",
        "medium",
        "slow",
        "legbreak",
        "offspin",
        "chinamen",
      ],

      teamData: [],
      data_align: [],
      check_data: false,
      final_team: [],
      comments: [],

      columndata: [
        {
          label: "position",
          field: "position",
          sort: "asc",
          width: 150,
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 270,
        },
        {
          label: "Role",
          field: "player_type",
          sort: "asc",
          width: 200,
        },
        {
          label: "Speicification",
          field: "special_type",
          sort: "asc",
          width: 100,
        },
      ],
    };
  }

  format_select = (event) => {
    this.setState({ format_val: event.target.value });
  };

  name_set = (event) => {
    this.setState({ name: event.target.value });
  };
  player_type_select = (event) => {
    this.setState({ player_type: event.target.value });
    this.setState({ specialization_flag: true });
  };

  special_accept = (event) => {
    this.setState({ special_type: event.target.value });
  };
  handle_add_player = () => {
    if (this.state.format_val === "") {
      alert("please select match format before adding any player");
    } else {
      if (
        this.state.name === "" ||
        this.state.special_type === "" ||
        this.state.player_type === ""
      ) {
        alert("please enter the data in all field before continue");
      } else {
        if (this.state.teamData.length > 10) {
          alert("team limit exceeded please try ask guru");
        } else {
          this.state.teamData.push({
            position: this.state.position,
            name: this.state.name,
            player_type: this.state.player_type,
            special_type: this.state.special_type,
          });

          this.setState({ check_data: true });
        }
      }
    }
  };

  handle_ask_guru = () => {
    if (this.state.format_val === "") {
      alert("please select match format before adding any player");
    } else {
      if (this.state.teamData.length == 0) {
        alert("there is no team in table so you cant continue");
      } else if (this.state.teamData.length < 10) {
        alert("please enter 10 player before continue the asking");
      } else {
        if (this.state.format_val == "test") {
          for (let i = 0; i < this.state.teamData.length; i++) {
            if (this.state.teamData[i].player_type === "batsman") {
              this.state.data_align.push({
                position: this.state.teamData[i].position,
                name: this.state.teamData[i].name,
                player_type: this.state.teamData[i].player_type,
                special_type: this.state.teamData[i].special_type,
              });
            }
          }

          for (let i = 0; i < this.state.teamData.length; i++) {
            if (this.state.teamData[i].player_type === "wicketkeeper") {
              this.state.data_align.push({
                position: this.state.teamData[i].position,
                name: this.state.teamData[i].name,
                player_type: this.state.teamData[i].player_type,
                special_type: this.state.teamData[i].special_type,
              });
            }
          }

          for (let i = 0; i < this.state.teamData.length; i++) {
            if (this.state.teamData[i].player_type === "allrounder") {
              this.state.data_align.push({
                position: this.state.teamData[i].position,
                name: this.state.teamData[i].name,
                player_type: this.state.teamData[i].player_type,
                special_type: this.state.teamData[i].special_type,
              });
            }
          }

          for (let i = 0; i < this.state.teamData.length; i++) {
            if (this.state.teamData[i].player_type === "bowler") {
              this.state.data_align.push({
                position: this.state.teamData[i].position,
                name: this.state.teamData[i].name,
                player_type: this.state.teamData[i].player_type,
                special_type: this.state.teamData[i].special_type,
              });
            }
          }

          let final = [];

          console.log(this.state.data_align);

          for (let i = 0; i < this.state.data_align.length; i++) {
            if (
              teams.test[i].role === this.state.data_align[i].player_type &&
              teams.test[i].Specification ===
                this.state.data_align[i].special_type
            ) {
              final.push({
                position: this.state.data_align[i].position,
                name: this.state.data_align[i].name,
                player_type: this.state.data_align[i].player_type,
                special_type: this.state.data_align[i].special_type,
                status: "pass",
              });
            } else {
              final.push({
                position: this.state.data_align[i].position,
                name: this.state.data_align[i].name,
                player_type: this.state.data_align[i].player_type,
                special_type: this.state.data_align[i].special_type,
                status: "fail",
              });

              this.state.comments.push({
                name: this.state.data_align[i].name,
                have_role: this.state.data_align[i].player_type,
                have_special: this.state.data_align[i].special_type,
                require_role: teams.test[i].role,
                require_special: teams.test[i].Specification,
              });
            }
          }

          this.setState({ final_team: final });
        } else if (this.state.format_val === "odi") {
          for (let i = 0; i < this.state.teamData.length; i++) {
            if (this.state.teamData[i].player_type === "batsman") {
              this.state.data_align.push({
                position: this.state.teamData[i].position,
                name: this.state.teamData[i].name,
                player_type: this.state.teamData[i].player_type,
                special_type: this.state.teamData[i].special_type,
              });
            }
          }

          for (let i = 0; i < this.state.teamData.length; i++) {
            if (this.state.teamData[i].player_type === "wicketkeeper") {
              this.state.data_align.push({
                position: this.state.teamData[i].position,
                name: this.state.teamData[i].name,
                player_type: this.state.teamData[i].player_type,
                special_type: this.state.teamData[i].special_type,
              });
            }
          }

          for (let i = 0; i < this.state.teamData.length; i++) {
            if (this.state.teamData[i].player_type === "allrounder") {
              this.state.data_align.push({
                position: this.state.teamData[i].position,
                name: this.state.teamData[i].name,
                player_type: this.state.teamData[i].player_type,
                special_type: this.state.teamData[i].special_type,
              });
            }
          }

          for (let i = 0; i < this.state.teamData.length; i++) {
            if (this.state.teamData[i].player_type === "bowler") {
              this.state.data_align.push({
                position: this.state.teamData[i].position,
                name: this.state.teamData[i].name,
                player_type: this.state.teamData[i].player_type,
                special_type: this.state.teamData[i].special_type,
              });
            }
          }

          let final = [];

          console.log(this.state.data_align);

          for (let i = 0; i < this.state.data_align.length; i++) {
            if (
              teams.limited_over[i].role ===
                this.state.data_align[i].player_type &&
              teams.limited_over[i].Specification ===
                this.state.data_align[i].special_type
            ) {
              final.push({
                position: this.state.data_align[i].position,
                name: this.state.data_align[i].name,
                player_type: this.state.data_align[i].player_type,
                special_type: this.state.data_align[i].special_type,
                status: "pass",
              });
            } else {
              final.push({
                position: this.state.data_align[i].position,
                name: this.state.data_align[i].name,
                player_type: this.state.data_align[i].player_type,
                special_type: this.state.data_align[i].special_type,
                status: "fail",
              });
              this.state.comments.push({
                name: this.state.data_align[i].name,
                have_role: this.state.data_align[i].player_type,
                have_special: this.state.data_align[i].special_type,
                require_role: teams.limited_over[i].role,
                require_special: teams.limited_over[i].Specification,
              });
            }
          }

          this.setState({ final_team: final });
        }
      }
    }
  };
  render() {
    return (
      <>
        <HeaderComponent />
        <HeroSection pageClass="hero_section_about" pageTitle="Team Guru" />
        <Container className="my-5">
          <Col sm={3} className="my-1">
            <div>
              <select
                className="browser-default custom-select"
                onChange={this.format_select}
              >
                <option value="">Choose Format</option>
                <option value="test">Test</option>
                <option value="odi">limited</option>
              </select>
            </div>
          </Col>
          <Form>
            <Form.Row className="align-items-center">
              <Col sm={3} className="my-1">
                <MDBInput
                  label="Name"
                  background
                  size="sm"
                  onChange={this.name_set}
                />
              </Col>
              <Col sm={3} className="my-1">
                <div>
                  <select
                    className="browser-default custom-select"
                    onChange={this.player_type_select}
                  >
                    <option value="">Player Type</option>
                    <option value="batsman">Batsman</option>
                    <option value="bowler">Bowler</option>
                    <option value="allrounder">Allrounder</option>
                    <option value="wicketkeeper">wicketKeeper</option>
                  </select>
                </div>
              </Col>

              <Col sm={3} className="my-1">
                <div>
                  {this.state.specialization_flag ? (
                    <select
                      className="browser-default custom-select"
                      onChange={this.special_accept}
                    >
                      <option value="">Choose Specialization</option>
                      {this.state.player_type === "batsman"
                        ? this.state.battsmen_type.map(function (role) {
                            return <option value={role}>{role}</option>;
                          })
                        : this.state.player_type === "bowler"
                        ? this.state.special_bowler_data.map((role) => {
                            return <option value={role}>{role}</option>;
                          })
                        : this.state.player_type === "allrounder"
                        ? this.state.allrounder_data.map((role) => {
                            return <option value={role}>{role}</option>;
                          })
                        : this.state.player_type === "wicketkeeper"
                        ? this.state.wicker_keeper.map((role) => {
                            return <option value={role}>{role}</option>;
                          })
                        : null}
                    </select>
                  ) : (
                    <select
                      className="browser-default custom-select"
                      disabled={true}
                    >
                      <option>Choose Specialization</option>
                    </select>
                  )}
                </div>
              </Col>

              <Col xs="auto" className="my-1">
                <Button onClick={this.handle_add_player}>Add</Button>
              </Col>
            </Form.Row>
          </Form>

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Role</th>
                <th>Speicification</th>
              </tr>
            </thead>
            <tbody>
              {this.state.teamData.length > 0 ? (
                this.state.teamData.map((bat, index) => (
                  <tr>
                    <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                    <td>{bat.name}</td>
                    <td>{bat.player_type}</td>
                    <td>{bat.special_type}</td>
                  </tr>
                ))
              ) : (
                <p style={{ alignSelf: "center" }}>No data found!!!!</p>
              )}
            </tbody>
          </Table>

          <br />
          <br />

          <div style={{ textAlignLast: "center" }}>
            <Button
              className="justify-content-center"
              onClick={this.handle_ask_guru}
            >
              AsK guru
            </Button>
          </div>

          <br />
          <br />
          {this.state.final_team.length > 0 ? (
            <div>
              <h3>Guru Suggestions</h3>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Speicification</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teamData.length > 0 ? (
                    this.state.final_team.map((bat, index) => (
                      <tr>
                        <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                        <td>{bat.name}</td>
                        <td>{bat.player_type}</td>
                        <td>{bat.special_type}</td>
                        {bat.status == "pass" ? (
                          <td style={{ backgroundColor: "green" }}>
                            {bat.status}
                          </td>
                        ) : (
                          <td style={{ backgroundColor: "red" }}>
                            {bat.status}
                          </td>
                        )}
                      </tr>
                    ))
                  ) : (
                    <p style={{ alignSelf: "center" }}>No data found!!!!</p>
                  )}
                </tbody>
              </Table>

              <h3>Guru Comments</h3>
              {this.state.comments.length > 0 ? (
                <div>
                  <ul>
                    {this.state.comments.map((result, index) => {
                      return (
                        <li style={{ color: "red" }}>
                          {" "}
                          You need to change {result.name} who is{" "}
                          {result.have_role} as a speciality{" "}
                          {result.have_special} but according to guru you
                          require the {result.require_role} which is good in{" "}
                          {result.require_special}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <p>you have Team with perfect Combination</p>
              )}

              <div style={{ textAlignLast: "center" }}>
                <Button
                  className="justify-content-center"
                  onClick={() => {
                    window.location.reload(false);
                  }}
                >
                  Clear All Data
                </Button>
              </div>
            </div>
          ) : null}
        </Container>

        <Footer />
      </>
    );
  }
}

export default Guru;
