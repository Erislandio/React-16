import React, { Component } from "react";

export const Name = props => {
  return <h1>{props.usuario.nome}</h1>;
};

export default class App extends Component {
  render() {
    return [
      <h1 key="1">Erislandio</h1>,
      <h1 key="2">Maria</h1>,
      <h1 key="3">Eduardo</h1>,
      <h1 key="4">Edivaldo</h1>
    ];
  }
}
