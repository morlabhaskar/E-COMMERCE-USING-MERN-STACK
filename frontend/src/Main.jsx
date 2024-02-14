import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import { FloatButton } from 'antd';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <div style={{
  //   height: '300vh'
  // }}>
  <React.StrictMode>
    <App />
    <FloatButton.BackTop />
  </React.StrictMode>,
  // </div>
)
