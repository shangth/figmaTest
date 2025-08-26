import './App.css';
import PushNotification from './components/PushNotification';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <h1>Figma设计稿还原</h1>
        <div className="notification-container">
          <PushNotification />
        </div>
      </div>
    </div>
  );
}

export default App;
