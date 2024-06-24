import React from "react";
import "./GetStarted.css";
import MapEmbed from "../../utils/map";

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Locate Us</span>
          <span className="secondaryText">
            Here is the location for our Hostel
            <br />
            Find your residence soon
          </span>
          {/* <button className="button" href>
            <a href="mailto:zainkeepscode@gmail.com">Get Started</a>
          </button> */}
          <MapEmbed/>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
