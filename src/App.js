import './App.css';
import Header from './components/Header';
import GiftPanel from './components/GiftPanel';
import TaskPanel from './components/TaskPanel';
import SubtitleBar from './components/SubtitleBar';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <GiftPanel />
        <TaskPanel />
        <SubtitleBar />
      </div>
    </div>
  );
}

export default App;
