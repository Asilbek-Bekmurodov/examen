import { Link } from "react-router-dom";
import "../assets/edit.scss";
import Btn from "./btn";

const Edit = ({ data }) => {
  return (
    <div className="modal-container">
      <Link to="/">
        <button>log out</button>
      </Link>
      <h1>My profile</h1>

      <form>
        {data.map((item, idx) => (
          <div key={idx}>
            <h3>{item.label}</h3>
            <p>{item.placeHolder}</p>
          </div>
        ))}
      </form>
      <Btn name="Edit" />
    </div>
  );
};

export default Edit;
