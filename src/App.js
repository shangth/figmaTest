import './App.css';

function App() {
  return (
    <div className="mobile-container">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-content">
          <div className="time">9:41</div>
          <div className="status-icons">
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83df6319-fce7-4b3b-be69-35cb8d449dbc" alt="signal" className="signal-icon" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07927e21-f7c0-436d-a8cd-61d6f30ad0b6" alt="wifi" className="wifi-icon" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a2538d2-9c77-42d8-9d2a-7feba5bcf1ad" alt="battery" className="battery-icon" />
          </div>
        </div>
      </div>

      {/* Search Header */}
      <div className="search-header">
        <div className="search-content">
          <div className="back-button">
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce343dff-8c3c-4790-a4cc-f6ddb6c94603" alt="back" className="back-icon" />
          </div>
          <div className="search-bar">
            <span className="search-text">一点点</span>
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2af38ce6-3b79-4ba6-a966-0399db96a233" alt="clear" className="clear-icon" />
          </div>
          <div className="search-button">
            <span>搜索</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
        <div className="tab-item">综合</div>
        <div className="tab-item">智能</div>
        <div className="tab-item active">
          <span>团购</span>
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea7d2b33-7ab7-4a7a-9516-ed7ec06a2a87" alt="indicator" className="tab-indicator" />
        </div>
        <div className="tab-item">视频</div>
        <div className="tab-item">用户</div>
        <div className="tab-item">商品</div>
        <div className="tab-item">直播</div>
      </div>

      {/* Content Area */}
      <div className="content-area">
        {/* Section Title */}
        <div className="section-title">
          <span>附近优惠推荐</span>
        </div>

        {/* Store Card 1 */}
        <div className="store-card">
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c6fd330-545f-465d-82c3-688c3bc3950b" alt="store" className="store-image" />
          <div className="store-info">
            <div className="store-name">沪上阿姨（西二旗店）</div>
            <div className="store-rating">
              <span className="rating-badge">10人看过</span>
            </div>
            <div className="store-meta">
              <span>饮品</span>
              <span>海淀区</span>
            </div>
          </div>
          <div className="store-distance">3.3km</div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {/* Live Stream Card */}
          <div className="product-card live-card">
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2c4b275-09ac-4ecd-91b9-b997bcacfec7" alt="live stream" className="product-image" />
            <div className="live-badge">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f248ea84-3fb6-473c-82f6-293c0ec0372f" alt="live icon" className="live-icon" />
              <span>直播团购</span>
            </div>
            <div className="live-title">二姐带你逛吃直播</div>
          </div>

          {/* Product Card 1 */}
          <div className="product-card">
            <div className="product-image-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30863c08-b005-426d-8772-c5d08747a872" alt="product" className="product-image" />
              <div className="sales-badge">已抢259</div>
            </div>
            <div className="product-info">
              <div className="product-title">杨枝甘露双倍芒果</div>
              <div className="product-subtitle">西柚粒冰沙</div>
              <div className="product-price">
                <span className="price-symbol">¥</span>
                <span className="price">18.9</span>
                <span className="original-price">¥29</span>
                <span className="discount-badge">4.5折</span>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="product-card">
            <div className="product-image-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b629303a-9dad-4eed-983c-c56b8e11273d" alt="product" className="product-image" />
              <div className="sales-badge">已抢259</div>
            </div>
            <div className="product-info">
              <div className="product-title">珍珠奶茶波波超大</div>
              <div className="product-subtitle">杯美味好喝</div>
              <div className="product-price">
                <span className="price-symbol">¥</span>
                <span className="price">18.9</span>
                <span className="original-price">¥29</span>
                <span className="discount-badge">4.5折</span>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="product-card">
            <div className="product-image-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46afbbd6-fbea-4f54-9869-abd75fb7884b" alt="product" className="product-image" />
              <div className="sales-badge">已售259</div>
            </div>
            <div className="product-info">
              <div className="hot-badge">
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95d20687-b11e-46dc-8c56-859eaeaf9f3f" alt="hot" className="hot-icon" />
                <span>爆款</span>
              </div>
              <div className="product-title">西梅噗噗通畅</div>
              <div className="product-subtitle">果肉多多专享杯</div>
              <div className="product-price">
                <span className="price-symbol">¥</span>
                <span className="price">14.9</span>
                <span className="original-price">¥29</span>
                <span className="discount-badge">4.3折</span>
              </div>
            </div>
          </div>
        </div>

        {/* Store Card 2 */}
        <div className="store-card">
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5507e9a8-70d0-477f-b0c7-6d076e2d55c8" alt="store" className="store-image" />
          <div className="store-info">
            <div className="store-name">沪上阿姨（上地店）</div>
            <div className="store-rating">
              <span className="rating-badge">暂无评价</span>
            </div>
            <div className="store-meta">
              <span>饮品</span>
              <span>海淀区</span>
            </div>
          </div>
          <div className="store-distance">3.3km</div>
        </div>

        {/* Second Product Grid */}
        <div className="product-grid">
          {/* Product Card 4 */}
          <div className="product-card">
            <div className="product-image-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96e82a76-363c-40db-b753-8f5217546ee5" alt="product" className="product-image" />
              <div className="sales-badge">已抢259</div>
            </div>
            <div className="product-info">
              <div className="hot-badge">
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6bd41373-8ed6-48ee-9164-e42ad1c0d99d" alt="hot" className="hot-icon" />
                <span>爆款</span>
              </div>
              <div className="product-title">西梅噗噗通畅</div>
              <div className="product-subtitle">果肉多多专享杯</div>
              <div className="product-price">
                <span className="price-symbol">¥</span>
                <span className="price">14.9</span>
                <span className="original-price">¥29</span>
                <span className="discount-badge">4.3折</span>
              </div>
            </div>
          </div>

          {/* Product Card 5 */}
          <div className="product-card">
            <div className="product-image-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78ba46db-8910-412d-b075-dbbce0c8b719" alt="product" className="product-image" />
              <div className="sales-badge">已抢259</div>
            </div>
            <div className="product-info">
              <div className="product-title">杨枝甘露双倍芒果</div>
              <div className="product-subtitle">西柚粒冰沙</div>
              <div className="product-price">
                <span className="price-symbol">¥</span>
                <span className="price">18.9</span>
                <span className="original-price">¥29</span>
                <span className="discount-badge">4.5折</span>
              </div>
            </div>
          </div>

          {/* Product Card 6 */}
          <div className="product-card">
            <div className="product-image-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3a33805-52e7-42ac-82d9-85a0fd3e368c" alt="product" className="product-image" />
              <div className="sales-badge">已抢259</div>
            </div>
            <div className="product-info">
              <div className="product-title">珍珠奶茶波波超大</div>
              <div className="product-subtitle">杯美味好喝</div>
              <div className="product-price">
                <span className="price-symbol">¥</span>
                <span className="price">18.9</span>
                <span className="original-price">¥29</span>
                <span className="discount-badge">4.5折</span>
              </div>
            </div>
          </div>

          {/* Product Card 7 */}
          <div className="product-card large-product">
            <div className="product-image-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d913fac-fd18-4554-9f21-89f463447ce8" alt="product" className="product-image" />
              <div className="sales-badge">已售259</div>
            </div>
            <div className="product-info large-info">
              <div className="subsidy-badge kuaishou">快手补贴</div>
              <div className="product-title large-title">老友记拔草双人套餐</div>
              <div className="product-price large-price">
                <span className="price-symbol">¥</span>
                <span className="price">166.9</span>
                <span className="original-price">¥220</span>
              </div>
            </div>
          </div>
        </div>

        {/* Store Card 3 */}
        <div className="store-card">
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c409632-fae4-410c-bd48-f9c415052715" alt="store" className="store-image" />
          <div className="store-info">
            <div className="store-name">一点点（辉煌国际店）</div>
            <div className="store-rating">
              <div className="ranking-badge">
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b7ccedc-f811-499e-9bd6-24e725a02094" alt="ranking" className="ranking-icon" />
                <span>北京饮品畅销榜 TOP2</span>
              </div>
              <span className="rating-badge">50人看过</span>
            </div>
            <div className="store-meta">
              <span>饮品</span>
              <span>海淀区</span>
              <span>¥17/人</span>
            </div>
          </div>
          <div className="store-distance">3.9km</div>
        </div>

        {/* Third Product Grid */}
        <div className="product-grid">
          {/* Product Card 8 */}
          <div className="product-card">
            <div className="product-image-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/166bd30f-c336-484b-911a-c7889964dfc8" alt="product" className="product-image" />
              <div className="sales-badge">已抢259</div>
              <div className="platform-badge kuaishou">快手更低价</div>
            </div>
            <div className="product-info">
              <div className="new-badge">新品</div>
              <div className="product-title">草莓啵啵奶茶</div>
              <div className="product-subtitle">超多料大杯分享</div>
              <div className="product-price">
                <span className="price-symbol">¥</span>
                <span className="price">19</span>
                <span className="original-price">¥22</span>
                <span className="discount-badge">6.7折</span>
              </div>
            </div>
          </div>

          {/* Product Card 9 */}
          <div className="product-card">
            <div className="product-image-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd3bb9c9-f165-433b-b89c-df937a8c3b03" alt="product" className="product-image" />
              <div className="sales-badge">已抢259</div>
              <div className="platform-badge meituan">美团补贴</div>
            </div>
            <div className="product-info">
              <div className="subsidy-badge kuaishou">快手补贴</div>
              <div className="product-title">老友记拔Q草</div>
              <div className="product-subtitle">老友记拔草</div>
              <div className="product-price">
                <span className="price-symbol">¥</span>
                <span className="price">166.9</span>
              </div>
            </div>
          </div>

          {/* Product Card 10 */}
          <div className="product-card">
            <div className="product-image-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b8f9181-15fc-4b3e-a6d6-b95562acdc31" alt="product" className="product-image" />
              <div className="sales-badge">已抢259</div>
              <div className="platform-badge meituan">美团补贴</div>
            </div>
            <div className="product-info">
              <div className="product-title">杨枝甘露双倍芒果</div>
              <div className="product-subtitle">西柚粒冰沙</div>
              <div className="product-price">
                <span className="price-symbol">¥</span>
                <span className="price">18.9</span>
                <span className="original-price">¥29</span>
                <span className="discount-badge">4.5折</span>
              </div>
            </div>
          </div>

          {/* Product Card 11 */}
          <div className="product-card">
            <div className="product-image-container">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae16383e-0455-42f7-8d01-41fe7b9f1770" alt="product" className="product-image" />
              <div className="sales-badge">已售259</div>
            </div>
            <div className="product-info">
              <div className="hot-badge">
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a44b9cc-cb45-4292-b676-6e70e3b891c4" alt="hot" className="hot-icon" />
                <span>爆款</span>
              </div>
              <div className="product-title">周末专享乌龙</div>
              <div className="product-subtitle">茶饮不含咖啡因</div>
              <div className="product-price">
                <span className="price-symbol">¥</span>
                <span className="price">14.9</span>
                <span className="original-price">¥29</span>
                <span className="discount-badge">4.3折</span>
              </div>
            </div>
          </div>
        </div>

        {/* Store Card 4 */}
        <div className="store-card">
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b0d5543-1c46-44cc-800c-db1da6686f75" alt="store" className="store-image" />
          <div className="store-info">
            <div className="store-name">一点点（辉煌国际店）</div>
            <div className="store-rating">
              <span className="rating-badge purchased">购买过</span>
              <span className="rating-badge">消费人数2K+</span>
              <span className="rating-badge">"太好喝啦"</span>
            </div>
            <div className="store-meta">
              <span>饮品</span>
              <span>海淀区</span>
              <span>¥17/人</span>
            </div>
          </div>
          <div className="store-distance">3.9km</div>
        </div>

        {/* Collapse Footer */}
        <div className="collapse-footer">
          <div className="collapse-content">
            <span>已折叠12个较远商家</span>
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e0722d7-c1b1-4753-a521-61c3f6831709" alt="arrow" className="arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
