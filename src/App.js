import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'

function App() {
  const [scBtnStyle, setscBtnStyle] = useState({
    backgroundColor: "none",
    color: "#6200ee",
    border: "2px solid #6200ee",
  })
  const [prBtnStyle, setprBtnStyle] = useState({
    backgroundColor: "#6200ee",
    color: "floralwhite",
    border: "2px solid #6200ee"
  })
  const [style, setStyle] = useState({
    backgroundColor: "#6200ee",
    color: "floralwhite"
  })
  const [inpStyle, setinpStyle] = useState({
    backgroundColor: "auto",
    color: "auto"
  })
  let toggleMode = () => {
    if (style.backgroundColor === "#6200ee") {
      setStyle({
        backgroundColor: "#100027",
        color: "floralwhite",
        transitionDuration: ".75s"
      })
      setscBtnStyle({
        backgroundColor: "none",
        color: "#ffc107",
        border: "2px solid #ffc107",
        transitionDuration: ".75s"
      })
      setprBtnStyle({
        backgroundColor: "#ffc107",
        color: "black",
        border: "2px solid #ffc107",
        transitionDuration: ".75s"
      })
      setinpStyle({
        background:"none",
        color: "floralwhite",
        transitionDuration: ".75s",
        boxShadow: "2px 2px 120px -10px rgba(80,1,192,0.75)",
        outline: "none",
        border: "none"
      })
      document.body.style.cssText = "background-color: black; color: floralwhite; transition-duration:.75s"
    }
    else {
      setStyle({
        backgroundColor: "#6200ee",
        color: "floralwhite",
        transitionDuration: ".75s"
      })
      setscBtnStyle({
        backgroundColor: "none",
        color: "#6200ee",
        border: "2px solid #6200ee",
        transitionDuration: ".75s"
      })
      setprBtnStyle({
        backgroundColor: "#6200ee",
        color: "floralwhite",
        border: "2px solid #6200ee",
        transitionDuration: ".75s"
      })
      setinpStyle({
        backgroundColor: "white",
        color: "black",
        transitionDuration: ".75s"
      })
      document.body.style.cssText = "background-color: white; color: black; transition-duration:.75s"
    }
  }
  return (
    <div className="App">
      <Navbar style={style} toggleMode={toggleMode}></Navbar>
      <TextArea scBtnStyle={scBtnStyle} prBtnStyle={prBtnStyle} inpStyle={inpStyle}></TextArea>
    </div>
  );
}

export default App;
