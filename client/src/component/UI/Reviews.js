import {
  Button,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from "@mui/material";
import Review from "./Review";
import Divider from "@mui/material/Divider";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ReviewForm from "./Forms/ReviewForm";
import { useCallback, useEffect, useState } from "react";
import CustomButton2 from "./Buttons/CustomButton2";

import { serverPath } from "../../domainpath"; 

const Reviews = (props) => {
  const [openForm, setOpenForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReviews = useCallback(async () => { 
          try {
        const response = await fetch(`${serverPath}/reviews`, {
          method: "GET",
          headers: { "Accepts": "application/json" },
        });
        const result = await response.json();
            if (result.reviews.length !== 0) {
              setReviews(result.reviews);
              openForm && setOpenForm(false);
            } else { 
              setReviews([]);
              !openForm && setOpenForm(true);
            }
        if (response.ok) {
          //Reset form
        }

      } catch (error) {
        console.error("Error retrieveing reviews:", error);
      }
    }
  , []);

  useEffect(() => {fetchReviews()}, [])


  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "69rem",
        margin: "0 auto",
        position: "relative",
        overflow: "auto",
        maxHeight: openForm ? 455 : 425,
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
          padding: !openForm ? '1rem' : '1.2rem',
          background: 'white',
          marginBottom: !openForm ? '0.5rem' : '-0.4rem',
          borderBottom: !openForm ? '2px solid rgba(62, 20, 30, 0.2)' : 'none'
        }}
      >
        <Typography
          sx={{
            color:'rgba(96, 125, 173, 255)',
            letterSpacing: "2px",
          }}
        >
          <b>{openForm ? "SHARE YOUR THOUGHTS": "REVIEWS"}</b>
        </Typography>
        {openForm ?
          (<Button onClick={() => setOpenForm(false)}>
          <CloseRoundedIcon sx={{ color: "rgb(202, 71, 101)" }} />
          </Button>) :
          (<CustomButton2 onClick={() => setOpenForm(true)}><b>Create Review</b></CustomButton2>)
        }
      </ListSubheader>
      {/* <ListItem> */}

      {openForm && <><ReviewForm sx={{ padding: '0 1%' }} onAddReview={() => { fetchReviews(); setOpenForm(false); }} /> <hr /></>}
      {/* </ListItem> */}
      {reviews.length > 0 &&
        reviews.map(reviewItem => (  
        <>
        <ListItem>
            <Review
              reviewDate={reviewItem.reviewDate}
              reviewerName={reviewItem.reviewerName }
              review={ reviewItem.review}
            />
        </ListItem>
        <Divider component="li" />
        </>
      ))}
    </List>
  );
};

export default Reviews;
