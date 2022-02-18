import React from "react";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      prevNum: "",
      operator: undefined,
      lastPressed: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const btnPressed = e.target.value;
    // if input is too long
    if (this.state.input.length > 13 && !isNaN(btnPressed)) return;
    this.setState({
      lastPressed: btnPressed,
    });
    // check if button pressed is an operation button
    switch(btnPressed) {
      case "C":
        return this.clear();
      case ".":
        if (this.state.input.includes(".")) return;
        break;
      case "+":
        if (this.state.input[0] === "-" && this.state.input.length === 1 && this.state.prevNum) {
          return this.setState({
            operator: "+",
            input: 0,
          })
        };
        if (this.state.prevNum) {
          return this.setState({
            prevNum: this.calculate(),
            input: 0,
            operator: "+"
          });
        } else {
            return this.setState({
              prevNum: this.state.input,
              input: 0,
              operator: "+"
            });
        }
      case "-":
        if (this.state.input[0] === "-" && this.state.input.length === 1 && this.state.prevNum) {
          return this.setState({
            operator: "-",
            input: 0,
          })
        };
        if (this.state.input === 0) {
          return this.setState({
            input: "-",
          });
        }
        if (this.state.prevNum) {
          return this.setState({
            prevNum: this.calculate(),
            input: 0,
            operator: "-"
          });
        } else {
            return this.setState({
              prevNum: this.state.input,
              input: 0,
              operator: "-"
            });
        }
      case "*":
        if (this.state.prevNum) {
          return this.setState({
            prevNum: this.calculate(),
            input: 0,
            operator: "*"
          });
        } else {
            return this.setState({
              prevNum: this.state.input,
              input: 0,
              operator: "*"
            });
        }
      case "/":
        if (this.state.prevNum) {
          return this.setState({
            prevNum: this.calculate(),
            input: 0,
           operator: "/"
          });
        } else {
            return this.setState({
              prevNum: this.state.input,
              input: 0,
              operator: "/"
            });
        }
      case "=":
        if (!this.state.prevNum || !this.state.operator) return;
        return this.setState({
          input: this.calculate(),
          prevNum: "",
          operator: undefined
        });
        break;
      default:
        break;
    }
    // 
    if (btnPressed !== "0" && this.state.input === 0) {
      this.setState({
            input: btnPressed,
      });
    } else if (btnPressed === "0" && this.state.input === 0) {
      return;
    }
    else {
      this.setState({
        input: this.state.input + btnPressed,
      });
    }
  }

  clear() {
    this.setState({
      input: 0,
      prevNum: "",
      operator: undefined
    })
  }

  calculate() {
    let ans;
    const curNum = parseFloat(this.state.input);
    const prevNum = parseFloat(this.state.prevNum);
    if (!prevNum || !this.state.operator) return;
    switch(this.state.operator) {
      case "+":
        ans = prevNum + curNum;
        break;
      case "-":
        ans = prevNum - curNum;
        break;
      case "*":
        ans = prevNum * curNum;
        break;
      case "/":
        ans = prevNum / curNum;
      default:
        break;
    }

    return ans;

  }

  render() {
    return (
      <div className="main">
        <h1 className="title">JavaScript Calculator</h1>
        <div className="calculator">
          <Display input={this.state.input} output={this.state.prevNum} operator={this.state.operator} />
          <Buttons handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
