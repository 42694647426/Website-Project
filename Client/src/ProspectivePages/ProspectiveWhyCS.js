import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "../static/bodycomponent.css";
import Aos from "aos";
import "aos/dist/aos.css";

class ProspectiveWhyCS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    Aos.init();
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => 
            <div class="row" style={props}>
              <ScrollToTopOnMount />
              <div class="col-md-2" style={{backgroundColor: "aliceblue"}}>
                <div class="nav flex-column nav-pills" id="" role="tablist" aria-orientation="vertical">
                  <div class="tab-name">Prospective</div>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveGeneralInfo" role="tab">General Info</a>
                  <a class="nav-link active" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveWhyCS" role="tab">Why CS</a>
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
                  <h1>Why CS?</h1>
                  <h2>What is Computer Science?</h2>
                  <p>Computer science encompasses everything from theory to applications, including software engineering, programming languages, robotics, compilers, databases, game design and development, operating systems, artificial intelligence, computational biology, computer vision, and the analysis of algorithms.</p>
                  <h2>Studying Computer Science at McGill</h2>
                  <p>You can study Computer Science at McGill in many different ways. One typical way is by completing a Bachelor of Science (B.Sc.) degree program in the <a href="https://www.mcgill.ca/science/">Faculty of Science</a>. You can choose the amount and nature of the computer science courses that you take by selecting different program options. For example, a Major in Computer Science requires you to take 60 credits of computer science or related courses. On the other hand, a Minor in Computer Science requires you to take only 24 credits of computer science or related courses. Most computer science courses are worth 3 or 4 credits.</p>
                  <h2>The School of Computer Science</h2>
                  <p>The <a href="https://www.cs.mcgill.ca/">School of Computer Science</a> is part of the <a href="https://www.mcgill.ca/science/">Faculty of Science</a>. The School of Computer Science groups 34 faculty members who teach and do research on a wide variety of computer science and software engineering topics. The School of Computer Science is located in the <a href="https://www.mcgill.ca/engineering/faculty-staff/facilities/buildings/mcconnell">McConnell Engineering</a> and <a href="https://www.mcgill.ca/engineering/faculty-staff/facilities/buildings/lm-trottier">Trottier</a> Buildings. Courses at McGill are taught in English. For most upper-level computer science courses, classes are small (about 10-30 students), and students have numerous opportunities for direct interaction with professors, both inside and outside the classroom.</p>
                  <h2>Our Undergraduate Programs</h2>
                  <p>The School of Computer Science offers several interesting study programs. Our three most popular programs are:</p>
                  <li>Major in Computer Science, for students interested in a broad study of computer science topics.</li>     
                  <li>Major in Software Engineering, for students interested in problems related to the design, development, and maintenance of software systems.</li>
                  <li>Minor in Computer Science, for students interested in a computer science complement to another major field of study.</li>
                  <p>Other programs that combine the study of computer science with different topics are also offered by other departments in the Faculty of Science and in the Faculty of Arts. For more details, see the complete list of programs offered by the School of Computer Science.</p>
                  <p>If you're lost, feel free to <a href="#">contact us</a>. McGill computer science students also have access to an internship program.</p>
                  <h2>Why You Should Apply?</h2>
                  <p>A university-level education in computer science will help you develop your analytical thinking and creative problem solving skills while studying a wealth of exciting topics with a wide range of applications (from medicine to business). An undergraduate education in computer science will also open the door to careers in a variety of companies (engineering, high-tech, pharmaceutical). For those of you who may be thinking about graduate studies, a degree in computer science is an excellent foundation for the study of computer science at the graduate level (M.Sc. or Ph.D.). McGill is a <a href="https://www.timeshighereducation.com/student/best-universities/best-universities-canada">top-ranked and internationally-recognized university</a>, and our graduates typically move on to fulfilling careers or further studies in the top companies or universities.</p>
                  <hr></hr>    
                  <h2>Qu'est-ce que l'Informatique?</h2>
                  <p>L'informatique regroupe un grand nombre de sujets d'étude, des plus abstraits au plus appliqués, incluant: le génie logiciel, les langages de programmation, la robotique, les compilateurs, les bases de données, le design et développement de jeux vidéos, les systèmes d'exploitation, l'intelligence artificielle, la bioinformatique, la vision par ordinateur, et l'analyse d'algorithmes.</p>
                  <h2>Étudier l'Informatique à McGill</h2>
                  <p>On peut étudier l'informatique à McGill en suivant différents cheminements. Un cheminement typique est de compléter le programme de Baccalauréat en Sciences (B.Sc.) offert par la Faculté des Sciences. On peut déterminer le nombre et le type de cours d'informatique à compléter en choisissant un programme. Par exemple, une Majeure en Informatique requiert 60 crédits de cours d'informatique ou de sujets reliés. D'un autre côté, une Mineure en Informatique requiert seulement 24 crédits de cours d'informatique ou de sujets reliés. La plupart des cours d'informatique valent 3 ou 4 crédits.</p>
                  <h2>L'École d'Informatique</h2>
                  <p>L'École d'Informatique (ou <a href="https://www.cs.mcgill.ca/">School of Computer Science</a> fait partie de la <a href="https://www.mcgill.ca/science/">Faculté des Sciences</a>. L'École d'Informatique regroupe 34 professeurs qui enseignent et font de la recherche dans une grande variété de branches de l'informatique et du génie logiciel. L'École d'Informatique est située dans les pavillons <a href="https://www.mcgill.ca/engineering/faculty-staff/facilities/buildings/mcconnell">McConnell Engineering</a> et <a href="https://www.mcgill.ca/engineering/faculty-staff/facilities/buildings/lm-trottier">Trottier</a>. Les cours à McGill sont donnés en anglais, mais plusieurs professeurs parlent le français. La plupart des cours de deuxième et troisième année ont un petit nombre d'étudiants (environ 10-30), et les étudiants ont plusieurs opportunités d'interaction avec les professeurs, à la fois à l'intérieur et à l'extérieur des salles de cours.</p>
                  <h2>Nos Programmes de Bacc</h2>
                  <p>L'École d'Informatique offre plusieurs programmes d'étude intéressants. Nos trois programmes les plus populaires sont:</p>
                  <li>Major in Computer Science, pour les étudiants intéressés à une étude poussée de l'informatique.</li>     
                  <li>Major in Software Engineering, pour les étudiants intéressés à l'étude des problèmes reliés au design, au développement, et à la maintenance des systèmes logiciels.</li>
                  <li>Minor in Computer Science, pour les étudiants intéressés à l'informatique comme un complément à l'étude d'un autre programme majeur d'étude.</li>
                  <p>D'autres programmes combinant l'étude de l'informatique avec d'autres sujets sont aussi offerts (Maîtrise ou Doctorat). McGill est aussi <a href="https://www.topuniversities.com/universities/mcgill-university#:~:text=McGill%20University%20is%20one%20of,QS%20Global%20World%20Rankings%202021.">une université de niveau supérieur et mondialement reconnue</a>, et nos gradués progressent typiquement vers des carrières ou des études dans les meilleures entreprises ou universités.</p>
                  <h2>Pourquoi Appliquer?</h2>
                  <p>Une formation universitaire en informatique ou en génie logiciel aident à développer des aptitudes de raisonnement analytique et de solution de problèmes tout en étudiant une multitude de sujets motivants et aux applications multiples (de la médecine à la finance). Une formation universitaire en informatique offre aussi des possibilités de carrière dans plusieurs types d'entreprises (génie, hautes-technologies, pharmaceutique). Pour ceux et celles qui songent aux études supérieures, un Bacc en informatique à McGill procure une excellente base pour l'étude de l'informatique aux cycles supérieurs (Maîtrise ou Doctorat). McGill est aussi une université de niveau supérieur et mondialement reconnue, et nos gradués progressent typiquement vers des carrières ou des études dans les meilleures entreprises ou universités.</p>                    
                </div>
            </div>
        </div>
        }
      </Spring>
    );
  }
}

export default ProspectiveWhyCS;

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 600);
  }

  render() {
    return null;
  }
}
