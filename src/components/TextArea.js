import React, { useState } from 'react';

export default function TextArea(props) {
    const [text, setText] = useState("");
    let handleOnchange = (e) => {
        setText(e.target.value);
    }
    let handleUpClick = () => {
        let upText = text.toLocaleUpperCase();
        setText(upText);
    }
    let handleLowClick = () => {
        let lowText = text.toLocaleLowerCase();
        setText(lowText);
    }
    let handleEsClick = () => {
        let esText = text.replaceAll("  ", "");
        setText(esText)
    }
    let handleRsClick = () => {
        let rsText = text.replaceAll(" ", "");
        setText(rsText)
    }
    let handleClrClick = () => {
        setText("")
    }


    return (
        <div>
            <div className="container px-4 px-md-0">
                <div className="row mt-4">
                    <h1 className="display-6 fw-bold">Type in any text to Analyze.</h1>
                </div>
                <div className="row d-flex">
                    <div className="col-auto flex-grow-1 align-self-center">
                        <p className="lead"><span style={{ color: "#59319d", fontWeight: "bold" }}>{text.length == 0 || text.endsWith(' ') ? (text.split(' ').length) - 1 : text.split(' ').length}</span> Words, <span style={{ color: "#59319d", fontWeight: "bold" }}>{text.length}</span> Characters</p>
                    </div>
                    <div className="col-auto">
                        <button className="btn" onClick={handleClrClick} style={props.scBtnStyle}>Clear text</button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="mb-4">
                        <textarea className="form-control p-3" placeholder='Enter text here...' value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="10" style={props.inpStyle} spellCheck="true"></textarea>
                    </div>
                </div>
                <div className="row gap-2 d-flex align-items-center justify-content-center mb-5">
                    <button className="btn col-5 col-md-2" onClick={handleUpClick} style={props.scBtnStyle}>Convert to Uppercase</button>
                    <button className="btn col-5 col-md-2" onClick={handleLowClick} style={props.scBtnStyle}>Convert to Lowercase</button>
                    <button className="btn col-5 col-md-2" onClick={handleEsClick} style={props.scBtnStyle}>Remove extra spaces</button>
                    <button className="btn col-5 col-md-2" onClick={handleRsClick} style={props.scBtnStyle}>Remove all the spaces</button>
                    <button className="btn col-5 col-md-2" style={props.prBtnStyle}>Copy text</button>
                </div>

            </div>
            <footer className='container my-5 px-4 px-md-0'>
                <hr />
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p>Created by Soubhik Ghosh</p>
                    </div>
                    <div className="col col-md-auto icons ms-auto">
                    <a href="https://www.facebook.com/profile.php?id=100006403426982" target="blank"><iconify-icon icon="akar-icons:facebook-fill" style={{color:"#59319d", fontSize:"24px", marginRight:"12px"}}></iconify-icon></a>
                    <a href="https://www.instagram.com/itzsvk" target="blank"><iconify-icon icon="akar-icons:instagram-fill"style={{color:"#59319d", fontSize:"24px", marginRight:"12px"}}></iconify-icon></a>
                    <a href="https://wa.me/+918240703010"><iconify-icon icon="akar-icons:whatsapp-fill" style={{color:"#59319d", fontSize:"24px", marginRight:"12px"}}></iconify-icon></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
