import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions/auth';
import StripeCheckout from 'react-stripe-checkout';

const Navbar = ({
  auth: { loading, isAuthenticated, user, credits },
  logOut,
}) => {
  const authLinks = (
    <ul className='navbar-nav'>
      <li className='nav-item px-2'>
        <StripeCheckout
          amount={500}
          token={(token) => console.log(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}>
          <a href='' className='nav-link'>
            {' '}
            <i className='fas fa-coins'></i>
            {user && user.credits} Credits
          </a>
        </StripeCheckout>
      </li>
      <li className='nav-item px-2'>
        <a href='#!' onClick={logOut} className='nav-link'>
          <i className='fa fa-sign-out-alt'></i> Logout
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
        <Link to='/' className='navbar-brand'>
          <i className='fas fa-envelope-open-text'></i> SurveySide
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
