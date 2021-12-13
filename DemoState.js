import react, { Component } from "react";

class DemoState extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome"
    };
  }

  handleClick() {
    this.setState({
      message: "Thank you!"
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}!</h1>
        <button onClick={() => this.handleClick()} type="submit">
          Click me
        </button>
      </div>
    );
  }
}
export default DemoState;
