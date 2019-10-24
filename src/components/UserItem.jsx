import React, { Component } from 'react';

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      login: 'mojombo',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
    };
  }
  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="my-3 w-25 mx-auto d-block rounded-circle"
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-primary btn-sm mb-2">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
