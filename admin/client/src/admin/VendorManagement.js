import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';
import axios from 'axios';

const VendorManagement = () => {
  const [vendors, setVendors] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [vendorData, setVendorData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    axios.get('/admin/vendors')
      .then((response) => {
        setVendors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching vendors', error);
      });
  }, []);

  const handleAddVendor = () => {
    axios.post('/admin/vendors', vendorData)
      .then((response) => {
        setVendors([...vendors, response.data]);
        message.success('Vendor added successfully');
        setIsModalVisible(false);
      })
      .catch((error) => {
        message.error('Failed to add vendor');
      });
  };

  const handleDeleteVendor = (id) => {
    axios.delete(`/admin/vendors/${id}`)
      .then(() => {
        setVendors(vendors.filter(vendor => vendor._id !== id));
        message.success('Vendor deleted successfully');
      })
      .catch((error) => {
        message.error('Failed to delete vendor');
      });
  };

  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Phone', dataIndex: 'phone' },
    { title: 'Actions', render: (_, record) => (
      <Button type="danger" onClick={() => handleDeleteVendor(record._id)}>Delete</Button>
    )}
  ];

  return (
    <div>
      <h1>Manage Vendors</h1>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>Add Vendor</Button>
      <Table dataSource={vendors} columns={columns} rowKey="_id" />
      
      <Modal
        title="Add Vendor"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleAddVendor}
      >
        <Form>
          <Form.Item label="Name">
            <Input 
              value={vendorData.name}
              onChange={(e) => setVendorData({ ...vendorData, name: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input 
              value={vendorData.email}
              onChange={(e) => setVendorData({ ...vendorData, email: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Phone">
            <Input 
              value={vendorData.phone}
              onChange={(e) => setVendorData({ ...vendorData, phone: e.target.value })}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default VendorManagement;
