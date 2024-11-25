import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DashboardOutlined, UserOutlined, AppstoreAddOutlined, ReadOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const AdminLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} className="site-layout-background">
        <Menu mode="inline" defaultSelectedKeys={['/admin/dashboard']} style={{ height: '100%', borderRight: 0 }}>
          <Menu.Item key="/admin/dashboard" icon={<DashboardOutlined />}>
            <Link to="/admin/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/admin/vendors" icon={<AppstoreAddOutlined />}>
            <Link to="/admin/vendors">Vendors</Link>
          </Menu.Item>
          <Menu.Item key="/admin/listings" icon={<ReadOutlined />}>
            <Link to="/admin/listings">Listings</Link>
          </Menu.Item>
          <Menu.Item key="/admin/bookings" icon={<AppstoreAddOutlined />}>
            <Link to="/admin/bookings">Bookings</Link>
          </Menu.Item>
          <Menu.Item key="/admin/users" icon={<UserOutlined />}>
            <Link to="/admin/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="/admin/settings" icon={<UserOutlined />}>
            <Link to="/admin/settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
