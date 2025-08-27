import './App.css';

function App() {
  return (
    <div className="App">
      <div className="notification-card">
        <div className="icon-container">
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/307471c2-7a4c-49ce-83c8-ed10dfaadeb3" 
            alt="Cash icon" 
            className="cash-icon"
          />
        </div>
        <div className="content-container">
          <div className="title">现金打款已到账</div>
          <div className="description">已入账1.2元，点击立即领取</div>
        </div>
        <div className="action-container">
          <div className="badge-container">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73fc8886-6205-4a9a-9b11-f11cf9307f96" 
              alt="Badge background" 
              className="badge-bg"
            />
            <span className="badge-number">1</span>
          </div>
          <div className="arrow-container">
            <div className="arrow-wrapper">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d90da059-59a3-4354-9970-b3edefe78700" 
                alt="Arrow" 
                className="arrow-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
