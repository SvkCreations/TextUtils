import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Footer from './components/Footer';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Sidebar from './Sidebar';

function App() {
  const [sbStyle, setsbStyle] = useState({
    backgroundColor: "white",
    color: "black",
  })
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
  const [iconStyle, seticonStyle] = useState({
    color: "#6200ee",
    fontSize: "30px",
  })
  const [imgStyle, setimgStyle] = useState({
    boxShadow:"none",
    width: "450px"
  })

  let toggleMode = () => {
    if (style.backgroundColor === "#6200ee") {
      setStyle({
        backgroundColor: "#100027",
        color: "floralwhite",
        transitionDuration: ".75s"
      })
      setsbStyle({
        backgroundColor:"#121212",
        color:"white",
        transition:".75s ease"
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
        background: "none",
        color: "floralwhite",
        transitionDuration: ".75s",
        boxShadow: "2px 2px 120px -10px rgba(80,1,192,0.75)",
        outline: "none",
        border: "none"
      })
      seticonStyle({
        color: "#ffc107",
        fontSize: "30px",
        transitionDuration: ".5s"
      })
      setimgStyle({
        boxShadow: "2px 2px 120px -10px rgba(80,1,192,0.75)",
        width: "450px",
        border:"4px solid white"
      })
      document.body.style.cssText = "background-color: black; color: floralwhite; transition-duration:.75s"
    }
    else {
      setsbStyle({
        backgroundColor:"white",
        color:"black",
        transition:".75s ease"
      })
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
      seticonStyle({
        color: "#6200ee",
        fontSize: "30px",
        transitionDuration: ".5s"
      })
      setimgStyle({
        boxShadow: "none",
        width: "450px"
      })
      document.body.style.cssText = "background-color: white; color: black; transition-duration:.75s"
    }
  }
  return (
    <Router>
      <div className="App">
        <Navbar style={style} toggleMode={toggleMode}></Navbar>
        <Sidebar style={sbStyle} toggleMode={toggleMode}></Sidebar>
        {/* <TextArea scBtnStyle={scBtnStyle} prBtnStyle={prBtnStyle} inpStyle={inpStyle} iconStyle={iconStyle}></TextArea> */}
        <Routes>
        <Route exact path="/" element={<TextArea scBtnStyle={scBtnStyle} prBtnStyle={prBtnStyle} inpStyle={inpStyle} iconStyle={iconStyle} sbStyle={sbStyle}></TextArea>} />
          <Route exact path="/textutils" element={<TextArea scBtnStyle={scBtnStyle} prBtnStyle={prBtnStyle} inpStyle={inpStyle} iconStyle={iconStyle} sbStyle={sbStyle}></TextArea>} />
          <Route exact path="/about" element={<About imgStyle={imgStyle}/>} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
