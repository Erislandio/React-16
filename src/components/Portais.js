import React, { Component } from "react";
import ReactDOM from "react-dom";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div>Olá mundo!</div>
          <button onClick={this.hideModal()}>Sair</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div>
        <button onClick={this.showModal()}>Abrir</button>
        {modal}
      </div>
    );
  }
}

const modal = document.getElementById("modal");

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.el.append("Eris");
  }

  componentDidMount() {
    modal.appendChild(this.el);
  }

  componentWillUnmount() {
    modal.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
