import React, { Component } from "react";
import Aos from "aos";
import { Carousel } from "react-bootstrap";
import { FaUserGraduate, FaCalendarAlt, FaNewspaper } from "react-icons/fa";
import bot  from './pictures/bot.jpg'; 
import covid from './pictures/covid.jpg'; 
import ml from './pictures/ml.jpg'; 
import { Session } from 'bc-react-session';
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./static/home.css";

class HomePage extends Component {
  
  constructor(props) {
    super(props);
    const {payload} = Session.get();
    //console.log(session);
    this.state = {
      loggedin: (payload.staff? "true" : "false")
    };
  }
  
  render() {
    const settings = {
      dot: true,
      infinite: true,
      speed: 500,
      slideToShow: 1,
      slideToScroll: 2,
      cssEase: "linear",
    };
    Aos.init({ duration: 3000 });
    return (
      <div className="home">
        <Carousel data-aos="zoom-out">
          <Carousel.Item className="wrapper" interval={2000}>
            <img
              src={bot}
              alt="First Slide"
            />
            <div className="overlay">
              <a href="https://mcgillrobotics.com/">
              <div className="desc" contenteditable = {this.state.loggedin}>
                McGill Robotics is an engineering design team that builds robots for international 
                competitions as well as organizes RoboHacks annually. 
                  <br></br>
                  <button type="button" class="btn btn-primary" href="https://mcgillrobotics.com/"><a href="https://www.mcgillai.com/" style={{color: "whitesmoke"}}>Read More</a></button>
              </div>
              </a>
            </div>
            <Carousel.Caption className="caption">
              <h3>McGill Robotics</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="wrapper" interval={2000}>
            <img
              src={covid}
              alt="Second Slide"
            />
            <div className="overlay">
              <a href="https://www.cs.ubc.ca/news/2020/10/how-ai-helping-battle-against-covid-19">
              <div className="desc" contenteditable = {this.state.loggedin}>
                In today’s world, an early and especially accurate COVID diagnosis is crucial. 
                A late or incorrect diagnosis could see an infectious patient sent home...
                <br></br>
                <button type="button" class="btn btn-primary" href="https://www.cs.ubc.ca/news/2020/10/how-ai-helping-battle-against-covid-19">Read More</button>
              </div>
              </a>
            </div>
            <Carousel.Caption className="caption">
              <h3>How AI can see through COVID-19</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="wrapper" interval={2000}>
            <img
              src={ml}
              alt="Third Slide"
            />
            <div className="overlay">
              <a href="https://www.mcgillai.com/">
              <div className="desc" contenteditable = {this.state.loggedin}>
                McGill AI Society aims to make AI more accessible by hosting events, bootcamps, and workshops that 
                give students an opportunity to learn about AI in a peer-based, supportive environment
                <br></br>
                <button type="button" class="btn btn-primary" href="https://www.mcgillai.com/"><a href="https://www.mcgillai.com/" style={{color: "whitesmoke"}}>Read More</a></button>
              </div>
              </a>
            </div>
            <Carousel.Caption className="caption">
              <h3>Machine Learning at McGill</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div class="container">
          <div class="row justify-content-center" style={{marginTop: "-20px"}}>
            <div class="col-sm" style={{padding: "6%"}} data-aos="fade-right">
              <FaUserGraduate id="icons" style={{ fontSize: "30px"}}/>
              <a href="#/People/PeopleFaculty">
              <div class="button_base b07_3d_double_roll">
                <div>Teaching @ CS</div>
                <div>Teaching @ CS</div>
                <div>Teaching @ CS</div>
                <div>Teaching @ CS</div>    
              </div>
              </a>
            </div>
            <div class="col-sm" style={{padding: "6%"}} data-aos="fade-up">
              <FaCalendarAlt id="icons" style={{ fontSize: "30px"}}/>
              <a href="#/Research/ResearchArea">
              <div class="button_base b07_3d_double_roll">
                <div>Events @ CS</div>
                <div>Events @ CS</div>
                <div>Events @ CS</div>
                <div>Events @ CS</div> 
              </div>
              </a>
            </div>
            <div class="col-sm" style={{padding: "6%"}} data-aos="fade-left">
              <FaNewspaper id="icons" style={{ fontSize: "30px"}}/>
              <a href="/#/News/News">
              <div class="button_base b07_3d_double_roll">
                  <div>Postings @ CS</div>
                  <div>Postings @ CS</div>
                  <div>Postings @ CS</div>
                  <div>Postings @ CS</div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default HomePage;