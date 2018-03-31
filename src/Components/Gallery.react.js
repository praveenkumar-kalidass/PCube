import React from "react";
import ReactDOM from "react-dom";

class Gallery extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    this.el.find(".slider").slider();
  }

  render() {
    return (
      <div className="ui-gallery">
        <div className="slider">
          <ul className="slides">
            <li>
              <img src="images/gallery-1.jpg"/>
              <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">Heres our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="images/gallery-2.jpg"/>
              <div className="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">Heres our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="images/gallery-3.jpg"/>
              <div className="caption right-align">
                <h3>Right Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">Heres our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="images/gallery-4.jpg"/>
              <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">Heres our small slogan.</h5>
              </div>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l12">
              <h3>Events</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                doloraugue, sollicitudin eu risus eget, luctus gravida ante.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Aenean lectus lectus, sodales
                lacinia luctus et, egestas egestas lacus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nam pharetra pharetra nisl,
                cursus consectetur arcu viverra non. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Donec cursus sodales dui at venenatis. Quisque bibendum
                tortor nec mi venenatis, id congue ipsum auctor. Nunc sed leo a
                enim aliquam consectetur. Curabitur a velit malesuada, sodales
                est non, porttitor ipsum.
              </span>
            </div>
            <div className="col s12 m12 l12">
              <div className="col s12 m6 l4">
                <img className="materialboxed image" src="images/side-navigation.jpg"/>
              </div>
              <div className="col s12 m6 l4">
                <img className="materialboxed image" src="images/side-navigation.jpg"/>
              </div>
              <div className="col s12 m6 l4">
                <img className="materialboxed image" src="images/side-navigation.jpg"/>
              </div>
              <div className="col s12 m6 l4">
                <img className="materialboxed image" src="images/side-navigation.jpg"/>
              </div>
              <div className="col s12 m6 l4">
                <img className="materialboxed image" src="images/side-navigation.jpg"/>
              </div>
              <div className="col s12 m6 l4">
                <img className="materialboxed image" src="images/side-navigation.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
