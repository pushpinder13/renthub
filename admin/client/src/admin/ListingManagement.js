import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Select, message } from 'antd';
import axios from 'axios';

const ListingManagement = () => {
  const [listings, setListings] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [listingData, setListingData] = useState({ name: '', category: '', price: '' });

  useEffect(() => {
    axios.get('/admin/listings')
      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching listings', error);
      });
  }, []);

  const handleAddListing = () => {
    axios.post('/admin/listings', listingData)
      .then((response) => {
        setListings([...listings, response.data]);
        message.success('Listing added successfully');
        setIsModalVisible(false);
      })
      .catch((error) => {
        message.error('Failed to add listing');
      });
  };

  const handleDeleteListing = (id) => {
    axios.delete(`/admin/listings/${id}`)
      .then(() => {
        setListings(listings.filter(listing => listing._id !== id));
        message.success('Listing deleted successfully');
      })
      .catch((error) => {
        message.error('Failed to delete listing');
      });
  };

  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Category', dataIndex: 'category' },
    { title: 'Price', dataIndex: 'price' },
    { title: 'Actions', render: (_, record) => (
      <Button type="danger" onClick={() => handleDeleteListing(record._id)}>Delete</Button>
    )}
  ];

  return (
    <div>
      <h1>Manage Listings</h1>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>Add Listing</Button>
      <Table dataSource={listings} columns={columns} rowKey="_id" />
      
      <Modal
        title="Add Listing"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleAddListing}
      >
        <Form>
          <Form.Item label="Name">
            <Input 
              value={listingData.name}
              onChange={(e) => setListingData({ ...listingData, name: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Category">
            <Select 
              value={listingData.category}
              onChange={(value) => setListingData({ ...listingData, category: value })}
            >
              <Select.Option value="Furniture">Furniture</Select.Option>
              <Select.Option value="Electronics">Electronics</Select.Option>
              <Select.Option value="Appliances">Appliances</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Price">
            <Input 
              value={listingData.price}
              onChange={(e) => setListingData({ ...listingData, price: e.target.value })}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ListingManagement;
