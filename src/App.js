import React from 'react';
import './App.css';
import StatusBar from './components/StatusBar/StatusBar';
import Navigation from './components/Navigation/Navigation';
import SearchBar from './components/SearchBar/SearchBar';
import FunctionNav from './components/FunctionNav/FunctionNav';
import BrandSection from './components/BrandSection/BrandSection';
import ProductCard from './components/ProductCard/ProductCard';
import BottomNav from './components/BottomNav/BottomNav';

// Import product images
import product1 from './assets/images/product1.png';
import product2 from './assets/images/product2.png';
import product3 from './assets/images/product3.png';
import product4 from './assets/images/product4.png';

function App() {
  const productData = [
    {
      id: 1,
      image: product1,
      title: '咖色咖啡杯【咖',
      tags: [
        { text: '大牌大补', type: 'brand' },
        { text: '福利购', type: 'brand' }
      ],
      badges: [
        { text: '满9.9减2', type: 'discount' },
        { text: '好友买过', type: 'friend' },
        { text: '破损包退', type: 'guarantee' }
      ],
      price: {
        integer: '128',
        decimal: '88'
      },
      sales: '1.5万+件',
      liveReplay: true
    },
    {
      id: 2,
      image: product2,
      title: '咖色咖啡杯【咖',
      tags: [
        { text: '大牌大补', type: 'brand' },
        { text: '福利购', type: 'brand' }
      ],
      badges: [
        { text: '满9.9减2', type: 'discount' },
        { text: '好友买过', type: 'friend' },
        { text: '破损包退', type: 'guarantee' }
      ],
      price: {
        integer: '128',
        decimal: '88'
      },
      sales: '1.5万+件',
      liveReplay: false
    },
    {
      id: 3,
      image: product3,
      title: '格子短袖夏日款蓝色百',
      tags: [
        { text: '旗舰', type: 'flagship' }
      ],
      badges: [
        { text: '直播同价', type: 'live-price' },
        { text: '官方推荐', type: 'official' },
        { text: '先用后付', type: 'pay-later' }
      ],
      price: {
        integer: '86',
        decimal: '8'
      },
      sales: '372件',
      liveReplay: false
    },
    {
      id: 4,
      image: product4,
      title: '格子短袖夏日款蓝色百搭嗯',
      tags: [],
      badges: [
        { text: '满200减20', type: 'discount' },
        { text: '官方推荐', type: 'official' },
        { text: '先用后付', type: 'pay-later' }
      ],
      price: {
        integer: '86',
        decimal: '8'
      },
      sales: '372件',
      liveReplay: false
    }
  ];

  return (
    <div className="App">
      <StatusBar />
      <Navigation />
      <SearchBar />
      <FunctionNav />
      <BrandSection />
      
      <div className="product-grid">
        <div className="product-row">
          <ProductCard product={productData[0]} />
          <ProductCard product={productData[1]} />
        </div>
        <div className="product-row">
          <ProductCard product={productData[2]} />
          <ProductCard product={productData[3]} />
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}

export default App;
