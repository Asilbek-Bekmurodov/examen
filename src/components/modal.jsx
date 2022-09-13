import "../assets/modal.scss";
import Btn from "./btn";

const Modal = () => {
  return (
    <div className="modal-container">
      <h1 className="title">Hello There</h1>
      <p className="subtext">Welcome to React User App</p>

      <div className="btn-wrapper">

        <Btn path="/login" name={"Login"} />
        <Btn path="/register" name={"Register"}/>
      </div>
    </div>
  );
};

export default Modal;
