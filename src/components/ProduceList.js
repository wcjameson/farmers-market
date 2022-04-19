import React from "react";

function ProduceList(props) {
  return (
  <React.Fragment>
    <ul>Available Produce
    {props.list.map((food) =>
    <li>{food}</li>
    )}  
    </ul>
  </React.Fragment>
  )
}

export default ProduceList;