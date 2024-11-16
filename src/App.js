import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Không cần import Router nữa
import HomePage from './HomePage';  // Đảm bảo import đúng đường dẫn của HomePage
import AddCouponPage from './AddCouponPage';  // Đảm bảo import đúng đường dẫn của AddCouponPage

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />  {/* Trang chủ */}
      <Route path="/add-coupon" element={<AddCouponPage />} />  {/* Trang thêm mã giảm giá */}
    </Routes>
  );
};

export default App;
