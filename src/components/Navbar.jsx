import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="!#">
        <i className={icon}></i> {title}
      </a>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
