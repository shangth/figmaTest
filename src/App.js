import './App.css';

function App() {
  const handleButtonClick = (buttonText) => {
    console.log(buttonText + " click");
  };

  return (
    <div className="App">
      <div className="vote-card">
        {/* 主要内容区域 */}
        <div className="main-content">
          {/* 背景图片 */}
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e97e333d-bee8-4f12-8881-cbe70a694188" 
            alt="background" 
            className="background-image"
          />
          
          {/* 文本内容 */}
          <div className="text-content">
            <div className="title">唐薇今日定榜榜值能否突破100万?</div>
            <div className="subtitle">猜对即可瓜分总奖池</div>
          </div>

          {/* 投票按钮区域 */}
          <div className="vote-buttons">
            {/* 能按钮 */}
            <div className="vote-option left">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c12c368-639f-4381-a746-353c0f19ebf9" 
                alt="能按钮背景" 
                className="button-bg"
              />
              <div className="button-content" onClick={() => handleButtonClick("能")}>
                <div className="option-text">能</div>
                <div className="reward-info">
                  <span className="reward-label">回报</span>
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9961eafd-bb7f-400c-b760-f536fa8c8dca" 
                    alt="钻石图标" 
                    className="diamond-icon"
                  />
                  <span className="reward-value">1.19</span>
                  <span className="reward-unit">倍</span>
                </div>
              </div>
            </div>

            {/* VS图标 */}
            <div className="vs-icon">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b967f37-525a-4448-87d9-383f8793e0f6" 
                alt="VS图标" 
              />
            </div>

            {/* 不能按钮 */}
            <div className="vote-option right">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9eae1ad7-cb25-4695-8aa1-de4d0c727ecb" 
                alt="不能按钮背景" 
                className="button-bg"
              />
              <div className="button-content" onClick={() => handleButtonClick("不能")}>
                <div className="option-text">不能</div>
                <div className="reward-info">
                  <span className="reward-label">回报</span>
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48834ad1-6595-4eb8-9559-58718cd66e63" 
                    alt="钻石图标" 
                    className="diamond-icon"
                  />
                  <span className="reward-value">6.22</span>
                  <span className="reward-unit">倍</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部评论区域 */}
        <div className="comment-section">
          {/* 背景图片 */}
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f91653d0-2179-4d85-95c8-2671af8318f9" 
            alt="评论区背景" 
            className="comment-bg"
          />
          
          <div className="comment-content">
            <div className="comment-left">
              <div className="hot-tag">热评</div>
              <div className="user-info">
                <div className="avatar-container">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1446a864-8049-4958-8ea3-33f6b0b1bcfa" 
                    alt="头像背景" 
                    className="avatar-bg"
                  />
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0fa865e-9e94-4856-bd89-d1852bebdf6c" 
                    alt="用户头像" 
                    className="avatar"
                  />
                </div>
                <div className="user-comment">
                  <span className="username">用户昵称：</span>
                  <span className="comment-text">你看看我没错…</span>
                </div>
              </div>
            </div>
            
            <div className="comment-right">
              <div className="like-info">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b78d1187-726b-4659-bd4e-a8fb937be3ac" 
                  alt="点赞图标" 
                  className="like-icon"
                />
                <span className="like-count">426</span>
              </div>
              <div className="join-discussion">
                <span className="join-text">参与讨论</span>
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e050f03a-b06f-4e08-a4ed-5a093e62e6c0" 
                  alt="右箭头" 
                  className="arrow-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
