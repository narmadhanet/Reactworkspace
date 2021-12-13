import React, { Component } from "react";
class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      productID: "",
      name: "",
      description: "",
      price: "",
      Catrgory: ""
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  HandleClick = () => {
    alert(this.inputRef.current.value);
  };

  HandleChange = event => {
    console.log(event.target.value);
    this.setState({
      productID: event.target.value
    });
  };
  render() {
    return (
      <form onSubmit={this.HandleSubmit}>
        <div className="control-group">
          <div className="form-control">
            <label>Product Id</label>
            <input
              type="text"
              id="name"
              value={this.state.productID}
              ref={this.inputRef}
              onChange={this.HandleChange}
            />
          </div>

          <div className="form-control">
            <label>Name</label>
            <input type="text" id="name" value={this.state.name} />
          </div>

          <div className="form-control">
            <label htmlFor="name">description</label>
            <input type="text" id="name" value={this.state.description} />
          </div>

          <div className="form-control">
            <label htmlFor="name">Price</label>
            <input type="text" id="name" value={this.state.price} />
          </div>
          <div className="form-control">
            <label htmlFor="name">Catrgory</label>

            <select value={this.state.price}>
              <option value="Bath">Bath</option>
              <option value="Groceries">Groceries</option>
              <option value="Friuits">Fruits</option>
              <option value="Clothers">Clothes</option>
            </select>
          </div>

          <div className="form-actions">
            <button onClick={this.HandleClick}>Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default RefsDemo;
