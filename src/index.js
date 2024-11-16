import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';  // Import Router ở cấp độ cao nhất
import App from './App';  // Import ứng dụng của bạn

ReactDOM.render(
  <Router>  {/* Bọc toàn bộ ứng dụng trong Router */}
    <App />
  </Router>,
  document.getElementById('root')
);