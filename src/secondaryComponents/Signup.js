import React from 'react';
import LoginModal from "react-login-modal";

export default class Signup extends React.Component {

  handleSignup = (username, email, password) => {};
  handleLogin = (username, password) => {}

  render(){
      return (<LoginModal
        handleSignup={this.handleSignup}
        handleLogin={this.handleLogin}
        buttonColor={"#52AE64"}
        disabledButtonColor={"#C7E4CD"}
        buttonHoverColor={"#A7D5B0"}
        fontFamily={"roboto"}
        errorMessage={"Incorrect username or password"}
        errorEnable={false}
      />);
  }
}