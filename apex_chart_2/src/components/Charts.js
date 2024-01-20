import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford"],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            617594,
                            181045,
                            153060,
                            105162,
                            95072,
                        ],
                        backgroundColor: [
                            "rgba(75,192,192,0.4)",
                            "rgba(85,92,12,0.4)",
                            "rgba(65,12,92,0.4)",
                            "rgba(133,92,145,0.4)",
                            "rgba(75,192,192,0.4)",
                        ]
                    },
                ],
            }
        }
    }

    render() {
        return (
            <div className="charts">
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}
