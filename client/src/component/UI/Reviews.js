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
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        border: "1px solid rgba(62, 152, 180, 0.4)",
        borderRadius: "5px",
        paddingTop: "0",
      }}
      subheader={<li />}
    >
      <ListSubheader
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ color: "#066988" }}>Reviews</Typography>
        <Button onClick={props.onClose}>
          <CloseRoundedIcon sx={{ color: "gray" }} />
        </Button>
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
