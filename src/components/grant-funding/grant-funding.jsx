import React from 'react';
import './grant-funding.css'; 

const GrantFunding = () => {
  return (
    <div className="grant-fund-container">
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-12 mt-15 pb-15">
            <p className="grant-fund-description text-center mb-4">
            Maximize your grant funding potential with ease!
            </p>
            <div className="grant-fund-btn d-flex justify-content-center pb-5">
              <button className="btn ">
                GET STARTED 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantFunding;

