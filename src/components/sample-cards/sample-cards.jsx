import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import sampleCardData from './sample-cards-data';

const SampleCards = () => {
  const stepStyle = {
    fontWeight: "bold",
    color: "#1F2937",
    fontSize: "1rem",
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8} sx={{ mt: 20 ,pb:20}}>
        <Typography
          sx={{
            color: "#1F2937",
            fontSize: "3.5rem",
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
            margin: "0 0 8px",
            display: "flex",
            justifyContent: "center",
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
        <Box sx={{ display: "flex", justifyContent: "space-between",mt:5 }}>
          {sampleCardData.map((card, index) => (
            <Box key={index} sx={{ width: "30%", textAlign: "center" }}>
              <img
                src={card.img}
                alt="Profile"
                style={{ width: "250px", height: "250px" }}
              />
              <Typography>
                <span style={stepStyle}>{`Step ${index + 1} -`}</span>{" "}
               <span style={{  fontFamily: "Poppins, sans-serif",}}>{card.title}</span> 
              </Typography>
              <img
                src={card.arrow}
                alt="Arrow"
                style={{ width: "60px", height: "60px" ,marginTop:'20px'}}
              />
            </Box>
          ))}
        </Box>
      </Grid>
      </Grid>
     
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default SampleCards;
