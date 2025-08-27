import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{
        boxSizing: 'border-box',
        width: '382px',
        height: '380px',
        borderRadius: '16px',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'normal',
        alignItems: 'center',
        padding: '84px 0px 20px',
        position: 'relative',
        margin: '20px auto'
      }}>
        {/* Header Section */}
        <div style={{
          boxSizing: 'border-box',
          flexBasis: '48px',
          width: '192px',
          height: '48px',
          position: 'absolute',
          top: '20px',
          left: '95px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'normal',
          alignItems: 'center',
          padding: '0px',
          gap: '10px'
        }}>
          {/* Background */}
          <div style={{
            boxSizing: 'border-box',
            flexBasis: '20px',
            width: '382px',
            height: '20px',
            position: 'absolute',
            bottom: '-20px',
            left: '-95px',
            background: '#FFFFFF',
            display: 'flex',
            justifyContent: 'normal',
            padding: '10px',
            gap: '10px'
          }} />
          
          {/* Header Image */}
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4685903f-6210-481a-88b0-e99b641247df"
            alt="Header"
            style={{
              boxSizing: 'border-box',
              overflow: 'hidden',
              flexBasis: '162px',
              width: '382px',
              height: '162px',
              position: 'absolute',
              bottom: '-94px',
              left: '-95px',
              borderRadius: '16px 16px 0px 0px'
            }}
          />
          
          {/* Title Section */}
          <div style={{
            boxSizing: 'border-box',
            flexBasis: '48px',
            width: '192px',
            height: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'normal',
            alignItems: 'center',
            padding: '0px',
            gap: '2px',
            zIndex: 3
          }}>
            {/* Title with Icons */}
            <div style={{
              boxSizing: 'border-box',
              flexBasis: '28px',
              width: '172px',
              height: '28px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
              gap: '2px'
            }}>
              {/* Left Icon */}
              <div style={{
                boxSizing: 'border-box',
                overflow: 'hidden',
                flexBasis: '24px',
                width: '24px',
                height: '24px',
                position: 'relative'
              }}>
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e36ff015-1f3a-4e15-b3cd-aa8a24892058"
                  alt="Heart icon"
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    bottom: '6.012558500148316px',
                    right: '3.331052151647782px',
                    width: '10px',
                    height: '8px'
                  }}
                />
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9427d38-6943-4d24-b0fe-ec7cffe1542a"
                  alt="Heart icon inner"
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: '5.2995299960171px',
                    left: '2.24461484598487px',
                    width: '6px',
                    height: '5px'
                  }}
                />
              </div>
              
              {/* Title Text */}
              <div style={{
                boxSizing: 'border-box',
                minWidth: '120px',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                verticalAlign: 'middle',
                fontSize: '20px',
                lineHeight: '28px',
                fontFamily: 'FZRuiZhengHeiS-EB-GB',
                fontWeight: '400',
                background: 'linear-gradient(-88.94deg, #f577d2 -0.93%, #7862fd 97.52%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                这是一个标题
              </div>
              
              {/* Right Icon */}
              <div style={{
                boxSizing: 'border-box',
                overflow: 'hidden',
                flexBasis: '24px',
                width: '24px',
                height: '24px',
                transform: 'rotate(180deg)',
                position: 'relative'
              }}>
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed1ce93b-7f9c-4233-a5db-6ead3b6eb983"
                  alt="Heart icon"
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    bottom: '6.012558500148316px',
                    left: '3.3310521516480094px',
                    width: '10px',
                    height: '8px'
                  }}
                />
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbf6136f-b29e-4588-b014-0b377fd817f9"
                  alt="Heart icon inner"
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: '5.2995299960171px',
                    right: '2.24461484598487px',
                    width: '6px',
                    height: '5px'
                  }}
                />
              </div>
            </div>
            
            {/* Subtitle */}
            <div style={{
              boxSizing: 'border-box',
              flexBasis: '18px',
              width: '204px',
              height: '18px',
              display: 'flex',
              justifyContent: 'normal',
              padding: '0px'
            }}>
              <div style={{
                boxSizing: 'border-box',
                opacity: '0.6',
                minWidth: '204px',
                textAlign: 'center',
                verticalAlign: 'top',
                fontSize: '12px',
                lineHeight: '18px',
                fontFamily: 'PingFang SC',
                fontWeight: '400',
                color: 'var(--main-color, #32296B)'
              }}>
                这是一个副标题描述描述描述描述描述
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div style={{
          boxSizing: 'border-box',
          flexBasis: '276px',
          width: '358px',
          height: '276px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'normal',
          alignItems: 'center',
          padding: '0px',
          gap: '10px'
        }}>
          {/* Info Bar */}
          <div style={{
            boxSizing: 'border-box',
            flexBasis: '32px',
            width: '358px',
            height: '32px',
            borderRadius: '8px',
            background: '#CCA5FF1A',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 16px'
          }}>
            <div style={{
              boxSizing: 'border-box',
              flexBasis: '149px',
              width: '149px',
              height: '18px',
              display: 'flex',
              justifyContent: 'normal',
              alignItems: 'center',
              padding: '0px',
              gap: '4px'
            }}>
              <div style={{
                boxSizing: 'border-box',
                opacity: '0.6',
                minWidth: '112px',
                verticalAlign: 'top',
                fontSize: '12px',
                lineHeight: '18px',
                fontFamily: 'PingFang SC',
                fontWeight: '400',
                color: '#3F2264'
              }}>
                今日已获得双倍积分:
              </div>
              <div style={{
                boxSizing: 'border-box',
                minWidth: '33px',
                verticalAlign: 'top',
                fontSize: '12px',
                lineHeight: '18px',
                fontFamily: 'PingFang SC',
                fontWeight: '400',
                color: '#FF5477'
              }}>
                10736
              </div>
            </div>
            
            <div style={{
              boxSizing: 'border-box',
              flexBasis: '62px',
              width: '62px',
              height: '18px',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '0px',
              gap: '4px'
            }}>
              <div style={{
                boxSizing: 'border-box',
                opacity: '0.6',
                minWidth: '48px',
                verticalAlign: 'top',
                fontSize: '12px',
                lineHeight: '18px',
                fontFamily: 'PingFang SC',
                fontWeight: '400',
                color: '#3F2264'
              }}>
                查看榜单
              </div>
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42a7ebd0-7970-4214-bf22-0a5913868120"
                alt="Arrow"
                style={{
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                  flexBasis: '10px',
                  width: '10px',
                  height: '10px'
                }}
              />
            </div>
          </div>
          
          {/* Task Item 1 - Completed */}
          <div style={{
            boxSizing: 'border-box',
            flexBasis: '112px',
            width: '358px',
            height: '112px',
            borderRadius: '8px',
            background: '#CCA5FF1A',
            display: 'flex',
            justifyContent: 'normal',
            alignItems: 'center',
            padding: '10px 12px',
            gap: '10px'
          }}>
            {/* Task Icon */}
            <div style={{
              boxSizing: 'border-box',
              overflow: 'hidden',
              opacity: '0.6',
              flexBasis: '72px',
              width: '72px',
              height: '92px',
              borderRadius: '6px',
              background: '#FFFFFF',
              position: 'relative'
            }}>
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dec6d933-3dc3-4479-9493-41d670354fdc"
                alt="Task icon"
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  top: '10px',
                  left: '9.5px',
                  width: '52px',
                  height: '52px'
                }}
              />
              <div style={{
                boxSizing: 'border-box',
                opacity: '0.6',
                position: 'absolute',
                bottom: '11px',
                left: '4px',
                width: '64px',
                textAlign: 'center',
                verticalAlign: 'top',
                fontSize: '10px',
                lineHeight: '15px',
                fontFamily: 'PingFang SC',
                fontWeight: '400',
                color: '#642241'
              }}>
                1.2倍加成卡
              </div>
            </div>
            
            {/* Task Content */}
            <div style={{
              boxSizing: 'border-box',
              flexGrow: 1,
              flexShrink: 1,
              width: '252px',
              height: '64px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0px',
              gap: '8px'
            }}>
              <div style={{
                boxSizing: 'border-box',
                flexBasis: '36px',
                width: '252px',
                height: '36px',
                alignSelf: 'stretch',
                display: 'flex',
                justifyContent: 'normal',
                alignItems: 'center',
                padding: '0px',
                gap: '4px'
              }}>
                <div style={{
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                  opacity: '0.6',
                  flexGrow: 1,
                  flexShrink: 1,
                  width: '166px',
                  height: '44px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '0px',
                  gap: '2px'
                }}>
                  <div style={{
                    boxSizing: 'border-box',
                    flexBasis: '24px',
                    width: '172px',
                    height: '24px',
                    display: 'flex',
                    justifyContent: 'normal',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '10px'
                  }}>
                    <div style={{
                      boxSizing: 'border-box',
                      minWidth: '96px',
                      verticalAlign: 'top',
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontFamily: 'PingFang SC',
                      fontWeight: '500',
                      color: 'var(--task-text-color, #3F2264)'
                    }}>
                      超粉初阶任务
                    </div>
                  </div>
                  <div style={{
                    boxSizing: 'border-box',
                    flexBasis: '18px',
                    width: '172px',
                    height: '18px',
                    display: 'flex',
                    justifyContent: 'normal',
                    padding: '0px',
                    gap: '10px'
                  }}>
                    <div style={{
                      boxSizing: 'border-box',
                      minWidth: '109px',
                      verticalAlign: 'top',
                      fontSize: '12px',
                      lineHeight: '18px',
                      fontFamily: 'PingFang SC',
                      fontWeight: '400',
                      color: 'var(--task-text-keywords-color, #FF5477)'
                    }}>
                      榜单双倍积分+5382
                    </div>
                  </div>
                </div>
                
                {/* Completed Button */}
                <div style={{
                  boxSizing: 'border-box',
                  opacity: '0.5',
                  flexBasis: '82px',
                  width: '82px',
                  height: '36px',
                  position: 'relative'
                }}>
                  <div style={{
                    boxSizing: 'border-box',
                    opacity: '0.6',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '82px',
                    height: '36px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#32296B',
                    borderRadius: '30px'
                  }} />
                  <div style={{
                    boxSizing: 'border-box',
                    width: '82px',
                    height: '36px',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px'
                  }}>
                    <div style={{
                      boxSizing: 'border-box',
                      minWidth: '42px',
                      textAlign: 'center',
                      verticalAlign: 'top',
                      fontSize: '14px',
                      lineHeight: '21px',
                      fontFamily: 'PingFang SC',
                      fontWeight: '500',
                      color: 'var(--button-color, #3F2264)'
                    }}>
                      已完成
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar - Completed */}
              <div style={{
                boxSizing: 'border-box',
                opacity: '0.6',
                flexBasis: '20px',
                width: '252px',
                height: '20px',
                alignSelf: 'stretch',
                borderRadius: '16px',
                background: '#CCA5FF1A',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0px',
                gap: '10px'
              }}>
                <div style={{
                  boxSizing: 'border-box',
                  flexBasis: '20px',
                  width: '252px',
                  height: '20px',
                  alignSelf: 'stretch',
                  borderRadius: '16px',
                  background: 'linear-gradient(90deg, #e0b9ff 7.75%, #c293ff 50%)',
                  position: 'relative'
                }}>
                  <div style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: '1px',
                    left: '8px',
                    verticalAlign: 'top',
                    fontSize: '12px',
                    lineHeight: '18px',
                    fontFamily: 'PingFang SC',
                    fontWeight: '400',
                    color: '#3F2264'
                  }}>
                    5382/5000
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Task Item 2 - In Progress */}
          <div style={{
            boxSizing: 'border-box',
            flexBasis: '112px',
            width: '358px',
            height: '112px',
            borderRadius: '8px',
            background: '#CCA5FF1A',
            display: 'flex',
            justifyContent: 'normal',
            alignItems: 'center',
            padding: '10px 12px',
            gap: '10px'
          }}>
            {/* Task Icon */}
            <div style={{
              boxSizing: 'border-box',
              overflow: 'hidden',
              flexBasis: '72px',
              width: '72px',
              height: '92px',
              borderRadius: '6px',
              background: '#FFFFFF',
              position: 'relative'
            }}>
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afa5dffa-19c7-4ee7-87ba-5d7269d1eabf"
                alt="Task icon"
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  top: '10px',
                  left: '9.5px',
                  width: '52px',
                  height: '52px'
                }}
              />
              <div style={{
                boxSizing: 'border-box',
                opacity: '0.6',
                position: 'absolute',
                bottom: '11px',
                left: '4px',
                width: '64px',
                textAlign: 'center',
                verticalAlign: 'top',
                fontSize: '10px',
                lineHeight: '15px',
                fontFamily: 'PingFang SC',
                fontWeight: '400',
                color: '#642241'
              }}>
                1.2倍加成卡
              </div>
            </div>
            
            {/* Task Content */}
            <div style={{
              boxSizing: 'border-box',
              flexGrow: 1,
              flexShrink: 1,
              width: '252px',
              height: '64px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0px',
              gap: '8px'
            }}>
              <div style={{
                boxSizing: 'border-box',
                flexBasis: '36px',
                width: '252px',
                height: '36px',
                alignSelf: 'stretch',
                display: 'flex',
                justifyContent: 'normal',
                alignItems: 'center',
                padding: '0px',
                gap: '4px'
              }}>
                <div style={{
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                  flexGrow: 1,
                  flexShrink: 1,
                  width: '166px',
                  height: '44px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '0px',
                  gap: '2px'
                }}>
                  <div style={{
                    boxSizing: 'border-box',
                    flexBasis: '24px',
                    width: '172px',
                    height: '24px',
                    display: 'flex',
                    justifyContent: 'normal',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '10px'
                  }}>
                    <div style={{
                      boxSizing: 'border-box',
                      minWidth: '96px',
                      verticalAlign: 'top',
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontFamily: 'PingFang SC',
                      fontWeight: '500',
                      color: 'var(--task-text-color, #3F2264)'
                    }}>
                      超粉初阶任务
                    </div>
                  </div>
                  <div style={{
                    boxSizing: 'border-box',
                    flexBasis: '18px',
                    width: '172px',
                    height: '18px',
                    display: 'flex',
                    justifyContent: 'normal',
                    padding: '0px',
                    gap: '10px'
                  }}>
                    <div style={{
                      boxSizing: 'border-box',
                      minWidth: '109px',
                      verticalAlign: 'top',
                      fontSize: '12px',
                      lineHeight: '18px',
                      fontFamily: 'PingFang SC',
                      fontWeight: '400',
                      color: 'var(--task-text-keywords-color, #FF5477)'
                    }}>
                      榜单双倍积分+5382
                    </div>
                  </div>
                </div>
                
                {/* Action Button */}
                <div style={{
                  boxSizing: 'border-box',
                  flexBasis: '82px',
                  width: '82px',
                  height: '36px',
                  position: 'relative'
                }}>
                  <div style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '82px',
                    height: '36px'
                  }}>
                    <div style={{
                      boxSizing: 'border-box',
                      position: 'absolute',
                      top: '0px',
                      left: '0px',
                      width: '82px',
                      height: '36px',
                      borderRadius: '100px',
                      background: '#FF344C'
                    }} />
                    <img 
                      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f678dc58-c8c6-4fa4-94ce-b53a0c5ec1ed"
                      alt="Button background"
                      style={{
                        boxSizing: 'border-box',
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        width: '82px',
                        height: '36px'
                      }}
                    />
                    <div style={{
                      boxSizing: 'border-box',
                      opacity: '0.8',
                      position: 'absolute',
                      bottom: '1.5px',
                      left: '2.5px',
                      width: '77px',
                      height: '32px',
                      borderRadius: '100px',
                      background: 'linear-gradient(197.16deg, #ffc6e880 4%, #fff3 33.18%, #fff0 55.1%)'
                    }} />
                  </div>
                  <div style={{
                    boxSizing: 'border-box',
                    width: '82px',
                    height: '36px',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    cursor: 'pointer'
                  }}
                  onClick={() => console.log('去开通 click')}
                  >
                    <div style={{
                      boxSizing: 'border-box',
                      minWidth: '42px',
                      textAlign: 'center',
                      verticalAlign: 'top',
                      fontSize: '14px',
                      lineHeight: '21px',
                      fontFamily: 'PingFang SC',
                      fontWeight: '500',
                      color: 'var(--white-color, #FFFFFF)'
                    }}>
                      去开通
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar - In Progress */}
              <div style={{
                boxSizing: 'border-box',
                flexBasis: '20px',
                width: '252px',
                height: '20px',
                alignSelf: 'stretch',
                borderRadius: '16px',
                background: '#CCA5FF1A',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0px',
                gap: '10px'
              }}>
                <div style={{
                  boxSizing: 'border-box',
                  flexBasis: '20px',
                  width: '148px',
                  height: '20px',
                  borderRadius: '16px',
                  background: 'linear-gradient(90deg, #e0b9ff 7.75%, #c293ff 50%)',
                  position: 'relative'
                }}>
                  <div style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: '1px',
                    left: '8px',
                    verticalAlign: 'top',
                    fontSize: '12px',
                    lineHeight: '18px',
                    fontFamily: 'PingFang SC',
                    fontWeight: '400',
                    color: '#3F2264'
                  }}>
                    5382/10000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
