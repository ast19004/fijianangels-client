import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const ProgressBar = (props) => {
  // props.value of 1 is equal to 100% of barWidth
  const [progressWidth, setProgressWidth] = useState();
  const barWidth = 350;
  const barHeight = 16;
  const barColor = "#066988";

  useEffect(() => {
    setProgressWidth(barWidth * props.value);
  }, [props.value]);

  return (
    <Box
      sx={{
        width: `${barWidth}px`,
        height: `${barHeight}px`,
        border: `1px solid ${barColor}`,
        borderRadius: "10px",
        marginBottom: "15px",
      }}
    >
      <Box
        sx={{
          width: `${progressWidth}px`,
          height: `${barHeight}px`,
          backgroundColor: barColor,
          borderRadius: props.value !== 1 ? "10px 0 0 10px" : "10px",
        }}
      />
    </Box>
  );
};

export default ProgressBar;
