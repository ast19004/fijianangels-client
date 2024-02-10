import { Box, Grid, Typography } from "@mui/material";
import StaffThumbnail from "../component/UI/StaffThumbnail";

function Staff(props) {
  const staffMembers = [
    {
      staffMember: "Ana Colata",
      image:
        "https://fastly.picsum.photos/id/25/200/300.jpg?hmac=ScdLbPfGd_kI3MUHvJUb12Fsg1meDQEaHY_mM613BVM",
    },
    {
      staffMember: "Kyle Colata",
      image:
        "https://fastly.picsum.photos/id/25/200/300.jpg?hmac=ScdLbPfGd_kI3MUHvJUb12Fsg1meDQEaHY_mM613BVM",
    },
  ];
  return (
    <Box>
      <Typography variant="h2" color="#ca4766">
        MEET OUR STAFF
      </Typography>
      <Grid container spacing={5}>
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
