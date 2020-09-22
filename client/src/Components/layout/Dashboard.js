import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ user }) => {
  return <div> hello {user.firstName} you are logged in!</div>;
};

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
};

const mappedStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mappedStateToProps)(Dashboard);
