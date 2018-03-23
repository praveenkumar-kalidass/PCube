import React from "react";
import ReactDOM from "react-dom";

class Footer extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
  }

  render() {
    return (
      <footer className="ui-footer page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5>Footer Content</h5>
              <p>
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5>Links</h5>
              <ul>
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2014 Copyright Text
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
