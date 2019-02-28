import React, { Component } from "react";
import YT from "./assets/ytbw.svg";
import Insta from "./assets/instabw.svg";

export default class Home extends Component {
  render() {
    return (
      <div className="body">
        <br />
        <h4 className="thanks">Thank you for coming!</h4>
        <h4 className="thanks_blurb">
          We have genuinely enjoy sharing what we love with you and are grateful
          for the support! We post new videos every other Thursday and hope you
          continue to enjoy what we present.
        </h4>
        <br />
        <br />
        <br />
        <h4 className="thanks_blurb follow">
          Feel free to follow us with the links below:
        </h4>
        <div className="insta_fb_container">
          <a href="https://www.youtube.com/channel/UCpzd7Kf4IFClcKO63E0CJXw">
            <div className="yt_container " id="home_links">
              <img src={YT} className="youtube" alt="YouTube Logo" />
              <h4 className="youtube text">Nina & Roo</h4>
            </div>
          </a>
          <a href="https://www.instagram.com/ninaandroo/">
            <div className="insta_container " id="home_links">
              <img src={Insta} className="insta" alt="Instagram Logo" />
              <h4 className="insta text">@ninaandroo</h4>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
