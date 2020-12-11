import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops';
import Aos from "aos";
import "aos/dist/aos.css";

class ProspectiveTransfer extends Component {
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
        <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveGeneralInfo" role="tab">General Info</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveWhyCS" role="tab">Why CS</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveCEGEP" role="tab">CEGEP</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveFreshman" role="tab">Freshman</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveChoosingAMajor" role="tab">Choosing A Major</a>
                  <a class="nav-link active" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveTransfer" role="tab">Transfer</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveInternship" role="tab">Internship</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveUndergrad" role="tab">Undergraduate Admission</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveGrad" role="tab">Graduate Admission</a>
    </div>

        </div>
        <div class="col-sm-9">
<p>real content Transfer</p>
        </div>
    </div>
     }
     </Spring>
    );
         
    }
}
 
export default ProspectiveTransfer;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }