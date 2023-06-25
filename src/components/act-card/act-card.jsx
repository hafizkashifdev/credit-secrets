import React from 'react';
import './act-card.css'; 

const ActCard = () => {
  return (
    <div className="act-card-container">
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-12 mt-15 ">
            <h1 className="act-card-title text-center mb-4">
              Act now!
            </h1>
            <p className="act-card-description text-center mb-4">
              Secure the funding your organization needs to achieve its goals. Sign up for our grant alerts now and get instant access to up-to-date grant information.
            </p>
            <div className="act-card-btn d-flex justify-content-center">
              <button className="btn btn-danger">
                GET STARTED FOR ONLY $9.97 A MONTH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActCard;
