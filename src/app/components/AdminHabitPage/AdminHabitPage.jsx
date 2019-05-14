import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import {Bar} from 'react-chartjs-2';
import './AdminHabitPage.scss';
import AdminHabit from './AdminHabit/AdminHabit';
import Task from '../TaskPage/Task/Task';


const filter = [
    { label: "Week", value: 1 },
    { label: "Month", value: 2 },
    { label: "Year", value: 3 }
  ];

  const chartData = {
    labels: ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE"],
    datasets: [{
    label: "",
    backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
    borderColor: 'rgb(255, 99, 132)',
    data: [10, 10, 10, 29, 20],
    }]
}

const chartOptions = {
    legend: {
      display: false
    },
    responsive: true,
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          zeroLineColor: "transparent",
        },
        ticks: {
          beginAtZero: true,
      }
      }],

      xAxes: [{

        gridLines: {
          drawBorder: false,
          zeroLineColor: "transparent",
        },
        ticks: {
          fontColor: "#9e9e9e"
        }
      }]
    }
  };

class ReportPage extends React.Component {
    render() {
        return(
        <div className='habit-contain'>
            <Header/>
            <Menu/>
            <div className="container-fluid">
                <div className="row col-12">
                    <div className="col-12">
                        <div className="col-12 text-titles">HABITS PER RANGE</div>
                        <div className="col-6 m-auto bar-chart">
                            < Bar lassName="col-6 m-auto" data={chartData} options={chartOptions} />
                        </div>
                    </div>
                </div>
                <div className="row col-12">
                    <div className="col-6">
                        <div className="col-12 text-titles">BEST HABIT</div>
                        <AdminHabit />
                    </div>
                    <div className="col-6">
                        <div className="col-12 text-titles">WORST HABIT</div>
                        <AdminHabit />
                    </div>
                </div>
            </div>        
        </div>)
    }
}

export default ReportPage;