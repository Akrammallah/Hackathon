import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);



const data = {
  labels: ['Nissan GT-R', 'Lamborghini', 'Rolls Royce', 'BMW', 'Tesla'],
  datasets: [
    {
      data: [25, 20, 15, 30, 10],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
    },
  ],
};

const TopCarsChart = () => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="text-lg font-bold mb-4">Top 5 Car Rentals</h3>
    <Pie data={data} />
  </div>
);

export default TopCarsChart;