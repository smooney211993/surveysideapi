import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../../actions/auth';

const Navbar = ({ auth: { loading, isAuthenticated }, logOut }) => {
  const authLinks = (
    <ul>
      <li>
        <a onClick={logOut}>Logout</a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <a href='http://localhost:5000/api/auth/google'>Log In With Google</a>
      </li>
    </ul>
  );
  return (
    <nav>{!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}</nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mappedStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mappedStateToProps, { logOut })(Navbar);
