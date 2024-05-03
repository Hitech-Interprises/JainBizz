import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)

const Chart = () => {
    const [data, setData] = useState({
        labels: ["jan", "Feb", "March", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "First Dataset",
                data: [10, 20, 30, 45, 53, 61, 50, 68, 79, 86, 70, 80],
                backgroundColor: "yellow",
                borderColor: "purple",
                tension:"0.4",
                fill:true, 
                pointStyle:"star",
                pointBorderColor: "blue"
            }
        ]
    })
    return (
        <div class="w-[800px] h-[800px]">
            <Line data={data}>Hello</Line>
        </div>
    )
}

export default Chart
