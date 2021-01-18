import React from 'react';
import { Table } from 'react-bootstrap';
import './style.css';

const TopScorer = ({ topScorer }) => {
  return (
    <div className="container" style={{ backgroundColor: "white", border: '5px solid black', borderRadius: '10px' }}>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Batting Style</th>
            <th>Top Score</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {topScorer &&
            topScorer.map((i, index) => (
              <tr style={{ borderBottom: '2px solid white' }}>

                <td><img style={{ width: '50px', height: '50px' }} src={i.pic} /></td>
                <td style={{ fontSize: '20px' }}>{i.name}</td>
                <td style={{ fontSize: '20px' }}>{i.batting}</td>
                <td style={{ fontSize: '20px' }}>{i.topScore}</td>
                <td style={{ fontSize: '20px' }}>{i.avg}</td>
              </tr>
            ))}
        </tbody>
      </Table>

    </div>
  );
};

export default TopScorer;