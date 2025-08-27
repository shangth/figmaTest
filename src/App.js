import './App.css';

function App() {
  return (
    <div className="App">
      <div className="schedule-card">
        {/* Header section with background and title */}
        <div className="header-section">
          <div className="background-container">
            <div className="background-base"></div>
            {/* Multiple background images */}
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5953063-59c7-4173-bb04-b3a87e7c3869" alt="" className="bg-img bg-img-1" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd3c7735-d187-4153-aa31-1c3efd7e1e96" alt="" className="bg-img bg-img-2" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbbac47d-4a52-4c82-b5e1-3dc3a9ebd558" alt="" className="bg-img bg-img-3" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88246013-623e-4c88-a41a-c39da0fadc55" alt="" className="bg-img bg-img-4" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d1a5ddd-94db-45f7-abb9-4b61b893c6a1" alt="" className="bg-img bg-img-5" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03014c4c-c563-47de-8ad8-cb822a7ced6c" alt="" className="bg-img bg-img-6" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e8b1a0a-9319-46ad-9c5a-362210bf59ca" alt="" className="bg-img bg-img-7" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a78c77f-c405-4d01-addf-7e189e44d50f" alt="" className="bg-img bg-img-8" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b723c62a-7e89-47de-bfcb-dd795f1d30b5" alt="" className="bg-img bg-img-9" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5e775af-5f7d-4c56-8313-e2b6e807c711" alt="" className="bg-img bg-img-10" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cbdc2c1-3ecc-4a59-b70d-451ecb1b860d" alt="" className="bg-img bg-img-11" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76e9c097-faa8-46bf-b37e-da63f99075be" alt="" className="bg-img bg-img-12" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d87b0af2-1f31-4a88-a888-98d8921ecb4a" alt="" className="bg-img bg-img-13" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d891eba4-acc0-4250-83a6-84d29cebd8f0" alt="" className="bg-img bg-img-14" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68289941-5366-47de-b816-e08db98ec6f5" alt="" className="bg-img bg-img-15" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5c6bf52-a131-42cd-b435-69cd2b43fa95" alt="" className="bg-img bg-img-16" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03f67cdd-b793-4694-8206-23b8ce1baea1" alt="" className="bg-img bg-img-17" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c272e5d-d1bd-4ee8-a6bf-74a7282136d8" alt="" className="bg-img bg-img-18" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfb2492d-6fa5-48ab-b36d-262b736d1570" alt="" className="bg-img bg-img-19" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd60fcb0-e45d-41c5-b462-3c857c601a51" alt="" className="bg-img bg-img-20" />
          </div>
          
          <div className="title-container">
            <h1 className="title">后续赛程安排</h1>
          </div>
        </div>

        {/* Content section with schedule items */}
        <div className="content-section">
          <div className="schedule-items">
            <div className="schedule-item">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b627dce7-c776-4601-b386-32d97e74a961" alt="地区赛" className="schedule-icon" />
              <div className="schedule-info">
                <div className="schedule-name">地区赛</div>
                <div className="schedule-date">12.14-12.17</div>
              </div>
            </div>
            
            <div className="schedule-item">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae0c38f4-9c3a-4e20-901d-c2e3214bf972" alt="总决赛" className="schedule-icon" />
              <div className="schedule-info">
                <div className="schedule-name">总决赛</div>
                <div className="schedule-date">12.14-12.17</div>
              </div>
            </div>
            
            <div className="schedule-item">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb78025a-c61f-4552-b49d-d27ecfc85dc6" alt="展示赛" className="schedule-icon" />
              <div className="schedule-info">
                <div className="schedule-name">展示赛</div>
                <div className="schedule-date">12.14-12.17</div>
              </div>
            </div>
            
            <div className="schedule-item">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b101d967-2ceb-4ad9-acb0-f2919f3139d0" alt="战队赛" className="schedule-icon" />
              <div className="schedule-info">
                <div className="schedule-name">战队赛</div>
                <div className="schedule-date">12.14-12.17</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
