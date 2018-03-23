import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    this.el.find(".parallax").parallax();
  }

  render () {
    return (
      <div>
        <div className="parallax-container">
          <div className="parallax">
            <img src="images/home-parallax-1.jpg"/>
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">
              Parallax is an effect where the background content or image in
              this case, is moved at a different speed than the foreground
              content while scrolling.
            </p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src="images/home-parallax-2.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
