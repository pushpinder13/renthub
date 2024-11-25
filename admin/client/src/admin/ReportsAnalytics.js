import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Dashboard from '../components/DashboardChart';

const ReportsAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState({
    revenueTrends: [],
    topCategories: [],
    bookingTrends: [],
  });

  useEffect(() => {
    axios.get('/admin/reports')
      .then((response) => {
        setAnalyticsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reports data', error);
      });
  }, []);

  const revenueChartData = {
    labels: analyticsData.revenueTrends.map(item => item.date),
    datasets: [{
      label: 'Revenue Trend',
      data: analyticsData.revenueTrends.map(item => item.revenue),
      borderColor: 'rgba(75,192,192,1)',
      fill: false,
    }]
  };

  const bookingChartData = {
    labels: analyticsData.bookingTrends.map(item => item.date),
    datasets: [{
      label: 'Booking Trend',
      data: analyticsData.bookingTrends.map(item => item.bookings),
      borderColor: 'rgba(153,102,255,1)',
      fill: false,
    }]
  };

  return (
    <div>
      <h1>Reports & Analytics</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Total Revenue" value={analyticsData.totalRevenue} prefix="₹" />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Top Categories" value={analyticsData.topCategories.join(', ')} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Total Bookings" value={analyticsData.totalBookings} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Revenue Trends">
            <Line data={revenueChartData} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Booking Trends">
            <Line data={bookingChartData} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ReportsAnalytics;
