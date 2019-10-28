import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import axios from 'axios';
import Search from './components/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false
    };
  }
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get('https://api.github.com/users');

  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async (name) => {
    this.setState({ loading: true });
    const res = await axios.get(
      ` https://api.github.com/search/users?q=${name}`
    );

    this.setState({ users: res.data.items, loading: false });
  };
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Search searchUsers={this.searchUsers} />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
