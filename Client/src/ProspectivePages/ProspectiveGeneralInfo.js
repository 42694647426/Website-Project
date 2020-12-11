import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops'
import "../static/bodycomponent.css";
import Aos from "aos";
import "aos/dist/aos.css";

class ProspectiveGeneralInfo extends Component {
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
                  <div class="tab-name">Prospective</div>
                  <a class="nav-link active" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveGeneralInfo" role="tab">General Info</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveWhyCS" role="tab">Why CS</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveCEGEP" role="tab">CEGEP</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveFreshman" role="tab">Freshman</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveChoosingAMajor" role="tab">Choosing A Major</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveTransfer" role="tab">Transfer</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveInternship" role="tab">Internship</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveUndergrad" role="tab">Undergraduate Admission</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveGrad" role="tab">Graduate Admission</a>
                </div>
                </div>
                <div class="col-md-10 right-column">
                 <div className = "body">
                           <h1>McGill School of Computer Science</h1>
                           <p><a href="https://www.mcgill.ca/">McGill University</a> is one of the top research universities in Canada and is the only Canadian university to rank consistently among the top 25 universities in the world (based on <a href="http://www.google.ca">Times and QS rankings</a>). The School of Computer Science currently stands second in Canada for its research funding. Our professors have received most of the top awards in Computer Science, while our students go on to become top-notch research and industry leaders. A graduate degree from the McGill School of Computer Science is recognized in both the academic and industrial worlds as a proof of excellence.</p>
                           <p>Our department is currently 34 <a href="http://www.google.ca">faculty members</a> strong, 60 Ph.D. students, and 100 Masters students. All of our Ph.D. students and most of our Masters students are funded through teaching assistantships or research assistantships. Approximately half our graduate students are Canadian and the other half are from abroad.</p>
                           <h2>Location</h2>
                           <p>McGill is an English language university located in the heart of Montreal, the second largest French-speaking city in the world. Montreal has a reputation for its cosmopolitan atmosphere, history, cultural and sport activities, and excellent restaurants. The cultural offerings of the city include a symphony orchestra, ballet, opera, several theaters and museums. For outdoor recreation, Mount Royal, a wooded mountain with a lake and parks located very close to the university, along with the St. Lawrence river, the many lakes and parks around the island of Montreal, provide opportunity for a wide variety of activities. Montreal consistently ranks among the most livable cities in the world, and the cost of living is among the lowest for cities of its size. The city is extremely safe and has an excellent public transportation system. Note that although speaking French is useful to fully enjoy your experience in Montreal, it is by no means necessary, as English is also spoken fluently by most of the population. More information can be found on the McGill Prospective Students web page, while information on Montreal is available from Montreal International.</p>
                           <h2>The Academic Year</h2>
                           <p>The academic year at McGill, as at most Canadian universities, has two terms (or semesters). These are the Fall term - early September to early December - and the Winter term - early January to mid-April.There is also a Summer term, although no graduate courses are offered during this session. It is used by students as a time for research or completing projects or theses.</p>
                           <h2>Important Information for Foreign Students</h2>
                           <p>All students who are not citizens or permanent residents of Canada are required to obtain the necessary Visa and/or Student Authorization documents prior to entering the country. Do NOT leave home without proper documentation! You CANNOT change your status from Visitor to Student when in Canada.</p>
                           <p><b>Student Authorization: </b>Issued by Canada Immigration through a Canadian Embassy or Consulate. There is a processing fee of $125 on all applications for Student Authorizations. LINK</p>
                           <p><b>Certificate of Acceptance (CAQ):</b>Issued by Quebec Immigration for a fee of $100. If there is no Quebec Immigration office in the country in which you are applying, you must fill out the application for a CAQ and send it to the Quebec Immigration Office in Montreal along with the $100 processing fee. Once CAQ is approved, Quebec Immigration will telex the Canadian Embassy you are dealing with. If there is a Quebec Immigration office in the country in which you are applying, you apply for the CAQ through them.</p>
                           <p><b>Health Insurance (Compulsory):</b>Quebec requires all international students to participate in a recognized Health Insurance Plan. Cost is approximately $500 per year for a single person. Most students use one of the insurance plans offered by McGill.</p>
                           <p>Once accepted, all international students receive detailed instructions on immigration procedures. These instructions should be read very carefully to avoid unnecessary delays. Applicants are advised to begin procedures necessary to ensure admission to Canada and complete required medical papers for Canadian Immicolor"</p>
                           <h2>Student Accommodation</h2>
                           <p>Off-campus housing is the most popular among McGill graduate students, as it is usually affordable, convenient, and easy to find. The Off-Campus Housing Service keeps a computerized list of available housing within walking distance of McGill, or easily accessible by metro and bus lines. Most listings are checked to ensure minimum standards of cleanliness and state of repair. Rental rates vary according to accommodation desired, but are considered very reasonable in comparison with most North American cities. The University maintains a limited number of apartment units in several nearby locations. Housing request forms can be obtained from the Graduate Housing office.</p>
                 </div>
                </div>
            </div>
             }
             </Spring>
        );
    }
}
 
export default ProspectiveGeneralInfo;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }