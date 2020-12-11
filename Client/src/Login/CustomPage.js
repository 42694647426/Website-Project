import React from "react";
import { Spring } from "react-spring/renderprops";
import { useHistory } from "react-router-dom";
//import Header from "../Header";
import { Session } from "bc-react-session";
import { Button } from "react-bootstrap";
//import Axios from "axios";
import "../static/bodycomponent.css";
import { Markup } from "interweave";
import 'font-awesome/css/font-awesome.min.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

const CustomPage = () => {
  //const [staff, setstaff] = useState("false");
  //alert("You are in your customized page!")
  Aos.init();
  const { payload } = Session.get();
  const session = Session.get();
  //console.log(session);
  let history = useHistory();
  //let username = payload.name;
  if (!session.isValid) {
    history.push("/");
  }

  var content = payload.page;
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <>
          <div class="row" style={props}>
            <ScrollToTopOnMount />
          </div>
          <div id="customized">
            <Markup content={content} />
            <br />
            <br />
            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded" href="#/welcome">
                <i class="fa fa-arrow-left"></i>
                <span class="spn">Back to your Profile Page</span>
            </a>
          </div>
        </>
      )}
    </Spring>
  );
};

export default CustomPage;

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 600);
  }

  render() {
    return null;
  }
}
