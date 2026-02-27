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
        <AccountCircleIcon fontSize="small" sx={{color: "rgba(202, 71, 101, 0.9)"}} />
        <Typography
          component="span"
          sx={{ fontSize: "1rem", display: "block", background: 'rgba(255,255,255,0.9)', color: 'rgb(96, 125, 173)' }}
        >
          { props.reviewerName}
        </Typography>
      </Box>
      <Box sx={{
        position: 'relative',
        background: 'white',
        marginTop: '0.5rem',
        padding: "0.2rem 1rem 1rem 1rem",
        border: "1px solid #ca4765e6",
        borderRadius: "4px 3rem 4.5rem 3rem",
        // Target the ::before (The Border of the tail)
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-6px',
          left: '4px',
          width: '10px',
          height: '10px',
          backgroundColor: 'white',
          borderLeft: '1px solid #ca4765e6',
          borderTop: '1px solid #ca4765e6',
          transform: 'rotate(45deg)',
    },

      
      }}>
        <Typography
          component="span"
          sx={{ fontSize: ".9rem", display: "block", color: "#888" }}
        >
          <i>Reviewed on {props.reviewDate}</i>
        </Typography>
        <Typography component="p">
          { props.review} 
        </Typography>
      </Box>
    </Box>
  );
};

export default Review;
