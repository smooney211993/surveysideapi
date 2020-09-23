import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ user }) => {
  return (
    <>
      <header id='main-header' className='py-2 bg-primary text-white expand-sm'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h3 className='mt-2'>
                {' '}
                <i className='fas fa-users-cog'></i> Dashboard
              </h3>
            </div>
            <div className='col'>
              <p className='h3 mt-2'>
                <i className='fas fa-coins'></i>
                {user && user.credits}
              </p>
            </div>
            <div className='col'>
              <p className='h3 mt-2'>
                <i className='fa fa-user'></i>Hello {user && user.firstName}
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className='container'></div>
    </>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object,
};

const mappedStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mappedStateToProps)(Dashboard);
