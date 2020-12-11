import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Accordion, Card } from "react-bootstrap";
import ai from "../pictures/research-ai.jpg";
import bio from "../pictures/research-bio.jpg";
import compute from "../pictures/research-compute.jpg";
import robot from "../pictures/research-robot.jpg";
import lang from "../pictures/research-lang.jpg";
import network from "../pictures/research-network.jpg";
import se from "../pictures/research-se.jpg";
import theory from "../pictures/research-theory.jpg";
import graph from "../pictures/research-graph.jpg";
import game from "../pictures/research-game.jpg";
import "../static/bodycomponent.css";
import Aos from "aos";
import "aos/dist/aos.css";

class ResearchArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                <div class="tab-name">Research</div>
                <a class="nav-link active" id="" data-toggle="pill" href="#Research/ResearchArea" role="tab">Research Area</a>
                <a class="nav-link" id="" data-toggle="pill" href="#Research/ResearchTecReport" role="tab">Academic Graduate</a>
              </div>
            </div>
            <div class="col-md-10 right-column">
              <div className="body">
                <h1>Research @ CS</h1>
                <div className="row">
                  <div className="col-8">
                  <h3>Artificial Intelligence</h3>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            Research Areas
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <li>Deep Learning Theory</li>
                            <li>Data Science</li>
                            <li>Data Mining</li>
                            <li>Climate Change</li>
                            <li>Internet Technologies</li>
                            <li>Computer Vision</li>
                            <li>Big Data Applications</li>
                            <li>Societal Impacts of AI</li>
                            <li>Information Retrieval</li>
                            <li>Applied Machine Learning</li>
                            <li>Brain Inspired Artificial Intelligence</li>
                            <li>Network Dynamics</li>
                            <li>Optimization</li>
                            <li>Graph Neural Networks</li>
                            <li>Pattern Recognition</li>
                            <li>Machine Learning applied to Computing Systems</li>
                            <li>Computational Linguistics</li>
                            <li>Machine Learning</li>
                            <li>Network Science</li>
                            <li>Natural Language Processing</li>
                            <li>Reasoning and Learning</li>
                            <li>Social and Information Networks</li>
                            <li>Fairness</li>
                            <li>Computational Social Science</li>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            Professors
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <a href="/people/faculty/#13" class="list-group-item">Xiao-Wen Chang</a>
                            <a href="/people/faculty/#13" class="list-group-item">Jackie Chi Kit Cheung</a>
                            <a href="/people/faculty/#13" class="list-group-item">Gregory Dudek</a>
                            <a href="/people/faculty/#13" class="list-group-item">Jin Guo</a>
                            <a href="/people/faculty/#13" class="list-group-item">William L. Hamilton</a>
                            <a href="/people/faculty/#13" class="list-group-item">Paul Kry</a>
                            <a href="/people/faculty/#13" class="list-group-item">Michael Langer</a>
                            <a href="/people/faculty/#13" class="list-group-item">Hsiu-Chin Lin</a>
                            <a href="/people/faculty/#13" class="list-group-item">Xue Liu</a>
                            <a href="/people/faculty/#13" class="list-group-item">David Meger</a>
                            <a href="/people/faculty/#13" class="list-group-item">Prakash Panangaden</a>
                            <a href="/people/faculty/#13" class="list-group-item">Joelle Pineau</a>
                            <a href="/people/faculty/#13" class="list-group-item">Doina Precup</a>
                            <a href="/people/faculty/#13" class="list-group-item">Reihaneh Rabbany</a>
                            <a href="/people/faculty/#13" class="list-group-item">Siamak Ravanbakhsh</a>
                            <a href="/people/faculty/#13" class="list-group-item">Siva Reddy</a>
                            <a href="/people/faculty/#13" class="list-group-item">Blake Richards</a>
                            <a href="/people/faculty/#13" class="list-group-item">David Rolnick</a>
                            <a href="/people/faculty/#13" class="list-group-item">Derek Ruths</a>
                            <a href="/people/faculty/#13" class="list-group-item">Kaleem Siddiqi</a>
                            <a href="/people/faculty/#13" class="list-group-item">David Becerra</a>
                            <a href="/people/faculty/#13" class="list-group-item">Yi Yang</a>
                            <a href="/people/faculty/#13" class="list-group-item">Fernando Diaz</a>
                            <a href="/people/faculty/#13" class="list-group-item">Adam Trischler</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            Labs
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <a href="http://www.ruthsresearch.org/" class="list-group-item">Network Dynamics</a>
                            <a href="http://rl.cs.mcgill.ca/" class="list-group-item">Reasoning and Learning</a>
                            <a href="http://www.cim.mcgill.ca/~shape/" class="list-group-item">Shape Analysis</a>
                            <a href="http://www.cim.mcgill.ca/~langer/research.html" class="list-group-item">Visual Perception</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="col-4">
                    <Card.Img variant="bottom" id="research-image" src={ai} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <Card.Img variant="bottom" id="research-image" src={bio} />
                  </div>
                  <div className="col-8">
                  <h3>Bioinformatics and Computational Biology</h3>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            Research Areas
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <li>Brain Systems</li>
                            <li>Bioinformatics</li>
                            <li>Neuroscience</li>
                            <li>Breast Cancer Research</li>
                            <li>Computational Neuroscience</li>
                            <li>Medical Image Analysis</li>
                            <li>Computational Biology</li>
                            <li>Health Informatics</li>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            Professors
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <a href="/people/faculty/#13" class="list-group-item">Mathieu Blanchette</a>
                            <a href="/people/faculty/#13" class="list-group-item">Joelle Pineau</a>
                            <a href="/people/faculty/#13" class="list-group-item">Siamak Ravanbakhsh</a>
                            <a href="/people/faculty/#13" class="list-group-item">Blake Richards</a>
                            <a href="/people/faculty/#13" class="list-group-item">Derek Ruths</a>
                            <a href="/people/faculty/#13" class="list-group-item">Kaleem Siddiqi</a>
                            <a href="/people/faculty/#13" class="list-group-item">Jerome Waldispuhl</a>
                            <a href="/people/faculty/#13" class="list-group-item">David Becerra</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            Labs
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <a href="http://csb.cs.mcgill.ca/" class="list-group-item">Computational and Structural Biology Group</a>
                            <a href="https://www.mcgill.ca/mcb/" class="list-group-item">McGill Center for Bioinformatics</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                  <h3>Computer Games</h3>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            Professors
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <a href="/people/faculty/#13" class="list-group-item">Bettina Kemme</a>
                            <a href="/people/faculty/#13" class="list-group-item">Jörg Kienzle</a>
                            <a href="/people/faculty/#13" class="list-group-item">Gregory Dudek</a>
                            <a href="/people/faculty/#13" class="list-group-item">Paul Kry</a>
                            <a href="/people/faculty/#13" class="list-group-item">Clark Verbrugge</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            Labs
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <a href="http://gram.cs.mcgill.ca/" class="list-group-item">Game Research</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="col-4">
                    <Card.Img variant="bottom" id="research-image" src={game} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <Card.Img variant="bottom" id="research-image" src={graph} />
                  </div>
                  <div className="col-8">
                  <h3>Computer Graphics </h3>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            Research Areas
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <li>Rendering</li>
                            <li>Preception</li>
                            <li>Computer Animation</li>
                            <li>Computer Grpahics</li>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            Professors
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <a href="/people/faculty/#13" class="list-group-item">Paul Kry</a>
                            <a href="/people/faculty/#13" class="list-group-item">Michael Langer</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            Labs
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <a href="https://www.cs.mcgill.ca/~cg//" class="list-group-item">Computer Graphics</a>
                            <a href="http://www.cim.mcgill.ca/~langer/research.html" class="list-group-item">Visual Perception</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>

                <div className="row">
                  <div className="col-8">
                  <h3>Computer Systems and Networks</h3>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            Research Areas
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <li>Brain Systems</li>
                            <li>Bioinformatics</li>
                            <li>Neuroscience</li>
                            <li>Breast Cancer Research</li>
                            <li>Computational Neuroscience</li>
                            <li>Medical Image Analysis</li>
                            <li>Computational Biology</li>
                            <li>Health Informatics</li>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            Professors
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <a href="/people/faculty/#13" class="list-group-item">Mathieu Blanchette</a>
                            <a href="/people/faculty/#13" class="list-group-item">Joelle Pineau</a>
                            <a href="/people/faculty/#13" class="list-group-item">Siamak Ravanbakhsh</a>
                            <a href="/people/faculty/#13" class="list-group-item">Blake Richards</a>
                            <a href="/people/faculty/#13" class="list-group-item">Derek Ruths</a>
                            <a href="/people/faculty/#13" class="list-group-item">Kaleem Siddiqi</a>
                            <a href="/people/faculty/#13" class="list-group-item">Jerome Waldispuhl</a>
                            <a href="/people/faculty/#13" class="list-group-item">David Becerra</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            Labs
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <a href="http://csb.cs.mcgill.ca/" class="list-group-item">Computational and Structural Biology Group</a>
                            <a href="https://www.mcgill.ca/mcb/" class="list-group-item">McGill Center for Bioinformatics</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="col-4">
                    <Card.Img variant="bottom" id="research-image" src={network} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-4">
                    <Card.Img variant="bottom" id="research-image" src={robot} />
                  </div>
                  <div className="col-8">
                  <h3>Robotics</h3>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            Research Areas
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <li>Legged Robotics</li>
                            <li>Multi-Agent Systems</li>
                            <li>Motion Control and Optimization</li>
                            <li>Swarm Robotics</li>
                            <li>Machine Learning for Motor Control</li>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            Professors
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <a href="/people/faculty/#13" class="list-group-item">Gregory Dudek</a>
                            <a href="/people/faculty/#13" class="list-group-item">Paul Kry</a>
                            <a href="/people/faculty/#13" class="list-group-item">Hsiu-Chin Lin</a>
                            <a href="/people/faculty/#13" class="list-group-item">David Meger</a>
                            <a href="/people/faculty/#13" class="list-group-item">Joelle Pineau</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            Labs
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <a href="http://www.cim.mcgill.ca/~mrl/" class="list-group-item">Mobile Robotics</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                  <h3>Programming Languages</h3>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            Research Areas
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <li>Compilers and Concurrency</li>
                            <li>Logic and Computation</li>
                            <li>Programming Language Theory</li>
                            <li>Compilers and Programming Languages</li>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            Professors
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <a href="/people/faculty/#13" class="list-group-item">Christophe Dubach</a>
                            <a href="/people/faculty/#13" class="list-group-item">Laurie Hendren</a>
                            <a href="/people/faculty/#13" class="list-group-item">Jörg Kienzle</a>
                            <a href="/people/faculty/#13" class="list-group-item">Prakash Panangaden</a>
                            <a href="/people/faculty/#13" class="list-group-item">Brigitte Pientka</a>
                            <a href="/people/faculty/#13" class="list-group-item">Xujie Si</a>
                            <a href="/people/faculty/#13" class="list-group-item">Clark Verbrugge</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            Labs
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <a href="http://complogic.cs.mcgill.ca/" class="list-group-item">Computation and Logic Group</a>
                            <a href="http://www.sable.mcgill.ca/" class="list-group-item">Sable Research Group</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="col-4">
                    <Card.Img variant="bottom" id="research-image" src={lang} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-4">
                    <Card.Img variant="bottom" id="research-image" src={graph} />
                  </div>
                  <div className="col-8">
                  <h3>Human Factors in Copmuting</h3>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            Research Areas
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <li>Spoken Language Processing</li>
                            <li>Computer Science Education</li>
                            <li>Science and Technology Studies</li>
                            <li>Human COpmuter Interaction</li>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            Professors
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <a href="/people/faculty/#13" class="list-group-item">Elizabeth Patitsas</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            Labs
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <a href="http://socialstudies.cs.mcgill.ca/" class="list-group-item">Social Studies of Computing</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>

                <div className="row">
                  <div className="col-8">
                  <h3>Scientific Computing</h3>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            Research Areas
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <li>Numeric Models for Computing</li>
                            <li>Distributed Systems</li>
                            <li>Numerical Linear Algebra</li>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            Professors
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <a href="/people/faculty/#13" class="list-group-item">Xiao-Wen Chang</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            Labs
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <a href="http://moncs.cs.mcgill.ca/SCL/" class="list-group-item">Scientific Computing</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="col-4">
                    <Card.Img variant="bottom" id="research-image" src={compute} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-4">
                    <Card.Img variant="bottom" id="research-image" src={se} />
                  </div>
                  <div className="col-8">
                  <h3>Software Engineering</h3>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            Research Areas
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <li>Software Composition and Reuse</li>
                            <li>End-User Software Engineering</li>
                            <li>Model-Driving Engineering</li>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            Professors
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <a href="/people/faculty/#13" class="list-group-item">Jin Guo</a>
                            <a href="/people/faculty/#13" class="list-group-item">Laurie Hendren</a>
                            <a href="/people/faculty/#13" class="list-group-item">Jörg Kienzle</a>
                            <a href="/people/faculty/#13" class="list-group-item">Elizabeth Patitsas</a>
                            <a href="/people/faculty/#13" class="list-group-item">Bruce Reed</a>
                            <a href="/people/faculty/#13" class="list-group-item">Martin Robillard</a>
                            <a href="/people/faculty/#13" class="list-group-item">Xujie Si</a>
                            <a href="/people/faculty/#13" class="list-group-item">Clark Verbrugge</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            Labs
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <a href="http://socialstudies.cs.mcgill.ca/" class="list-group-item">Social Studies of Computing</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>

                <div className="row">
                  <div className="col-8">
                  <h3>Theory of Computation</h3>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            Research Areas
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <li>Computational Complexity</li>
                            <li>Algorithmic Game Theory</li>
                            <li>Probabilistic Analysis of Algorithms</li>
                            <li>Probabilistic Systems</li>
                            <li>Cryptography</li>
                            <li>Computational Geometry</li>
                            <li>Discrete Mathematics</li>
                            <li>Combinatorial Optimization</li>
                            <li>Concurrency Theory</li>
                            <li>Logic and Computation</li>
                            <li>Quantum Computing</li>
                            <li>Algorithms</li>
                            <li>Proof Complexity</li>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            Professors
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <a href="/people/faculty/#13" class="list-group-item">Xiao-Wen Chang</a>
                            <a href="/people/faculty/#13" class="list-group-item">Claude Crepeau</a>
                            <a href="/people/faculty/#13" class="list-group-item">Luc Devroye</a>
                            <a href="/people/faculty/#13" class="list-group-item">Hamed Hatami</a>
                            <a href="/people/faculty/#13" class="list-group-item">Robert Robere</a>
                            <a href="/people/faculty/#13" class="list-group-item">Adrian Vetta</a>
                            <a href="/people/faculty/#13" class="list-group-item">Yang Cai</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                            Labs
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <a href="http://cgm.cs.mcgill.ca/" class="list-group-item">Computational Geometry</a>
                            <a href="http://crypto.cs.mcgill.ca/" class="list-group-item">Cryptography & Quantum Information</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="col-4">
                    <Card.Img variant="bottom" id="research-image" src={theory} />
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


 
export default ResearchArea;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }