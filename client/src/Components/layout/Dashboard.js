import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const Dashboard = ({ user, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <>
      <header id='main-header' className='py-2 bg-primary text-white expand-sm'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h4 className='mt-2'>
                {' '}
                <i className='fas fa-users-cog'></i> Dashboard
              </h4>
            </div>
            <div className='col'>
              <p className='h4 mt-2'>
                <i className='fas fa-coins'></i>
                {user && user.credits} Credits
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className='container'>
        <p className='h4 mt-2'>
          <i className='fa fa-user'></i>Hello {user && user.firstName}
        </p>
        <div className='container'>
          <div className='col'></div>
        </div>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object,
};

const mappedStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
});
export default connect(mappedStateToProps)(Dashboard);
