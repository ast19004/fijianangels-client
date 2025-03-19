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
        maxHeight: openForm ? 435 : 400,
        border: "1px solid rgba(62, 152, 180, 0.4)",
        borderRadius: "15px",
        boxShadow: "2px 3px 10px #888",
        paddingTop: "0",
      }}
      subheader={<li />}
    >
      <ListSubheader
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: !openForm ? '1rem' : '0.6rem',
          background: !openForm ? 'white' : 'rgba(202, 71, 101, 0.7)',
          marginBottom: !openForm ? '0.5rem' : '-0.4rem',
          borderBottom: !openForm ? '2px solid rgba(62, 20, 30, 0.2)' : 'none'
        }}
      >
        <Typography
          sx={{
            color: !openForm ? 'rgba(0,0,0,0.7)' : 'white',
            letterSpacing: "2px",
          }}
        >
          <b>REVIEWS</b>
        </Typography>
        {openForm && <Button onClick={() => openForm && setOpenForm(false)}>
          <CloseRoundedIcon sx={{ color: "white" }} />
        </Button>}
      </ListSubheader>
      {/* <ListItem> */}
      <Box>
        {openForm && <ReviewForm sx={{padding: '0 1%'}}/>}
        <Button
          onClick={() => { openForm ? submitReview() : setOpenForm(true)} }
          sx={{
          margin: "0 1%",
          backgroundColor: 'rgb(202, 71, 101)',
          color: 'white',
          letterSpacing: '3px',
          padding: '0.7rem',
          border: '2px solid white',
          borderRadius: '15px',
          boxShadow: "2px 3px 10px #888", 
          marginBottom: !openForm ? '0rem':'0.5rem',
          "&:hover": {
            backgroundColor: 'rgb(202, 71, 101)',
            transform: "scale(1.05)"
          }
          }}><b>{openForm ? "Submit Review" : "+ Your Review"}</b></Button>
         {openForm && <hr/>}
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
