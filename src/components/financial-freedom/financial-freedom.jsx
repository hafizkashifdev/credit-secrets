import React from 'react';
// import iconOne from '../../assects/icons/Icon-one.svg';
import './financial-freedom.css';
import finacialData from './finacial-data';

const FinancialFreedom = () => {
  return (
    <div className="bg-light p-1  ">
      <div className="container" style={{ marginTop: '180px',marginBottom:'150px' }}>
      <div className="row">
  <div className="col-12 text-center mb-5 ">
    <h2 className="text-danger" style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: 600, fontFamily: 'Poppins, sans-serif', margin: '0 0 8px' }}>
      TOTAL FINANCIAL FREEDOM
    </h2>
    <h1 className="responsive-heading" style={{ fontSize: '3.5rem', lineHeight: '1.2', fontWeight: 600, fontFamily: 'Poppins, sans-serif', margin: '0 0 8px' }}>
      Comprehensive Solution For Individuals &amp; Businesses Seeking Funding
    </h1>
  </div>
</div>

        <div className="row">
          {finacialData.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div
                style={{
                  width: '100%',
                  height: '308px',
                  // backgroundColor: 'background-color: rgb(255, 255, 255);',
                  backgroundColor: 'rgb(255, 255, 255)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius:'1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <img src={item.icon} style={{ width: '100px', height: '100px', padding: '8px' }} alt={`icon-${index}`} />
                </div>
                <h3 className="" style={{ fontSize: '1.25rem', fontWeight: 600, fontFamily: 'Poppins, sans-serif', textAlign: 'center',color:'#1F2937' }}>{item.title}</h3>
                <p style={{ fontSize: '1rem', fontFamily: 'Poppins, sans-serif', textAlign: 'center', padding: '8px' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialFreedom;
