import React, { Component } from 'react';
import myLoader from  './pictures/loader.gif';
import "./static/bodycomponent.css";
import { connect } from 'react-redux';
class Loader extends Component {
  state = {

  }
  render() {
    const {loading} = this.props;
    if(!loading) return null;
    return (
      <div class="loader-container">
        <div className="loader">
          <img src={myLoader}></img>
        </div>
      </div>
    );
  }
}

export default Loader;