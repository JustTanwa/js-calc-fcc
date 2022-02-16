import React from "react";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      expression: "",
      operator: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // check if operator is clicked
  }

  render() {
    return (
      <div className="main">
        <div className="calculator">
          <Display input={this.state.input} output={this.state.expression} />
          <Buttons handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
