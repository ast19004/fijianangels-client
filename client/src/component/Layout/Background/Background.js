import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { useInView } from "react-intersection-observer";
import { Transition } from "react-transition-group";
import { toggleStateByInterval } from "../../../util/toggle";

import mainVideo from "../../../assests/videos/elderly_assistance.mp4";
import styles from "./Background.module.css";

function Background(props) {
  const [displayVideo, setDisplayVideo] = useState(false);
  const [toggleVideoDisplay, setToggleVideoDisplay] = useState(null);
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      !toggleVideoDisplay &&
        setToggleVideoDisplay(toggleStateByInterval(7000, setDisplayVideo));
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
      <Transition in={entry} timeout={500}>
        {(state) => (
          <>
            <Box ref={ref} className={styles.background}>
              <video
                className={`${styles["foreground-video"]} ${
                  displayVideo ? "" : styles.disappear
                }`}
                name="Mobility Assistance"
                autoPlay
                muted
                loop
              >
                <source src={mainVideo} type="video/mp4" />
              </video>
            </Box>
          </>
        )}
      </Transition>
    </Box>
  );
}

export default Background;
