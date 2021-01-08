import React, { Component } from 'react';
import { getBatting, getBowling, getInningsStats } from '../data/player-data'
import { Table, Button } from 'react-bootstrap'
import img from '../assets/img.jpg'
export default class Player extends Component {
    state = {
        batting: getBatting(),
        bowling: getBowling(),
        careerStats: getInningsStats()
    }
    render() {
        return (
                <div className="container">
                    <Button class="btn btn-primary" onClick={() => { window.location.href = "/players" }}> Go Back</Button>
                    <div className="container" style={{ borderBottom: '2px solid grey' }}>
                        <p style={{ color: 'black', fontWeight: 'bold', fontSize: '25px', textAlign: 'left', marginBottom: '0px' }}>
                            Naseem Shah
                </p>
                        <p style={{ color: 'grey', fontWeight: 'bold', fontSize: '15px', textAlign: 'left' }}>
                            Pakistan
                </p>

                    </div>

                    <div className="container" style={{ display: 'inline-flex', marginTop: '10px', paddingBottom: '30px', marginLeft: '0px' }}>
                        <span className="col-sm-9">
                            <p style={{ color: 'grey', fontWeight: 'bold', fontSize: '15px', textAlign: 'left' }}>
                                <b>Full Name:</b> Naseem Shah
                </p>

                            <p style={{ color: 'grey', fontSize: '15px', textAlign: 'left' }}>
                                <b>Born:</b> February 15, 2003
                </p>

                            <p style={{ color: 'grey', fontWeight: 'bold', fontSize: '15px', textAlign: 'left' }}>
                                <b>Current age:</b> 17 years 260 days
                </p>

                            <p style={{ color: 'grey', fontWeight: 'bold', fontSize: '15px', textAlign: 'left' }}>
                                <b>Major teams:</b> Pakistan, Centeral Punjab (Pakistan),<br />
                    Pakistan Under-16s, Pakistan Under-19s, Quetta Gladiators,<br />
                    Zarai Taraqiati Bank Limited
                </p>

                            <p style={{ color: 'grey', fontWeight: 'bold', fontSize: '15px', textAlign: 'left' }}>
                                <b>Playing Role:</b> Bowler
                </p>

                            <p style={{ color: 'grey', fontWeight: 'bold', fontSize: '15px', textAlign: 'left' }}>
                                <b>Batting Style:</b> Right-hand Bat
                </p>

                            <p style={{ color: 'grey', fontWeight: 'bold', fontSize: '15px', textAlign: 'left' }}>
                                <b>Bowling Style:</b> Right-arm fast
                </p>
                        </span>

                        <span className="col-sm-3">
                            <img src={img} style={{ width: 'auto', height: 'auto', textAlign: 'right' }} alt="Some Pic" />
                        </span>
                    </div>

                    <div className="container">
                        <p style={{ color: 'grey', fontWeight: 'bold', fontSize: '15px', textAlign: 'left' }}>Batting and fielding averages</p>
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
                                    <th>Ct</th>
                                    <th>St</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.batting.map(bat =>
                                    <tr key={bat.C} >
                                        <td style={{ fontWeight: 'bold' }}>{bat.C}</td>
                                        <td>{bat.Mat}</td>
                                        <td>{bat.Inns}</td>
                                        <td>{bat.NO}</td>
                                        <td>{bat.Runs}</td>
                                        <td>{bat.HS}</td>
                                        <td>{bat.Ave}</td>
                                        <td>{bat.BF}</td>
                                        <td>{bat.SR}</td>
                                        <td>{bat._100}</td>
                                        <td>{bat._50}</td>
                                        <td>{bat._4s}</td>
                                        <td>{bat._6s}</td>
                                        <td>{bat.Ct}</td>
                                        <td>{bat.St}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                    <div className="container">
                        <p style={{ color: 'grey', fontWeight: 'bold', fontSize: '15px', textAlign: 'left' }}>Bowling averages</p>
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
                                    <th>_4w</th>
                                    <th>_5w</th>
                                    <th>_10</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.bowling.map(bowl =>
                                    <tr key={bowl.C} >
                                        <td style={{ fontWeight: 'bold' }}>{bowl.C}</td>
                                        <td>{bowl.Mat}</td>
                                        <td>{bowl.Inns}</td>
                                        <td>{bowl.Balls}</td>
                                        <td>{bowl.Runs}</td>
                                        <td>{bowl.Wkts}</td>
                                        <td>{bowl.BBI}</td>
                                        <td>{bowl.BBM}</td>
                                        <td>{bowl.Ave}</td>
                                        <td>{bowl.Econ}</td>
                                        <td>{bowl.SR}</td>
                                        <td>{bowl._4w}</td>
                                        <td>{bowl._5w}</td>
                                        <td>{bowl._10}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>

                    <div className="container">
                        <p style={{ color: 'grey', fontWeight: 'bold', fontSize: '15px', textAlign: 'left' }}>Career statistics</p>
                        <Table striped bordered hover variant="dark">
                            <tbody>
                                {this.state.careerStats.map(career =>
                                    <tr key={career.C} >
                                        <td style={{ fontWeight: 'bold' }}>{career.C}</td>
                                        <td>{career.team1} v {career.team2} at {career.city}, {career.date} scorecard</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
        );
    }
}
