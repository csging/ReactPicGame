import React from "react";

const Pics = props => (
  <div className="container">
      <div 
        className="row"
        value={props.id}
        onClick={()=> props.handleClick(props.id)}>
      
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      
      <img 
        alt={props.id}
        src={props.image} 
      />
      </div>
      </div>
  </div>
)

export default Pics;