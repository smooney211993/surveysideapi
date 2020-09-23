import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <section className='container'>
      <div className='dark-overlay'></div>
      <h1 className='display-1'>Hello</h1>
      <p className='font-weight-bold'>SurveySide</p>
    </section>
  );
};
Landing.propTypes = {
  isAuthenticated: PropTypes.object.isRequired,
};
const mappedStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mappedStateToProps)(Landing);
