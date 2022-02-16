import React from "react";

const Display = (props) => {
    return (
      <div className="screen">
        <p className="input" id="display">{props.input}</p>
        <p className="expression">
          {props.expression}
        </p>
      </div>
    );
  };

  export default Display;