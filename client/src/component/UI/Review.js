import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircleTwoTone";

const Review = (props) => {
  return (
    <Box sx={{padding: "0.2rem 0"}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#555",
          gap: ".2rem",
        }}
      >
        <AccountCircleIcon fontSize="small" />
        <Typography
          component="span"
          sx={{ fontSize: "1rem", display: "block" }}
        >
          { props.reviewerName}
        </Typography>
      </Box>
      <Box sx={{
        background: 'white',
        padding: "0.2rem 1rem 1rem 1rem",
        border: "1px solid #ca4765e6",
        borderRadius: "0 3rem 4rem 3rem"}}>
        <Typography
          component="span"
          sx={{ fontSize: ".9rem", display: "block", color: "#888" }}
        >
          <i>Reviewed on {props.reviewDate}</i>
        </Typography>
        {/* <Typography
          component="span"
          sx={{ fontSize: ".9rem", display: "block", color: "#888" }}
        >
          In Home Hospice, Light Housekeeping, Meal Planning
        </Typography> */}
        <Typography component="p">
          { props.review} 
        </Typography>
      </Box>
    </Box>
  );
};

export default Review;
