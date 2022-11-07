import React from 'react'
export default function Navbar(props) {
  return (
    <div>
      <header>
        <div className="container-fluid rounded row-header" style={props.style}>
          <div className="container align-items-center px-4 px-md-0">
            <div className="row justify-content-end">
              <div className="form-check form-switch col-auto">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
              </div>
            </div>
            <h1 className="display-4 fw-bold mt-3">Welcome to TextUtils</h1>
            <h2>The best text utilizing app around.</h2>
            <p className="lead py-3 col-md-8">We provide you with so many options to utilize your text like counting words, letters, convert the text to uppercase and many more. You can also copy the converted text to your clipboard by just clicking the copy button.</p>
            <div className="row mt-3 gap-2 gap-md-0">
              <div className="col-md-auto">
                <button className="btn btn-lg btn-warning col-12">Start utilizing</button>
              </div>
              <div className="col-md-auto">
                <button className="btn btn-lg btn-outline-light col-12">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
