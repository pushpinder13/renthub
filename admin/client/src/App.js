// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AdminLayout from './admin/AdminLayout';
// import Dashboard from './admin/Dashboard';
// import VendorManagement from './admin/VendorManagement';
// import ListingManagement from './admin/ListingManagement';
// import BookingManagement from './admin/BookingManagement';
// import ReportsAnalytics from './admin/ReportsAnalytics';
// import UserManagement from './admin/UserManagement';
// import SystemSettings from './admin/SystemSettings';
// import 'antd/dist/antd.css';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/admin" exact render={() => (
//           <AdminLayout>
//             <Dashboard />
//           </AdminLayout>
//         )} />
//         <Route path="/admin/dashboard" render={() => (
//           <AdminLayout>
//             <Dashboard />
//           </AdminLayout>
//         )} />
//         <Route path="/admin/vendors" render={() => (
//           <AdminLayout>
//             <VendorManagement />
//           </AdminLayout>
//         )} />
//         <Route path="/admin/listings" render={() => (
//           <AdminLayout>
//             <ListingManagement />
//           </AdminLayout>
//         )} />
//         <Route path="/admin/bookings" render={() => (
//           <AdminLayout>
//             <BookingManagement />
//           </AdminLayout>
//         )} />
//         <Route path="/admin/reports" render={() => (
//           <AdminLayout>
//             <ReportsAnalytics />
//           </AdminLayout>
//         )} />
//         <Route path="/admin/users" render={() => (
//           <AdminLayout>
//             <UserManagement />
//           </AdminLayout>
//         )} />
//         <Route path="/admin/settings" render={() => (
//           <AdminLayout>
//             <SystemSettings />
//           </AdminLayout>
//         )} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './admin/AdminPanel';
import Dashboard from './admin/Dashboard';
import VendorManagement from './admin/VendorManagement';
import ListingManagement from './admin/ListingManagement';
import BookingManagement from './admin/BookingManagement';
import ReportsAnalytics from './admin/ReportsAnalytics';
import UserManagement from './admin/UserManagement';
import SystemSettings from './admin/SystemSettings';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/vendors" element={<VendorManagement />} />
        <Route path="/admin/listings" element={<ListingManagement />} />
        <Route path="/admin/bookings" element={<BookingManagement />} />
        <Route path="/admin/reports" element={<ReportsAnalytics />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/settings" element={<SystemSettings />} />
      </Routes>
    </Router>
  );
};

export default App;
