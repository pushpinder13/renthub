import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState({
    totalRentals: 0,
    totalVendors: 0,
    totalBookings: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    axios.get('/admin/dashboard')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching dashboard data', error);
      });
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic title="Total Rentals" value={data.totalRentals} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total Vendors" value={data.totalVendors} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total Bookings" value={data.totalBookings} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total Revenue" value={data.totalRevenue} prefix="₹" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
