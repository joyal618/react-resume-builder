import React from 'react';
import "./Home.css";
import NavBar from "../nav-bar/NavBar";
import coverImage from "../../assets/coverimage.jpg";


function Home(props) {
  return (
    <div className="home">
      <NavBar id="home"/>
      <div className="cover-image-container" style={{ backgroundImage: `url(${coverImage})` }}>
        <div className="caption-container">
          <h1>inscribe</h1>
          <h3>KEEP IT SIMPLE AND ELEGANT</h3>
        </div>
      </div>


    </div>
  );
}

export default Home;