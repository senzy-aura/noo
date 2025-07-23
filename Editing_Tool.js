import React, { useState } from 'react';
import './Editing_Tool.css';

function Editing_Tool() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [sharpness, setSharpness] = useState(100);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoSrc(URL.createObjectURL(file));
    }
  };

  const videoStyle = {
    filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${sharpness}%)`
  };
  

  return (
    <div className="editing-tool-container">
      <h2>Video Editing Tool</h2>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />

      {videoSrc && (
        <div className="video-section">
          <video 
            src={videoSrc} 
            controls 
            style={videoStyle} 
            className="video-preview"
          />

          <div className="sliders">
            <div className="slider-group">
              <label>Brightness: {brightness}%</label>
              <input
                type="range"
                min="50"
                max="150"
                value={brightness}
                onChange={(e) => setBrightness(e.target.value)}
              />
            </div>

            <div className="slider-group">
              <label>Contrast (Exposure): {contrast}%</label>
              <input
                type="range"
                min="50"
                max="150"
                value={contrast}
                onChange={(e) => setContrast(e.target.value)}
              />
            </div>

            <div className="slider-group">
              <label>Sharpness (Saturation): {sharpness}%</label>
              <input
                type="range"
                min="50"
                max="200"
                value={sharpness}
                onChange={(e) => setSharpness(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Editing_Tool;
