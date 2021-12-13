import React, { Component } from "react";
class BasicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      emailaddress: "",
      city: ""
    };
  }

  HandleUserNameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  HandlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  HandleEmailID = event => {
    console.log("hello111");
    this.setState({
      emailaddress: event.target.value
    });
  };

  handleCity = event => {
    console.log("hello");
    this.setState({
      city: event.target.value
    });
  };

  HandleSubmit = event => {
    alert(`${this.state.username} added successfully`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.HandleSubmit}>
        <div className="control-group">
          <div className="form-control">
            <label>UserName</label>
            <input
              type="text"
              id="name"
              value={this.state.username}
              onChange={this.HandleUserNameChange}
            />
          </div>

          <div className="form-control">
            <label>Password</label>
            <input
              type="text"
              id="name"
              value={this.state.password}
              onChange={this.HandlePasswordChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="name">E-Mail Address</label>
            <input
              type="text"
              id="name"
              value={this.state.emailaddress}
              onChange={this.HandleEmailID}
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">City</label>

            <select value={this.state.city} onChange={this.handleCity}>
              <option value="chennai">Chennai</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="kolkatta">Kolkatta</option>
            </select>
          </div>
          <h1>{this.state.username}</h1>
          <h1>{this.state.password}</h1>
          <h1>{this.state.emailaddress}</h1>
          <h1>{this.state.city}</h1>
          <div className="form-actions">
            <button>Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default BasicForm;
