import { Box } from "@mui/material";

import { useInView } from "react-intersection-observer";
import { Transition } from "react-transition-group";
import { toggleStateByInterval } from "../../util/toggle";

import homeCareImg600px from "../../assests/images/1500px.jpg";

import mainVideo from "../../assests/videos/elderly_assistance.mp4";
import { useEffect, useState } from "react";

function Background() {
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

  const homeBackgroundStyles = {
    backgroundImage: `url(${homeCareImg600px})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left 35%",
    backgroundSize: "cover",
    height: "86vh",
    width: "100vw",
    position: "relative",
    top: "0",
    right: "0",
    zIndex: "0",
    "@media(min-width: 55rem)": {
      height: "85vh",
    },
    "@media(min-width: 75rem)": {
      height: "84vh",
    },
    "@media(min-width: 100rem)": {
      height: "83vh",
    },
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Transition in={entry} timeout={500}>
        {(state) => (
          <>
            <Box
              ref={ref}
              sx={{
                ...homeBackgroundStyles,
                transition: "all 1s ease-in",
              }}
            >
              <video
                name="Mobility Assistance"
                autoPlay
                muted
                loop
                style={{
                  transition: "opacity 1s",
                  opacity: displayVideo ? 1 : 0,
                  position: "absolute",
                  top: "0",
                  left: "0",
                  maxHeight: "100%",
                  width: "auto",
                }}
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
