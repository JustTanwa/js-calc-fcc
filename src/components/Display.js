import React from "react";

const Display = (props) => {
    return (
      <div className="screen">
        <div id="output">
          <p className="output">
          {props.output} {props.operator}
        </p>
        </div>
        <div id="input">
          <p className="input" id="display">{props.input}</p>
        </div>
      </div>
    );
  };

  export default Display;