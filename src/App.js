import React from 'react';
import './App.css';

function App() {
  const handleTabClick = (tabName) => {
    console.log(tabName + ' click');
  };

  const handleSearchClick = () => {
    console.log('搜索 click');
  };

  return (
    <div style={{
      boxSizing: 'border-box',
      overflow: 'hidden',
      height: '896px',
      width: '414px',
      background: '#FFFFFF',
      position: 'relative',
      margin: '0 auto',
      fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      {/* Status Bar */}
      <div style={{
        boxSizing: 'border-box',
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '414px',
        height: '44px'
      }}>
        <div style={{
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '414px',
          height: '44px'
        }}>
          {/* Battery and Signal Icons */}
          <div style={{
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'absolute',
            bottom: '15px',
            right: '15.455825805664062px',
            width: '74px',
            height: '12px'
          }}>
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1c004d1-a299-45a8-86de-3fab9367a759" 
                 style={{
                   boxSizing: 'border-box',
                   position: 'absolute',
                   top: '0.3330078125px',
                   right: '0.3391838073730469px',
                   width: '24px',
                   height: '11px'
                 }} alt="" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e80f2ee-d894-4f6a-84c3-1f95ef6d655c" 
                 style={{
                   boxSizing: 'border-box',
                   position: 'absolute',
                   top: '0.3310546875px',
                   left: '28.9677734375px',
                   width: '15px',
                   height: '11px'
                 }} alt="" />
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cd68cf5-ba91-4389-91de-6466a6a64368" 
                 style={{
                   boxSizing: 'border-box',
                   position: 'absolute',
                   bottom: '0.666015625px',
                   left: '6.9677734375px',
                   width: '17px',
                   height: '11px'
                 }} alt="" />
          </div>
          {/* Time */}
          <div style={{
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'absolute',
            bottom: '11.6669921875px',
            left: '21px',
            width: '54px',
            height: '18px'
          }}>
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '54px',
              textAlign: 'center',
              fontSize: '15px',
              lineHeight: 'normal',
              fontFamily: 'SF Pro Text',
              fontWeight: '600',
              letterSpacing: '-0.3px',
              color: '#000000'
            }}>9:41</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{
        boxSizing: 'border-box',
        position: 'absolute',
        top: '44px',
        left: '0px',
        width: '414px',
        height: '44px'
      }}>
        <div style={{
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '414px',
          height: '44px'
        }}>
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87262281-726e-412f-86b2-53e5c5e380cb" 
               style={{
                 boxSizing: 'border-box',
                 position: 'absolute',
                 top: '0px',
                 left: '0px',
                 width: '414px',
                 height: '44px'
               }} alt="" />
          {/* Back Button */}
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            top: '2px',
            left: '11px',
            width: '40px',
            height: '40px'
          }}>
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8930970a-f9d9-4651-aad2-a6b5b353e0e2" 
                 style={{
                   boxSizing: 'border-box',
                   position: 'absolute',
                   top: '8px',
                   left: '8px',
                   width: '24px',
                   height: '24px'
                 }} alt="" />
          </div>
          {/* Search Input */}
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            top: '2px',
            left: '52px',
            width: '301px',
            height: '40px',
            borderRadius: '8px',
            background: '#F2F3F7'
          }}></div>
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60fb86d9-cf82-491f-8f29-ed0a7fa08a72" 
               style={{
                 boxSizing: 'border-box',
                 position: 'absolute',
                 top: '14px',
                 right: '73px',
                 width: '16px',
                 height: '16px'
               }} alt="" />
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            top: '14px',
            left: '64px',
            fontSize: '16px',
            lineHeight: '16px',
            fontFamily: 'PingFang SC',
            fontWeight: '400',
            color: 'var(--cs_common_text_title, #222222)'
          }}>美甲</div>
          {/* Search Button */}
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            top: '11px',
            right: '15px',
            width: '32px',
            height: '22px',
            cursor: 'pointer'
          }} onClick={handleSearchClick}>
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '0px',
              left: '0px',
              fontSize: '16px',
              lineHeight: '22px',
              fontFamily: 'PingFang SC',
              fontWeight: '500',
              color: 'var(--cs_common_text_title, #222222)'
            }}>搜索</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'absolute',
        top: '88px',
        left: '0px',
        width: '414px',
        height: '44px',
        background: '#FFFFFF'
      }}>
        {/* Active Tab - 团购 */}
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '0px',
          left: '136px',
          width: '56px',
          height: '44px',
          cursor: 'pointer'
        }} onClick={() => handleTabClick('团购')}>
          <div style={{
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '56px',
            height: '44px'
          }}>
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90100b49-af60-493f-b37d-91ff953dd041" 
                 style={{
                   boxSizing: 'border-box',
                   position: 'absolute',
                   bottom: '5px',
                   left: '18px',
                   width: '20px',
                   height: '2px'
                 }} alt="" />
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '11px',
              left: '11px',
              textAlign: 'center',
              fontSize: '17px',
              lineHeight: '22px',
              fontFamily: 'PingFang SC',
              fontWeight: '500',
              color: '#222222'
            }}>团购</div>
          </div>
        </div>
        
        {/* Other Tabs */}
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '0px',
          left: '72px',
          width: '56px',
          height: '44px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px',
          cursor: 'pointer'
        }} onClick={() => handleTabClick('智能')}>
          <div style={{
            boxSizing: 'border-box',
            minWidth: '32px',
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '20px',
            fontFamily: 'PingFang SC',
            fontWeight: '400',
            color: '#666666'
          }}>智能</div>
        </div>
        
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '0px',
          right: '158px',
          width: '56px',
          height: '44px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px',
          cursor: 'pointer'
        }} onClick={() => handleTabClick('视频')}>
          <div style={{
            boxSizing: 'border-box',
            minWidth: '32px',
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '20px',
            fontFamily: 'PingFang SC',
            fontWeight: '400',
            color: '#666666'
          }}>视频</div>
        </div>
        
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '0px',
          right: '-34px',
          width: '56px',
          height: '44px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px',
          cursor: 'pointer'
        }} onClick={() => handleTabClick('直播')}>
          <div style={{
            boxSizing: 'border-box',
            minWidth: '32px',
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '20px',
            fontFamily: 'PingFang SC',
            fontWeight: '400',
            color: '#666666'
          }}>直播</div>
        </div>
        
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '0px',
          right: '30px',
          width: '56px',
          height: '44px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px',
          cursor: 'pointer'
        }} onClick={() => handleTabClick('商品')}>
          <div style={{
            boxSizing: 'border-box',
            minWidth: '32px',
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '20px',
            fontFamily: 'PingFang SC',
            fontWeight: '400',
            color: '#666666'
          }}>商品</div>
        </div>
        
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '0px',
          right: '94px',
          width: '56px',
          height: '44px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px',
          cursor: 'pointer'
        }} onClick={() => handleTabClick('用户')}>
          <div style={{
            boxSizing: 'border-box',
            minWidth: '32px',
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '20px',
            fontFamily: 'PingFang SC',
            fontWeight: '400',
            color: '#666666'
          }}>用户</div>
        </div>
        
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '0px',
          left: '8px',
          width: '56px',
          height: '44px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px',
          cursor: 'pointer'
        }} onClick={() => handleTabClick('综合')}>
          <div style={{
            boxSizing: 'border-box',
            minWidth: '32px',
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '20px',
            fontFamily: 'PingFang SC',
            fontWeight: '400',
            color: '#666666'
          }}>综合</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        boxSizing: 'border-box',
        position: 'absolute',
        top: '144px',
        left: '0px',
        width: '414px',
        height: '752px',
        overflowY: 'auto'
      }}>
        {/* Section Title */}
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '414px',
          height: '32px'
        }}>
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            top: '4px',
            left: '19px',
            width: '184px',
            fontSize: '17px',
            lineHeight: '24px',
            fontFamily: 'PingFang SC',
            fontWeight: '500',
            color: 'var(--cs_common_text_black, #000000)'
          }}>附近优惠推荐</div>
        </div>

        {/* First Store - 茶话弄美甲美睫 */}
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '32px',
          left: '0px',
          width: '414px',
          height: '157px'
        }}>
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '414px',
            height: '91px',
            background: '#FFFFFF'
          }}>
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '7px',
              left: '87px',
              width: '232px',
              fontSize: '15px',
              lineHeight: '21px',
              fontFamily: 'PingFang SC',
              fontWeight: '500',
              color: 'var(--cs_common_text_title, #222222)'
            }}>茶话弄美甲美睫（西二旗店）</div>
            
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              bottom: '26px',
              right: '19px',
              fontSize: '12px',
              lineHeight: '17px',
              fontFamily: 'PingFang SC',
              fontWeight: '400',
              color: 'var(--cs_common_text_secondary, #9C9C9C)'
            }}>200m</div>
            
            {/* Store Image with Live Badge */}
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '8px',
              left: '19px',
              width: '56px',
              height: '56px',
              outlineWidth: '1px',
              outlineStyle: 'solid',
              outlineColor: '#F73B68',
              borderRadius: '5px'
            }}>
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/940a9812-b457-4f94-a4b8-ee9b9359b3e0" 
                   style={{
                     boxSizing: 'border-box',
                     position: 'absolute',
                     top: '1.5px',
                     left: '1.5px',
                     width: '53px',
                     height: '53px',
                     borderRadius: '4px'
                   }} alt="" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/287bd51c-1b62-464a-93ba-0f2c459b5090" 
                   style={{
                     boxSizing: 'border-box',
                     position: 'absolute',
                     bottom: '1.5px',
                     left: '1.5px',
                     width: '53px',
                     height: '14px'
                   }} alt="" />
              <div style={{
                boxSizing: 'border-box',
                position: 'absolute',
                bottom: '2.5px',
                left: '16px',
                width: '24px',
                textAlign: 'center',
                fontSize: '8px',
                lineHeight: '12px',
                fontFamily: 'PingFang SC',
                fontWeight: '500',
                color: 'var(--cs_common_text_white, #FFFFFF)'
              }}>直播中</div>
            </div>
            
            {/* Rating */}
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '30px',
              left: '87px',
              width: '102px',
              height: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '1px'
            }}>
              <div style={{
                boxSizing: 'border-box',
                width: '80px',
                height: '16px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1177c1b-705e-4881-9c1d-e0bd59ac2651" 
                     style={{ width: '16px', height: '16px' }} alt="" />
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c35e6271-a956-4d00-9daa-78c768a48ee4" 
                     style={{ width: '16px', height: '16px' }} alt="" />
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f58d3a47-bc28-4c45-87d2-d26694722700" 
                     style={{ width: '16px', height: '16px' }} alt="" />
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98c9edfe-cfd4-4c7b-90f0-5de72a234036" 
                     style={{ width: '16px', height: '16px' }} alt="" />
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e198402e-5607-4654-8718-2a182ae91e19" 
                     style={{ width: '16px', height: '16px' }} alt="" />
              </div>
              <div style={{
                fontSize: '14px',
                lineHeight: '14px',
                fontFamily: 'PingFang SC',
                fontWeight: '600',
                color: '#FE3666'
              }}>4.6</div>
            </div>
            
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              bottom: '26px',
              left: '87px',
              fontSize: '12px',
              lineHeight: '17px',
              fontFamily: 'PingFang SC',
              fontWeight: '400',
              color: 'var(--cs_common_text_secondary, #9C9C9C)'
            }}>美甲</div>
            
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              bottom: '26px',
              left: '119px',
              fontSize: '12px',
              lineHeight: '17px',
              fontFamily: 'PingFang SC',
              fontWeight: '400',
              color: 'var(--cs_common_text_secondary, #9C9C9C)'
            }}>海淀区</div>
            
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '32px',
              right: '168px',
              fontSize: '12px',
              lineHeight: '12px',
              fontFamily: 'PingFang SC',
              fontWeight: '400',
              color: '#222222'
            }}>12条评论</div>
            
            {/* Tags */}
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              bottom: '4px',
              right: '48px',
              width: '279px',
              height: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <div style={{
                width: '35px',
                height: '16px',
                borderRadius: '3px',
                background: '#FFEEF2',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2px 4px'
              }}>
                <div style={{
                  fontSize: '9px',
                  lineHeight: '12px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '500',
                  color: '#FE3666'
                }}>购买过</div>
              </div>
              
              <div style={{
                width: '116px',
                height: '16px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  width: '116px',
                  height: '16px',
                  borderRadius: '3px',
                  background: 'linear-gradient(94.42deg, #fff6e5 3.59%, #ffeccf 94.38%)'
                }}></div>
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14ae91bb-98c5-4fa1-9546-f4ba2d9f42bb" 
                     style={{
                       position: 'absolute',
                       top: '4.999999848443622px',
                       right: '4.532836651794241px',
                       width: '3px',
                       height: '6px'
                     }} alt="" />
                <div style={{
                  position: 'absolute',
                  top: '0px',
                  right: '10px',
                  fontSize: '9px',
                  lineHeight: '16px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '400',
                  color: '#B27436'
                }}>北京热门美甲榜第1名</div>
                <div style={{
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  width: '20px',
                  height: '15px'
                }}>
                  <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0a7be3e-eb83-4714-a932-49cc00d34ddb" 
                       style={{
                         position: 'absolute',
                         bottom: '-1px',
                         left: '0px',
                         width: '16px',
                         height: '16px'
                       }} alt="" />
                  <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a815d815-d30a-47fc-87b8-35067bc198df" 
                       style={{
                         position: 'absolute',
                         top: '1px',
                         left: '2px',
                         width: '13px',
                         height: '13px'
                       }} alt="" />
                </div>
              </div>
              
              <div style={{
                width: '62px',
                height: '16px',
                borderRadius: '3px',
                background: '#EFEFEF80',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2px 4px'
              }}>
                <div style={{
                  fontSize: '9px',
                  lineHeight: '12px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '400',
                  color: 'var(--cs_common_text_primary, #666666)'
                }}>消费人数2K+</div>
              </div>
              
              <div style={{
                width: '54px',
                height: '16px',
                borderRadius: '3px',
                background: '#EFEFEF80',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2px 4px'
              }}>
                <div style={{
                  fontSize: '9px',
                  lineHeight: '12px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '400',
                  color: 'var(--cs_common_text_primary, #666666)'
                }}>"美甲牛逼"</div>
              </div>
            </div>
          </div>
          
          {/* Service Items */}
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            bottom: '44px',
            left: '0px',
            width: '414px',
            height: '22px',
            background: '#FFFFFF'
          }}>
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '4px',
              left: '87px',
              width: '14px',
              height: '14px'
            }}>
              <div style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '14px',
                height: '14px',
                borderRadius: '3px',
                background: '#FF6E00'
              }}></div>
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4609fb6e-1b54-40fd-a237-d27a246519a8" 
                   style={{
                     position: 'absolute',
                     top: '0px',
                     left: '0px',
                     width: '14px',
                     height: '14px'
                   }} alt="" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c727e39c-5b64-4dce-be15-e1da8ca72e46" 
                   style={{
                     position: 'absolute',
                     bottom: '2.6702117919921875px',
                     left: '2.67022705078125px',
                     width: '9px',
                     height: '9px'
                   }} alt="" />
            </div>
            
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83f1e839-c3d5-48e2-a49e-084dc6033a29" 
                 style={{
                   position: 'absolute',
                   top: '4px',
                   left: '37px',
                   width: '45px',
                   height: '14px'
                 }} alt="" />
            
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '1px',
              right: '22px',
              width: '287px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2px'
              }}>
                <div style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '500',
                  color: 'var(--cs_common_text_main, #FE3666)'
                }}>¥166.9/3次</div>
                <div style={{
                  fontSize: '10px',
                  lineHeight: '14px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '400',
                  color: 'var(--cs_common_text_secondary, #9C9C9C)',
                  textDecoration: 'line-through'
                }}>¥220</div>
              </div>
              
              <div style={{
                width: '35px',
                height: '12px',
                borderWidth: '0.2px',
                borderStyle: 'solid',
                borderColor: '#FE3666',
                borderRadius: '3px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px 1.8px'
              }}>
                <div style={{
                  fontSize: '8px',
                  lineHeight: '12px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '400',
                  color: '#FE3666'
                }}>单次¥63</div>
              </div>
              
              <div style={{
                overflow: 'hidden',
                fontSize: '12px',
                lineHeight: '17px',
                fontFamily: 'PingFang SC',
                fontWeight: '400',
                color: 'var(--cs_common_text_title, #222222)',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }}>前置卸甲+半贴甲片+加固...</div>
            </div>
          </div>
          
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            bottom: '22px',
            left: '0px',
            width: '414px',
            height: '22px',
            background: '#FFFFFF'
          }}>
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '4px',
              left: '87px',
              width: '14px',
              height: '14px'
            }}>
              <div style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '14px',
                height: '14px',
                borderRadius: '3px',
                background: '#FF6E00'
              }}></div>
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70c6e14a-d820-4cd6-a96d-b106726397ac" 
                   style={{
                     position: 'absolute',
                     top: '0px',
                     left: '0px',
                     width: '14px',
                     height: '14px'
                   }} alt="" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03849864-43cc-4529-a00b-9e3f7eccbdac" 
                   style={{
                     position: 'absolute',
                     bottom: '2.6702117919921875px',
                     left: '2.67022705078125px',
                     width: '9px',
                     height: '9px'
                   }} alt="" />
            </div>
            
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf9b4bf4-963b-4b8d-95f0-f041e659768f" 
                 style={{
                   position: 'absolute',
                   top: '4px',
                   left: '37px',
                   width: '45px',
                   height: '14px'
                 }} alt="" />
            
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '1px',
              right: '23px',
              width: '286px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2px'
              }}>
                <div style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '500',
                  color: 'var(--cs_common_text_main, #FE3666)'
                }}>¥19.9</div>
                <div style={{
                  fontSize: '10px',
                  lineHeight: '14px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '400',
                  color: 'var(--cs_common_text_secondary, #9C9C9C)',
                  textDecoration: 'line-through'
                }}>¥220</div>
              </div>
              
              <div style={{
                width: '24px',
                height: '12px',
                borderWidth: '0.2px',
                borderStyle: 'solid',
                borderColor: '#FE3666',
                borderRadius: '3px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px 1.8px'
              }}>
                <div style={{
                  fontSize: '8px',
                  lineHeight: '12px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '400',
                  color: '#FE3666'
                }}>0.3折</div>
              </div>
              
              <div style={{
                overflow: 'hidden',
                fontSize: '12px',
                lineHeight: '17px',
                fontFamily: 'PingFang SC',
                fontWeight: '400',
                color: 'var(--cs_common_text_title, #222222)',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }}>前置卸甲+本甲光疗建构+款式任意...</div>
            </div>
          </div>
          
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            bottom: '0px',
            left: '0px',
            width: '414px',
            height: '22px',
            background: '#FFFFFF'
          }}>
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '4px',
              left: '87px',
              width: '14px',
              height: '14px'
            }}>
              <div style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '14px',
                height: '14px',
                borderRadius: '3px',
                background: '#FF6E00'
              }}></div>
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b322530-30d3-49fe-830c-19553f7e032f" 
                   style={{
                     position: 'absolute',
                     top: '0px',
                     left: '0px',
                     width: '14px',
                     height: '14px'
                   }} alt="" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d03349d-d191-490e-bb16-b11799be572d" 
                   style={{
                     position: 'absolute',
                     bottom: '2.6702117919921875px',
                     left: '2.67022705078125px',
                     width: '9px',
                     height: '9px'
                   }} alt="" />
            </div>
            
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b46758f-ffdf-4b65-8c74-d4ea2e248cec" 
                 style={{
                   position: 'absolute',
                   top: '4px',
                   left: '37px',
                   width: '45px',
                   height: '14px'
                 }} alt="" />
            
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '1px',
              right: '20px',
              width: '289px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2px'
              }}>
                <div style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '500',
                  color: 'var(--cs_common_text_main, #FE3666)'
                }}>¥29.9</div>
                <div style={{
                  fontSize: '10px',
                  lineHeight: '14px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '400',
                  color: 'var(--cs_common_text_secondary, #9C9C9C)',
                  textDecoration: 'line-through'
                }}>¥220</div>
              </div>
              
              <div style={{
                width: '24px',
                height: '12px',
                borderWidth: '0.2px',
                borderStyle: 'solid',
                borderColor: '#FE3666',
                borderRadius: '3px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px 1.8px'
              }}>
                <div style={{
                  fontSize: '8px',
                  lineHeight: '12px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '400',
                  color: '#FE3666'
                }}>0.4折</div>
              </div>
              
              <div style={{
                overflow: 'hidden',
                fontSize: '12px',
                lineHeight: '17px',
                fontFamily: 'PingFang SC',
                fontWeight: '400',
                color: 'var(--cs_common_text_title, #222222)',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }}>本甲光疗建构+贴钻款式+任意装饰...</div>
            </div>
          </div>
        </div>

        {/* Second Store - SweetNail美甲 */}
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '189px',
          left: '0px',
          width: '414px',
          height: '72px'
        }}>
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            top: '8px',
            left: '19px',
            width: '56px',
            height: '56px',
            borderWidth: '0.3px',
            borderStyle: 'solid',
            borderColor: '#00000014',
            borderRadius: '4px',
            background: '#F5F5F5'
          }}></div>
          
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25b93db5-bd67-43a9-9962-f56767677b06" 
               style={{
                 boxSizing: 'border-box',
                 position: 'absolute',
                 top: '8px',
                 left: '19px',
                 width: '56px',
                 height: '56px',
                 borderRadius: '4px'
               }} alt="" />
          
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            top: '7px',
            left: '87px',
            width: '232px',
            fontSize: '15px',
            lineHeight: '21px',
            fontFamily: 'PingFang SC',
            fontWeight: '500',
            color: 'var(--cs_common_text_title, #222222)'
          }}>SweetNail美甲（上地十街店）</div>
          
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            bottom: '7px',
            left: '87px',
            width: '92px',
            height: '17px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              fontSize: '12px',
              lineHeight: '17px',
              fontFamily: 'PingFang SC',
              fontWeight: '400',
              color: 'var(--cs_common_text_secondary, #9C9C9C)'
            }}>美甲美睫</div>
            <div style={{
              fontSize: '12px',
              lineHeight: '17px',
              fontFamily: 'PingFang SC',
              fontWeight: '400',
              color: 'var(--cs_common_text_secondary, #9C9C9C)'
            }}>海淀区</div>
          </div>
          
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            bottom: '7px',
            right: '19px',
            fontSize: '12px',
            lineHeight: '17px',
            fontFamily: 'PingFang SC',
            fontWeight: '400',
            color: 'var(--cs_common_text_secondary, #9C9C9C)'
          }}>2.5km</div>
          
          {/* Rating */}
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            bottom: '26px',
            left: '87px',
            width: '102px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '1px'
          }}>
            <div style={{
              width: '80px',
              height: '16px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29c481aa-5a2f-4ac8-adc2-00c97acbdeaa" 
                   style={{ width: '16px', height: '16px' }} alt="" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/760028d5-a967-4b98-8c41-d635dc4c8657" 
                   style={{ width: '16px', height: '16px' }} alt="" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2434f12a-0a69-4642-97c3-fcb9c3a1e070" 
                   style={{ width: '16px', height: '16px' }} alt="" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed053811-9da4-4edc-af5a-ea8de8bb6fb4" 
                   style={{ width: '16px', height: '16px' }} alt="" />
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc01a9d3-baed-4e9e-a1c2-4dff46f7a225" 
                   style={{ width: '16px', height: '16px' }} alt="" />
            </div>
            <div style={{
              fontSize: '14px',
              lineHeight: '14px',
              fontFamily: 'PingFang SC',
              fontWeight: '600',
              color: '#FE3666'
            }}>4.6</div>
          </div>
          
          {/* Collapse Section */}
          <div style={{
            boxSizing: 'border-box',
            position: 'absolute',
            bottom: '-12px',
            left: '0px',
            width: '414px',
            height: '48px'
          }}>
            <div style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '414px',
              height: '48px',
              background: 'linear-gradient(180deg, #ffffffe5 0%, #fff 50%)'
            }}></div>
            <div style={{
              boxSizing: 'border-box',
              position: 'absolute',
              bottom: '12px',
              right: '134px',
              width: '145px',
              height: '20px'
            }}>
              <div style={{
                width: '145px',
                position: 'absolute',
                top: '0px',
                left: '0px',
                height: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontFamily: 'PingFang SC',
                  fontWeight: '400',
                  color: '#222222'
                }}>已折叠12个较远商家</div>
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa797858-e567-48fd-9359-46f98a744acf" 
                     style={{ width: '14px', height: '14px' }} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '127px',
          left: '55px',
          width: '28px',
          height: '14px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <div style={{
            width: '20px',
            height: '14px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '20px',
              height: '14px',
              borderRadius: '2px 0px 0px 2px',
              background: '#FE36660D',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2px 0px 2px 4px'
            }}>
              <div style={{
                fontSize: '8px',
                lineHeight: '10px',
                fontFamily: 'PingFang SC',
                fontWeight: '500',
                color: 'var(--cs_common_text_main, #FE3666)'
              }}>爆款</div>
            </div>
          </div>
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32ecbff3-80fe-47b6-9e4c-51e3cfc92d69" 
               style={{
                 overflow: 'hidden',
                 width: '8px',
                 height: '14px'
               }} alt="" />
        </div>
        
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '149px',
          left: '37px',
          width: '46px',
          height: '14px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <div style={{
            width: '38px',
            height: '14px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '38px',
              height: '14px',
              borderRadius: '2px 0px 0px 2px',
              background: '#FE36660D',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2px 0px 2px 4px'
            }}>
              <div style={{
                fontSize: '8px',
                lineHeight: '10px',
                fontFamily: 'PingFang SC',
                fontWeight: '500',
                color: 'var(--cs_common_text_main, #FE3666)'
              }}>93%好评</div>
            </div>
          </div>
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96f7c750-8ba8-41f2-843d-5e1a06b65ab6" 
               style={{
                 overflow: 'hidden',
                 width: '8px',
                 height: '14px'
               }} alt="" />
        </div>
        
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '171px',
          left: '37px',
          width: '46px',
          height: '14px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <div style={{
            width: '38px',
            height: '14px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '38px',
              height: '14px',
              borderRadius: '2px 0px 0px 2px',
              background: '#FE36660D',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2px 0px 2px 4px'
            }}>
              <div style={{
                fontSize: '8px',
                lineHeight: '10px',
                fontFamily: 'PingFang SC',
                fontWeight: '500',
                color: 'var(--cs_common_text_main, #FE3666)'
              }}>99%好评</div>
            </div>
          </div>
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6844e4c-8028-4614-a21d-30a010af7fed" 
               style={{
                 overflow: 'hidden',
                 width: '8px',
                 height: '14px'
               }} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
