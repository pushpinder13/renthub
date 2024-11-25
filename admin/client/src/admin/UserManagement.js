import React, { useState, useEffect } from 'react';
import { Table, Button, message } from 'antd';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/admin/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users', error);
      });
  }, []);

  const handleToggleUserStatus = (id, status) => {
    axios.put(`/admin/users/${id}`, { status })
      .then(() => {
        setUsers(users.map(user => 
          user._id === id ? { ...user, status } : user
        ));
        message.success('User status updated');
      })
      .catch((error) => {
        message.error('Failed to update user status');
      });
  };

  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Registration Date', dataIndex: 'registrationDate' },
    { title: 'Status', dataIndex: 'status' },
    { title: 'Actions', render: (_, record) => (
      <>
        <Button
          type="primary"
          onClick={() => handleToggleUserStatus(record._id, record.status === 'active' ? 'inactive' : 'active')}
        >
          {record.status === 'active' ? 'Disable' : 'Enable'}
        </Button>
      </>
    )}
  ];

  return (
    <div>
      <h1>Manage Users</h1>
      <Table dataSource={users} columns={columns} rowKey="_id" />
    </div>
  );
};

export default UserManagement;
