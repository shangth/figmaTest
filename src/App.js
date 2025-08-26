import React from 'react';
import StatusBar from './components/StatusBar';
import SearchBar from './components/SearchBar';
import TabNavigation from './components/TabNavigation';
import StoreCard from './components/StoreCard';
import GroupBuyCard from './components/GroupBuyCard';
import Tag from './components/Tag';
import './App.css';

// 模拟数据
const storeData = {
  storeName: "SweetNail美甲（上地十街店）",
  storeImage: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=100&h=100&fit=crop&crop=center",
  category: "美甲美睫",
  district: "海淀区",
  distance: "2.5km",
  rating: 4.6,
  commentCount: null,
  tags: [],
  isLive: false,
  badges: []
};

const storeData2 = {
  storeName: "茶话弄美甲美睫（西二旗店）",
  storeImage: "https://images.unsplash.com/photo-1610992015732-2449b5a6299d?w=100&h=100&fit=crop&crop=center",
  category: "美甲",
  district: "海淀区",
  distance: "200m",
  rating: 4.6,
  commentCount: 12,
  tags: [
    { text: "购买过", type: "gray" },
  ],
  isLive: true,
  badges: [
    { text: "北京热门美甲榜第1名", type: "badge" }
  ]
};

const groupBuyItems = [
  {
    title: "前置卸甲+半贴甲片+加固...",
    price: "¥166.9/3次",
    originalPrice: "¥220",
    discount: "单次¥63",
    description: "前置卸甲+半贴甲片+加固...",
    type: "group"
  },
  {
    title: "前置卸甲+本甲光疗建构+款式任意...",
    price: "¥19.9",
    originalPrice: "¥220",
    discount: "0.3折",
    description: "前置卸甲+本甲光疗建构+款式任意...",
    type: "group"
  },
  {
    title: "本甲光疗建构+贴钻款式+任意装饰...",
    price: "¥29.9",
    originalPrice: "¥220",
    discount: "0.4折",
    description: "本甲光疗建构+贴钻款式+任意装饰...",
    type: "group"
  }
];

const seckillItems = [
  {
    title: "前置卸甲+本甲光疗建构+款式任意选...",
    price: "¥0.9",
    originalPrice: "¥220",
    discount: "0.1折",
    description: "前置卸甲+本甲光疗建构+款式任意选...",
    type: "seckill"
  },
  {
    title: "半贴甲片+加固封层（款式任选可贴...",
    price: "¥298",
    originalPrice: "¥220",
    discount: "0.1折",
    description: "半贴甲片+加固封层（款式任选可贴...",
    type: "group"
  }
];

function App() {
  return (
    <div className="App">
      <StatusBar />
      <SearchBar />
      <TabNavigation />
      
      <div className="main-content">
        {/* 主店铺展示 */}
        <div className="store-section">
          <StoreCard {...storeData} />
          
          {/* 标签区域 */}
          <div className="tags-section">
            <Tag text="爆款" type="hot" />
            <Tag text="93%好评" type="rating" />
            <Tag text="99%好评" type="rating" />
          </div>
          
          {/* 团购商品列表 */}
          <div className="group-buy-section">
            {groupBuyItems.map((item, index) => (
              <GroupBuyCard key={index} {...item} />
            ))}
          </div>
        </div>
        
        {/* 已折叠商家提示 */}
        <div className="collapsed-stores">
          <div className="collapsed-banner">
            <span className="collapsed-text">已折叠12个较远商家</span>
            <svg width="14" height="14" viewBox="0 0 14 14" className="expand-icon">
              <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        {/* 附近优惠推荐标题 */}
        <div className="recommendation-header">
          <h2>附近优惠推荐</h2>
        </div>
        
        {/* 其他店铺 */}
        <div className="other-stores">
          <div className="store-group">
            <StoreCard 
              {...{
                storeName: "悠悠美甲美睫（上地店）",
                storeImage: "https://via.placeholder.com/56x56/87ceeb/ffffff?text=悠悠",
                category: "美甲美睫",
                district: "海淀区",
                distance: "4.5km",
                rating: 3.9,
                tags: [{ text: "92%好评", type: "rating" }]
              }}
            />
            <div className="group-buy-mini-section">
              {seckillItems.map((item, index) => (
                <GroupBuyCard key={index} {...item} />
              ))}
            </div>
          </div>
          
          <div className="store-group">
            <StoreCard {...storeData2} />
          </div>
          
          <div className="store-group">
            <StoreCard 
              {...{
                storeName: "佳丽美甲小铺",
                storeImage: "https://via.placeholder.com/56x56/90ee90/ffffff?text=佳丽",
                category: "美甲",
                district: "海淀区",
                distance: "5.3km",
                rating: 4.9,
                tags: [
                  { text: "看过人数80+", type: "gray" },
                  { text: "3号老师超棒", type: "gray" }
                ],
                isLive: true
              }}
            />
          </div>
          
          <div className="store-group">
            <StoreCard 
              {...{
                storeName: "Miss G美甲美睫（店）",
                storeImage: "https://via.placeholder.com/56x56/ffa500/ffffff?text=Miss",
                category: "美甲美睫",
                district: "海淀区",
                distance: "6.2km",
                rating: 3.9,
                tags: [{ text: "92%好评", type: "rating" }]
              }}
            />
            <div className="group-buy-mini-section">
              {seckillItems.map((item, index) => (
                <GroupBuyCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;