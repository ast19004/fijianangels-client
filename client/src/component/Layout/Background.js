import flowerLogo from "../../flowerLogo.svg";
import { Box } from "@mui/material";
import homeCareImg from "../../assests/images/homecare-main.jpg";

function Background() {
  const homeBackgroundStyles = {
    backgroundImage: `url(${homeCareImg})`,
    height: "92vh",
    width: "100vw",
    position: "relative",
    top: "0px",
    right: "0px",
    zIndex: "-2",
  };

  return (
    <>
      <Box
        sx={{
          ...homeBackgroundStyles,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          zIndex: "-1",
          display: "flex",
          justifyContent: "end",
          height: "80vh",
          width: "100vw",
          right: "0px",
          opacity: "0.6",
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
