import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Venn } from '@ant-design/plots';

const DemoVenn = () => {
  const config = {
    data: [
      {
        sets: ['A'],
        size: 12,
        label: 'A',
      },
      {
        sets: ['B'],
        size: 12,
        label: 'B',
      },
      {
        sets: ['C'],
        size: 12,
        label: 'C',
      },
      {
        sets: ['A', 'B'],
        size: 2,
        label: 'A&B',
      },
      {
        sets: ['A', 'C'],
        size: 2,
        label: 'A&C',
      },
      {
        sets: ['B', 'C'],
        size: 2,
        label: 'B&C',
      },
      {
        sets: ['A', 'B', 'C'],
        size: 1,
        label: 'A&B&C',
      },
    ],
    setsField: 'sets',
    sizeField: 'size',
    pointStyle: {
      fillOpacity: 0.85,
    },
    label: {
      offsetY: 7,
      style: {
        fontSize: 14,
      },
      formatter: (datum) => `${datum.sets.join('&')}: ${datum.size}`,
    },
  };
  return <Venn {...config} />;
};

ReactDOM.render(<DemoVenn />, document.getElementById('container'));
