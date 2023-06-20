import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import sampleCardData from './sample-cards-data';

const SampleCards = () => {
  const stepStyle = {
    fontWeight: "bold",
    color: "#1F2937",
    fontSize: "1rem",
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12} sx={{ mt: 20, pb: 20 }}>
          <Typography
            sx={{
              color: "#1F2937",
              fontSize: "3.5rem",
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              margin: "0 0 8px",
              display: "flex",
              justifyContent: "center",
              "@media (max-width: 625px)": {
                fontSize: "2rem",
              },
            }}
          >
            It's as simple{" "}
            <span
              style={{ color: "#D22126", marginLeft: "8px" }} // Add marginLeft for space
            >
              as this:
            </span>
          </Typography>
          <Grid item xs={12}>
            <Container maxWidth="xl">
              <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                mt: 5,
                "& > div": {
                  width: { xs: "100%", md: "30%" },
                  textAlign: "center",
                  marginBottom: { xs: "20px", md: 0 },
                },
              }}>
                {sampleCardData.map((card, index) => (
                  <Box key={index}>
                    <img
                      src={card.img}
                      alt="Profile"
                      style={{ width: "250px", height: "250px" }}
                    />
                    <Typography>
                      <span style={stepStyle}>{`Step ${index + 1} -`}</span>{" "}
                      <span style={{ fontFamily: "Poppins, sans-serif" }}>
                        {card.title}
                      </span>
                    </Typography>
                    <img
                      src={card.arrow}
                      alt="Arrow"
                      style={{ width: "60px", height: "60px", marginTop: "20px" }}
                    />
                  </Box>
                ))}
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SampleCards;
