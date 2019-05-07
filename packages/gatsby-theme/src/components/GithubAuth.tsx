import React, { Component } from "react";
import config from '../../config';
import { authenticateUser } from "../utils/auth";

export default class GithubAuth extends Component {
  popup: any;
  listen(): Promise<string> {
    return new Promise(resolve => {
      window.addEventListener("message", receiveMessage, false);
      function receiveMessage(event: any) {
        if (event.data) {
          window.removeEventListener("message", receiveMessage);
          resolve(event.data)
        }
      }
    })
  }

  openPopup() {
    const width = 600,
      height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${
      config.githubClientId
      }`;
    return window.open(
      url,
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no,
      scrollbars=no, resizable=no, copyhistory=no, width=${width},
      height=${height}, top=${top}, left=${left}`
    );
  }

  startAuth = async () => {
    this.popup = this.openPopup();
    const code = await this.listen();
    try {
      await authenticateUser(code)
    } catch (e) {
      console.error(e);
    }
    this.popup.close();
  };

  render() {
    return (
      <button onClick={() => this.startAuth()}> Log in </button>
    );
  }
}