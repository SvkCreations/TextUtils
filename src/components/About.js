import React from 'react';
import soubhik from '../soubhik.jpeg';


function About(props) {
  return (
    <div className='container mt-5 px-4 px-md-0'>
      <h2 className="display-6 fw-bold">About Us</h2>
      <hr />
      <p className="lead">TextUtils is a text utilizing or analyzing web application created with ReactJS library in the year 2022. We provide you with so many options to analyze your text like counting words, letters, convert the text to uppercase, lowercase and many more. You can also copy the converted text to your clipboard by just clicking the copy button.<br></br>
        In the latest version, we can also toogle the user-favorite Dark Mode. We are currently working on adding more features to the TextUtils app. If you have any suggestions or queries, please feel free to contact us through the number given below.</p>
      <h3 className='fw-bold mt-5'>Meet our Developer</h3>
      <div className="row mt-4 gap-3 gap-md-0 d-flex align-items-center">
        <div className="col-md-5">
          <img src={soubhik} alt="" className="img-fluid" style={props.imgStyle} />
        </div>
        <div className="col-md-6">
          <div className="row">
            
            <div className="col-auto">
            <h3 className="fw-bold p-0 m-0">Soubhik Ghosh</h3>
              <h5 className='fw-bold'>Software developer</h5>
            </div>
            <div className="col-auto ms-auto">
              <a href="https://www.facebook.com/profile.php?id=100006403426982" target="blank"><iconify-icon icon="akar-icons:facebook-fill" style={{ color: "#59319d", fontSize: "24px", marginRight: "12px" }}></iconify-icon></a>
              <a href="https://www.instagram.com/itzsvk" target="blank"><iconify-icon icon="akar-icons:instagram-fill" style={{ color: "#59319d", fontSize: "24px", marginRight: "12px" }}></iconify-icon></a>
              <a href="https://wa.me/+918240703010"><iconify-icon icon="akar-icons:whatsapp-fill" style={{ color: "#59319d", fontSize: "24px", marginRight: "12px" }}></iconify-icon></a>
            </div>
            <div className="row">
              <p className="lead">Soubhik is a junior Software Developer, specialized in Web development using React Js, Angualar JS, Vanilla Js and many more. Apart from that Soubhik Ghosh is an expert UX designer including Graphic Designing.<br></br><br></br>
              Interestingly, he started his career as an android app developer but slowly turned into a specialized web developer. <br></br> <br></br>Soubhik came up with the idea of TextUtils back in 2020 but it was then turned down due to some reasons. Now in 2022 we published our first release of TextUtils.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
