import flowerLogo from "../../flowerLogo.svg";
import { Box } from "@mui/material";

import { useInView } from "react-intersection-observer";
import { Transition } from "react-transition-group";

import homeCareImg600px from "../../assests/images/homecare-main600px.jpg";
import homeCareImg900px from "../../assests/images/homecare-main900px.jpg";
import homeCareImg1300pxHeight from "../../assests/images/homecare-main1300px-height.jpg";
import homeCareImg from "../../assests/images/homecare-main.jpg";

function Background() {
  const homeBackgroundStyles = {
    backgroundImage: `url(${homeCareImg600px})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left 15%",
    backgroundSize: "cover",
    height: "92vh",
    width: "100vw",
    position: "relative",
    top: "15px",
    right: "0px",
    zIndex: "0",
    "@media(min-width: 400px)": {},
    "@media(min-width: 500px)": {
      backgroundImage: `url(${homeCareImg900px})`,
    },
    "@media(min-width: 800px)": {
      top: "0px",
      backgroundImage: `url(${homeCareImg})`,
      backgroundPosition: "top center",
    },
    "@media(min-width: 800px) and (min-height: 1000px)": {
      backgroundImage: `url(${homeCareImg1300pxHeight})`,
    },
  };

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

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
                opacity: state === "entered" ? 1 : 0,
              }}
            ></Box>
            {/* <Box
              sx={{
                position: "absolute",
                top: "-16%",
                right: "-5%",
                rotate: "20deg",
                zIndex: "0",
                display: "flex",
                justifyContent: "end",
                height: "35vh",

                transition: "all 1s ease-in",
                transitionDelay: "0.5s",
                opacity: state === "entered" ? 0.75 : 0,
              }}
            >
              <img
                style={{
                  display: "block",
                }}
                src={flowerLogo}
                alt="flower logo"
              />
            </Box> */}
          </>
        )}
      </Transition>
    </Box>
  );
}

export default Background;
