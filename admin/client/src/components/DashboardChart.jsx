// src/pages/Dashboard/Dashboard.jsx
import React from 'react';
import DashboardChart from './DashboardChart';

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Revenue',
        data: [300, 500, 700],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue Chart',
      },
    },
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <DashboardChart data={data} options={options} />
    </div>
  );
};

export default Dashboard;
