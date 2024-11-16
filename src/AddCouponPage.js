import React, { useState } from 'react';
import { Box, Button, TextField, Select, MenuItem, Typography, Container, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header'; // Giả sử bạn có Header
import Footer from './components/Footer'; // Giả sử bạn có Footer

const AddCouponPage = () => {
  const [newCoupon, setNewCoupon] = useState({
    code: '',
    description: '',
    startDate: '',
    endDate: '',
    quantity: '',
    discount: '',
    minAmount: '',
    status: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewCoupon({ ...newCoupon, [e.target.name]: e.target.value });
  };

  const handleCreateCoupon = () => {
    // Xử lý thêm mã giảm giá vào danh sách (có thể gửi API hoặc thêm vào state)
    console.log(newCoupon);
    // Sau khi tạo mã giảm giá mới, điều hướng về trang quản lý mã giảm giá
    navigate('/home'); // Điều hướng về trang Home hoặc trang cần thiết
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Nội dung trang thêm mới mã giảm giá */}
      <Container sx={{ paddingY: 5, flex: 1 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#333', marginBottom: 4 }}
        >
          Thêm Mã Giảm Giá Mới
        </Typography>

        <Paper
          sx={{
            padding: 4,
            maxWidth: 600,
            margin: '0 auto',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Mã Giảm Giá"
                variant="outlined"
                name="code"
                value={newCoupon.code}
                onChange={handleChange}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mô Tả"
                variant="outlined"
                name="description"
                value={newCoupon.description}
                onChange={handleChange}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Thời Gian Bắt Đầu"
                type="date"
                InputLabelProps={{ shrink: true }}
                name="startDate"
                value={newCoupon.startDate}
                onChange={handleChange}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Thời Gian Kết Thúc"
                type="date"
                InputLabelProps={{ shrink: true }}
                name="endDate"
                value={newCoupon.endDate}
                onChange={handleChange}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Số Lượng"
                variant="outlined"
                name="quantity"
                value={newCoupon.quantity}
                onChange={handleChange}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Mức Giảm"
                variant="outlined"
                name="discount"
                value={newCoupon.discount}
                onChange={handleChange}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Số Tiền Tối Thiểu"
                variant="outlined"
                name="minAmount"
                value={newCoupon.minAmount}
                onChange={handleChange}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                label="Trạng Thái"
                name="status"
                value={newCoupon.status}
                onChange={handleChange}
                fullWidth
                displayEmpty
                sx={{ marginBottom: 2 }}
              >
                <MenuItem value="">Chọn Trạng Thái</MenuItem>
                <MenuItem value="Hoạt động">Hoạt động</MenuItem>
                <MenuItem value="Hết hạn">Hết hạn</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#333', // Màu nền khi hover
                  },
                  width: '100%',
                  padding: '15px',
                }}
                onClick={handleCreateCoupon}
              >
                Thêm Mã Giảm Giá
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AddCouponPage;
