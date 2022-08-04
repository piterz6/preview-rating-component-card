import ReactLogo from "./ilustration.svg";

const Modal = (props) => {
  return (
    <div className="modalContainer">
      <img src={ReactLogo} alt="thank you" />
      <button className="modalMessage">
        You selected {props.messageValue} out 5
      </button>
      <h3>Thank you!</h3>
      <div className="modalContent">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </div>
    </div>
  );
};

export default Modal;
