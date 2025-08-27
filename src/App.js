import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Top Stats Grid */}
      <div className="stats-grid">
        {/* 热度值 */}
        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-info">
              <div className="stat-title">热度值</div>
              <div className="stat-numbers">
                <span className="stat-current">2330</span>
                <span className="stat-total">/120000</span>
              </div>
            </div>
            <div className="stat-icon heat-icon">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fbaee2c-c944-468d-b695-043ef769471e" alt="" className="icon-part" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9160093-b1a2-4db7-a84c-2f8eedafbebf" alt="" className="icon-part" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a198e6c8-1864-4d6d-b0d6-d044ebc2746d" alt="" className="icon-main" />
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>

        {/* 完成X次PK */}
        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-info">
              <div className="stat-title">完成X次PK</div>
              <div className="stat-numbers">
                <span className="stat-current">1</span>
                <span className="stat-total">/5次</span>
              </div>
            </div>
            <div className="stat-icon">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab51a8d0-b69d-4a00-82a4-1ffb888b96dd" alt="" className="icon-single" />
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>

        {/* 评论观众数 */}
        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-info">
              <div className="stat-title">评论观众数</div>
              <div className="stat-numbers">
                <span className="stat-current">1</span>
                <span className="stat-total">/5人</span>
              </div>
            </div>
            <div className="stat-icon audience-icon">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2eeeb96-3d19-45b4-8f3f-01ef114b9901" alt="" className="icon-bg" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf50b12a-cbf4-4fd9-be98-6d4e1406484e" alt="" className="icon-overlay" />
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>

        {/* 直播时长 */}
        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-info">
              <div className="stat-title">直播时长</div>
              <div className="stat-numbers">
                <span className="stat-current">2</span>
                <span className="stat-total">/5分钟</span>
              </div>
            </div>
            <div className="stat-icon duration-icon">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91b0778b-3db8-48b0-9013-ab7c5f47b541" alt="" className="icon-top" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efd4635b-93ed-4c8e-ac0e-a4e54f73c917" alt="" className="icon-bottom" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f5e0bdd-502a-488d-a99e-4f54e74e992f" alt="" className="icon-middle" />
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>

      {/* Full Width Stats */}
      <div className="full-width-stats">
        {/* 热度值 */}
        <div className="full-stat-item">
          <div className="full-stat-content">
            <div className="full-stat-title">热度值</div>
            <div className="full-stat-numbers">
              <span className="full-stat-current">2330</span>
              <span className="full-stat-total">/12000</span>
            </div>
            <div className="full-progress-bar">
              <div className="full-progress-fill"></div>
            </div>
          </div>
          <div className="full-stat-icon heat-icon">
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cf699b1-e72c-4a77-ac07-3c2c3ab3bf2c" alt="" className="icon-part" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/413712c7-0d81-4997-83fb-802cf14e95cd" alt="" className="icon-part" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c595c2c-9419-42dd-be01-00ef000bd586" alt="" className="icon-main" />
          </div>
        </div>

        {/* 完成X次PK */}
        <div className="full-stat-item">
          <div className="full-stat-content">
            <div className="full-stat-title">完成X次PK</div>
            <div className="full-stat-numbers">
              <span className="full-stat-current">1</span>
              <span className="full-stat-total">/5次</span>
            </div>
            <div className="full-progress-bar">
              <div className="full-progress-fill"></div>
            </div>
          </div>
          <div className="full-stat-icon">
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99f0e57d-58e2-4515-ab64-865f793bb6e7" alt="" className="icon-single" />
          </div>
        </div>

        {/* 评论观众数 */}
        <div className="full-stat-item">
          <div className="full-stat-content">
            <div className="full-stat-title">评论观众数</div>
            <div className="full-stat-numbers">
              <span className="full-stat-current">1</span>
              <span className="full-stat-total">/5人</span>
            </div>
            <div className="full-progress-bar">
              <div className="full-progress-fill"></div>
            </div>
          </div>
          <div className="full-stat-icon audience-icon">
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11eaccfb-65ed-4047-a54d-417419562599" alt="" className="icon-bg" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bbec508-a9db-4ce2-806c-2223cfdc0a13" alt="" className="icon-overlay" />
          </div>
        </div>
      </div>

      {/* User Rankings */}
      <div className="user-rankings">
        {/* User 1 */}
        <div className="user-item">
          <div className="user-avatar-section">
            <div className="avatar-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7df6b892-3803-44c3-9fd4-4cd3def2a132" alt="" className="avatar-bg" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bddd118-b483-47a6-a1b4-2c35fb56a79c" alt="" className="avatar-main" />
              <div className="live-badge">
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75a4507a-a122-453e-a3f2-6b58d20a47c5" alt="" className="badge-bg" />
                <span className="badge-text">直播中</span>
              </div>
              <div className="status-icon">
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c5fff52-7a3c-4058-82e7-88f5a9aeefe9" alt="" className="status-bg" />
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f05be1b-49ae-47d2-bb5b-4e0b0b1dd189" alt="" className="status-icon-inner" />
              </div>
            </div>
            <div className="user-info">
              <div className="user-name">这是个昵称</div>
              <div className="user-stats">
                <span className="stats-label">火力值：</span>
                <span className="stats-value">1344555</span>
              </div>
            </div>
          </div>
          <div className="user-metrics">
            <div className="metric">
              <div className="metric-value">11111</div>
              <div className="metric-label">基础分</div>
            </div>
            <div className="metric">
              <div className="metric-value">99</div>
              <div className="metric-label">公演分</div>
            </div>
            <div className="metric">
              <div className="metric-value">36</div>
              <div className="metric-label">排名</div>
            </div>
          </div>
        </div>

        {/* User 2 */}
        <div className="user-item">
          <div className="user-avatar-section">
            <div className="avatar-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e149ea78-2491-4eaa-8ab1-891a134fca41" alt="" className="avatar-bg" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae54d853-e4f1-45df-858b-dc54b591bb94" alt="" className="avatar-main" />
              <div className="status-icon">
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8bc5f06-4282-44b9-bd60-3994905011a1" alt="" className="status-bg" />
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a2fa65b-2405-46ac-977f-b92a6e0c61e9" alt="" className="status-icon-inner" />
              </div>
            </div>
            <div className="user-info">
              <div className="user-name">这是个昵称</div>
              <div className="user-stats">
                <span className="stats-label">火力值：</span>
                <span className="stats-value">1344555</span>
              </div>
            </div>
          </div>
          <div className="user-metrics">
            <div className="metric">
              <div className="metric-value">11111</div>
              <div className="metric-label">基础分</div>
            </div>
            <div className="metric">
              <div className="metric-value">99</div>
              <div className="metric-label">公演分</div>
            </div>
            <div className="metric">
              <div className="metric-value">36</div>
              <div className="metric-label">排名</div>
            </div>
          </div>
        </div>

        {/* User 3 */}
        <div className="user-item">
          <div className="user-avatar-section">
            <div className="avatar-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5b15d71-309e-46e8-a0b9-1dfea027b764" alt="" className="avatar-bg" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1dc6fbfc-5a1b-4317-b059-757a8cbec9d8" alt="" className="avatar-main" />
              <div className="status-icon">
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ad9d9e7-62eb-483b-9a80-661ef8769d10" alt="" className="status-bg" />
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b65531e9-6f9a-4ea0-bc3c-69fd724d54c4" alt="" className="status-icon-inner" />
              </div>
            </div>
            <div className="user-info">
              <div className="user-name">这是个昵称</div>
              <div className="user-stats">
                <span className="stats-label">火力值：</span>
                <span className="stats-value">1344555</span>
              </div>
            </div>
          </div>
          <div className="user-metrics">
            <div className="metric">
              <div className="metric-value">11111</div>
              <div className="metric-label">基础分</div>
            </div>
            <div className="metric">
              <div className="metric-value">99</div>
              <div className="metric-label">公演分</div>
            </div>
            <div className="metric">
              <div className="metric-value">36</div>
              <div className="metric-label">排名</div>
            </div>
          </div>
        </div>

        {/* User 4 */}
        <div className="user-item">
          <div className="user-avatar-section">
            <div className="avatar-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86b21d74-ea8e-4523-be19-4b88ce76127b" alt="" className="avatar-bg" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16075cbf-d3da-40ae-bc8f-b4aef7bd57e8" alt="" className="avatar-main" />
              <div className="status-icon">
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0674c984-22e0-4538-87e7-950c361a9266" alt="" className="status-bg" />
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bb5d1f2-48b5-4cb5-84fe-f435bc80b067" alt="" className="status-icon-inner" />
              </div>
            </div>
            <div className="user-info">
              <div className="user-name">这是个昵称</div>
              <div className="user-stats">
                <span className="stats-label">火力值：</span>
                <span className="stats-value">1344555</span>
              </div>
            </div>
          </div>
          <div className="user-metrics">
            <div className="metric">
              <div className="metric-value">11111</div>
              <div className="metric-label">基础分</div>
            </div>
            <div className="metric">
              <div className="metric-value">99</div>
              <div className="metric-label">公演分</div>
            </div>
            <div className="metric">
              <div className="metric-value">36</div>
              <div className="metric-label">排名</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;