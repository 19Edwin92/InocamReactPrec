import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components';
import { Bar, Chart, Line, PolarArea, Doughnut } from 'react-chartjs-2';

// 라이브러리 등록 
// 사용하고 싶은 데이터 그래프 타입에 대해서 선언을 해주어야 사용이 가능하다. 
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement, // Bar 를 사용하기 위해서 
  LineElement, // Line 를 사용하기 위해서 
  RadialLinearScale, // 반지름을 구하는 타입
  ArcElement, // PolarArea 를 사용하기 위해서
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true, // 차트의 크기가 변할 때 자동으로 크기를 조절할 지 여부를 결정한다. 
  plugins: {
    // 범례의 를 위치시기려고 해
    legend: {
      // display: false, 
      position: 'top' as const,
      align: 'end'  as const,
    },
    //차트의 머릿말 설정 부분인데 안해도 되잖다. 
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
  scales: {
    y: {
      beginAtZero: true, // y 축 시작 값을 0으로 설정
    },
  },
};

const labels = ["20대", "30대", "40대", "50대", "60대", "70대"]

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: '출고신청',
              data: [5, 2, 10, 5,20, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
    },
    {
      type: 'bar' as const,
      label: '출고신청 Bar',
      borderWidth: 2,
      data: [5, 2, 10, 5,20, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
    },
  ],
};

export const data2 = {
  labels,
  datasets: [
    {
      label: '연령별',
              data: [5, 2, 10, 5,20, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
    }
  ],
};

export const data3 = {
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  labels: ["FaceBook", "Youtube", "Amazon"],
  datasets: [
    {
      label: '출고신청',
              data: [5000, 2000, 10000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
        borderColor : "black"
    }
  ],
};

function TestChart() {

  
  return (
    <div style={{width:"70%", margin:"0 auto"}}>
      <h2>TestChart</h2>
      <GraphBox>
      <GraphBoxText>
          <PolarArea data={data3} />
          <Doughnut options={options} data={data2} />
        </GraphBoxText>
        <GraphBoxText>
          <Chart type='line' options={options} data={data} />
          <Bar options={options} data={data2} />
        </GraphBoxText>
      </GraphBox>
    </div>
  )
}

export default TestChart
// <Line options={options} data={data} />
const GraphBox = styled.div`
  box-sizing: border-box;
  position: relative;
  width:100%;
  padding:20px;
  min-height: 300px;
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  grid-gap: 30px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
    heigth :auto;
  }
`

const GraphBoxText = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  padding: 20px;
  width:100%;
  color: white;
  box-shadow:0 7px 25px rgba(0,0,0,0.08);
`