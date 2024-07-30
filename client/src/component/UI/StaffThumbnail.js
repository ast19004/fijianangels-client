import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import Reviews from "./Reviews";
import { useState } from "react";

function StaffThumbnail(props) {
  const [showReviews, setShowReviews] = useState(false);

  const handleReviewDisplay = () => {
    setShowReviews((prev) => !prev);
  };
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{
          objectFit: "cover",
          objectPosition: "50% 0%",
          height: showReviews
            ? {
                xs: "600px", // Height for extra-small screens
                sm: "350px", // Height for small screens
                md: "450px", // Height for medium screens
                lg: "350px", // Height for large screens
              }
            : {
                xs: "500px", // Height for extra-small screens
                sm: "250px", // Height for small screens
                md: "350px", // Height for medium screens
                lg: "250px", // Height for large screens
              },
        }}
        component="img"
        image={props.image}
        alt={props.name}
        // height={showReviews ? "400px" : "300px"}
      />
      <CardContent sx={{ padding: "10px 16px 0 16px " }}>
        <Typography variant="body2" color="#066988">
          {props.staffMember}
        </Typography>
      </CardContent>
      {/* TODO: Look into ExpandMore https://mui.com/material-ui/react-card/ */}
      {!showReviews && (
        <CardActions sx={{ padding: "0 8px" }}>
          <Button onClick={handleReviewDisplay}>client reviews</Button>
        </CardActions>
      )}
      {showReviews && (
        <>
          <br />
          <CardContent sx={{ paddingTop: "0" }}>
            <Reviews onClose={handleReviewDisplay} />
          </CardContent>
        </>
      )}
    </Card>
  );
}

export default StaffThumbnail;
