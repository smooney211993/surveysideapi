import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = (props) => {
  return <div>you are logged in!</div>;
};

Landing.propTypes = {};

const mappedStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect()(Landing);
