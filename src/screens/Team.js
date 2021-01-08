import React, { Component } from 'react';
import { getTeam } from '../data/teamrankings'
import { Table } from 'react-bootstrap'
class Team extends Component {
    state = {
        team: getTeam(),
    }
    render() {
        return (
            <React.Fragment>
                <br />
                <div className="container">
                    <center><h1 style={{marginTop: "-10px",  marginBottom: "20px"}}>Teams Rankings</h1></center>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Team</th>
                                <th>Matches</th>
                                <th>Points</th>
                                <th>Ratings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.team.map(match =>
                                <tr key={match.Position} >
                                    <td>{match.Position}</td>
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

export default Team;