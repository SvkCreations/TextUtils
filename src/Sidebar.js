import React from 'react';
import logo from './logo.png'

function Sidebar(props) {
    const fontSelect = document.getElementById("fontSelect")
    let fontApplyClick = ()=>{
        console.log(fontSelect)
        let font = fontSelect.value;
        document.body.style.fontFamily = `'${font}',sans-serif`;
    }
    return (
        <div>
            <div className="offcanvas offcanvas-end p-3" data-bs-scroll="true" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={props.style}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Settings</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex flex-shrink-0 flex-column">
                    <div>
                        <div className="form-check form-switch">
                            <div className="row mx-4">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                            </div>
                            <div className="row d-block mt-3">
                                <label htmlFor="#fontSelect" className='px-0 py-2 m-0'>Choose another font</label>
                            <select className="form-select" aria-label="Default select example" defaultValue={"Poppins"} id="fontSelect">
                                <option value="Poppins" style={{fontFamily:"'Poppins', sans-serif"}}>Poppins</option>
                                <option value="Montserrat" style={{fontFamily:"'Montserrat', sans-serif"}}>Montserrat</option>
                                <option value="Open Sans" style={{fontFamily:"'Open Sans', sans-serif"}}>Open Sans</option>
                                <option value="Roboto" style={{fontFamily:"'Roboto', sans-serif"}}>Roboto</option>
                                <option value="Inter" style={{fontFamily:"'Inter', sans-serif"}}>Inter</option>
                                <option value="Sono" style={{fontFamily:"'Sono', sans-serif"}}>Sono</option>
                                <option value="Quicksand" style={{fontFamily:"'Quicksand', sans-serif"}}>Quicksand</option>
                                <option value="Raleway" style={{fontFamily:"'Raleway', sans-serif"}}>Raleway</option>
                                <option value="Josefin Sans" style={{fontFamily:"'Josefin Sans', sans-serif"}}>Josefin Sans</option>
                                <option value="Oswald" style={{fontFamily:"'Oswald', sans-serif"}}>Oswald</option>
                                <option value="PT Sans Narrow" style={{fontFamily:"'PT Sans Narrow', sans-serif"}}>PT Sans Narrow</option>
                                <option value="Prompt" style={{fontFamily:"'Prompt', sans-serif"}}>Prompt</option>
                                <option value="Secular One" style={{fontFamily:"'Secular One', sans-serif"}}>Secular One</option>
                                <option value="Space Grotesk" style={{fontFamily:"'Space Grotesk', sans-serif"}}>Space Grotesk</option>
                                <option value="Orbitron" style={{fontFamily:"'Orbitron', sans-serif"}}>Orbitron</option>
                                <option value="Philospher" style={{fontFamily:"'Philospher', sans-serif"}}>Philospher</option>
                                <option value="Advent Pro" style={{fontFamily:"'Advent Pro', sans-serif"}}>Advent Pro</option>
                                <option value="Rubik Mono One" style={{fontFamily:"'Rubik Mono One', sans-serif"}}>Rubik Mono One</option>
                                <option value="Syncopate" style={{fontFamily:"'Syncopate', sans-serif"}}>Syncopate</option>
                            </select>
                            <button className="btn btn-warning mt-2" onClick={fontApplyClick}>Apply</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-auto">
                        <img src={logo} alt="" className="img-fluid" style={{ width: "50px" }} />
                        <h2 className=" mt-3 fw-bold" style={{ color: "#6200ee" }}>extUtils</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
