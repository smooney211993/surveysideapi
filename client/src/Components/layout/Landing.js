import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <div>
      <>
        Hello
        <a href='http://localhost:5000/api/auth/google'>Sign in With Google</a>
      </>
    </div>
  );
};
Landing.propTypes = {
  isAuthenticated: PropTypes.object.isRequired,
};
const mappedStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mappedStateToProps)(Landing);
