import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="sidebar-item">
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3af11e0b-d863-43ae-b61a-42361e981d31" alt="Trim" className="sidebar-icon" />
          <span className="sidebar-text">Trim</span>
        </div>
        <div className="sidebar-item selected">
          <div className="sidebar-item-bg"></div>
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85e74039-8b0b-4e5a-ad86-b4a1bea08a73" alt="Captions" className="sidebar-icon" />
          <span className="sidebar-text selected">Captions</span>
        </div>
        <div className="sidebar-item">
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf15427b-50a6-4243-9b1c-5e5bb00a6871" alt="Music" className="sidebar-icon" />
          <span className="sidebar-text">Music</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="header-tabs">
            <div className="tab selected">
              <span>Captions</span>
              <div className="tab-indicator"></div>
            </div>
            <div className="tab">
              <span>Preset</span>
            </div>
            <div className="tab">
              <span>Custom</span>
            </div>
          </div>
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a351c9c9-c491-40f5-bbce-8afd01a98ce7" alt="Settings" className="settings-icon" />
        </div>

        {/* Content Area */}
        <div className="content-area">
          {/* Caption Item 1 */}
          <div className="caption-item">
            <div className="caption-header">
              <div className="speaker-info">
                <span className="speaker-name speaker-1">Speaker 1</span>
              </div>
              <div className="time-badge">
                <span>12:00:00-12:00:24</span>
              </div>
            </div>
            <div className="caption-text">
              <div className="text-words">
                <span className="word">Hey,</span>
                <span className="word">nice</span>
                <span className="word">to</span>
                <span className="word">meet</span>
                <span className="word">you.</span>
              </div>
            </div>
          </div>

          {/* Caption Item 2 */}
          <div className="caption-item">
            <div className="caption-header">
              <div className="speaker-info">
                <span className="speaker-name speaker-1">Speaker 1</span>
              </div>
              <div className="time-badge">
                <span>12:00:00-12:00:24</span>
              </div>
            </div>
            <div className="caption-text">
              <div className="text-words">
                <span className="word">My</span>
                <span className="word">name</span>
                <span className="word">is</span>
                <span className="word">David.</span>
              </div>
            </div>
          </div>

          {/* Caption Item 3 */}
          <div className="caption-item">
            <div className="caption-header">
              <div className="speaker-info">
                <span className="speaker-name speaker-2">Speaker 2</span>
              </div>
              <div className="time-badge">
                <span>12:00:00-12:00:24</span>
              </div>
            </div>
            <div className="caption-text">
              <div className="text-words">
                <span className="word playing">I'm</span>
                <span className="word playing">the</span>
                <span className="word playing">co-founder</span>
                <span className="word playing">of</span>
                <span className="word playing">CyberCut.</span>
              </div>
            </div>
          </div>

          {/* Caption Item 4 */}
          <div className="caption-item">
            <div className="caption-header">
              <div className="speaker-info">
                <span className="speaker-name speaker-2">Speaker 2</span>
              </div>
              <div className="time-badge">
                <span>12:00:00-12:00:24</span>
              </div>
            </div>
            <div className="caption-text">
              <div className="text-words">
                <span className="word">Welcome</span>
                <span className="word">on</span>
                <span className="word">the</span>
                <span className="word">product.</span>
              </div>
            </div>
          </div>

          {/* Caption Item 5 */}
          <div className="caption-item">
            <div className="caption-header">
              <div className="speaker-info">
                <span className="speaker-name speaker-1">Speaker 1</span>
              </div>
              <div className="time-badge">
                <span>12:00:00-12:00:24</span>
              </div>
            </div>
            <div className="caption-text">
              <div className="text-words">
                <span className="word">So</span>
                <span className="word">if</span>
                <span className="word">you</span>
                <span className="word">are</span>
                <span className="word">watching</span>
                <span className="word">this</span>
                <span className="word">video</span>
                <span className="word">is</span>
                <span className="word">probably</span>
                <span className="word">that</span>
                <span className="word">you</span>
                <span className="word">are.</span>
              </div>
            </div>
          </div>

          {/* Caption Item 6 */}
          <div className="caption-item">
            <div className="caption-header">
              <div className="speaker-info">
                <span className="speaker-name speaker-1">Speaker 1</span>
              </div>
              <div className="time-badge">
                <span>12:00:00-12:00:24</span>
              </div>
            </div>
            <div className="caption-text">
              <div className="text-words">
                <span className="word">What</span>
                <span className="word">kind</span>
                <span className="word">of</span>
                <span className="word">style</span>
                <span className="word">of</span>
                <span className="word">templates</span>
                <span className="word">and</span>
                <span className="word">style.</span>
              </div>
            </div>
          </div>

          {/* Caption Item 7 */}
          <div className="caption-item">
            <div className="caption-header">
              <div className="speaker-info">
                <span className="speaker-name speaker-1">Speaker 1</span>
              </div>
              <div className="time-badge">
                <span>12:00:00-12:00:24</span>
              </div>
            </div>
            <div className="caption-text">
              <div className="text-words">
                <span className="word">So</span>
                <span className="word">a</span>
                <span className="word">good</span>
                <span className="word">test</span>
                <span className="word">it.</span>
              </div>
            </div>
          </div>

          {/* Caption Item 8 */}
          <div className="caption-item">
            <div className="caption-header">
              <div className="speaker-info">
                <span className="speaker-name speaker-1">Speaker 1</span>
              </div>
              <div className="time-badge">
                <span>12:00:00-12:00:24</span>
              </div>
            </div>
            <div className="caption-text">
              <div className="text-words">
                <span className="word">Go</span>
                <span className="word">on</span>
                <span className="word">the</span>
                <span className="word">section</span>
                <span className="word">templates</span>
                <span className="word">and</span>
                <span className="word">style.</span>
              </div>
            </div>
          </div>

          {/* Caption Item 9 */}
          <div className="caption-item">
            <div className="caption-header">
              <div className="speaker-info">
                <span className="speaker-name speaker-1">Speaker 1</span>
              </div>
              <div className="time-badge">
                <span>12:00:00-12:00:24</span>
              </div>
            </div>
            <div className="caption-text">
              <div className="text-words">
                <span className="word">You</span>
                <span className="word">can</span>
                <span className="word">customize</span>
                <span className="word">it</span>
                <span className="word">and</span>
                <span className="word">as</span>
                <span className="word">well</span>
                <span className="word">you</span>
                <span className="word">can</span>
                <span className="word">go</span>
                <span className="word">on</span>
                <span className="word">the</span>
                <span className="word">B-Rolls.</span>
              </div>
            </div>
          </div>

          {/* Caption Item 10 */}
          <div className="caption-item">
            <div className="caption-header">
              <div className="speaker-info">
                <span className="speaker-name speaker-2">Speaker 2</span>
              </div>
              <div className="time-badge">
                <span>12:00:00-12:00:24</span>
              </div>
            </div>
            <div className="caption-text">
              <div className="text-words">
                <span className="word">Transitions,</span>
                <span className="word">zoom</span>
                <span className="word">effects,</span>
                <span className="word">whatever</span>
                <span className="word">you</span>
                <span className="word">want.</span>
              </div>
            </div>
          </div>

          {/* Caption Item 11 */}
          <div className="caption-item">
            <div className="caption-header">
              <div className="speaker-info">
                <span className="speaker-name speaker-2">Speaker 2</span>
              </div>
              <div className="time-badge">
                <span>12:00:00-12:00:24</span>
              </div>
            </div>
            <div className="caption-text">
              <div className="text-words">
                <span className="word">Feel</span>
                <span className="word">free</span>
                <span className="word">to</span>
                <span className="word">use</span>
                <span className="word">the</span>
                <span className="word">product.</span>
              </div>
            </div>
          </div>

          {/* Caption Item 12 */}
          <div className="caption-item">
            <div className="caption-header">
              <div className="speaker-info">
                <span className="speaker-name speaker-2">Speaker 2</span>
              </div>
              <div className="time-badge">
                <span>12:00:00-12:00:24</span>
              </div>
            </div>
            <div className="caption-text">
              <div className="text-words">
                <span className="word">If</span>
                <span className="word">you</span>
                <span className="word">have</span>
                <span className="word">any</span>
                <span className="word">question,</span>
                <span className="word">reach</span>
                <span className="word">us</span>
                <span className="word">on</span>
                <span className="word">the</span>
                <span className="word">bottom</span>
                <span className="word">on</span>
                <span className="word">the</span>
                <span className="word">right</span>
                <span className="word">to</span>
                <span className="word">know</span>
                <span className="word">more.</span>
              </div>
            </div>
          </div>

          {/* Scrollbar */}
          <div className="scrollbar"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
