import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <img 
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8933f95-49fe-418f-a58e-797dab7a967a" 
          alt="Header background"
          className="header-bg"
        />
        <div className="header-content">
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e596accb-cd06-4cfb-8e54-3e7629abc3ae" 
            alt="Menu"
            className="menu-icon"
          />
          <div className="nav-tabs">
            <div className="nav-tab active">
              <span>商城</span>
              <div className="tab-indicator"></div>
            </div>
            <div className="nav-tab">
              <span>关注</span>
            </div>
            <div className="nav-tab">
              <span>发现</span>
            </div>
            <div className="nav-tab">
              <span>同城</span>
            </div>
            <div className="nav-tab">
              <span>直播</span>
            </div>
          </div>
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7c18535-d3e6-4a1b-86c0-89267db9cb70" 
            alt="Profile"
            className="profile-icon"
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="search-content">
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b586ab08-96b4-4b6c-88c7-6fb78bf96be2" 
            alt="Search"
            className="search-icon"
          />
          <span>女士外套冬季</span>
        </div>
        <div className="search-button">
          <span>搜索</span>
        </div>
      </div>

      {/* Banner */}
      <img 
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9860ae3-57c3-406a-9f68-f78430a48843" 
        alt="Banner"
        className="banner"
      />

      {/* Navigation Menu */}
      <div className="nav-menu">
        <div className="nav-item">
          <div className="nav-icon-container">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/926476a8-4bc1-4f64-9315-a7edafb6eb36" 
              alt="Order icon"
              className="nav-icon"
            />
          </div>
          <span>我的订单</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon-container">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48ac6b46-b4b0-4e66-8735-794cba7daa01" 
              alt="VIP icon"
              className="nav-icon"
            />
          </div>
          <span>黑钻买家</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon-container">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/518985ac-68a3-4c3d-bf25-04671e178372" 
              alt="Bargain icon"
              className="nav-icon"
            />
            <span className="nav-text-overlay">砍</span>
          </div>
          <span>砍价购</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon-container">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1b5e60e-8837-4f5b-af43-1ab33ae9a939" 
              alt="Cart icon"
              className="nav-icon"
            />
          </div>
          <span>购物车</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon-container">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc0dde69-502c-4789-ace0-8b9a47d3da2b" 
              alt="Live icon"
              className="nav-icon"
            />
            <span className="nav-text-overlay">爆</span>
          </div>
          <span>直播爆款</span>
        </div>
        <div className="nav-progress">
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1a69c45-1468-4f61-9acf-78c0003cf16f" 
            alt="Progress"
            className="progress-bar"
          />
        </div>
      </div>

      {/* Brand Section */}
      <div className="brand-section">
        <div className="brand-header">
          <div className="brand-icon">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e2906ef-6abd-4865-9349-9f6a51b22dda" 
              alt="Brand icon"
            />
          </div>
          <div className="brand-info">
            <h3>大牌大补</h3>
            <span>正品保障</span>
          </div>
        </div>
        <div className="brand-products">
          <div className="brand-product">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb39b8a0-5cd3-4732-a6d4-ce6a279bfee8" 
              alt="Product 1"
              className="product-image"
            />
            <div className="product-tag">砍价抄底</div>
            <div className="product-price">¥224</div>
          </div>
          <div className="brand-product">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d69a4878-9ea1-4a55-8279-39e17a3a9f33" 
              alt="Product 2"
              className="product-image"
            />
            <div className="product-tag">已补2.5元</div>
            <div className="product-price">¥54.3</div>
          </div>
          <div className="brand-product">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2982d06-086a-41a7-95a1-d0d2c9667f84" 
              alt="Product 3"
              className="product-image"
            />
            <div className="product-tag">已补5元</div>
            <div className="product-price">¥108</div>
          </div>
          <div className="brand-product">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/693fcff7-596f-4fbd-92c9-3b137f4b4b78" 
              alt="Product 4"
              className="product-image"
            />
            <div className="product-tag">已补288元</div>
            <div className="product-price">¥999</div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        <div className="product-column">
          {/* Product 1 */}
          <div className="product-card">
            <div className="product-image-container">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b2bf2eb-2981-48e7-aed8-c522f7fb866c" 
                alt="Coffee cup"
                className="product-main-image"
              />
              <div className="video-badge">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/401f5c46-7959-47ae-b70a-4feea999f1dd" 
                  alt="Play icon"
                  className="play-icon"
                />
                <span>讲解回放</span>
              </div>
            </div>
            <div className="product-info">
              <div className="product-title-row">
                <div className="brand-badges">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/946891e5-d850-47d6-8900-10a253958a2c" 
                    alt="Brand badge"
                    className="brand-badge"
                  />
                  <div className="brand-logo">
                    <img 
                      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/852b4a26-7354-49cc-af0d-51f7169c0e8e" 
                      alt="Brand logo"
                    />
                  </div>
                </div>
                <span className="product-title">咖色咖啡杯【咖</span>
              </div>
              <div className="product-tags">
                <span className="tag red">满9.9减2</span>
                <span className="tag red">好友买过</span>
                <span className="tag gray">破损包退</span>
              </div>
              <div className="product-bottom">
                <div className="price-container">
                  <span className="currency">￥</span>
                  <span className="price-main">128</span>
                  <span className="price-decimal">.</span>
                  <span className="price-cents">88</span>
                </div>
                <span className="sales-count">已售1.5万+件</span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="product-card">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd98454a-710e-4789-a5f6-cdc2dab9c6f2" 
              alt="Product 2"
              className="product-main-image"
            />
            <div className="product-info">
              <div className="product-title-row">
                <div className="brand-badges">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89e0a2f4-7919-438e-a6b1-f8f3aecb8acf" 
                    alt="Brand badge"
                    className="brand-badge"
                  />
                  <div className="brand-logo">
                    <img 
                      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b91104a3-a8f0-4b42-890b-18f084ecd573" 
                      alt="Brand logo"
                    />
                  </div>
                </div>
                <span className="product-title">咖色咖啡杯【咖</span>
              </div>
              <div className="product-tags">
                <span className="tag red">满9.9减2</span>
                <span className="tag red">好友买过</span>
                <span className="tag gray">破损包退</span>
              </div>
              <div className="product-bottom">
                <div className="price-container">
                  <span className="currency">￥</span>
                  <span className="price-main">128</span>
                  <span className="price-decimal">.</span>
                  <span className="price-cents">88</span>
                </div>
                <span className="sales-count">已售1.5万+件</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-column">
          {/* Product 3 */}
          <div className="product-card">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a22aa22-b278-4c90-9450-2d06cd08a464" 
              alt="Product 3"
              className="product-main-image"
            />
            <div className="product-info">
              <div className="product-title-row">
                <div className="flagship-badge">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6bbac83e-5919-4d8c-b1d1-41db9f8fa7c4" 
                    alt="Flagship badge"
                  />
                  <span className="flagship-text">旗舰</span>
                </div>
                <span className="product-title">格子短袖夏日款蓝色百</span>
              </div>
              <div className="product-features">
                <div className="feature-row">
                  <div className="feature-item">
                    <img 
                      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/477540a7-c5eb-4e38-ac7b-fddd65f836f9" 
                      alt="Live icon"
                      className="feature-icon"
                    />
                    <span className="feature-text red">直播同价</span>
                  </div>
                  <div className="feature-item">
                    <img 
                      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee1fa337-6093-4714-8a99-2eb61a250c33" 
                      alt="Recommend icon"
                      className="feature-icon"
                    />
                    <span className="feature-text red">官方推荐</span>
                  </div>
                  <span className="feature-text green">先用后付</span>
                </div>
              </div>
              <div className="product-bottom">
                <div className="price-container">
                  <span className="currency">￥</span>
                  <span className="price-main">86</span>
                  <span className="price-decimal">.</span>
                  <span className="price-cents">8</span>
                </div>
                <span className="sales-count">已售372件</span>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="product-card">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10af31bd-299b-4d6b-be2b-168a7d186388" 
              alt="Product 4"
              className="product-main-image"
            />
            <div className="product-info">
              <div className="product-title-row">
                <span className="product-title">格子短袖夏日款蓝色百搭嗯</span>
              </div>
              <div className="product-tags">
                <span className="tag red">满200减20</span>
                <div className="feature-item">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3dcb4933-24f4-4aac-9b17-f6283444184d" 
                    alt="Recommend icon"
                    className="feature-icon"
                  />
                  <span className="feature-text red">官方推荐</span>
                </div>
                <span className="feature-text green">先用后付</span>
              </div>
              <div className="product-bottom">
                <div className="price-container">
                  <span className="currency">￥</span>
                  <span className="price-main">86</span>
                  <span className="price-decimal">.</span>
                  <span className="price-cents">8</span>
                </div>
                <span className="sales-count gray">已售372件</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="bottom-nav-content">
          <span className="nav-item-text active">首页</span>
          <span className="nav-item-text">精选</span>
          <div className="center-button">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12eaa7a7-c417-4ce2-b5ab-26f30e573194" 
              alt="Center button"
              className="center-icon"
            />
          </div>
          <span className="nav-item-text">消息</span>
          <span className="nav-item-text">我</span>
        </div>
        <div className="home-indicator">
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03ffbf94-eadb-48e0-8c2b-18d24d11e3ef" 
            alt="Home indicator"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
