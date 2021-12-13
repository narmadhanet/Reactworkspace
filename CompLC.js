import react, { Component } from "react";
import ReactDOM from "react-dom";
class CompLC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.timerTick = this.timerTick.bind(this);
    console.log("Constructor!");
  }

  timerTick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  componentDidMount() {
    this.timer = setInterval(this.timerTick, 100);
    console.log("Component has mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated from: " + prevState.count);

    if (this.state.count == 50) {
      ReactDOM.unmountComponentAtNode(document.querySelector("#container"));
    }
  }

  componentWillUnmount() {
    console.log("Component is about to be unmounted!");

    clearInterval(this.timer);

    if (this.state.count == 50) {
      ReactDOM.unmountComponentAtNode(document.querySelector("#container"));
    }
  }
  render() {
    console.log("SimpleCounter render call!");
    return <h1>{this.state.count}</h1>;
  }
}
export default CompLC;
