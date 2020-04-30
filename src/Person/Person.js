import React from "react";
import './Person.css'

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.remove}>
        Hello I'm {props.name} & I'm {props.age}
      </p >
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div >
  );
};

export default person;
