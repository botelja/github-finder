import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  render() {
    const { title, icon } = this.props;
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="!#">
          <i className={icon}></i> {title}
        </a>
      </nav>
    );
  }
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
