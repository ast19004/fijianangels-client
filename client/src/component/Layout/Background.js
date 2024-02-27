import { useInView } from "react-intersection-observer";
import { Transition } from "react-transition-group";

import flowerLogo from "../../flowerLogo.svg";
import { Box } from "@mui/material";

function Background() {
  const homeBackgroundStyles = {
    background:
      "linear-gradient(#fff 25%, rgba(5,150,254, 0.77) , rgb(3,51,66) 90%)",
    height: "92vh",
    width: "100vw",
    position: "relative",
    top: "0px",
    right: "0px",
    zIndex: "-2",
  };

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <>
      <Transition in={!inView} timeout={1000}>
        {(state) => (
          <Box
            ref={ref}
            sx={{
              ...homeBackgroundStyles,
              transition: "opacity 0.75s ease-in-out",
              opacity: state === "entered" ? 1 : 0,
            }}
          ></Box>
        )}
      </Transition>
      <Box
        sx={{
          height: "75vh",
          width: "100vw",
          position: "absolute",
          top: "70px",
          right: "0px",
          zIndex: "-1",
          display: "flex",
          justifyContent: "end",
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
  );
}

export default Background;
