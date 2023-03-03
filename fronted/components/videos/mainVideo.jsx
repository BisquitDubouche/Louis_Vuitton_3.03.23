import { useState } from 'react';
import { Parallax } from 'react-parallax';

const VideoBackground = ({ src }) => {
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <Parallax
    
    >
      <div>
        <h1>
          WOMEN'S SPRING-SUMMER 2023 COLLECTION
        </h1>
        <button>Discover the Collection</button>
      </div>
      </Parallax>
  );
};

export default VideoBackground;
