import React, { Component } from "react";
import { getMovies } from "../data/data";
import { Table } from "react-bootstrap";
import ProfileModal from "./ProfileModal";
import firebase from "./../firebase/Firebase";
class DataCall extends Component {
  state = {
    movies: getMovies(),
    show: false,
    datas: this.props.data,
  };

  async componentDidMount() {
    console.log("hello this component is mount", this.props);
    // await firebase
    //   .database()
    //   .ref("TeamPlayers")
    //   .limitToFirst(20)
    //   .on("value", (snapshot) => {
    //     snapshot.forEach((snap) => {
    //       let registersPlayer = [];
    //       let test_data = [];
    //       console.log("this is the mg ",snap.val());
    //       for (let i = 0; i < snap.val().pakistan.length; i++) {
    //         test_data.push({
    //           id: snap.val().pakistan[i].Id,
    //           name: snap.val().pakistan[i].n,
    //         });
    //       }
    //       this.setState({ data: registersPlayer });
    //   if (this.props.country === "Pakistan") {
    //     let registersPlayer = [];
    //     let test_data = [];
    //     for (let i = 0; i < snap.val().pakistan.length; i++) {
    //       test_data.push({
    //         id: snap.val().pakistan[i].Id,
    //         name: snap.val().pakistan[i].n,
    //       });
    //     }
    //     this.setState({ data: registersPlayer });
    //   } else if (this.props.country === "India") {
    //     let registersPlayer = [];
    //     let test_data = [];
    //     for (let i = 0; i < snap.val().india.length; i++) {
    //       test_data.push({
    //         id: snap.val().india[i].Id,
    //         name: snap.val().india[i].n,
    //       });
    //     }
    //     this.setState({ data: registersPlayer });
    //   } else if (this.props.country === "England") {
    //     let registersPlayer = [];
    //     let test_data = [];
    //     for (let i = 0; i < snap.val().england.length; i++) {
    //       test_data.push({
    //         id: snap.val().england[i].Id,
    //         name: snap.val().england[i].n,
    //       });
    //     }
    //     this.setState({ data: registersPlayer });
    //   } else if (this.props.country === "Austrlia") {
    //     let registersPlayer = [];
    //     let test_data = [];
    //     for (let i = 0; i < snap.val().australia.length; i++) {
    //       test_data.push({
    //         id: snap.val().australia[i].Id,
    //         name: snap.val().australia[i].n,
    //       });
    //     }
    //     this.setState({ data: registersPlayer });
    //   }
    // });

    // console.log("this is the register data = " ,registersPlayer)
    // });
  }

  showProfile = (e) => {
    this.setState({ show: true });
  };
  render() {
    return (
      <React.Fragment>
        <br />
        {this.state.show && <ProfileModal />}
        <div className="container">
          <Table striped bordered hover variant="light">
            <tbody>
              {this.state.movies.map((movie) => (
                <tr key={movie.id}>
                  <td
                    onClick={(e) => {
                      window.location.href = "/player";
                    }}
                  >
                    {movie.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}

export default DataCall;
