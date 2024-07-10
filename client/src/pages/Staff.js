import { Box, Grid, Typography } from "@mui/material";
import StaffThumbnail from "../component/UI/StaffThumbnail";

import staff1 from "../assests/images/staff1-400px.jpg";
import staff2 from "../assests/images/staff2-400px.jpg";

function Staff(props) {
  const staffMembers = [
    {
      staffMember: "Kyle Colata",
      image: staff2,
    },
    {
      staffMember: "Ana Colata",
      image: staff1,
    },
    {
      staffMember: "Kyle Colata",
      image: staff2,
    },
    {
      staffMember: "Ana Colata",
      image: staff1,
    },
    {
      staffMember: "Kyle Colata",
      image: staff2,
    },
    {
      staffMember: "Ana Colata",
      image: staff1,
    },
    {
      staffMember: "Kyle Colata",
      image: staff2,
    },
    {
      staffMember: "Ana Colata",
      image: staff1,
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
