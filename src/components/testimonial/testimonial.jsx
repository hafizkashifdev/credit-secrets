import { Box, Grid, Typography, Rating } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";
import testimonialData from "./testimonial-data";

const YellowDivider = styled("div")({
  width: "100%",
  height: "1px",
  backgroundColor: "#FFC107",
  margin: "8px 0",
});

const Testimonial = () => {
  return (
    <Grid container sx={{ mt: 20, backgroundColor: "#F3F4F6", }}>
      <Grid item xs={2} />
      <Grid container sx={{  backgroundColor: "#F3F4F6", p: 2,mt:15,mb:15 }}>
        <Grid item xs={2} />
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            {testimonialData.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    paddjustifyContent: "center",
                    alignItems: "center",
                    borderRadius: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Avatar
                      alt={`avator-${index}`}
                      src={item.avator}
                      sx={{ width: 96, height: 96, mt: 1 }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "#1F2937",
                      fontSize: "1.25rem",
                      padding: "1rem",
                      fontWeight: 600,
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <YellowDivider />
                  <Box
                    sx={{
                      display: "flex",
                      width:'100%',
                      justifyContent: "space-between",
                      padding: "1rem",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#4B5563",
                        fontSize: "1rem",
                        fontFamily: "Poppins, sans-serif",
                        ml:1
                        // justifyContent: "flex-start",
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Rating
                      name="star-rating"
                      value={5}
                      precision={0.5}
                      readOnly
                      sx={{ color: "#FFC107",mr:1 }}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default Testimonial;
