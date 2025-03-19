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

const Reviews = (props) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "69rem",
        margin: "0 auto",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        border: "1px solid rgba(62, 152, 180, 0.4)",
        borderRadius: "15px",
        paddingTop: "0",
      }}
      subheader={<li />}
    >
      <ListSubheader
        sx={{
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "space-between",
          padding: '0.5rem'
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
        {/* <Button onClick={props.onClose}>
          <CloseRoundedIcon sx={{ color: "gray" }} />
        </Button> */}
      </ListSubheader>
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
