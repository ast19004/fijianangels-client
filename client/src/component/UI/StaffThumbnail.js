import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import Reviews from "./Reviews";

function StaffThumbnail(props) {
  return (
    <Card sx={{ minWidth: "300px" }}>
      <CardMedia
        sx={{ objectFit: "cover", objectPosition: "0% 0%" }}
        component="img"
        image={props.image}
        alt={props.name}
        height="300px"
      />
      <CardContent sx={{ padding: "10px 16px 0 16px " }}>
        <Typography variant="body2" color="#066988">
          {props.staffMember}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "0 8px" }}>
        <Button>client reviews</Button>
        {/* TODO: Look into ExpandMore https://mui.com/material-ui/react-card/ */}
      </CardActions>
      <CardContent sx={{ paddingTop: "0" }}>
        <Reviews />
      </CardContent>
    </Card>
  );
}

export default StaffThumbnail;
