import React, { Component } from "react";

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
        <div className="input_container">
          <input type="text" placeholder="Name" className="name_input" />
          <input type="text" placeholder="Email" className="email_input" />
          <textarea
            type="text"
            placeholder="Message"
            className="message_input"
          />
          <button className="submit">SEND</button>
        </div>
      </div>
    );
  }
}
