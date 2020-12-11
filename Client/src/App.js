import './App.css';
// import IndexPage from './IndexPage';
// import LoginPage from './Login/LoginPage';
// import RegisterPage from './Login/RegisterPage';
import Welcome from './Login/Welcome'
import { HashRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
// import { HashRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Header from './Header'
// import Loader from './Loader'
import ScrollToTop from './ScrollToTop'
import Search from './Search'
import Footer from './Footer'
import HomePage from './HomePage'
import React, {Component, useState, useEffect } from "react";

import AboutContacts from './About/AboutContacts'
import AboutFacilities from './About/AboutFacilities'
import AboutVF from './About/AboutVF'
import AboutRoomR from './About/AboutRoomR'
import AboutWebM from './About/AboutWebM'
import AboutInternal from './About/AboutInternal'
import AboutTechSupport from './About/AboutTechSupport'
import AboutAdminInfor from './About/AboutAdminInfor'


import AcademicUndergrad from './Academic/AcademicUndergrad'
import AcademicGrad from './Academic/AcademicGrad'
import AcademicFunding from './Academic/AcademicFunding'
import AcademicTeachingAss from './Academic/AcademicTeachingAss'
import AcademicCourses from './Academic/AcademicCourses'
import AUinfor from './Academic/AUinfor'

import Donate from './Donate/Donate'

import EmploymentFaculty from './Employment/EmploymentFaculty'
import EmploymentLecturer from './Employment/EmploymentLecturer'
import EmploymentPP from './Employment/EmploymentPP'
import EmploymentResearch from './Employment/EmploymentResearch'
import EmploymentStudents from './Employment/EmploymentStudents'

import News from './News/News'
import Events from './News/Events'
import New1 from './News/N1'

import PeopleFaculty from './People/PeopleFaculty'
import PeopleStaff from './People/PeopleStaff'
import PeopleCommunity from './People/PeopleCommunity'

import ProspectiveGeneralInfo from './ProspectivePages/ProspectiveGeneralInfo'
import ProspectiveCEGEP from './ProspectivePages/ProspectiveCEGEP'
import ProspectiveChoosingAMajor from './ProspectivePages/ProspectiveChoosingAMajor'
import ProspectiveFreshman from './ProspectivePages/ProspectiveFreshman'
import ProspectiveGrad from './ProspectivePages/ProspectiveGrad'
import ProspectiveInternship from './ProspectivePages/ProspectiveInternship'
import ProspectiveUndergrad from './ProspectivePages/ProspectiveUndergrad'
import ProspectiveWhyCS from './ProspectivePages/ProspectiveWhyCS'
import ProspectiveTransfer from './ProspectivePages/ProspectiveTransfer'

import ResearchArea from './Research/ResearchArea'
import ResearchTecReport from './Research/ResearchTecReport';
import CustomPage from './Login/CustomPage';
import "./static/bodycomponent.css";
//import { Session } from 'bc-react-session';
//import Cookies from 'js-cookie';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     isLoading: false
  //   }
  // }
  // componentWillReceiveProps(nextProps) {
  //   this.setState({ isLoading: nextProps.isLoading });


  // componentDidMount() {
  //   // this simulates an async action, after which the component will render the content
  //   setTimeout(() => {
  //     this.setState({ loading: false });
  //  }, 2000);
  // }

  render() {
    // const { loading } = this.state;
    // if(loading) { // if your component doesn't have to wait for an async action, remove this block 
    //   return null; // render null when app is not ready
    // }else{

      return (
        <div>
          <Router>
          <ScrollToTop />
          <Header />
          <Switch>
            {/*homepage*/}
              <Route exact path = '/' component = {HomePage} />
            {/*prospectivePages*/}
              {/* <Route exact path = "/login" component = {LoginPage} />
              <Route exact path = "/register" component = {RegisterPage} /> */}
              <Route exact path = "/welcome" component = {Welcome} />
              <Route exact path = "/CustomPage" component = {CustomPage} />
              <Route exact path = "/Search" component = {Search} />
              <Route exact path = "/ProspectivePages/ProspectiveGeneralInfo" component = {ProspectiveGeneralInfo} />
              <Route exact path = "/ProspectivePages/ProspectiveCEGEP" component = {ProspectiveCEGEP} />
              <Route exact path = "/ProspectivePages/ProspectiveChoosingAMajor" component = {ProspectiveChoosingAMajor} />
              <Route exact path = "/ProspectivePages/ProspectiveFreshman" component = {ProspectiveFreshman} />
              <Route exact path = "/ProspectivePages/ProspectiveGrad" component = {ProspectiveGrad} />
              <Route exact path = "/ProspectivePages/ProspectiveInternship" component = {ProspectiveInternship} />
              <Route exact path = "/ProspectivePages/ProspectiveUndergrad" component = {ProspectiveUndergrad} />
              <Route exact path = "/ProspectivePages/ProspectiveWhyCS" component = {ProspectiveWhyCS} />
              <Route exact path = "/ProspectivePages/ProspectiveTransfer" component = {ProspectiveTransfer} />
            
  
            {/*Academic*/}
              <Route exact path = "/Academic/AcademicUndergrad" component = {AcademicUndergrad} />
              <Route exact path = "/Academic/AcademicGrad" component = {AcademicGrad} />
              <Route exact path = "/Academic/AcademicFunding" component = {AcademicFunding} />
              <Route exact path = "/Academic/AcademicTeachingAss" component = {AcademicTeachingAss} />
              <Route exact path = "/Academic/AcademicCourses" component = {AcademicCourses} />
              <Route exact path = "/Academic/AUinfor" component = {AUinfor} />
  
              {/*Research*/}
              <Route exact path = "/Research/ResearchArea" component = {ResearchArea} />
              <Route exact path = "/Research/ResearchTecReport" component = {ResearchTecReport} />
  
              {/*People*/}
              <Route exact path = "/People/PeopleFaculty" component = {PeopleFaculty} />
              <Route exact path = "/People/PeopleStaff" component = {PeopleStaff} />
              <Route exact path = "/People/PeopleCommunity" component = {PeopleCommunity} />
  
              {/*News*/}
              <Route exact path = "/News/News" component = {News} />
              <Route exact path = "/News/Events" component = {Events} />
              <Route exact path = "/News/N1" component = {New1} />
              
              {/*Empolyment*/}
              <Route exact path = "/Employment/EmploymentFaculty" component = {EmploymentFaculty} />
              <Route exact path = "/Employment/EmploymentLecturer" component = {EmploymentLecturer} />
              <Route exact path = "/Employment/EmploymentPP" component = {EmploymentPP} />
              <Route exact path = "/Employment/EmploymentResearch" component = {EmploymentResearch} />
              <Route exact path = "/Employment/EmploymentStudents" component = {EmploymentStudents} />
  
              {/*Donate*/}
              <Route exact path = "/Donate/Donate" component = {Donate} />
  
              {/*about*/}
              <Route exact path = "/About/AboutContacts" component = {AboutContacts} />
              <Route exact path = "/About/AboutFacilities" component = {AboutFacilities} />
              <Route exact path = "/About/AboutVF" component = {AboutVF} />
              <Route exact path = "/About/AboutRoomR" component = {AboutRoomR} />
              <Route exact path = "/About/AboutWebM" component = {AboutWebM} />
              <Route exact path = "/About/AboutInternal" component = {AboutInternal} />
              <Route exact path = "/About/AboutTechSupport" component = {AboutTechSupport} />
              <Route exact path = "/About/AboutAdminInfor" component = {AboutAdminInfor} />
  
            </Switch>
            <Footer />
            </Router>
          </div>
      );

    // }

  }
}
// function demoAsyncCall() {
//   return new Promise((resolve) => setTimeout(() => resolve(), 5500));
// }
// the setTimeout simulates the time it takes react to load, and is not part of the solution

export default App;

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(200, 200);
  }

  render() {
    return null;
  }
}