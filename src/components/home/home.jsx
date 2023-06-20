import React from "react";
import { Typography, Button, Grid, Box, Container } from "@mui/material";
import heroimg from "../../assects/images/heroimg.png";
import "./home.scss";
import BallAnimation from "../ball-animation/ball-animation";

const Home = () => {
  return (
    <div className="home-container">
      <BallAnimation />

      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ overflowX: "hidden", position: "relative", zIndex: 1 }}>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 13,
              justifyContent: "center",
              "@media (min-width: 900px) and (max-width: 1536px)": {
                mt: 15, // Add margin left for md=6 breakpoint
              },
            }}
          >
            <Typography
              sx={{
                color: "#1F2937",
                fontSize: "3.5rem",
                lineHeight: "1.2",
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 8px",
                dispaly: "flex",
                justifyContent: "flex-end",
                "@media (max-width: 900px)": {
                  justifyContent: "center",
                  p: 2,
                },
              }}
            >
              Stay Ahead Of The Competition With Our Grants Alerts
            </Typography>
            <Typography
              sx={{
                color: "#4B5563",
                fontSize: "1rem",
                lineHeight: "1.2",
                fontFamily: "Poppins, sans-serif",
                padding: "8px 0px 0px",
                marginBottom: "8px",
                "@media (max-width: 900px)": {
                  justifyContent: "center",
                  p: 2,
                  mt: 0,
                },
              }}
            >
              Access to up-to-date information on available grants gives you a competitive edge in securing the funding needed to achieve your goals. A Bi-Weekly Alerts.
            </Typography>
            <Box
              sx={{
                "@media (max-width: 900px)": {
                  marginRight: "10px",
                  justifyContent: "center",
                  p: 2,
                },
              }}
            >
              <Button
                color="inherit"
                sx={{
                  borderRadius: "100px",
                  backgroundColor: "#D22126",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px ",
                  padding: "0.5rem 0.5rem",
                  margin: "24px 0px",
                  width: "368px",
                  height: "48px",
                  display: "flex",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#EEC932",
                    borderColor: "#EEC932",
                  },
                  border: "1px solid",
                  borderColor: "#D22126",
                  color: "white",
                }}
              >
                GET STARTED FOR ONLY $9.97 A MONTH
              </Button>
            </Box>
          </Grid>
          <Grid item xl={6} md={6} xs={12}>
            <Box
              sx={{
                mt: 13,
                "@media (min-width: 600px) and (max-width: 900px)": {
                  mt: 2,
                  pl: 20,
                },
                "@media (max-width: 900px)": {
                  mt: 2,
                 
                },
              }}
            >
              <img src={heroimg} alt="Logo" style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
