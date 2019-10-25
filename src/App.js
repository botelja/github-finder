import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });
  }
  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Users users={users} />
        </div>
      </div>
    );
  }
}

export default App;
