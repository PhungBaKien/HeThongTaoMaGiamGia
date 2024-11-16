import React, { useState } from 'react';
import { Box, Button, TextField, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [coupons, setCoupons] = useState([
    { 
      id: 1, code: 'DISCOUNT10', description: 'Giảm 10%', status: 'Hoạt động', 
      time: '2024-11-01 đến 2024-12-01', quantity: 100, discount: '10%', minAmount: 50000 
    },
    { 
      id: 2, code: 'DISCOUNT20', description: 'Giảm 20%', status: 'Hết hạn', 
      time: '2024-10-01 đến 2024-11-01', quantity: 50, discount: '20%', minAmount: 100000 
    },
    { 
      id: 3, code: 'BLACKFRIDAY', description: 'Giảm giá dịp Black Friday', status: 'Hoạt động', 
      time: '2024-11-20 đến 2024-11-30', quantity: 200, discount: '30%', minAmount: 30000 
    },
  ]);
  const [statusFilter, setStatusFilter] = useState('');

  const navigate = useNavigate(); // Hook điều hướng

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCoupons = coupons.filter(
    (coupon) =>
      coupon.code.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === '' || coupon.status === statusFilter)
  );

  const handleCreateCoupon = () => {
    navigate('/add-coupon'); // Điều hướng đến trang thêm mã giảm giá
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Nội dung */}
      <div style={{ padding: '20px', flex: 1 }}>
        {/* Tên và Nút Thêm Mới */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Quản Lý Mã Giảm Giá
          </Typography>
          <Button 
            variant="contained" 
            sx={{ backgroundColor: 'black', color: 'white' }} 
            onClick={handleCreateCoupon} // Nút này mở trang "Thêm Mã Giảm Giá Mới"
          >
            Tạo Mã Giảm Giá Mới
          </Button>
        </Box>

        {/* Bộ lọc */}
        <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '20px' }}>
          <TextField
            label="Tìm kiếm mã giảm giá"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            sx={{ width: '300px' }}
          />
          <TextField
            label="Ngày Bắt Đầu"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{ width: '200px' }}
          />
          <TextField
            label="Ngày Kết Thúc"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{ width: '200px' }}
          />
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            displayEmpty
            sx={{ width: '200px' }}
          >
            <MenuItem value="">Tất cả trạng thái</MenuItem>
            <MenuItem value="Hoạt động">Hoạt động</MenuItem>
            <MenuItem value="Hết hạn">Hết hạn</MenuItem>
          </Select>
          <Button variant="contained" sx={{ backgroundColor: '#4caf50', color: '#fff' }}>
            Xuất Excel
          </Button>
        </Box>

        {/* Bảng danh sách mã giảm giá */}
        <TableContainer component={Paper} sx={{ marginBottom: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">STT</TableCell>
                <TableCell align="center">Mã Giảm Giá</TableCell>
                <TableCell align="center">Mô Tả</TableCell>
                <TableCell align="center">Thời Gian</TableCell>
                <TableCell align="center">Số Lượng</TableCell>
                <TableCell align="center">Mức Giảm</TableCell>
                <TableCell align="center">Số Tiền Tối Thiểu</TableCell>
                <TableCell align="center">Trạng Thái</TableCell>
                <TableCell align="center">Thao Tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCoupons.map((coupon, index) => (
                <TableRow key={coupon.id}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{coupon.code}</TableCell>
                  <TableCell align="center">{coupon.description}</TableCell>
                  <TableCell align="center">{coupon.time}</TableCell>
                  <TableCell align="center">{coupon.quantity}</TableCell>
                  <TableCell align="center">{coupon.discount}</TableCell>
                  <TableCell align="center">{coupon.minAmount.toLocaleString()}</TableCell>
                  <TableCell align="center">{coupon.status}</TableCell>
                  <TableCell align="center">
                    <Button variant="outlined" color="primary">Chỉnh Sửa</Button>
                    <Button variant="outlined" color="error" sx={{ ml: 1 }}>Xóa</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
