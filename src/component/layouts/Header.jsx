import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
    <>
      <div className="contain-fluid text-dark p-3  sticky-top" style={{ backgroundColor: '#f0f8ff' } }>
        <div className="row align-items-center">
          
        <div className="col-12 col-md-3 fs-4 fw-bold text-center p-1 d-flex align-items-center justify-content-center">
            <img src="/logo.jpg" alt="Logo" className="me-2" style={{ height: '40px', width: '40px' }} />
            PawFetch
          </div>
          <div className="col-12 col-md-6">
            <div className='d-flex btn-group'>
              <input type='search' className='form-control' placeholder="Search for pets, breeds, etc." />
              <input type='button' className='btn btn-success' value={'Search'} style={{ borderRadius: '6px' }}/>
            </div>
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-evenly ps-2 py-1">
          <Link to="/home">
              <button type="button" className="btn btn-outline-primary" style={{ borderRadius: '10px', fontSize: '14px', fontWeight: 'bold' }}>Home</button>
            </Link>
            <Link to="/adopt">
              <button type="button" className="btn btn-outline-primary" style={{ borderRadius: '10px', fontSize: '14px', fontWeight: 'bold' }}>Adopt</button>
            </Link>
            <Link to="/signup">
              <button type="button" className="btn btn-outline-primary" style={{ borderRadius: '10px', fontSize: '14px', fontWeight: 'bold' }}>Sign Up</button>
            </Link>
            <Link to="/help">
              <button type="button" className="btn btn-outline-success" style={{ borderRadius: '10px', fontSize: '14px', fontWeight: 'bold' }}>Help</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
