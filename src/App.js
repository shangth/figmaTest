import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* 顶部导航栏 */}
      <div className="top-nav">
        <div className="nav-icon left">
          <div className="rule-icon">集星规则</div>
        </div>
      </div>

      {/* 主视觉头图 */}
      <div className="main-header">
        <div className="header-bg">
          <div className="star-animation">
            <div className="star-progress">100%</div>
          </div>
          <div className="header-content">
            <h1>集星兑豪礼 钻石主播得额外流量</h1>
            <div className="sign-up-btn">
              <span>去签约</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
      </div>

      {/* 奖励兑换区域 */}
      <div className="rewards-section">
        <div className="reward-grid">
          <div className="reward-card available">
            <div className="reward-icon">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjRkY5NjAwIi8+PC9zdmc+" alt="直播流量" />
            </div>
            <div className="reward-name">名称名称名称</div>
            <div className="reward-price">
              <span className="amount">430</span>
              <span className="star">★</span>
              <span className="action">兑换</span>
            </div>
          </div>

          <div className="reward-card available">
            <div className="reward-icon">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjRkY5NjAwIi8+PC9zdmc+" alt="涨粉礼包" />
            </div>
            <div className="reward-name">名称名称名称</div>
            <div className="reward-price">
              <span className="amount">255</span>
              <span className="star">★</span>
              <span className="action">兑换</span>
            </div>
          </div>

          <div className="reward-card unavailable">
            <div className="reward-icon">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjNjY2IiB2PSIuNyIvPjwvc3ZnPg==" alt="定制礼物" />
            </div>
            <div className="reward-name">春季之星礼物</div>
            <div className="reward-price disabled">
              <span className="amount">40</span>
              <span className="star">★</span>
              <span className="action">兑换</span>
            </div>
          </div>

          <div className="reward-card unavailable">
            <div className="reward-icon">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjNjY2IiBvcGFjaXR5PSIuNyIvPjwvc3ZnPg==" alt="加成" />
            </div>
            <div className="reward-name">1%加成</div>
            <div className="reward-price disabled">
              <span className="amount">40</span>
              <span className="star">★</span>
              <span className="action">兑换</span>
            </div>
          </div>
        </div>
      </div>

      {/* 红包区域 */}
      <div className="red-packet-section">
        <div className="red-packet red">
          <div className="packet-bg"></div>
          <div className="packet-text">开</div>
          <button className="packet-btn">立即抢</button>
        </div>
        <div className="red-packet gold">
          <div className="packet-bg"></div>
          <div className="packet-text">开</div>
          <button className="packet-btn">立即抢</button>
        </div>
        <div className="red-packet special">
          <div className="packet-bg">
            <div className="special-text">盛典<br/>状元</div>
          </div>
          <button className="packet-btn special">领复活卡</button>
        </div>
      </div>

      {/* 星星进度信息 */}
      <div className="star-info">
        <span className="star-count">600</span>
        <span className="info-text">/100星领取</span>
        <span className="no-consume">不消耗</span>
        <span className="star-icon">★</span>
      </div>

      {/* 统计信息tab */}
      <div className="stats-tab">
        <div className="tab-bg">
          <div className="user-avatar"></div>
          <div className="tab-content">
            <div className="star-total">
              <span>累计集星：290</span>
              <span className="arrow">→</span>
            </div>
            <div className="current-stats">
              <span>当前拥有:</span>
              <div className="stat-item">
                <span>150</span>
                <span className="gold-star">★</span>
              </div>
              <div className="stat-item">
                <span>140</span>
                <span className="purple-star">★</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-icons">
          <div className="icon-item">
            <div className="icon">兑奖记录</div>
          </div>
          <div className="icon-item">
            <div className="icon">赛事荣誉</div>
          </div>
        </div>
      </div>

      {/* 任务模块 */}
      <div className="tasks-section">
        <div className="main-task">
          <div className="task-star">45%</div>
          <div className="task-info">
            <div className="task-title">累计2332/50000盛典值</div>
            <div className="task-time">
              <span className="timer-icon">⏰</span>
              <span>02:59</span>
            </div>
            <div className="task-reward">
              可获得 <span className="gold-star">★</span> + 5万流量
            </div>
          </div>
        </div>

        <div className="team-section">
          <div className="team-info">
            <div className="team-title">分享邀请码 邀请好友组队</div>
            <div className="invite-code">
              <span>KSTZ1036</span>
              <button className="copy-btn">📋 复制</button>
            </div>
            <div className="team-reward">
              组队后每日双方各完成1次盛典值挑战额外得1 <span className="gold-star">★</span>
            </div>
          </div>
          <button className="join-team-btn">加入队伍</button>
        </div>

        <div className="challenge-tip">
          再挑战x轮可集 <span className="purple-star">★</span>
        </div>

        <div className="mini-tasks">
          <div className="mini-task">
            <div className="task-desc">再得23332评论</div>
            <div className="task-reward">
              可获得 1 <span className="gold-star">★</span>
            </div>
          </div>
          <div className="mini-task">
            <div className="task-desc">再得233332点赞</div>
            <div className="task-reward">
              可获得 1 <span className="gold-star">★</span>
            </div>
          </div>
          <div className="mini-task">
            <div className="task-desc">开播任务 挑战成功</div>
            <div className="task-reward">
              可获得 1 <span className="gold-star">★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
