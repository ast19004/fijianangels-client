import flowerLogo from "../../flowerLogo.svg";
import { Box } from "@mui/material";

import { useInView } from "react-intersection-observer";
import { Transition } from "react-transition-group";

import homeCareImg500px from "../../assests/images/homecare-main500px.jpg";
import homeCareImg800px from "../../assests/images/homecare-main800px.jpg";
import homeCareImg1300pxHeight from "../../assests/images/homecare-main1300px-height.jpg";
import homeCareImg from "../../assests/images/homecare-main.jpg";

function Background() {
  const homeBackgroundStyles = {
    backgroundImage: `url(${homeCareImg500px})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "92vh",
    width: "100vw",
    position: "relative",
    top: "15px",
    right: "0px",
    zIndex: "-2",
    "@media(min-width: 400px)": {},
    "@media(min-width: 500px)": {
      backgroundImage: `url(${homeCareImg800px})`,
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
    <>
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
            <Box
              sx={{
                position: "absolute",
                top: "20px",
                zIndex: "-1",
                display: "flex",
                justifyContent: "end",
                height: "30vh",
                width: "100vw",
                right: "0px",

                transition: "all 1s ease-in",
                transitionDelay: "0.5s",
                opacity: state === "entered" ? 0.6 : 0,
                "@media(min-width: 500px)": {
                  height: "40vh",
                },
                "@media(min-width: 900px)": {
                  height: "50vh",
                },
                "@media(min-width: 1200px)": {
                  height: "60vh",
                },
                "@media(min-width: 1000px)": {
                  height: "80vh",
                },
                "@media(min-width: 800px) and (min-height: 1000px)": {
                  height: "30vh",
                },
              }}
            >
              <img
                style={{
                  display: "block",
                }}
                src={flowerLogo}
                alt="flower logo"
              />
            </Box>
          </>
        )}
      </Transition>
    </>
  );
}

export default Background;
