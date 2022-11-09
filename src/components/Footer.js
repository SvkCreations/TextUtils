import React from 'react';
import logo from '../logo.png';

function Footer() {
  return (
    <div>
      <footer className='container my-5 pt-5 px-4 px-md-0'>
                <hr />
                
                <div className="row pt-3">
                    <div className="col-12 col-md-6">
                    <img src={logo} alt="" className="img-fluid" style={{width:"80px"}} />
                <h2 className=" mt-3 fw-bold" style={{color:"#6200ee"}}>TextUtils</h2>
                <p className="mt-3">106, Golf Club Road, Tollygunge, Kolkata - 700033</p>
                    </div>
                    <div className="col-6 col-md-3">
                      <ul className='list-unstyled'>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Report a bug</a></li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-3">
                      <ul className='list-unstyled'>
                        <li><a>Developer Contact</a></li>
                        <li><a>FAQs</a></li>
                        <li><a>Donate</a></li>
                        <li><a>Rate our site</a></li>
                      </ul>
                    </div>
                </div>
                <div className="row mt-3">
                    <p className="fw-bold text-center">© Copyright TextUtils 2022</p>
                </div>
            </footer>
    </div>
  )
}

export default Footer
