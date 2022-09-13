import { Link } from "react-router-dom";
import "../assets/btn.scss";
const Btn = ({ name, props, path }) => {
  return (
    <>
      <Link to={path}>
        <button className="btn">{name}</button>
      </Link>
    </>
  );
};

export default Btn;
