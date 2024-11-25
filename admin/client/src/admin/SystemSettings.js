import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const SystemSettings = () => {
  const [formData, setFormData] = useState({
    adminUsername: '',
    adminEmail: '',
    platformPolicy: '',
  });

  useEffect(() => {
    // Fetch existing settings if any
    axios.get('/admin/settings')
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching settings', error);
      });
  }, []);

  const handleSaveSettings = () => {
    axios.put('/admin/settings', formData)
      .then(() => {
        message.success('Settings updated successfully');
      })
      .catch((error) => {
        message.error('Failed to update settings');
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>System Settings</h1>
      <Form layout="vertical">
        <Form.Item label="Admin Username">
          <Input
            name="adminUsername"
            value={formData.adminUsername}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Admin Email">
          <Input
            name="adminEmail"
            value={formData.adminEmail}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Platform Policy">
          <Input.TextArea
            name="platformPolicy"
            value={formData.platformPolicy}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Button type="primary" onClick={handleSaveSettings}>
          Save Settings
        </Button>
      </Form>
    </div>
  );
};

export default SystemSettings;
