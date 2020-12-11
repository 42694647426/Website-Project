import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import { Button, Collapse } from "react-bootstrap";
import "../static/bodycomponent.css";
import Aos from "aos";
import "aos/dist/aos.css";


class AcademicUndergrad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Undergraduate: true,
      Graduate: false,
      Course: false,
      TeachingAss: false,
      Funding: false,
    };
    this.handleUndergraduate = this.handleUndergraduate.bind(this);
    this.handleGraduate = this.handleGraduate.bind(this);
    this.handleFunding = this.handleFunding.bind(this);
    this.handleCourse = this.handleCourse.bind(this);
    this.handleTeachingAss = this.handleTeachingAss.bind(this);
  }

  handleGraduate() {
    this.setState((state) => ({
      Graduate: !state.Graduate,
    }));
  }

  handleCourse() {
    this.setState((state) => ({
      Course: !state.Course,
    }));
  }

  handleTeachingAss() {
    this.setState((state) => ({
      TeachingAss: !state.TeachingAss,
    }));
  }

  handleFunding() {
    this.setState((state) => ({
      Funding: !state.Funding,
    }));
  }

  handleUndergraduate() {
    this.setState((state) => ({
      Undergraduate: !state.Undergraduate,
    }));
  }
  render() {
    Aos.init();
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div class="row" style={props}>
            <ScrollToTopOnMount />
            <div class="col-sm-2" style={{ backgroundColor: "aliceblue" }}>
              {/*Undergradute button*/}
              <div>
                <div class="tab-name">Academic</div>
                <Button
                  className="btn btn-blue"
                  onClick={this.handleUndergraduate}
                >
                  Undergraduate
                </Button>
                <Collapse in={this.state.Undergraduate}>
                  <div class="nav flex-column nav-pills" id="ColUnder" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="" data-toggle="pill" href="#Academic/AcademicUndergrad" role="tab">Overview</a>
                    <a class="nav-link" id="" data-toggle="pill" href="#Academic/Auinfor" role="tab">Information for incoming students</a>
                    <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Remote Learning</a>
                    <a class="nav-link" id="" data-toggle="pill" href="" role="tab">FAQ</a>
                    <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Advising</a>
                    <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Comp202/204/208</a>
                    <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Streams</a>
                    <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Bachelor of Science</a>
                    <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Bachelor of Arts</a>
                    <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Bachelor of Arts and Science</a>
                    <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Minor Computer Science</a>
                    <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Games</a>
                    <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Research</a>
                    <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Internship and Career</a>
                    <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Preparation for grad studies</a>
                  </div>
                </Collapse>
              </div>
              {/*gradute button*/}
              <div>
                <Button className="btn btn-blue" onClick={this.handleGraduate}>
                  Graduate
                </Button>
                <Collapse in={this.state.Graduate}>
                <div class="nav flex-column nav-pills" id="ColUnder" role="tablist" aria-orientation="vertical">
                  <a class="nav-link" id="" data-toggle="pill" href="AcademicGrad" role="tab">Overview</a>
                  <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Master</a>
                  <a class="nav-link" id="" data-toggle="pill" href="" role="tab">P.H.D</a>
                  <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Admission</a>
                  <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Applying</a>
                  <a class="nav-link" id="" data-toggle="pill" href="" role="tab">FAQ</a>
                </div>
                </Collapse>
              </div>
              {/*Course button*/}
              <a href="AcademicCourses">
                <Button className="btn btn-blue">Course</Button>
              </a>
              {/*TeachingAssistant button*/}
              <div>
                <Button
                  className="btn btn-blue"
                  onClick={this.handleTeachingAss}
                >
                  Teaching Assisting
                </Button>

                <Collapse in={this.state.TeachingAss}>
                  <div
                    class="nav flex-column nav-pills"
                    id="ColUnder"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      class="nav-link"
                      id=""
                      data-toggle="pill"
                      href="AcademicTeachingAss"
                      role="tab"
                    >
                      TA and Research Assistant
                    </a>
                    <a
                      class="nav-link"
                      id=""
                      data-toggle="pill"
                      href=""
                      role="tab"
                    >
                      TA awards
                    </a>
                  </div>
                </Collapse>
              </div>

              {/*Funding button*/}
              <div>
                <Button className="btn btn-blue" onClick={this.handleFunding}>
                  Funding
                </Button>

                <Collapse in={this.state.Funding}>
                  <div
                    class="nav flex-column nav-pills"
                    id="ColUnder"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      class="nav-link"
                      id=""
                      data-toggle="pill"
                      href="AcademicFunding"
                      role="tab"
                    >
                      Financial Information
                    </a>
                    <a
                      class="nav-link"
                      id=""
                      data-toggle="pill"
                      href=""
                      role="tab"
                    >
                      Graduate Scholarships
                    </a>
                    <a
                      class="nav-link"
                      id=""
                      data-toggle="pill"
                      href=""
                      role="tab"
                    >
                      Expense Reports
                    </a>
                  </div>
                </Collapse>
              </div>
            </div>

            <div class="col-sm-9">
              <div className="body">
                <h1>Overview</h1>
                <p>
                  The School of Computer Science strives to promote a healthy
                  and supportive community atmosphere for everyone. Our goal is
                  to create, encourage, and support student's academic, social
                  and professional opportunities in the computer sciences and to
                  promote the breadth of the field and its diverse community.
                </p>
                <h2>Why study Computer Science?</h2>
                <p>
                  Computer science plays a pivotal role in our economy and
                  culture today. It is a foundational science in itself, and it
                  also interacts with many other fields in the natural sciences,
                  social sciences, and engineering. These interactions are
                  changing these fields at a fundamental level, and have led to
                  emerging subfields known as “Computational X” where X can be
                  Chemistry, Physics, Biology, Psychology, Linguistics and so
                  on. Our courses and wide range of programs provide
                  opportunities for students interested in Computer Science for
                  itself, and also for students in different fields who wish to
                  learn about computing. Studying Computer Science gives one a
                  unique set of analytical skills and tools that may be useful
                  for careers in many fields. In particular, computational
                  thinking will likely be crucial for understanding and shaping
                  the world in the coming decades.
                </p>
                <p>
                  Studying Computer Science involves learning the theory and
                  practice of how to design and implement computer and
                  information systems. Students not only learn computer
                  programming, but they also learn more abstract skills for
                  representing, processing, managing, and analyzing information
                  (data) and computation. A key component is the study of
                  algorithms. An algorithm presents a detailed sequence of
                  actions solving a particular task. A computer program is just
                  the implementation of an algorithm in a specific programming
                  language, which enables a computer to execute the algorithm.
                </p>
                <h2>
                  Computer Science is split into many different areas. Examples
                  are:
                </h2>
                <ul>The study of algorithms and data structures</ul>
                <ul>Programming languages and methodology</ul>
                <ul>Theory of computation</ul>
                <ul>
                  Software engineering (the design of large software systems)
                </ul>
                <ul>Computer architecture (the structure of the hardware)</ul>
                <ul>Communication between computers</ul>
                <ul>
                  Operating systems (the software that shields users from the
                  underlying hardware)
                </ul>
                <ul>
                  Database systems (software that handles large amounts of data
                  efficiently)
                </ul>
                <ul>
                  Artificial intelligence and Machine Learning (algorithms
                  inspired by human information processing)
                </ul>
                <ul>
                  Visual Computing, including Computer Vision (algorithms and
                  systems that let computers see and recognize their
                  environment) and Computer Graphics
                </ul>
                <ul>Robotics (algorithms that control robots)</ul>
                <ul>
                  Computational biology (algorithms and methods that address
                  problems inspired by biology)
                </ul>
                <h2>Where does a Computer Science degree lead?</h2>
                <p>
                  A degree in Computer Science offers excellent job prospects.
                  As the use of computers and specialized software plays a
                  crucial role in business, science, and our personal life, our
                  graduates are in high demand. Computer scientists find jobs
                  not only in software development, but aso in consulting,
                  research, and project management. As computer scientists often
                  develop the software for a specific application domain (e.g.,
                  business, engineering, medicine), they must be prepared and
                  willing to get to know their application area. Similarly,
                  those who are specialized in another area can always benefit
                  from knowing more about computing. Even just a few courses in
                  Computer Science can give one a large edge in approaching
                  problems that involve computing, understanding how to solve
                  them, and how to communicate with computing experts.
                </p>
                <p>
                  Where to begin? The School of Computer Science offers a wide
                  range of programs within several degree programs: Bachelor of
                  Science, Bachelor of Arts, Bachelor of Arts & Science, and
                  Bachelor of Engineering. Most programs start with the same set
                  of basic courses allowing students to decide on their exact
                  program once they get a basic understanding of the discipline.
                  All students planning to enter Computer Science programs are
                  strongly encouraged to make an appointment with an academic
                  adviser through the School's Undergraduate Student Affairs
                  Office (see Undergraduate Advising).
                </p>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default AcademicUndergrad;

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 600);
  }

  render() {
    return null;
  }
}
