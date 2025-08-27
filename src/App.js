import './App.css';

function App() {
  return (
    <div className="job-card-container">
      {/* Background Images */}
      <img 
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c1998e0-0eaa-4648-824b-81ee7aef0c80" 
        alt="Background 1"
        className="bg-image-1"
      />
      <img 
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/276ac387-e4d5-4405-9a47-b8ee5c5369b0" 
        alt="Background 2"
        className="bg-image-2"
      />
      
      {/* Top Gradient Overlay */}
      <div className="gradient-top"></div>
      
      {/* Bottom Gradient Overlay */}
      <div className="gradient-bottom"></div>
      
      {/* Header Text */}
      <div className="header-text">招保安</div>
      
      {/* Subtitle Text */}
      <div className="subtitle-text">电子厂急招普工保安</div>
      
      {/* Content Card */}
      <div className="content-card">
        {/* Salary Section */}
        <div className="salary-section">
          <div className="salary-amount">3000-5000</div>
          <div className="salary-unit">元/月</div>
        </div>
        
        {/* Job Details Section */}
        <div className="job-details">
          <div className="job-description">
            岗位描述<br/>
            1、工作内容是安装各种水电器零件<br/>
            2、企业直招/无中介费押金
          </div>
          <div className="job-benefits">
            福利待遇<br/>
            1、工作内容是安装各种水电器零件<br/>
            2、企业直招/无中介费押金
          </div>
          <div className="job-location">
            工作地址<br/>
            北京·昌平区，北京·大兴区
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
