import React, { Component } from "react";

export default class OAuth extends Component {
  checkPopup() {
    const { popup } = this;
    window.addEventListener("message", receiveMessage, false);
    function receiveMessage(event) {
      console.log(event.data);
      popup.close();
      if (event.data) {
        window.removeEventListener("message", receiveMessage);
      }
    }
  }

  openPopup() {
    const width = 600,
      height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${
      process.env.GITHUB_CLIENT_ID
    }`;
    return window.open(
      url,
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no,
      scrollbars=no, resizable=no, copyhistory=no, width=${width},
      height=${height}, top=${top}, left=${left}`
    );
  }

  startAuth = () => {
    this.popup = this.openPopup();
    this.checkPopup();
  };

  render() {
    return <button onClick={this.startAuth}> Log in </button>;
  }
}
