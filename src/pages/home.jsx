import { Component } from "react";
import Modal from "../components/modal";
import Button from "../components/button";
import { homeButtons } from "../components/button/buttons_array";
import { modalButtons } from "../components/button/buttons_array";
import { modalWindowDeclarations } from "../components/modal/modals_array";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { renderModal: false, renderModalContent: null };
  }

  openModal = (e) => {
    const modalId = +e.target.dataset.modalId;
    const modalDeclaration = modalWindowDeclarations.find(
      (item) => item.id === modalId
    );

    this.setState({
      renderModal: true,
      renderModalContent: modalDeclaration,
    });
  };

  closeModal = () => {
    this.setState({ renderModal: false });
  };

  render() {
    return (
      <>
        <div className="btn__container">
          {homeButtons.map((button) => (
            <Button onClick={this.openModal} key={button.id} {...button} />
          ))}
        </div>

        {this.state.renderModal ? (
          <Modal
            actions={modalButtons.map((button) => (
              <Button onClick={this.closeModal} key={button.id} {...button} />
            ))}
            closeModal={this.closeModal}
            {...this.state.renderModalContent}
          />
        ) : null}
      </>
    );
  }
}
