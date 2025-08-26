# Figma设计稿还原 - 挑战任务和排行榜

这是一个基于React的项目，还原了Figma设计稿中的挑战任务和排行榜界面。

## 🎯 项目特性

- **挑战任务卡片**：包含热度值、PK次数、观众数、直播时长等任务
- **进度条显示**：动态显示任务完成进度
- **排行榜组件**：展示用户信息和各项数据
- **自定义图标**：SVG图标与设计稿保持一致
- **响应式设计**：适配移动端和桌面端

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm start
```
在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本
```bash
npm run build
```

## 📁 项目结构

```
src/
├── components/
│   ├── TaskCard.js          # 任务卡片组件
│   ├── TaskCard.css         # 任务卡片样式
│   ├── RankItem.js          # 排行榜条目组件
│   ├── RankItem.css         # 排行榜条目样式
│   └── TaskIcons.js         # 任务图标组件
├── App.js                   # 主应用组件
├── App.css                  # 主应用样式
└── index.js                 # 应用入口
```

## 🎨 设计实现

- **颜色方案**：遵循Figma设计稿的色彩规范
- **字体**：使用PingFang SC和Alte DIN 1451 Mittelschrift
- **布局**：Flexbox布局，支持响应式设计
- **图标**：自定义SVG图标，包含渐变效果

## 📱 组件说明

### TaskCard 组件
- 支持普通和大尺寸两种模式
- 包含任务标题、进度数值、进度条和图标
- 动态计算进度百分比

### RankItem 组件
- 用户头像、昵称和火力值
- 基础分、公演分、排名等数据展示
- 支持直播状态标识和关注按钮

### TaskIcons 组件
- HeatIcon：热度值图标（柱状图样式）
- PKIcon：PK图标（对战样式）
- AudienceIcon：观众数图标（人群样式）
- DurationIcon：时长图标（时钟样式）

## 🔧 技术栈

- React 18
- CSS3 (Flexbox, Grid)
- SVG (自定义图标)
- Create React App

---

基于 [Create React App](https://github.com/facebook/create-react-app) 创建

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
