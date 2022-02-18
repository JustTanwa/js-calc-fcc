import React from 'react';

const operands = [
    {
      id: "zero",
      value: 0
    },
    {
      id: "three",
      value: 3
    },
    {
      id: "two",
      value: 2
    },
    {
      id: "one",
      value: 1
    },
    {
      id: "six",
      value: 6
    },
    {
      id: "five",
      value: 5
    },
    {
      id: "four",
      value: 4
    },
    {
      id: "nine",
      value: 9
    },
    {
      id: "eight",
      value: 8
    },
    {
      id: "seven",
      value: 7
    }
  ].reverse();
  
  const operators = [
    {
      id: "add",
      sign: "+"
    },
    {
      id: "subtract",
      sign: "-"
    },
    {
      id: "divide",
      sign: "/"
    },
    {
      id: "multiply",
      sign: "*"
    },
    {
      id: "equals",
      sign: "="
    },
    {
      id: "decimal",
      sign: "."
    },
    {
      id: "clear",
      sign: "C"
    }
  ];

const Buttons = (props) => {
    return (
      <div className="keys">
        {/*<div className="number-buttons">*/}
          {operands.map((obj) => {
            return (
              <button
                id={obj.id}
                key={obj.id}
                value={obj.value}
                onClick={(e) => props.handleClick(e)}
              >
                {obj.value}
              </button>
            );
          })}
        {/*</div>*/}
        {/*<div className="operator-buttons">*/}
          {operators.map((obj) => {
            return (
              <button
                id={obj.id}
                key={obj.id}
                value={obj.sign}
                onClick={(e) => props.handleClick(e)}
              >
                {obj.sign}
              </button>
            );
          })}
        {/*</div>*/}
      </div>
    );
  };

export default Buttons;