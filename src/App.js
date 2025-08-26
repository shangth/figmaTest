import './App.css';

// 状态栏组件
function StatusBar() {
  return (
    <div className="status-bar">
      <div className="status-left">
        <span className="time">9:41</span>
        <div className="location-icon">📍</div>
      </div>
      <div className="status-center"></div>
      <div className="status-right">
        <div className="signal-bars">
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
          <div className="bar bar-4"></div>
        </div>
        <div className="wifi-icon">📶</div>
        <div className="battery">
          <div className="battery-level"></div>
        </div>
      </div>
    </div>
  );
}

// 头部导航组件
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <button className="back-btn">
          <span className="back-icon">←</span>
        </button>
      </div>
      <div className="header-center">
        <div className="brand-logo">快手黑钻买家</div>
      </div>
      <div className="header-right">
        <button className="rule-btn">
          <span className="btn-text">规则</span>
          <span className="btn-icon">📋</span>
        </button>
        <button className="service-btn">
          <span className="btn-text">客服</span>
          <span className="btn-icon">💬</span>
        </button>
      </div>
    </div>
  );
}

// 用户信息卡片组件
function UserCard() {
  return (
    <div className="user-card">
      <div className="card-background">
        <div className="security-badge">
          <span className="security-icon">🛡️</span>
          <span className="security-text">特权生效中·服务您的购物之旅</span>
        </div>
        <div className="privilege-badge">
          <div className="badge-icon">💎</div>
          <div className="badge-text">
            <span className="privilege-rank">快手黑钻买家</span>
          </div>
        </div>
        <div className="user-info">
          <div className="avatar"></div>
          <div className="user-details">
            <div className="username">美羊羊</div>
            <div className="validity">特权有效期至：2024.08.31</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 权益卡片组件
function BenefitCard({ icon, title, description, badge, hasArrow = true }) {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">
        <span>{icon}</span>
      </div>
      <div className="benefit-content">
        <div className="benefit-title">{title}</div>
        <div className="benefit-description">{description}</div>
        {badge && (
          <div className="benefit-badge">
            <span>{badge}</span>
          </div>
        )}
      </div>
      {hasArrow && (
        <div className="benefit-arrow">
          <span>→</span>
        </div>
      )}
    </div>
  );
}

// 权益列表组件
function BenefitsList() {
  const benefits = [
    {
      icon: "📦",
      title: "退货包运费",
      description: "每月6次，上门取件、到站寄使用均可使用",
      badge: "本月剩余1次"
    },
    {
      icon: "⚡",
      title: "极速退款",
      description: "每月不限次数享受极速退款权益"
    },
    {
      icon: "👤",
      title: "专属客服",
      description: "优先解答疑问，1v1全程跟进快速处理"
    },
    {
      icon: "🎁",
      title: "优质取件",
      description: "平台补贴，退货取件服务升级"
    },
    {
      icon: "🏆",
      title: "专属勋章",
      description: "自动开启，彰显您的尊贵身份"
    }
  ];

  return (
    <div className="benefits-list">
      <h2 className="benefits-title">尊享5大黑钻特权</h2>
      {benefits.map((benefit, index) => (
        <BenefitCard
          key={index}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
          badge={benefit.badge}
        />
      ))}
    </div>
  );
}

// 底部组件
function Footer() {
  return (
    <div className="footer">
      <div className="brand-thanks">快手感谢有你</div>
      <div className="home-indicator"></div>
    </div>
  );
}

// 主应用组件
function App() {
  return (
    <div className="App">
      <div className="mobile-container">
        <StatusBar />
        <Header />
        <div className="main-content">
          <UserCard />
          <BenefitsList />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
