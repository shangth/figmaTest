import './App.css';

function App() {
  const handleButtonClick = () => {
    console.log('开启新一轮 click');
  };

  return (
    <div className="App">
      <div className="reward-card">
        <div className="card-container">
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62c06eef-6737-4d33-9f0c-fa74ad26de62" 
            alt="background" 
            className="background-image"
          />
          <div className="content">
            <div className="header">
              <div className="title">「拍作品赚金币」收益</div>
              <div className="subtitle">token - 感谢你6月8日-6月9日的努力</div>
            </div>
            <div className="coin-display">
              <div className="plus-sign">+</div>
              <div className="coin-number">704</div>
              <div className="coin-text">金币</div>
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f33cddea-e082-4820-8d99-dd74253b6181" 
                alt="decoration" 
                className="decoration-image"
              />
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/609ab651-9667-470b-9ee7-63aa8a416775" 
                alt="coin icon" 
                className="coin-icon"
              />
              <div className="reward-item publish-reward">
                <div className="reward-amount">
                  <span className="plus">+</span>
                  <span className="number">300</span>
                  <span className="unit">金币</span>
                </div>
                <div className="reward-label">发布奖励</div>
              </div>
              <div className="reward-item play-reward">
                <div className="reward-amount">
                  <span className="plus">+</span>
                  <span className="number">100</span>
                  <span className="unit">金币</span>
                </div>
                <div className="reward-label">播放奖励</div>
              </div>
              <div className="reward-item like-reward">
                <div className="reward-amount">
                  <span className="plus">+</span>
                  <span className="number">276</span>
                  <span className="unit">金币</span>
                </div>
                <div className="reward-label">点赞奖励</div>
              </div>
              <div className="reward-item comment-reward">
                <div className="reward-amount">
                  <span className="plus">+</span>
                  <span className="number">28</span>
                  <span className="unit">金币</span>
                </div>
                <div className="reward-label">评论奖励</div>
              </div>
            </div>
            <button className="action-button" onClick={handleButtonClick}>
              开启新一轮
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
