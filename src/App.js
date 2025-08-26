import React from 'react';
import './App.css';
import StatusBar from './components/StatusBar';
import SearchHeader from './components/SearchHeader';
import POICard from './components/POICard';
import GroupBuyCard from './components/GroupBuyCard';
import LiveCard from './components/LiveCard';

function App() {
  return (
    <div className="mobile-app">
      <StatusBar />
      <SearchHeader />

      {/* 顶部标签栏 */}
      <div className="tab-bar">
        <div className="tab-item active">
          <span>团购</span>
          <div className="tab-indicator"></div>
        </div>
        <div className="tab-item">智能</div>
        <div className="tab-item">视频</div>
        <div className="tab-item">直播</div>
        <div className="tab-item">商品</div>
        <div className="tab-item">用户</div>
        <div className="tab-item">综合</div>
      </div>

      {/* 附近优惠推荐标题 */}
      <div className="section-title">
        附近优惠推荐
      </div>

      {/* 商家POI区域 */}
      <div className="poi-section">
        <POICard 
          name="沪上阿姨（西二旗店）"
          category="饮品"
          location="海淀区"
          views="10人看过"
          distance="3.3km"
        />

        {/* 团购商品列表 */}
        <div className="group-buy-list">
          <GroupBuyCard 
            currentPrice="18.9"
            originalPrice="¥29"
            discount="4.5折"
            title="杨枝甘露双倍芒果"
            subtitle="西柚粒冰沙"
            soldCount="已抢259"
          />

          <GroupBuyCard 
            currentPrice="18.9"
            originalPrice="¥29"
            discount="4.5折"
            title="珍珠奶茶波波超大"
            subtitle="杯美味好喝"
            soldCount="已抢259"
          />

          <GroupBuyCard 
            currentPrice="14.9"
            originalPrice="¥29"
            discount="4.3折"
            title="西梅噗噗通畅"
            subtitle="果肉多多专享杯"
            specialTag={{ text: "爆款", type: "hot" }}
            soldCount="已抢259"
          />

          <LiveCard title="二姐带你逛吃直播" />
        </div>
      </div>

      {/* 第二个商家区域 */}
      <div className="poi-section">
        <POICard 
          name="沪上阿姨（上地店）"
          category="饮品"
          location="海淀区"
          views="暂无评价"
          distance="3.3km"
        />

        <div className="group-buy-list">
          <GroupBuyCard 
            currentPrice="14.9"
            originalPrice="¥29"
            discount="4.3折"
            title="西梅噗噗通畅"
            subtitle="果肉多多专享杯"
            specialTag={{ text: "爆款", type: "hot" }}
            soldCount="已抢259"
          />
        </div>
      </div>

      {/* 第三个商家区域 */}
      <div className="poi-section">
        <POICard 
          name="一点点（辉煌国际店）"
          category="饮品"
          location="海淀区"
          priceRange="¥17/人"
          ranking="北京饮品畅销榜 TOP2"
          views="50人看过"
          distance="3.9km"
        />

        <div className="group-buy-list">
          <GroupBuyCard 
            currentPrice="166.9"
            originalPrice="¥220"
            title="老友记拔草双人套餐"
            subsidyType="kuaishou"
            soldCount="已售259"
            isLarge={true}
          />

          <GroupBuyCard 
            currentPrice="19"
            originalPrice="¥22"
            discount="6.7折"
            title="草莓啵啵奶茶"
            subtitle="超多料大杯分享"
            specialTag={{ text: "新品", type: "new" }}
            priceGuarantee="快手更低价"
            soldCount="已抢259"
          />
        </div>
      </div>

      {/* 最后的商家区域 */}
      <div className="poi-section last">
        <POICard 
          name="一点点（辉煌国际店）"
          category="饮品"
          location="海淀区"
          priceRange="¥17/人"
          isPurchased={true}
          views="消费人数2K+"
          reviews="太好喝啦"
          distance="3.9km"
        />
      </div>

      {/* 折叠提示 */}
      <div className="collapse-section">
        <div className="collapse-text">已折叠12个较远商家</div>
        <button className="expand-btn">↓</button>
      </div>
    </div>
  );
}

export default App;