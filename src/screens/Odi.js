//BATSMAN COMPONENT

import React, { Component } from 'react';
import { getBatsman } from '../data/teamrankings'
import { Table } from 'react-bootstrap'
class Odi extends Component {
    state = {
        odi: getBatsman(),
    }
    render() {
        return (
            <React.Fragment>
                <br />
                <div className="container my-0">
                    <center><h1 style={{marginTop: "-10px",  marginBottom: "20px"}}>Batsmen Rankings</h1></center>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Name</th>
                                <th>Team</th>
                                <th>Matches</th>
                                <th>Points</th>
                                <th>Ratings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.odi.map(match =>
                                <tr key={match.Position} >
                                    <td>{match.Position}</td>
                                    <td>{match.Name}</td>
                                    <td>{match.Team}</td>
                                    <td>{match.Matches}</td>
                                    <td>{match.Points}</td>
                                    <td>{match.Rating}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>

            </React.Fragment>

        );
    }
}

export default Odi;