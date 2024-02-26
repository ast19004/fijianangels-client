import { useInView } from "react-intersection-observer";
import { Transition } from "react-transition-group";

import flowerLogo from "../../flowerLogo.svg";
import { Box } from "@mui/material";

function Background() {
  const homeBackgroundStyles = {
    background:
      "linear-gradient(#fff 25%, rgba(5,150,254, 0.77) , rgb(3,51,66) 95%)",
    height: "57vw",
    width: "100vw",
    position: "absolute",
    top: "70px",
    right: "0px",
    zIndex: "-2",
  };

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  return (
    <>
      <Box
        sx={{
          height: "60vw",
          width: "100vw",
          position: "sticky",
          top: "0px",
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
      <Transition in={inView}>
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
    </>
  );
}

export default Background;
