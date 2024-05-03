import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)

const Chart = () => {
    const [{ data1, setData1 },
        { data2, setData2 }] = useState({
            labels: ["jan", "Feb", "March", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label1: "First Dataset",
                    data1: [10, 20, 30, 45, 53, 61, 50, 68, 79, 86, 70, 80],
                    backgroundColor: "yellow",
                    borderColor: "purple",
                    tension: "0.4",
                    fill: true,
                    pointStyle: "star",
                    pointBorderColor: "blue"
                },
                {
                    label2: "Second Dataset",
                    data1: [20, 40, 30, 45, 53, 61, 40, 59, 70, 89, 70, 80],
                    backgroundColor: "purple",
                    borderColor: "yellow",
                    tension: "0.4",
                    fill: true,
                    pointStyle: "rect",
                    pointBorderColor: "sky blue"
                }
            ]
        })
    return (
        <div class="w-[800px] h-[800px]">
            <Line data1={data1} ></Line>
            <Line data2={data2} ></Line>
        </div>
    )
}

export default Chart
