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
    <Card sx={{ minWidth: "220px" }}>
      <CardMedia
        component="img"
        image={props.image}
        alt={props.name}
        height="200px"
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
