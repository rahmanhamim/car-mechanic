import React from "react";

const Expert = ({ expert }) => {
 const { name, img, expertize } = expert;
 return (
  <div className="col-12 col-sm-6  col-lg-4">
   <img className="img-fluid" src={img} alt="" />
   <h3>{name}</h3>
   <h5 className="text-danger">{expertize}</h5>
  </div>
 );
};

export default Expert;
