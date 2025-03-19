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
          Reviewer's Name
        </Typography>
      </Box>
      <Box>
        <Typography
          component="span"
          sx={{ fontSize: ".9rem", display: "block", color: "#888" }}
        >
          <i>Reviewed on July 10, 2024</i>
        </Typography>
        {/* <Typography
          component="span"
          sx={{ fontSize: ".9rem", display: "block", color: "#888" }}
        >
          In Home Hospice, Light Housekeeping, Meal Planning
        </Typography> */}
        <Typography component="p" sx={{/*{width: "325px"}*/}}>
          onec molestie erat quis porta scelerisque. Duis mattis enim nec
          sollicitudin egestas. In id lectus a erat mollis finibus. Curabitur at
          molestie justo. Pellentesque euismod dolor vitae leo vehicula
          accumsan. Integer sit amet consectetur nisi. Proin maximus nisi dolor,
          at pellentesque elit bibendum nec. Donec suscipit rutrum urna, eget
          sagittis odio consectetur eget.
        </Typography>
      </Box>
    </Box>
  );
};

export default Review;
