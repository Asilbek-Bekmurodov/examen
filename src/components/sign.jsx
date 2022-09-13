import { Link } from "react-router-dom";
import "../assets/sign.scss";
import Btn from "./btn";

const Sign = ({ formData }) => {
  return (
    <div className="modal-container">
      <Link to="/">
        <button>back</button>
      </Link>
      <h1>LOGIN</h1>

      <form>
        {formData.map((item, idx) => (
          <div key={idx}>
            <label htmlFor={item.label}>{item.label}</label>
            <input
              className="input"
              placeholder={item.placeHolder}
              type="text"
            />
          </div>
        ))}
      </form>
      <Btn path="/edit" name="Login" />
    </div>
  );
};

export default Sign;
