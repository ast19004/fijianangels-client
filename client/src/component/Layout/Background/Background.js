import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { useInView } from "react-intersection-observer";
import { Transition } from "react-transition-group";
import { toggleStateByInterval } from "../../../util/toggle";

import ResponsiveVideo from '../../UI/Video/ResponsiveVideo';

import video480 from '../../../assests/videos/elderly_assistance-480p.mp4';
import video720 from '../../../assests/videos/elderly_assistance-720p.mp4';
import video1080 from '../../../assests/videos/elderly_assistance-1080p.mp4';
import mainVideo from "../../../assests/videos/elderly_assistance.mp4";

import styles from "./Background.module.css";

const sources = [
  {minWidth: 0, src: video480},
  {minWidth: 480, src: video720},
  {minWidth: 720, src: video1080},
  {minWidth: 1080, src: mainVideo}
];

function Background(props) {
  const [displayVideo, setDisplayVideo] = useState(false);
  const [toggleVideoDisplay, setToggleVideoDisplay] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  useEffect(() => { 
    const timer = setTimeout(() => setShowImage(true), 2000); // Delay by 2s

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  useEffect(() => {
    if (inView & showImage) {
      !toggleVideoDisplay &&
        setToggleVideoDisplay(toggleStateByInterval(3000, setDisplayVideo));
    } else {
      // Clean up the interval when out of view
      clearInterval(toggleVideoDisplay);

      //Reset original states
      setToggleVideoDisplay(null);
      setDisplayVideo(false);
    }
    // Clean up the interval on component unmount
    return () => {
      clearInterval(toggleVideoDisplay);
      //Reset original states
      setToggleVideoDisplay(null);
      setDisplayVideo(false);
    };
  }, [inView]);

  return (
    <Box className={styles.background_container} sx={{ ...props.sx }}>
      <Transition in={inView} timeout={500}>
        {(state) => (
          <>
            <Box ref={ref} className={styles.background} sx={{ opacity: showImage ? 1 : 0 }}>
              <ResponsiveVideo
                sources={sources}
                className={`${styles["foreground-video"]} ${
                  displayVideo ? "" : styles.disappear
                }`}
                name="Mobility Assistance"/>
            </Box>
          </>
        )}
      </Transition>
    </Box>
  );
}

export default Background;
