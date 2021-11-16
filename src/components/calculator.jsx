import React, { Component } from "react";

class Calculator extends Component {
  opArr = ["/", "*", "+", "-", "."];
  state = {
    num: "",
    result: "",
  };

  opBtnStyle() {
    return "btn btn-success py-3 font-weight-bold";
  }

  numBtnStyle() {
    return "btn btn-dark py-3 font-weight-bold";
  }

  calculate() {
    if (this.state.num.length !== 0 && !this.opArr.includes(this.state.num.slice(-1))) {
      this.setState({ result: eval(this.state.num) });
    }
  }

  numhandler(n) {
    if (this.opArr.includes(n)) {
      if (this.state.num.length === 0) {
        return;
      }
      else if (this.opArr.includes(this.state.num.slice(-1))) {
        this.setState({ num: this.state.num.slice(0, -1) + n });
      }
      else {
        this.setState({ num: this.state.num + n });
      }
    }
    else {
      this.setState({ num: this.state.num + n });
    }
  }

  render() {
    return (
      <div className="container container-fluid">
        <div className="jumbotron">
          <div className="bg-dark px-2">
            <label htmlFor="" className="text-white w-100 text-right">
              {this.state.num.length === 0 ? "0" : this.state.num}
            </label>
            <label htmlFor="" className="text-white w-100 text-right display-4">
              {this.state.result.length === 0 ? "0" : this.state.result}
            </label>
          </div>
          <div className="d-flex flex-column flex-fill">
            <div className="btn-group">
              <button onClick={() => this.numhandler("/")} className={this.opBtnStyle()}>/</button>
              <button onClick={() => this.numhandler("*")} className={this.opBtnStyle()}>*</button>
              <button onClick={() => this.numhandler("+")} className={this.opBtnStyle()}>+</button>
              <button onClick={() => this.numhandler("-")} className={this.opBtnStyle()}>-</button>
              <button onClick={() => this.setState({ num: this.state.num.slice(0, -1) })} className={this.opBtnStyle()}>DEL</button>
              <button onClick={() => this.setState({ num: "", result: "" })} className={this.opBtnStyle()}>AC</button>
            </div>
            <div className="btn-group">
              <button onClick={() => this.numhandler("1")} className={this.numBtnStyle()}>1</button>
              <button onClick={() => this.numhandler("2")} className={this.numBtnStyle()}>2</button>
              <button onClick={() => this.numhandler("3")} className={this.numBtnStyle()}>3</button>
            </div>
            <div className="btn-group">
              <button onClick={() => this.numhandler("4")} className={this.numBtnStyle()}>4</button>
              <button onClick={() => this.numhandler("5")} className={this.numBtnStyle()}>5</button>
              <button onClick={() => this.numhandler("6")} className={this.numBtnStyle()}>6</button>
            </div>
            <div className="btn-group">
              <button onClick={() => this.numhandler("7")} className={this.numBtnStyle()}>7</button>
              <button onClick={() => this.numhandler("8")} className={this.numBtnStyle()}>8</button>
              <button onClick={() => this.numhandler("9")} className={this.numBtnStyle()}>9</button>
            </div>
            <div className="btn-group">
              <button onClick={() => this.numhandler("0")} className={this.numBtnStyle()}>0</button>
              <button onClick={() => this.numhandler(".")} className={this.numBtnStyle()}>.</button>
              <button onClick={() => this.calculate()} className={this.numBtnStyle()}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
