import React from "react";
import sampleCardData from "./sample-cards-data";

const SampleCards = () => {
  const stepStyle = {
    fontWeight: "bold",
    color: "#1F2937",
    fontSize: "1rem",
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 mt-20 pb-20">
          <h1 className="text-center mb-4" style={{ color: "#1F2937", fontSize: "3.5rem", fontWeight: 600, fontFamily: "Poppins, sans-serif", margin: "0 0 8px" }}>
            It's as simple <span style={{ color: "#D22126", marginLeft: "8px" }}>as this:</span>
          </h1>
          <div className="row justify-content-center">
            {sampleCardData.map((card, index) => (
              <div key={index} className="col-12 col-md-4 mt-5 d-flex flex-column align-items-center">
                <img src={card.img} alt="Profile" className="img-fluid" style={{ width: "250px", height: "250px" }} />
                <h4 className="text-center">
                  <span style={stepStyle}>{`Step ${index + 1} -`}</span>{" "}
                  <span style={{ fontFamily: "Poppins, sans-serif" }}>{card.title}</span>
                </h4>
                <img src={card.arrow} alt="Arrow" className="img-fluid" style={{ width: "60px", height: "60px", marginTop: "20px" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleCards;
