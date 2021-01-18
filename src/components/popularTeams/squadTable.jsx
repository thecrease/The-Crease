import React from 'react';
import { Table } from 'antd';

import './style.css';

const squadCol = [
  {
    title: 'Type',
    dataIndex: 'img',
    key: 'img',
    render: (text, record) => {
      return (
        <div className="d-flex justify-content-center" style={{ width: '30%' }}>
          <img className="w-100" src={record.img} />
        </div>
      );
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
  },
];

const SquardTable = ({ squad }) => {
  return <Table className="table" columns={squadCol} dataSource={squad} pagination={false} />;
};

export default SquardTable;
