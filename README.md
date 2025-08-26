# Figma 设计稿还原 - 电商App首页

这是一个基于 React 开发的电商App首页，完全按照提供的 Figma 设计稿进行还原。

## 项目特点

### 🎨 高度还原设计稿
- 完全按照 Figma 设计稿的布局、颜色、字体进行还原
- 使用了精确的尺寸和间距
- 保持了原设计的视觉效果

### 📱 响应式设计
- 适配不同屏幕尺寸
- 针对 iOS 设计规范优化
- 流畅的交互体验

### ⚡ 交互功能
- 顶部导航栏 tab 切换
- 底部导航栏状态切换
- 商品卡片点击交互
- 商品收藏功能

## 项目结构

```
src/
├── components/
│   ├── StatusBar/          # 状态栏组件
│   ├── Navigation/         # 顶部导航栏
│   ├── SearchBar/          # 搜索栏
│   ├── FunctionNav/        # 功能导航区域
│   ├── BrandSection/       # 品牌展示区域
│   ├── ProductCard/        # 商品卡片组件
│   └── BottomNav/          # 底部导航栏
├── assets/
│   └── images/            # 从 Figma 下载的商品图片
├── App.js                 # 主应用组件
└── App.css               # 全局样式
```

## 主要组件说明

### StatusBar
模拟 iOS 状态栏，包含时间、定位、信号、WiFi、电池等信息

### Navigation  
顶部导航栏，包含菜单、tab切换（商城、关注、发现、同城、直播）、搜索图标

### SearchBar
搜索输入框，包含搜索图标、占位文本和搜索按钮

### FunctionNav
功能导航区域，包含我的订单、黑钻买家、砍价购、购物车、直播爆款等快捷入口

### BrandSection
品牌展示区域，展示大牌大补活动商品

### ProductCard
商品卡片组件，包含商品图片、标签、标题、优惠信息、价格、销量等信息

### BottomNav
底部导航栏，包含首页、精选、发布按钮、消息、个人中心

## 运行项目

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 构建生产版本
npm run build
```

## 技术栈

- React 19.1.1
- CSS3 (Flexbox, Grid)
- JavaScript ES6+

## 设计还原亮点

1. **像素级还原**: 严格按照 Figma 设计稿的尺寸、颜色、字体进行开发
2. **组件化设计**: 将界面拆分为可复用的组件，便于维护和扩展
3. **状态管理**: 使用 React Hooks 管理组件状态
4. **交互反馈**: 添加hover效果、点击反馈等用户体验优化
5. **响应式适配**: 针对不同屏幕尺寸进行适配

## 浏览器兼容性

- Chrome 88+
- Safari 14+
- Firefox 85+
- Edge 88+

项目完全还原了 Figma 设计稿中的电商App首页，具备完整的视觉效果和基础交互功能。