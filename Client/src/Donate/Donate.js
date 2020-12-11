import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "../static/bodycomponent.css";
import DonatePicture from "../pictures/Donate.jpg";
import "../static/header.css";
import Aos from "aos";
import "aos/dist/aos.css";

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    Aos.init();
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <ScrollToTopOnMount />
            <div className="body">
              <img id = "donateP" src={DonatePicture} style={{ padding: "10%" }}></img>
              <br></br>
              <div id = "donatePspace" style ={{display: "none"}}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <h2>Grace Hopper Celebration</h2>
              <p>
                Help us send McGill students to the Grace Hopper Celebration of
                Women in Computing, and in turn build a strong and inclusive
                community here at McGill University.
              </p>
              <p>
                Computer Science has historically been a predominately
                male-driven field, but enrolment in the School of Computer
                Science (SOCS) has tripled since 2009, and over 30% of students
                are female. Given the steep rise in enrolment at SOCS, The
                Undergraduate Societies have committed to sending two women to
                The Grace Hopper Celebration (GHC) of Women in Computing. We
                hope to increase this impact by sending an additional 6 women to
                GHC.
              </p>
              <p>
                GHC is the largest gathering of women technologists offering
                many opportunities for professional networking. Students who
                attend this conference find it inspiring, and are pushed to
                finish their degree and implement unique programs such as
                computing mentorships. The cost for each attendee is $1,500,
                which includes their accommodation, airfare, and registration.
              </p>
              <p>
                We hope to continue to actively support an inclusive culture of
                computing at McGill, and empower our female students to build
                their own networks and meet like-minded individuals. With your
                help, we can give young female technologists the opportunity to
                explore the spectrum of all that computer science has to offer
                and enable these bright young scholars to reach their full
                potential.
              </p>
              <p>
                To support us and see updates check our Seeds of Change
                campaign!
              </p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Donate;

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 600);
  }

  render() {
    return null;
  }
}
