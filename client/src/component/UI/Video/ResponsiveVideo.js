import { useEffect, useState, useRef } from 'react';

const ResponsiveVideo = ({ sources = [], poster = '', ...props }) => {
  const videoRef = useRef(null);  
  const [videoSrc, setVideoSrc] = useState('');

    useEffect(() => {
        const width = window.innerWidth;
    
        // Sort sources by minWidth descending and pick the best match
        const matchedSource = sources
            .sort((a, b) => b.minWidth - a.minWidth)
            .find(source => width >= source.minWidth);

        if (matchedSource) {
            setVideoSrc(matchedSource.src);
        }
    }, [sources]);
  
    // Load and play the video once src is set
  useEffect(() => {
    const video = videoRef.current;
    if (video && videoSrc) {
      video.src = videoSrc;
      video.load();

      // Force playback
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Autoplay was prevented:", error);
        });
      }
    }
  }, [videoSrc]);
    
      
  return (
    <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        poster={poster}
        width="100%"
        {...props}>
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
};

export default ResponsiveVideo;