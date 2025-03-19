import {
  Box,
  Button,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from "@mui/material";
import Review from "./Review";
import Divider from "@mui/material/Divider";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FormInput from "./Inputs/FormInput";
import FormTextInput from "./Inputs/FormTextInput";
import ReviewForm from "./Forms/ReviewForm";
import { useState } from "react";

const Reviews = (props) => {
  const [openForm, setOpenForm] = useState(false);

  const submitReview = () => { }

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "69rem",
        margin: "0 auto",
        position: "relative",
        overflow: "auto",
        maxHeight: 435,
        border: "1px solid rgba(62, 152, 180, 0.4)",
        borderRadius: "15px",
        paddingTop: "0",
      }}
      subheader={<li />}
    >
      <ListSubheader
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: '0.5rem',
          background: !openForm ? 'white' : 'pink',
          marginBottom: !openForm ?'0.5rem' : '-0.4rem' 
        }}
      >
        <Typography
          sx={{
            color: "rgba(0,0,0,0.7)",
            letterSpacing: "2px",
          }}
        >
          <b>REVIEWS</b>
        </Typography>
        {openForm && <Button onClick={() => openForm && setOpenForm(false)}>
          <CloseRoundedIcon sx={{ color: "gray" }} />
        </Button>}
      </ListSubheader>
      {/* <ListItem> */}
      <Box>
        {openForm && <ReviewForm />}
        <Button
          onClick={() => { openForm ? submitReview() : setOpenForm(true)} }
          sx={{
          margin: "0 1%",
          backgroundColor: 'rgb(202, 71, 101)',
          color: 'white',
          letterSpacing: '3px',
          padding: '0.7rem',
          "&:hover": {
            backgroundColor: 'rgb(202, 71, 101)',
            transform: "scale(1.05)"
          }
        }}><b>{openForm ? "Submit Review" : "+ Your Review"}</b></Button>
        </Box>

      {/* </ListItem> */}
      <ListItem>
        <Review />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <Review />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <Review />
      </ListItem>
    </List>
  );
};

export default Reviews;
