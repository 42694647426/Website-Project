import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
// Import React Table
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import kemme from "../pictures/kemme.jpg";
import blanchette from "../pictures/blanchette.jpg";
import defaultpic from "../pictures/default.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import mydata from "./info.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/bodycomponent.css";
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap";
export default class PeopleFaculty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mydata,
    };
  }

  render() {
    Aos.init();
    const { data } = this.state;
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div class="row" style={props}>
            <ScrollToTopOnMount />
            <div class="col-md-2" style={{ backgroundColor: "aliceblue" }}>
              <div
                class="nav flex-column nav-pills"
                id=""
                role="tablist"
                aria-orientation="vertical"
              >
                <div class="tab-name">People</div>
                <a
                  class="nav-link active"
                  id=""
                  data-toggle="pill"
                  href="#/People/PeopleFaculty"
                  role="tab"
                >
                  Faculty
                </a>
                <a
                  class="nav-link"
                  id=""
                  data-toggle="pill"
                  href="#/People/PeopleStaff"
                  role="tab"
                >
                  Staff
                </a>
                <a
                  class="nav-link"
                  id=""
                  data-toggle="pill"
                  href="#/People/PeopleCommunity"
                  role="tab"
                >
                  Community
                </a>
              </div>
            </div>
            <div class="col-md-10 right-column">
              <div className="body">
                <div class="container">
                  <h2>Director of School</h2>
                  <div class="row">
                    <div class="col-xs-1 col-md-3">
                      <img src={kemme} id="facultypic"></img>
                    </div>
                    <div class="col-xs-11 col-md-9">
                      <div class="faculty-content">
                        <br></br>
                        <h3>Bettina Kemme</h3>
                        <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded" href="https://www.cs.mcgill.ca/~kemme/">
                          <i class="fa fa-arrow-right"></i>
                          <span class="spn">Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <h2>Associate Director of Research</h2>
                  <div class="row">
                    <div class="col-xs-1 col-md-3">
                      <img src={blanchette} id="facultypic"></img>
                    </div>
                    <div class="col-xs-11 col-md-9">
                      <div class="faculty-content">
                        <br></br>
                        <h3>Mathieu Blanchette</h3>
                        <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                          <i class="fa fa-arrow-right"></i>
                          <span class="spn">Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <h2>Professors</h2>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Oana Balmau</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Xiao-Wen Chang</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Jackie Chi Kit Cheung</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Claude Crepeau</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Luc Dubach</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Gregory Dudek</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Jin Guo</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>William L.Hamilton</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>s
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Hamed Hatami</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Jorg kienzie</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Paul Kry</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Michael Langer</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Yue Li</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Hsiu-Chin Lin</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Xue Liu</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Muthucumaru Maheswaran</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>David Meger</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Prakash Panangaden</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Elizabeth Patitsas</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Brigitte Pientka</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Brigitte Pientka</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Joelle Pineau</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Doina Precup</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Reihaneh Rabbany</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Siamak Ravanbakhsh</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Siva Reddy</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Bruce Reed</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Blake Richards</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Robert Robere</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Martin Robillard</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>David Rolnick</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Derek Ruths</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Xujie Si</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Kaleem Siddiqi</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Clark Verbrugge</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Adrian Vetta</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Jerome Waldispuhi</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Giulia Alberini</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <h2>Faculty Lecturers</h2>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>David Becerra</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Joseph D'Silva</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Joseph Vybihal</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Louigi Addario-Berry</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <hr></hr>
                  <h2>Associate Members</h2>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Sylvain Baillet</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Guillaume Bourque</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Benjamin Fung</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Simon Gravel</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Derek Nowrouzezahrais</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Timothy O'Donnell</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Peter Savadjiev</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Dirk Schlimm</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Thomas Shultz</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Morgan Sonderegger</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Yi Yang</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Marc G.Bellemare</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <hr></hr>
                  <h2>Adjunct Professors</h2>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Fernando Diaz</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Tristan Glatard</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Geoffrey Gordon</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Michael Hallett</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Wenbo He</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Nicolas Le Roux</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Annie Louis</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Ioannis Rekleitis</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Adriana Romero Soriano</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Bruce Shepherd</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Danny Tarlow</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Adam Trischler</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>David Avis</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Renato De Mori</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <hr></hr>
                  <h2>Emeritus Professors</h2>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Tim Merrett</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Monty Newborn</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Chris Paige</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Gerald Ratzer</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Denis Therien</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Nathan Friedman</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Carl Tropper</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Yang Cai</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Patrick Hayden</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Hans Vangheluwe</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <hr></hr>
                  <h2>In Memoriam</h2>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Laurie Hendren</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={defaultpic} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Godfried Toussaint</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                </div>
                <div class="container">
                <ReactTable
                  data={data}
                  columns={[
                    {
                      columns: [
                        {
                          Header: "First Name",
                          id: "firstName",
                          width: 150, 
                          accessor: (d) => d.firstName,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").join("");
                            const bReverse = b.split("").join("");
                            return aReverse > bReverse ? -1 : 1;
                          },
                        },
                        {
                          Header: "Last Name",
                          id: "lastName",
                          width: 150, 
                          accessor: (d) => d.lastName,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").join("");
                            const bReverse = b.split("").join("");
                            return aReverse > bReverse ? -1 : 1;
                          },
                        },
                        {
                          Header: "Position",
                          id: "position",
                          width: 250, 
                          accessor: (d) => d.position,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").reverse().join("");
                            const bReverse = b.split("").reverse().join("");
                            return aReverse > bReverse ? -1 : 1;
                          },
                        },
                        {
                          Header: "Field",
                          id: "field",
                          width: 600,
                          accessor: (d) => d.field,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").reverse().join("");
                            const bReverse = b.split("").reverse().join("");
                            return aReverse > bReverse ? 1 : -1;
                          },
                        },
                        {
                          Header: "Office",
                          id: "office",
                          width: 200,
                          accessor: (d) => d.office,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").reverse().join("");
                            const bReverse = b.split("").reverse().join("");
                            return aReverse > bReverse ? 1 : -1;
                          },
                        },
                        {
                          Header: "Phone",
                          id: "phone",
                          width: 200,
                          accessor: (d) => d.phone,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").reverse().join("");
                            const bReverse = b.split("").reverse().join("");
                            return aReverse > bReverse ? 1 : -1;
                          },
                        },
                      ],
                    }
                  ]}
                  defaultPageSize={10}
                  className="-striped -highlight"
                />
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 600);
  }

  render() {
    return null;
  }
}
