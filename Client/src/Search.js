import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops';
import "./static/bodycomponent.css";
import Aos from "aos";
import "aos/dist/aos.css";

class Search extends Component {
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
              <div class="col-md-12 right-column">
                <div className = "body">
                  <h1>Search Results:</h1>
                </div>
              </div>
            </div>
            }
          </Spring>
          );
    }
}
 
export default Search;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }