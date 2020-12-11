import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import { Card, Button } from 'react-bootstrap';
import admission from '../pictures/admission.png';
import program from '../pictures/program.png';
import contact from '../pictures/contact.png';
import gradadm from '../pictures/gradadm.png';
import gradprogram from '../pictures/gradprogram.png';
import Aos from "aos";
import "aos/dist/aos.css";

import "../static/bodycomponent.css";

const messageSent = () => {
  alert("message sent!")
}

class AboutContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      Aos.init();
        return ( 
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props =>             
            <div class="row" style={props}>
              <ScrollToTopOnMount />
              <div class="col-md-2" style={{backgroundColor: "aliceblue"}}>
                <div class="nav flex-column nav-pills" id="" role="tablist" aria-orientation="vertical">
                  <div class="tab-name">About</div>
                  <a class="nav-link active" id="" data-toggle="pill" href="#About/AboutContacts" role="tab">Contacts</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#About/AboutFacilities" role="tab">Facilities</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#About/AboutVF" role="tab">Visitor Form</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#About/AboutRoomR" role="tab">Room Reservation</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#About/AboutWebM" role="tab">Web Mail</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#About/AboutInternal" role="tab">Internal</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#About/AboutTechSupport" role="tab">Tech Support</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#About/AboutAdminInfor" role="tab">Admin Infor</a>
                </div>
              </div>
              <div class="col-md-10 right-column">
                <div className = "body">
                  <div className="container">
                    <h2>Where Are We?</h2>
                    <div className="row">
                      <p>
                      Room 318 McConnell Engineering Bldg. 
                      <br></br>
                      3480 University St.,
                      <br></br>
                      Montréal, Québec, Canada
                      <br></br>
                      H3A 0E9
                      <br></br>
                      Tel: (514) 398-7071
                      <br></br>
                      Fax: (514) 398-3883
                      </p> 
                    </div> 
                  </div>
                  <hr></hr>
                  <div className="container">
                    <h2>Undergraduate Studies</h2>
                    <div className="row">
                      <div class="col-lg">
                        <Card>
                          <Card.Img variant="top" src={admission} />
                          <Card.Body>
                            <Card.Title>Application Info</Card.Title>
                            <Card.Text>
                              For more information about the admission requirements, please visit the admission website.
                            </Card.Text>
                            <Button variant="primary" href="https://www.mcgill.ca/admissions/">Admission</Button>
                          </Card.Body>
                        </Card>
                      </div>
                      <div class="col-lg">
                        <Card>
                          <Card.Img variant="top" src={program} />
                          <Card.Body>
                            <Card.Title>Program Info</Card.Title>
                            <Card.Text>
                              For more information about the available programs, please visit the program website
                            </Card.Text>
                            <Button variant="primary" href="https://www.mcgill.ca/undergraduate-admissions/programs">Programs</Button>
                          </Card.Body>
                        </Card>
                      </div>
                      <div class="col-lg">
                        <Card>
                          <Card.Body>
                            <Card.Title>Contact Us</Card.Title>
                            <Card.Text>
                                Liette Chin
                                <br></br>
                                ugrad-coordinator@cs.mcgill.ca
                                <br></br>
                                Tel: (514) 398-7071 ext. 00118
                            </Card.Text>
                            <hr></hr>
                            <Card.Text>
                                Adina Puica
                                <br></br>
                                undergraduate.secretary@cs.mcgill.ca
                                <br></br>
                                Tel: (514) 398-7071 ext. 00739
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>  
                  <hr></hr>                
                  <div className="container">
                    <h2>Graduate Studies</h2>
                    <div className="row">
                      <div class="col-lg">
                        <Card>
                          <Card.Img variant="top" src={gradadm} />
                          <Card.Body>
                            <Card.Title>Application Info</Card.Title>
                            <Card.Text>
                              For more about the application process, please visit the graduation admission website
                            </Card.Text>
                            <Button variant="primary" href="https://www.mcgill.ca/gradapplicants/how-apply">Admission</Button>
                          </Card.Body>
                        </Card>
                      </div>
                      <br></br>
                      <div class="col-lg">
                        <Card>
                          <Card.Img variant="top" src={gradprogram} />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Read more about the avaiable graduate programs at McGill
                            </Card.Text>
                            <Button variant="primary" href="https://www.mcgill.ca/gradapplicants/programs'">Graduate Programs</Button>
                          </Card.Body>
                        </Card>
                      </div>
                      <div class="col-lg">
                        <Card>
                          <Card.Body>
                            <Card.Title>Contact Us</Card.Title>
                            <Card.Text>
                              Ann Jack 
                              <br></br>
                              ann.jack@mcgill.ca
                              <br></br>
                              Tel: (514) 398-7071 ext. 00074
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="container">
                    <div className="row">
                      <h2>Computer & Network Operations</h2>
                    </div>
                    <div className="row">
                      <Card style={{width: "35rem"}}>
                          <Card.Img variant="top" src={contact} />
                          <Card.Body>
                            <Card.Title>Help Desk</Card.Title>
                            <Card.Text>
                              McConnell Engineering Bldg. Room 209N
                              <br></br>
                              3480 University, Montreal, Qc, Canada, H3A 0E9
                              <br></br>
                              help@cs.mcgill.ca
                              <br></br>
                              Tel: (514) 398-7087
                            </Card.Text>
                            <Button variant="primary" href="https://www.mcgill.ca/admissions/">Admission</Button>
                          </Card.Body>
                      </Card>
                    </div>
                  </div>
                  <hr></hr>
                  <div class="container">
                    <div className="row">
                      <h2>Got any questions about the website? Shoot us a message!</h2>
                    </div>
                      <div class="col-lg-7" id="contact-form">
                        <form
                          class="form-horizontal"
                          action="https://formspree.io/f/xknpqwol"
                          method="POST"
                        >
                        <fieldset>
                          <div class="form-group">
                            <div class="col-md-12">
                              <input
                                name="name"
                                placeholder="Name"
                                class="form-control"
                                type="text"
                              ></input>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="col-md-12">
                              <input
                                name="email"
                                placeholder="E-Mail Address"
                                class="form-control"
                                type="text"
                              ></input>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="col-md-12 inputGroupContainer">
                              <textarea
                                class="form-control"
                                name="message"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="col-md-12">
                              <button type="submit" class="btn btn-outline-primary">Send</button>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            }
          </Spring>

         );
    }
}
 
export default AboutContacts;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }