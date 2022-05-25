import React from "react";
import "./Intro.css";
import boy from "../../img/image1.png";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition

  // context


  return (
    <div className="Intro" id="Intro">
      <div className="i-right">

        <img src={boy} alt="" />
        {/* animation */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        >
        </div>
      </div>
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Grow Your Business <br /> with Our Solusion</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Try For</button>
        </Link>
      </div>
      {/* right image side */}
    </div>
  );
};

export default Intro;
