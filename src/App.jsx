import { useState, useEffect } from "react";
import "./App.css";

// Docker whale pixel map (16x10)
const WHALE_PIXELS = [
  [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],
  [0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0],
  [0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0],
];

function PixelWhale() {
  return (
    <div className="pixel-mascot">
      <div className="pixel-grid">
        {WHALE_PIXELS.flat().map((px, i) => (
          <div key={i} className={`px ${px ? "on" : ""}`} />
        ))}
      </div>
    </div>
  );
}

// Web Audio API beep — no files needed
function playBeep(freq = 1200, duration = 0.07) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = freq;
    osc.type = "square"; // that classic Nokia tone type
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // silently fail if audio not supported
  }
}

const TABS = ["ABOUT", "CMDS", "HUB"];

const CONTENT = {
  ABOUT: (
    <>
      <h2>:: DOCKER ::</h2>
      <p>
        Docker lets you build, ship and run apps inside lightweight containers.
      </p>
      <p>
        A container is a box with your app + everything it needs. Works the
        same on any machine.
      </p>
      <p>No more "works on my machine".</p>
    </>
  ),
  CMDS: (
    <>
      <h2>:: COMMANDS ::</h2>
      <p>Pull image:</p>
      <div className="command-block">docker pull nginx</div>
      <p>Run container:</p>
      <div className="command-block">docker run -d -p 80:80 nginx</div>
      <p>List running:</p>
      <div className="command-block">docker ps</div>
      <p>Stop it:</p>
      <div className="command-block">docker stop [ID]</div>
      <p>Remove it:</p>
      <div className="command-block">docker rm [ID]</div>
    </>
  ),
  HUB: (
    <>
      <h2>:: DOCKER HUB ::</h2>
      <p>World's largest container image registry.</p>
      <p>Find official images:</p>
      <div className="command-block">hub.docker.com</div>
      <p>Login:</p>
      <div className="command-block">docker login</div>
      <p>Push your image:</p>
      <div className="command-block">docker push user/app:v1</div>
      <p>Pull from Hub:</p>
      <div className="command-block">docker pull user/app:v1</div>
    </>
  ),
};

function getTime() {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

const NUMPAD = [
  { num: "1", letters: "○○" },
  { num: "2", letters: "abc" },
  { num: "3", letters: "def" },
  { num: "4", letters: "ghi" },
  { num: "5", letters: "jkl" },
  { num: "6", letters: "mno" },
  { num: "7", letters: "pqrs" },
  { num: "8", letters: "tuv" },
  { num: "9", letters: "wxyz" },
  { num: "*", letters: "+" },
  { num: "0", letters: "_" },
  { num: "#", letters: "⌂" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(null);
  const [time, setTime] = useState(getTime());
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTab = (tab) => {
    if (locked) return;
    playBeep(1200, 0.07);
    setActiveTab(tab);
  };

  const handleHome = () => {
    if (locked) {
      // unlock
      playBeep(800, 0.1);
      setLocked(false);
    } else {
      playBeep(900, 0.08);
      setActiveTab(null);
    }
  };

  const handleLock = () => {
    playBeep(400, 0.15);
    setLocked((prev) => !prev);
  };

  const handleKey = () => {
    if (locked) return;
    playBeep(1400, 0.05);
  };

  return (
    <div className="phone-container">
      {/* Logo */}
      <div className="nokia-logo">Nokia</div>

      {/* Screen — always same fixed height */}
      <div className={`screen-wrapper ${locked ? "locked" : ""}`}>
        {locked ? (
          <div className="lock-screen">
            <div className="lock-icon">🔒</div>
            <div className="lock-time">{time}</div>
            <div className="lock-hint">PRESS ☎ TO UNLOCK</div>
          </div>
        ) : (
          <div className="screen-inner">
            <div className="screen-header">
              <div className="signal-bars">
                <span /><span /><span /><span />
              </div>
              <div className="screen-time">{time}</div>
            </div>

            {activeTab === null ? (
              <div className="home-screen">
                <div className="screen-title">DOCKER 3310</div>
                <PixelWhale />
                <div className="screen-menu-label">Menü</div>
              </div>
            ) : (
              <div className="content-screen">
                <div className="content-scroll">
                  {CONTENT[activeTab]}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Nav tabs */}
      <div className="nav-row">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`nav-btn ${activeTab === tab ? "active-tab" : ""}`}
            onClick={() => handleTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Call + center */}
      <div className="call-row">
        <button className="call-btn green" onClick={handleHome}>
          ☎
        </button>
        <button className="center-btn" onClick={handleHome} />
        <button className="call-btn red" onClick={handleLock}>
          ✕
        </button>
      </div>

      {/* Numpad */}
      <div className="numpad">
        {NUMPAD.map((k) => (
          <button
            key={k.num}
            className={`key ${["*", "#"].includes(k.num) ? "special" : ""}`}
            onClick={handleKey}
          >
            <span className="key-num">{k.num}</span>
            <span className="key-letters">{k.letters}</span>
          </button>
        ))}
      </div>
    </div>
  );
}