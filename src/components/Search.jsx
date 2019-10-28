import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Search name..."
          />
        </div>

        <button type="submit" className="btn btn-dark btn-block">
          Submit
        </button>
      </form>
    );
  }
}

export default Search;
