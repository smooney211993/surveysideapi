import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ user }) => {
  return (
    <>
      <header id='main-header' className='py-2 bg-primary text-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h1>
                {' '}
                <i className='fas fa-envelope-open-text'></i> Dashboard
              </h1>
            </div>
          </div>
        </div>
      </header>
      <div className='container'>
        <p className='h4 display mt-3'>
          <i className='fa fa-user'></i>Hello {user && user.firstName}
        </p>
      </div>
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
