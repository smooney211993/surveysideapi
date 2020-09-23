import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <section className=' landing '>
      <div className='landing-inner text-grey mt-100'>
        <h1 className='display-4'>SurveySide</h1>
        <p className='font-weight-bold'>
          Grow your business with the ability to send surveys for feedback with
          a click of a button
        </p>
      </div>
    </section>
  );
};
Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
const mappedStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mappedStateToProps)(Landing);
