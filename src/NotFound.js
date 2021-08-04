import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry</h1>
      <p>page does not exit</p>
      <Link to="/">Back to Home...</Link>
    </div>
  );
};

export default NotFound;
