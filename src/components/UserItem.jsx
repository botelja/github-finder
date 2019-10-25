import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="my-3  mx-auto d-block rounded-circle"
          style={{ width: '60px' }}
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
