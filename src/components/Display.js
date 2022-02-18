import React from "react";

const Display = (props) => {
    return (
      <div className="screen">
        <p className="input" id="display">{props.input}</p>
        <p className="output">
          {props.output} {props.operator}
        </p>
      </div>
    );
  };

  export default Display;