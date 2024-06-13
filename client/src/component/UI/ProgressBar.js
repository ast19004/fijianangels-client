import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const ProgressBar = (props) => {
  const barWidth = 350;
  const barHeight = 16;
  const barColor = "rgba(62, 152, 180, 0.9)";
  const segmentWidth = Math.floor(barWidth / props.steps);
  const [progressWidth, setProgressWidth] = useState(segmentWidth);

  useEffect(() => {
    if (props.currentStep === 1) {
      setProgressWidth(segmentWidth);
    } else if (props.currentStep === props.steps) {
      setProgressWidth(barWidth);
    } else {
      setProgressWidth(segmentWidth * props.currentStep);
    }
  }, [props.steps, props.currentStep, segmentWidth, progressWidth]);

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
          borderRadius:
            props.currentStep !== props.steps ? "10px 0 0 10px" : "10px",
        }}
      />
    </Box>
  );
};

export default ProgressBar;
