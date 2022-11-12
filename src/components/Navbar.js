import React from 'react';
import {HashLink} from 'react-router-hash-link';
export default function Navbar(props) {
  return (
    <div>
      <header>
        <div className="container-fluid rounded row-header" style={props.style}>
          <div className="container align-items-center px-4 px-md-0">
            <div className="row justify-content-end">
              <div className="col-auto">
                <button className="btn btn-primary d-flex align-items-center justify-content-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style={{background:"none", border:"none"}}>
                <iconify-icon icon="bytesize:settings" style={{color:"white", fontSize:"28px", paddingRight:"8px"}}></iconify-icon>Settings
                </button>
                </div>
            </div>
            <h1 className="display-4 fw-bold mt-3">Welcome to TextUtils</h1>
            <h2>The best text utilizing app around.</h2>
            <p className="lead py-3 col-md-8">We provide you with so many options to utilize your text like counting words, letters, convert the text to uppercase and many more. You can also copy the converted text to your clipboard by just clicking the copy button.</p>
            <div className="row mt-3 gap-2 gap-md-0">
              <div className="col-md-auto">
                <HashLink className="btn btn-lg btn-warning col-12" to="/textutils#textarea">Start utilizing</HashLink>
              </div>
              <div className="col-md-auto">
                <HashLink className="btn btn-lg btn-outline-light col-12" to="/about#about">Learn more</HashLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}

      
    </div>
  )
}
