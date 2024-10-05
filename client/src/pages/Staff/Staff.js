import { Box, Typography } from "@mui/material";

const Staff = (props) => {
  return (
    <Box
      sx={{
        disply: "grid",
        justifyContent: "center",
        height: "max-content",
        width: "94vw",
        maxWidth: "68rem",
        margin: "0 auto",
      }}
    >
      <Box>
        <Box>
          <Box
            sx={{
              height: "20rem",
              backgroundColor: "rgba(70, 150, 255, 0.3)",
              border: "1px solid rgba(70, 150, 255, 1)",
              borderRadius: "1rem",
            }}
          />
          {/* <img src="" alt="Anaseini Coloata" /> */}
        </Box>
        <Box component="section">
          <Typography
            component="h3"
            variant="h4"
            color="rgba(100, 150, 255, 1)"
          >
            <b>Anaseini Colata</b>
          </Typography>
          <Typography component="p" color="rgba(100, 150, 255, 1)">
            Cheif Executive Officer (CEO)
          </Typography>
          <Typography color="rgba(2, 26, 51, 0.9)">
            Originally from Fiji, Anaseini embarked on her caregiving journey
            after migrating to the United States at a young age. She grew up
            with a strong sense of family and compassion, which shaped her deep
            commitment to caring for others. Anaseini pursued higher education
            at BYU Hawaii, where she earned her degree. After graduating,
            Anaseini relocated to California, where she obtained her formal
            certification and began working as a private caregiver. Her
            experience and dedication in the field eventually inspired her to
            start her own in-home care agency, providing compassionate care and
            support to those in need.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            height: "20rem",
            backgroundColor: "rgba(70, 150, 255, 0.3)",
            border: "1px solid rgba(70, 150, 255, 1)",
            borderRadius: "1rem",
          }}
        />
        {/* <img src="" alt="Anaseini Coloata" /> */}
      </Box>
      <Box component="section">
        <Typography component="h3" variant="h4" color="rgba(100, 150, 255, 1)">
          <b>Tava Setareki</b>
          <Typography component="p" color="rgba(100, 150, 255, 1)">
            Cheif Operations Officer (COO)
          </Typography>
        </Typography>
        <Typography color="rgba(2, 26, 51, 0.9)">
          Tava is a native of Fiji, born and raised with a deep appreciation for
          community and care. She has over twelve years of professional
          experience in the senior care industry, where she has managed care
          services, business administration, and home care operations. Tava is
          eager to embark on the next phase of her career, utilizing her
          professional expertise and education in Business Administration as she
          steps into a pivotal role as an Administrator and business owner. As a
          Certified RCFE Administrator, Tava takes pride in delivering
          high-quality care, fostering strong relationships with my team, the
          community, and healthcare professionals. Tava's passion lies in
          working with seniors, enriching their lives, and creating a positive,
          lasting impact through her work. Personally, she is am married and the
          proud mother of three wonderful children. In her free time, she enjoys
          journaling, cooking with her family, and listening to music.
        </Typography>
      </Box>
    </Box>
  );
};

export default Staff;
