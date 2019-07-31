import React, { Component } from "react";

export const Name = props => {
  return <h1>{props.usuario.nome}</h1>;
};

export default class App extends Component {
  render() {
    return "Erislandio";
  }
}
