import React from 'react';
import { AppBar, Toolbar, Box, TextField, Button, IconButton, Typography } from '@mui/material';
import SearchIcon from '../assets/images/Logo-Search.png';
import HomeIcon from '../assets/images/Logo-Home.png';
import PersonIcon from '../assets/images/Logo-user.png';
import NotificationsIcon from '../assets/images/Logo-ThongBao.png';
import ShoppingCartIcon from '../assets/images/Logo-GioHang.png';

const Header = () => {
  return (
    <AppBar position="sticky" color="default" sx={{ boxShadow: 'none', borderBottom: '1px solid #ccc' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo Section */}
        <Box display="flex" alignItems="center">
          <Box sx={{ backgroundColor: '#000', color: '#fff', borderRadius: '50%', p: 1, mr: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              %
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            SellSmart Codes
          </Typography>
          <Button
            variant="contained"
            sx={{
              ml: 2,
              backgroundColor: 'black', // Đổi màu nút thành đen
              color: 'white', // Đảm bảo chữ trong nút là màu trắng
            }}
          >
            Select Wallet
          </Button>

        </Box>

        {/* Search Section */}
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1, mx: 4 }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{ width: '100%', maxWidth: 400, mr: 1 }}
          />
          <Button
              variant="contained"
              style={{ backgroundColor: 'black' }} // Đổi màu nút thành đen
              startIcon={
                <img
                  src={SearchIcon}
                  alt="Search"
                  style={{ width: 24, height: 24, filter: 'invert(1)' }} // Thêm filter để làm màu icon trắng
                />
              }
            >
              Search
          </Button>
        </Box>

        {/* Navigation Icons */}
        <Box display="flex" alignItems="center">
          <IconButton>
            <img src={HomeIcon} alt="Home" style={{ width: 24, height: 24 }} />
          </IconButton>
          <Typography sx={{ mx: 1 }}>Trang chủ</Typography>
          <IconButton>
            <img src={PersonIcon} alt="User" style={{ width: 24, height: 24 }} />
          </IconButton>
          <IconButton>
            <img src={NotificationsIcon} alt="Notifications" style={{ width: 24, height: 24 }} />
          </IconButton>
          <IconButton>
            <img src={ShoppingCartIcon} alt="Cart" style={{ width: 24, height: 24 }} />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Footer Links */}
      <Box sx={{ py: 1, textAlign: 'center', borderTop: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
        <Typography variant="body2" sx={{ mx: 2 }} display="inline">
          Trang chủ
        </Typography>
        <Typography variant="body2" sx={{ mx: 2 }} display="inline">
          Cửa hàng
        </Typography>
        <Typography variant="body2" sx={{ mx: 2 }} display="inline">
          Tra cứu hóa đơn
        </Typography>
        <Typography variant="body2" sx={{ mx: 2 }} display="inline">
          Trang
        </Typography>
        <Typography variant="body2" sx={{ mx: 2 }} display="inline">
          Liên hệ
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Header;
