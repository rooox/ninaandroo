import React, { Component } from "react";

export default class Videos extends Component {
  render() {
    return (
      <div className="body">
        <br className="break" />
        <div className="video_container">
          <iframe
            title="Till We Meet Again"
            width="280"
            height="158"
            src="https://www.youtube.com/embed/gWUr5sHQWjc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          <div>
            <h1 className="video_title">"Till We Meet Again" (original)</h1>
            <p className="video_description">
              I had just heard that a young man in my community had decided to
              take his own life. As I was sitting in the backyard watching my
              son play and feeling a tiny piece of how hard it would be to lose
              a child, I decided I would write a song to give to the family. We
              hope you enjoy.{" "}
            </p>
          </div>
        </div>
        <br />
        <div className="video_container">
          <iframe
            title="I Only See You"
            width="280"
            height="158"
            rel="0"
            src="https://www.youtube.com/embed/gRbf2AeCH7s"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <div>
            <h1 className="video_title">"I Only See You" (cover)</h1>
            <p className="video_description">
              I still remember the day of our marriage and still not knowing
              what song I was going to sing at our reception that evening. I was
              playing around with a few options, such as an original or other
              covers I could play. Nina knew this and as I was showing her some
              options, she was very confident when she chose this one. As a
              smart man I agreed and played this song for her. It goes without
              saying that this song is special to us. I still remember seeing
              her in a dark room at a dance and being mezmorized by her big
              beautiful eyes that I could see from across the room.{" "}
            </p>
          </div>
        </div>
        <br />
        <div className="video_container">
          <iframe
            title="Hello World"
            width="280"
            height="158"
            rel="0"
            src="https://www.youtube.com/embed/qXOcOx5ocYQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div>
            <h1 className="video_title">"Hello World" (original)</h1>
            <p className="video_description">
              A week before Christmas in 2018 I was sitting in a rocking chair
              in my daughter’s room with my guitar. My family had left ahead of
              me to travel from Utah to California to visit family while I
              finished school. I was thinking about them and how much love I had
              for them and the fact that we had a new baby on the way. With
              every child I have taken the time to write them a song and turned
              my thoughts to my new nephew Aiden. I picked some chords and
              started jotting down the lyrics in my phone. This one came very
              easily and I would say from the start of the writing process to
              the end was right around 40 minutes. I love the joy that comes
              from a new life entering the world and this song really is in
              honor of those sweet spirits coming down.
            </p>{" "}
          </div>
        </div>
      </div>
    );
  }
}
