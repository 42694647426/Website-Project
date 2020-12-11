import React, { Component } from 'react';
import "../static/bodycomponent.css";
class N1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className = "body">
                <h1>Virtual Open House 2020 | Portes ouvertes virtuelle 2020</h1>
                <h2>Date: Sunday, October 25, 2020 from 10:00 AM to 4:00 PM</h2>
                <h2>Open House Home Page: <a href = "https://mcgill-open-house.eventus.io/">Link</a></h2>
                <h2>Location:<a href=""> Virtual portal</a></h2>
                <h2>Webinars & Activities:<a href=""> Events</a></h2>
                <h2>Computer Science Brochure:<a href=""> View</a></h2>
                <p>Questions that you might have related to our virtual open house:</p>
                <ul>Why study computer science?</ul>
                <ul>What is the Science Freshman Program?</ul>
                <ul>Differences between B.Sc. in Computer Science compared to B. Sc. in Software Engineering</ul>
                <ul>Differences between B.Sc and B.A. in Computer Science?</ul>
                <ul>What if I want to study medicine?</ul>
            </div>
         );
    }
}
 
export default N1;