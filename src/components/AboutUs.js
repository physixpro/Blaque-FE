import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div className="AboutUs">
 <p id='information' >{this.props.paragraphtwo} </p>
                    <h1 id='coming-soon'>{this.props.coming}</h1>
                    <button id='waitlist-btn'>{this.props.wait}</button>
      </div>
    );
  }
}

export default AboutUs;
