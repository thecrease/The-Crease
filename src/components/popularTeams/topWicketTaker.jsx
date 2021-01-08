import React from 'react';
import './style.css';
import { Table } from 'react-bootstrap';

const TopWicketTaker = ({ topWicket }) => {
  return (
    <div className="container" style={{ backgroundColor: "white", border: '5px solid black', borderRadius: '10px' }}>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Bowling Style</th>
            <th>Wickets</th>
            <th>Average</th>
          </tr>
        </thead>

        <tbody>
          {topWicket &&
            topWicket.map((i, index) => (
              <tr>
                <td><img style={{ width: '50px', height: '50px' }} src={i.pic} /></td>
                <td style={{ fontSize: '20px' }}>{i.name}</td>
                <td style={{ fontSize: '20px' }}>{i.bowling}</td>
                <td style={{ fontSize: '20px' }}>{i.topWickets}</td>
                <td style={{ fontSize: '20px' }}>{i.avg}</td>
              </tr>))}
        </tbody>
      </Table>
    </div>
  );
};

export default TopWicketTaker;