import { Box, Button, Grid, Typography } from "@mui/material";
import StaffThumbnail from "../component/UI/StaffThumbnail";

import staff1 from "../assests/images/staff1-400px.jpg";
import staff2 from "../assests/images/staff2-400px.jpg";
import staff3 from "../assests/images/staff3-400px.jpg";
import noImage from "../assests/images/svg/no-image.svg";

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
    <Box id="staff" sx={{ display: "grid" }}>
      <Typography
        variant="h5"
        align="center"
        color="#ca4766"
        sx={{
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          border: "3px solid rgba(202, 71, 101, 1)",
          color: "white",
          backgroundColor: "rgba(2, 26, 51, 0.85)",
        }}
      >
        MEET OUR CAREGIVERS
      </Typography>
      <Grid container spacing={2}>
        {staffMembers.map((member) => (
          <Grid item key={member.staffMember} xs={12} sm={4} md={3}>
            <StaffThumbnail
              image={member.image}
              staffMember={member.staffMember}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        href="/caregiver-review-form"
        style={{
          borderColor: "#CA4766",
          color: "#CA4766",
          padding: "12px 36px",
          fontSize: "18px",
          margin: "3% 0",
          display: "inline-block",
          justifySelf: "center",
        }}
        variant="outlined"
      >
        SEND CAREGIVER REVIEW
      </Button>
    </Box>
  );
}

export default Staff;
