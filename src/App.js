import React from 'react';
import Modal from './components/Modal/index.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '20px'
      }}>
        <Modal />
      </div>
    </div>
  );
}

export default App;
