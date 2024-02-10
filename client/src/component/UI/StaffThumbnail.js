import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function StaffThumbnail(props) {
  return (
    <Card sx={{ maxWidth: "350px" }}>
      <CardMedia
        component="img"
        image={props.image}
        alt={props.name}
        height="300px"
      />
      <CardContent>
        <Typography variant="body2" color="#066988">
          {props.staffMember}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>client reviews</Button>
        {/* TODO: Look into ExpandMore https://mui.com/material-ui/react-card/ */}
      </CardActions>
    </Card>
  );
}

export default StaffThumbnail;
