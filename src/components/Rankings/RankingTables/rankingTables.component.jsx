import React, { useState } from 'react';
import { Table } from 'antd';

import './style.css';
import { Link } from 'react-router-dom';

const RankingTable = ({ title, clubsColumn, clubData, UnisData, Others }) => {
  const [clubs, setClubs] = useState(true);
  const [uni, setUni] = useState(false);
  const [others, setOthers] = useState(false);

  const clubBtn = () => {
    setClubs(true);
    setUni(false);
    setOthers(false);
  };

  const uniBtn = () => {
    setClubs(false);
    setUni(true);
    setOthers(false);
  };

  const othersBtn = () => {
    setClubs(false);
    setUni(false);
    setOthers(true);
  };
  return (
    <div className="border-none" style={{backgroundColor: '#282C2F', borderRadius: '10px'}}>
      <div className="border-bottom-black d-flex justify-content-center p-2 py-3" style={{textAlign: 'center'}}>
        <Link to="/ranking"><h4 className="clr-white">{title}</h4></Link>
      </div>
      <div className="d-flex justify-content-between p-1" >
        <h5
          style={{color: "white" }}
          onClick={clubBtn}
          className={
            clubs
              ? 'border-none cursor-pointer bkgrnd-gray clr-white'
              : 'border-none cursor-pointer'
          }
        >
          Clubs
        </h5>
        <h5
          onClick={uniBtn}
          style={{color: "white" }}
          className={
            uni
              ? 'border-none cursor-pointer bkgrnd-gray clr-white'
              : 'border-none cursor-pointer '
          }
        >
          Uni's
        </h5>
        <h5
          onClick={othersBtn}
          style={{color: "white" }}
          className={
            others
              ? 'border-none cursor-pointer bkgrnd-gray clr-white'
              : 'border-none cursor-pointer'
          }
        >
          Others
        </h5>
      </div>
      <Table
        columns={clubsColumn}
        rowKey="rank"
        pagination={false}
        className="w-100"
        dataSource={clubs ? clubData : uni ? UnisData : Others}
      />
    </div>
  );
};

export default RankingTable;
