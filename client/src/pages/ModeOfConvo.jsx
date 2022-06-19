import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
// import img from "../imag/s/conversation.jpg";
import chatimg from "../images/chat-01.png";
import audioimg from "../images/audio-01.png";
import videoimg from "../images/video-01.png";
function ModeOfConvo() {
  return (
    <div className="modeofcommunication-div">
      <h1 className="primary-header">Mode of Communication</h1>
      <p>
        Highly qualified team of some of the best names in psychology who
        deliver improved well-being to you. Carefully vetted through a rigorous
        selection process. Trained and experienced in all psychotherapy
        techniques.
      </p>
      <div className="inner-div">
        <div className="moc-div">
          <figure>
            <img className="img-icon" src={videoimg} alt="" />
          </figure>

          <button
            className="btn btn-primary btn-moc"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://agile-depths-65480.herokuapp.com/";
            }}
          >
            {" "}
            Video Session
          </button>
        </div>

        <div className="moc-div" >
          <figure>
            <img className="img-icon" src={audioimg} alt="" />
          </figure>
          <button
            className="btn btn-primary btn-moc"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://agile-depths-65480.herokuapp.com/";
            }}
          >
            {" "}
            Audio Session
          </button>
        </div>

        <div className="moc-div">
          <figure>
            <img className="img-icon" src={chatimg} alt="" />
          </figure>

          <button
            className="btn btn-primary btn-moc"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://fast-bastion-16619.herokuapp.com/";
            }}
          >
            {" "}
            Chat Session
          </button>
        </div>
      </div>

      <div>
        <ul>English And All Regional Indian Languages</ul>
        <ul>100% Private & Secure Platform</ul>
        <ul>24/7 Support</ul>
      </div>
    </div>
  );
}

export default ModeOfConvo;
