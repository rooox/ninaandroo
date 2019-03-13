import React, { Component } from "react";
import Photo from "./assets/Photo.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="body">
        <br />

        <div className="about_us_container">
          <header className="about_us_title">About Us</header>
          <div className="img_about_container">
            <img
              src={Photo}
              className="photo"
              align="left"
              alt="Nina and Roo "
            />
          </div>
          <br />
          <div className="about_us_text">
            <p className="about_us_body">
              We are a husband and wife who love making music. We were born and
              raised in Northern California and recently made the move to
              Utah(we love seeing the mountains everyday). We have 3 beautiful
              children, with our fourth on the way. We love music, good food and
              fun times with family and friends. We really appreciate those who
              listen to our music and support us in our desire to share
              uplifting music.
            </p>

            <br />
            <h1 className="about_us_subtitles">Nina</h1>
            <p className="about_us_body">
              I have always had a love for music. I learned to play piano from
              my grandmother growing up, but was always shy about being in the
              spotlight with music. I still remember when Andrew and I were
              first married I wouldn’t sing in front of him. He slowly chipped
              away and has really encouraged me to share what I have worked for.
              <h1 className="about_us_subtitles">Roo</h1> I got my first guitar
              as a Christmas present from my parents when I was in the 3rd grade
              and took lessons for about 1 1/2 years. Prior to getting my first
              guitar my parents nicknamed me “Madman” because I was an angry
              child. After I got that first guitar in my hands I was changed and
              became very mellow. It is the tool that changed my life.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
