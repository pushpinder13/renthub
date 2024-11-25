import React, { useState, useEffect } from 'react';
import { Table, Button, message } from 'antd';
import axios from 'axios';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/admin/bookings')
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings', error);
      });
  }, []);

  const handleUpdateBookingStatus = (id, status) => {
    axios.put(`/admin/bookings/${id}`, { status })
      .then(() => {
        setBookings(bookings.map(booking => 
          booking._id === id ? { ...booking, status } : booking
        ));
        message.success('Booking status updated');
      })
      .catch((error) => {
        message.error('Failed to update booking status');
      });
  };

  const columns = [
    { title: 'User', dataIndex: 'user.name' },
    { title: 'Item', dataIndex: 'item.name' },
    { title: 'Date', dataIndex: 'date' },
    { title: 'Status', dataIndex: 'status' },
    { title: 'Actions', render: (_, record) => (
      <>
        <Button onClick={() => handleUpdateBookingStatus(record._id, 'Approved')}>Approve</Button>
        <Button onClick={() => handleUpdateBookingStatus(record._id, 'Cancelled')} type="danger">Cancel</Button>
      </>
    )}
  ];

  return (
    <div>
      <h1>Manage Bookings</h1>
      <Table dataSource={bookings} columns={columns} rowKey="_id" />
    </div>
  );
};

export default BookingManagement;
