import {  Typography, Rating } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
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
    <div className="" style={{ backgroundColor: "#F3F4F6" }}>
      <div className="container" style={{paddingTop:'200px',paddingBottom:'200px'}}>
        <div className="row">
          {testimonialData.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-4"
              style={{ marginBottom: "15px" }}
            >
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#ffffff",
                  borderRadius: "1rem",
                  padding: "1rem",
                }}
              >
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <Avatar
                    alt={`avator-${index}`}
                    src={item.avator}
                    sx={{ width: 96, height: 96, mt: 1 }}
                  />
                </div>
                <Typography
                  variant="h5"
                  className="text-center mb-1"
                  style={{
                    color: "#1F2937",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {item.title}
                </Typography>
                <YellowDivider />
                <div className="d-flex justify-content-between align-items-center">
                  <Typography
                    className="flex-grow-1"
                    style={{
                      color: "#4B5563",
                      fontSize: "1rem",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Rating
                    name={`star-rating-${index}`}
                    value={5}
                    precision={0.5}
                    readOnly
                    style={{ color: "#FFC107" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
