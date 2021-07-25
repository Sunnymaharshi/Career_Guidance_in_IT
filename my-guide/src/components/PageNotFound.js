import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry...</h2>
      <h3>Page Not Found</h3>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};
export default NotFound;
