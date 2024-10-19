// app/components/SpotifyEmbed.jsx
import React from 'react';

const SpotifyEmbed = () => {
  return (
    <div style={{ overflow: 'hidden', borderRadius: '12px' }}>
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3x2k4o?utm_source=generator&theme=0"
        width="100%"
        height="300"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: '12px' }}
      />
    </div>
  );
};

export default SpotifyEmbed;
