import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast('Chart Position changed');

export default class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          height: 450,
          width: '100%',
          type: 'bar',
          background: '#f4f4f4',
          foreColor: '#333',
        },
        series: [
          {
            name: 'Population',
            data: [
              8550405,
              3971883,
              2720546,
              2296224,
              1567442,
              1563025,
              1469845,
              1394928,
              1300092,
              1026908,
            ],
          },
        ],
        xaxis: {
          categories: [
            'New York',
            'Los Angeles',
            'Chicago',
            'Houston',
            'Philadelphia',
            'Phoenix',
            'San Antonio',
            'San Diego',
            'Dallas',
            'San Jose',
          ],
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        fill: {
          colors: ['#F44336', '#E91E63', '#9C27B0'],
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: 'Largest Pakistan cities By population',
          align: 'center',
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: '25',
            fontWeight: '2',
            color: '#F44336',
          },
        },
      },
    };
  }

  onClick = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal,
          },
        },
      },
    });

    // Call the notify function
    notify();
  };

  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.options.series}
          type='bar'
          height='450'
          width='100%'
        />
        <button onClick={this.onClick} id="horizontal">Toggle Orientation</button>
        <ToastContainer />
      </React.Fragment>
    );
  }
}
