import React from 'react'

export default function Navbar() {
  return (
    <div>
      <header>
        <div className="container-fluid rounded row-header">
          <div className="container align-items-center p-4">
            <h1 className="display-4 fw-bold">Welcome to TextUtils</h1>
            <h2>The best text utilizing app around.</h2>
            <p className="lead py-3 col-md-6">We provide you with so many options to utilize your text like counting words, letters, convert the text to uppercase and many more. You can also copy the converted text to your clipboard by just clicking the copy button.</p>
            <div className="row mt-4 gap-2 gap-md-0">
              <div className="col-md-2">
                <button className="btn btn-lg btn-warning col-12">Start utilizing</button>
              </div>
              <div className="col-md-2">
                <button className="btn btn-lg btn-outline-light col-12">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
