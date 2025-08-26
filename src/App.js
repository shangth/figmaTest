import React from 'react';
import './App.css';
import OrderCard from './components/OrderCard';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1>订单详情</h1>
        <OrderCard />
      </div>
    </div>
  );
}

export default App;
