import React from "react";
import Header from "./Header.react";
import Action from "./Action.react";
import Footer from "./Footer.react";

class AppContainer extends React.Component {
  render() {
    return (
      <div className="pcube-ui">
        <Header/>
        <Action/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default AppContainer;
