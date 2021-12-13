import react, { Component } from "react";
class Demoprops extends Component {
  render() {
    return (
      <div>
        {/*accessing information from props */}
        <h2>Hello {this.props.name}</h2>
        <h3>Welcome to GeeksforGeeks</h3>
      </div>
    );
  }
}

export default Demoprops;
