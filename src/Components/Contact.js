import React, { Component } from "react";
import Insta from "./assets/instabw.svg";
import YT from "./assets/ytbw.svg";
import Email from "./assets/mailbw.svg";

export default class Contact extends Component {
  render() {
    return (
      <div className="body">
        <br />
        <div>
          <h4 className="contact_title">Contact Us</h4>
          <p className="contact_blurb">
            We would love to hear from you. Whether it is an idea for a song, a
            suggestion or telling us about a song that you really love.
          </p>
        </div>
        {/* <div className="input_container">
          <input type="text" placeholder="Name" className="name_input" />
          <input type="text" placeholder="Email" className="email_input" />
          <textarea
            type="text"
            placeholder="Message"
            className="message_input"
          />
          <button className="submit">SEND</button>
        </div> */}
        <div className="insta_yt_insta_container">
          <div className="insta_container">
            <a href="mailto:ninaandroomusic@gmail.com">
              <img src={Email} className="insta" alt="Instagram Logo" />
            </a>
            <h4 className="insta text">ninaandroomusic@gmail.com</h4>
          </div>{" "}
          <div className="yt_container">
            <a href="https://www.youtube.com/channel/UCpzd7Kf4IFClcKO63E0CJXw">
              <img src={YT} className="youtube" alt="YouTube Logo" />
            </a>
            <h4 className="youtube text">Nina & Roo</h4>
          </div>
          <div className="insta_container">
            <a href="https://www.instagram.com/ninaandroo/">
              <img src={Insta} className="insta" alt="Email Icon" />
            </a>
            <h4 className="insta text">@ninaandroo</h4>
          </div>
        </div>
      </div>
    );
  }
}
