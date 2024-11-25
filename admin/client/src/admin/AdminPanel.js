import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DashboardOutlined, UserOutlined, AppstoreAddOutlined, BookOutlined, BarChartOutlined, SettingOutlined } from '@ant-design/icons';
import AdminLayout from './AdminLayout'; // Assuming you have a layout component

const { Sider, Content } = Layout;

const AdminPanel = () => {
  return (
    <AdminLayout>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to="/admin/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to="/admin/users">User Management</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
              <Link to="/admin/vendors">Vendor Management</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BookOutlined />}>
              <Link to="/admin/listings">Listing Management</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<BarChartOutlined />}>
              <Link to="/admin/reports">Reports & Analytics</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<SettingOutlined />}>
              <Link to="/admin/settings">System Settings</Link>
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
            <h1>Welcome to the Admin Panel</h1>
            <p>This is the main page for admin functionalities.</p>
          </Content>
        </Layout>
      </Layout>
    </AdminLayout>
  );
}

export default AdminPanel;
