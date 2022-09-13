import { Link } from "react-router-dom";
import "../assets/register.scss";
import Btn from "./btn";

const Register = ({ registerData }) => {
  return (
    <div className="modal-container">
      <Link to="/">
        <button>back</button>
      </Link>

      <h1>LOGIN</h1>

      <form>
        {registerData.map((item, idx) => (
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
      <Btn path="edit" name="Register" />
    </div>
  );
};

export default Register;
