import React from 'react'
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function ChartC() {
  let data =  {
    labels: ['7-8', '8-9', '9-10', '10-11', '11-12', '17-18', '18-19', '19-20' ],
    datasets: [
      {
        type: 'bar',
        label: '탑승인원',
        backgroundColor: 'rgb(255, 99, 132)',
        data: ["1","2","3","4"],
        borderColor: 'red',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: '하차인원',
        backgroundColor: 'rgb(75, 192, 192)',
        data: ["1","2","3","4"],
      },
    ],
  };
  
  return (
    <div>
      <h2>react-chartjs-2 chart.js</h2>
      <p>막대 그래프의 사례: 2023년</p>
      <Line type="line" data={data} />
    </div>
  )
}

export default ChartC

