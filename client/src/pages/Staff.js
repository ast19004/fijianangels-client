import { Box, Grid, Typography } from "@mui/material";
import StaffThumbnail from "../component/UI/StaffThumbnail";

import staff1 from "../assests/images/staff1-400px.jpg";
import staff2 from "../assests/images/staff2-400px.jpg";
import staff3 from "../assests/images/staff3-400px.jpg";
import noImage from "../assests/images/no-image.svg";

function Staff(props) {
  const staffMembers = [
    {
      staffMember: "Name 1",
      image: staff1,
    },
    {
      staffMember: "Name 2",
      image: staff2,
    },
    {
      staffMember: "Name 3",
      image: staff3,
    },
    {
      staffMember: "Name 4",
      image: noImage,
    },
    {
      staffMember: "Name 5",
      image: noImage,
    },
    {
      staffMember: "Name 6",
      image: noImage,
    },
    {
      staffMember: "Name 7",
      image: noImage,
    },
    {
      staffMember: "Name 8",
      image: noImage,
    },
  ];
  return (
    <Box id="staff">
      <Typography variant="h2" color="#ca4766" sx={{ paddingBottom: "1rem" }}>
        MEET OUR STAFF
      </Typography>
      <Grid
        container
        spacing={2}
        // sx={{
        //   width: "100%",
        //   position: "relative",
        //   overflowX: "scroll",
        //   maxHeight: "390px",
        // }}
      >
        {staffMembers.map((member) => (
          <Grid item key={member.staffMember}>
            <StaffThumbnail
              image={member.image}
              staffMember={member.staffMember}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Staff;
