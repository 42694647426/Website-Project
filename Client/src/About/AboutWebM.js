import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops';
import Aos from "aos";
import "aos/dist/aos.css";

class AboutWebM extends Component {
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
                <div class="col-sm-3">
      
                <div class="nav flex-column nav-pills" id="" role="tablist" aria-orientation="vertical">
      <a class="nav-link" id="" data-toggle="pill" href="#About/AboutContacts" role="tab">Contacts</a>
      <a class="nav-link" id="" data-toggle="pill" href="#About/AboutFacilities" role="tab">Facilities</a>
      <a class="nav-link" id="" data-toggle="pill" href="#About/AboutVF" role="tab">Visitor Form</a>
      <a class="nav-link" id="" data-toggle="pill" href="#About/AboutRoomR" role="tab">Room Reservation</a>
      <a class="nav-link active" id="" data-toggle="pill" href="#About/AboutWebM" role="tab">Web Mail</a>
      <a class="nav-link" id="" data-toggle="pill" href="#About/AboutInternal" role="tab">Internal</a>
      <a class="nav-link" id="" data-toggle="pill" href="#About/AboutTechSupport" role="tab">Tech Support</a>
      <a class="nav-link" id="" data-toggle="pill" href="#About/AboutAdminInfor" role="tab">Admin Infor</a>
    </div>

                </div>
                <div class="col-sm-9">
      <p>real content Major</p>
                </div>
            </div>
             }
             </Spring>
         );
    }
}
 
export default AboutWebM;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }