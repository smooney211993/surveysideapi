import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ user }) => {
  return (
    <>
      <header id='main-header' className='py-2 bg-primary text-white'>
        <div className='container'>
          <div className='d-flex justify-content-around'>
            <h1>
              {' '}
              <i className='fas fa-envelope-open-text'></i> Dashboard
            </h1>
            <p className='h4 display mt-3 ml-auto'>
              <i className='fa fa-user'></i>Hello {user && user.firstName}
            </p>
          </div>
        </div>
      </header>
      <div className='container'></div>
    </>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
};

const mappedStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mappedStateToProps)(Dashboard);
