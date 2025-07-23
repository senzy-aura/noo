import React, { useState } from 'react';
import './histories.css';

// Convert ~~bold~~ and \n to HTML
const FormatBoldText = ({ text }) => {
  const html = text
    .replace(/~~(.*?)~~/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br />');

  return <div className="history-text" dangerouslySetInnerHTML={{ __html: html }} />;
};

const HistoryCard = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);     // Controls all visibility
  const [showExtra, setShowExtra] = useState(false);     // Controls extraText only

  const handleImageClick = () => {
    if (isVisible) {
      // If visible, clicking image hides everything
      setIsVisible(false);
      setShowExtra(false);
    } else {
      // If hidden, show initial text only
      setIsVisible(true);
    }
  };

  const handleToggleText = () => {
    setShowExtra(prev => !prev);
  };

  return (
    <div className="history-card animate-fade-in">
      <h2 className="history-name">{data.name}</h2>
      <img
        className="history-image"
        src={data.image}
        alt={data.name}
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      />

      {isVisible && (
        <>
          <FormatBoldText text={data.initialText} />
          {showExtra && <FormatBoldText text={data.extraText} />}

          {/* ✅ YouTube Subscriber Count Iframe (if channelId exists) */}
          {data.channelId && (
            <iframe
              height="80px"
              width="300px"
              frameBorder="0"
              src={`https://livecounts.io/embed/youtube-live-subscriber-counter/${data.channelId}`}
              style={{ border: 0, width: '300px', height: '80px', marginTop: '10px' }}
              title={`${data.name} Subscriber Count`}
            />
            
          )}
    


          <button className="toggle-button" onClick={handleToggleText}>
            {showExtra ? 'Show Less' : 'Show More'}
          </button>
        </>
      )}
    </div>
  );
};

export default HistoryCard;