import React, { Component } from "react";

export const Name = props => {
  return <h1>{props.usuario.nome}</h1>;
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: {
        nome: "Erislandio"
      },
      error: false
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);

    this.setState(state => ({
      ...this.state,
      error: true
    }));
  }

  throwError() {
    this.setState({ ...this.state, usuario: null });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.error ? (
          <>
            <h2>Não foi possivel carregar dados tente novamente</h2>
            <button
              onClick={() =>
                this.setState(
                  {
                    ...this.state,
                    usuario: { nome: "Erislandio" }
                  },
                  () => {
                    this.setState({ error: false });
                  }
                )
              }
            >
              Mudar
            </button>
          </>
        ) : (
          <>
            <Name {...this.state} />
            <button onClick={() => this.throwError()}>Mudar</button>
          </>
        )}
      </div>
    );
  }
}
