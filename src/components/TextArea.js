import React, {useState} from 'react';

export default function TextArea() {
    const [text, setText] = useState("Enter text here...");

    let handleOnchange = (e)=>{
        setText(e.target.value);
    }
    let handleUpClick=()=>{
        let upText = text.toLocaleUpperCase();
        setText(upText);
    }
    let handleLowClick=()=>{
        let lowText = text.toLocaleLowerCase();
        setText(lowText);
    }
    let handleRsClick=()=>{
        let rsText = text.replaceAll(" ","");
        setText(rsText)
    }
  return (
    <div>
      <div className="container p-3">
        <div className="row mt-4">
          <h1 className="display-6 fw-bold">Type in any text to Utilize.</h1>
        </div>
        <div className="row">
          <div className="my-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="10"></textarea>
          </div>
        </div>
        <div className="row gap-1 d-flex align-items-center justify-content-center">
          <button className="btn btn-outline-primary col-5 col-md-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-outline-primary col-5 col-md-2" onClick={handleLowClick}>Convert to Lowecase</button>
          <button className="btn btn-outline-primary col-5 col-md-2" onClick={handleRsClick}>Remove all spaces</button>
          <button className="btn btn-primary col-5 col-md-2">Copy text</button>
        </div>
      </div>
    </div>
  )
}
