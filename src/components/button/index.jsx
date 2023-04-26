import { Component } from "react";
import "./button.scss";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        className={this.props.className}
        data-modal-id={this.props.modalId}
        style={{ backgroundColor: this.props.backgroundColor }}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
