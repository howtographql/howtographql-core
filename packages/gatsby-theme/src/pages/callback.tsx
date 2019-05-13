import * as React from 'react';

function getParameterByName(name: string, url: string) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function Callback() {
  let githubCode = getParameterByName("code", window.location.href);
  let targetWindow = window.opener;
  targetWindow.postMessage(githubCode, "*");
}

export default class AuthCallback extends React.Component {
  componentDidMount() {
    Callback()
  }
  render() {
    return null
  }
}
