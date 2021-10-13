import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/notfound.gif";

const NotFound = () => {
 return (
  <div>
   <img className="img-fluid" src={notFound} alt="" />
   <br />
   <Link to="/">
    <button>Go Back</button>
   </Link>
  </div>
 );
};

export default NotFound;
