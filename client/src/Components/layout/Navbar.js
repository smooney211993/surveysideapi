import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions/auth';

const Navbar = ({ auth: { loading, isAuthenticated }, logOut }) => {
  const authLinks = (
    <ul className='navbar-nav'>
      <li className='nav-item px-2'>
        <a href='#!' onClick={logOut} className='nav-link'>
          Logout
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className='navbar-nav'>
      <li className='nav-item px-2'>
        <a href='http://localhost:5000/api/auth/google' className='nav-link'>
          Log In With Google
        </a>
      </li>
    </ul>
  );
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-0'>
      <div className='container'>
        <Link to='/'>
          <a className='navbar-brand'>SurveySide</a>
        </Link>
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mappedStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mappedStateToProps, { logOut })(Navbar);
