import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops';
import "../static/bodycomponent.css";
import Aos from "aos";
import "aos/dist/aos.css";

class ProspectiveCEGEP extends Component {
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
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveGeneralInfo" role="tab">General Info</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveWhyCS" role="tab">Why CS</a>
                  <a class="nav-link active" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveCEGEP" role="tab">CEGEP</a>
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
                  <h1>CEGEP</h1>
                  <h2>What You Need To Apply</h2>
                  <p><b>If you are completing a science pre-university CEGEP program, you should apply to the B.Sc. programs offered through the Faculty of Science.</b> To be eligible to enter the program of your choice you will need your DEC and to have completed the following CEGEP-level courses: Biology - NYA (00UK); Chemistry - NYA, NYB (00UL, 00UM); Mathematics - NYA, NYB, NYC (00UN, 00UP, 00UQ); Physics - NYA, NYB, NYC (00UR, 00US, 00UT). If this is your case, you should apply though the <a href="https://www.mcgill.ca/science/">Faculty of Science</a></p>
                  <p>If you have a different background that includes some mathematics, you can still enter B.A. programs in Computer Science. In this case you should apply to the <a href="https://www.mcgill.ca/arts/">Faculty of Arts</a>.</p>
                  <h2>Studying Computer Science at McGill</h2>
                  <p>You can study Computer Science at McGill in many different ways. One typical way is by completing a Bachelor of Science (B.Sc.) degree program in the <a href="https://www.mcgill.ca/science/">Faculty of Science</a>. You can choose the amount and nature of the computer science courses that you take by selecting different program options. For example, a Major in Computer Science requires you to take 60 credits of computer science or related courses. On the other hand, a Minor in Computer Science requires you to take only 24 credits of computer science or related courses. Most computer science courses are worth 3 or 4 credits.</p>
                  <p>Note that you do not need to have prior experience with computer science to apply to our programs: you can start with our introductory programming course, COMP 202, Introduction to Computing I. However, if you have already completed a course in programming, you may be able to start your McGill program directly with the course COMP 250 Introduction to Computer Science</p>
                  <h2>The School of Computer Science</h2>
                  <p>The <a href="https://www.cs.mcgill.ca/">School of Computer Science</a> is part of the <a href="https://www.mcgill.ca/science/">Faculty of Science</a>. The School of Computer Science groups 34 faculty members who teach and do research on a wide variety of computer science and software engineering topics. The School of Computer Science is located in the <a href="https://www.mcgill.ca/engineering/faculty-staff/facilities/buildings/mcconnell">McConnell Engineering</a> and <a href="https://www.mcgill.ca/engineering/faculty-staff/facilities/buildings/lm-trottier">Trottier</a> Buildings. Courses at McGill are taught in English. For most upper-level computer science courses, classes are small (about 10-30 students), and students have numerous opportunities for direct interaction with professors, both inside and outside the classroom.</p>
                  <h2>How To Apply</h2>
                  <p>For general information on admission, fees, etc., see the <a href="https://www.mcgill.ca/undergraduate-admissions/apply">McGill admissions web site</a>. To apply on-line, select "Applying On-line".</p>
                  <p>You will be asked to create an account, enter your personal information, etc. Once you reach the page asking your about <b>Program Choices:</b></p>
                  <p><b>For students with a science DEC:</b></p>
                    <li>For "Faculty/School/Center", choose "Faculty of Science"</li>     
                    <li>For "Program", choose "B Sc Physical, Earth, Math & Computer Sci" for all Computer Science or Software Engineering Majors, except for the Joint Computer Science and Biology Major. If you are specifically interested in the the Joint Computer Science and Biology Major, then choose "B Sc Biological, Biomedical & Life Sci"</li>
                    <li>For "Major or Subject", choose one of "Computer Science", "Math & Computer Science", "Physics & Computer Science", "Stats & Computer Science", "Software Engineering" or "Computer Science and Biology".</li>
                    <br></br>
                  <p>If you decide later you prefer a different major, do not worry as you can declare a different major from within the same group at the time of registration.</p>
                  <p><b>For students with a non-science DEC and with reasonable background in mathematics</b></p>
                    <li>For "Faculty/School/Center", choose "Faculty of Arts"</li>
                    <li>For "Program", choose "B Arts"</li>
                    <li>For "Major or Subject", choose "Undeclared"</li>
                    <br></br>
                  <h2>Contact Us</h2>
                  <p><b>Liette Chin</b>, Undergraduate Program Coordinator
                     <br></br>
                  Office: McConnell 320, Phone: 398-7071. ext 00118, Email: liette AT cs.mcgill.ca
                  </p>
                  <p><b>Adina Puica</b>,  Undergraduate Secretary
                     <br></br>
                  Office: McConnell 320, Phone: 398-7071. ext 00739, Email: adina.puica AT mcgill.ca
                  </p>
                  <hr></hr>    
                  <h2>Préalables à l'Inscription</h2>
                  <p>Les étudiants présentement un programme de DEC préuniversitaire en sciences devraient s'inscrire à un programme de Bacc offert par la Faculté des Sciences. Pour pouvoir débuter le programme, un étudiant dois avoir complété son DEC et les cours de CEGEP suivants: Biologie - NYA (00UK); Chimie - NYA, NYB (00UL, 00UM); Mathématiques - NYA, NYB, NYC (00UN, 00UP, 00UQ); Physique - NYA, NYB, NYC (00UR, 00US, 00UT). Dans ce cas, appliquer à la <a href="https://www.mcgill.ca/science/">Faculté des Sciences</a>.</p>
                  <p><b>Les étudiants qui complètent le nouveau programme de Math et Sciences Informatiques</b> devraient aussi appliquer à la Faculté des Sciences, en sélectionnant le groupe "BSc in the Physical, Earth, Mathematics and Computer Science". Ceci permet de procéder directement à la majeure en informatique ou en génie logiciel, sans avoir à compléter des cours de science additionnels.</p>
                  <p>Les étudiants qui complètent un programme de CEGEP différent mais qui inclut des cours de mathémathiques peuvent s'inscrire à un programme de Bacc en Arts, option Informatique. Dans ce cas, appliquer à la <a href="https://www.mcgill.ca/arts/">Faculté des Arts</a>.</p>
                  <p>On peut étudier l'informatique à McGill en suivant différents cheminements. Un cheminement typique est de compléter le programme de Baccalauréat en Sciences (B.Sc.) offert par la Faculté des Sciences. On peut déterminer le nombre et le type de cours d'informatique à compléter en choisissant un programme. Par exemple, une Majeure en Informatique requiert 60 crédits de cours d'informatique ou de sujets reliés. D'un autre côté, une Mineure en Informatique requiert seulement 24 crédits de cours d'informatique ou de sujets reliés. La plupart des cours d'informatique valent 3 ou 4 crédits.</p>
                  <p>Pour plus de détails, voir la page officielle de McGill pour les étudiants du CEGEP.</p>
                  <h2>Il faudra créer un compte, entrer les informations de base, etc. À la page demandant de l'information sur "<b>Program Choice</b>" (choix de programme), il y a plusieurs options:</h2>
                  <p>Pour de l'information générale sur le processus d'admission, les frais de scolarité, etc., voir le <a href="https://www.mcgill.ca/undergraduate-admissions/apply">site d'admission de McGill</a>. Pour appliquer en ligne, suivre le lien "Applying On-line".</p>
                  <p><b>Pour les étudiants complétant un DEC en sciences:</b></p>
                  <li>Pour "Faculty/School/Center", choisir "Faculty of Science";</li>
                  <li>Pour "Program", choisir "B Sc Physical, Earth, Math & Computer Sci" pour tous les programmes d'informatique sauf le programme "Joint Computer Science and Biology Major". Choisir "B Sc Biological, Biomedical & Life Sci" pour "Computer Science and Biology Major".</li>     
                  <li>Pour "Major or Subject", choisir soit "Computer Science", "Math & Computer Science", "Physics & Computer Science", "Stats & Computer Science", "Software Engineering" ou "Computer Science and Biology".</li>
                  <br></br>
                  <p>Certains étudiants décident plus tard qu'ils préfèrent un programme (major) différent. Il n'y a pas de problème: il est possible de choisir un programme différent (mais dans le même groupe) lors de l'inscription.</p>
                  <p><b>Pour les étudiants complétant un DEC autre qu'en sciences et qui ont une formation raisonnable en mathématiques:</b></p>
                  <li>Pour "Faculty/School/Center", choisir "Faculty of Arts";</li>
                  <li>Pour "Program", choisir "B Arts";</li>     
                  <li>Pour "Major or Subject", choisir "Undeclared"</li>
                  <br></br>
                  <p>Les étudiants de la Faculté des Arts déclarent leur programme principal (major) et secondaire (minor) lors de l'inscription. Les étudiants intéressés à l'informatique devront choisir comme programme principal (major) une concentration appelée: "Computer Science", et peuvent aussi choisir un programme secondaire (minor) appelé "Supplementary Minor Concentration in Computer Science". Cette combinaison est très similaire au "B.Sc. major in Computer Science".</p>
                  <h2>Pour Nous Joindre</h2>
                  <p><b>Liette Chin</b>, Coordonnatrice des programmes de 1er cycle
                    <br></br>
                    Bureau: McConnell 320 Tél: 398-7071. ext 00118, Courriel: liette AT cs.mcgill.ca</p>
                  <p><b>Adina Puica</b>, Secrétaire du 1er cycle
                    <br></br>
                    Bureau: McConnell 320, Tél: 398-7071. ext 00739, Courriel: adina.puica AT mcgill.ca</p>
                </div>
              </div>
            </div>
            }
          </Spring>
          );
    }
}
 
export default ProspectiveCEGEP;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }