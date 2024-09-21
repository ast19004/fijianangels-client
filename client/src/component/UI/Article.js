import { Box, Typography } from "@mui/material";

function Article(props) {
  return (
    <Box component="article" id={props.id} key={props.id} sx={{ ...props.sx }}>
      <Typography
        variant={props.variant ? props.variant : "h2"}
        component={props.component ? props.component : "h2"}
        color="#ca4766"
      >
        {props.header}
      </Typography>
      {props.children}
    </Box>
  );
}

export default Article;
