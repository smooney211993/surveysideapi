import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSurveys } from '../../actions/survey';
import { loadUser } from '../../actions/auth';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import DashboardButtons from './DashboardButtons';
import Alert from './Alert';
const Dashboard = ({
  user,
  survey: { surveys, loading },
  getSurveys,
  loadUser,
}) => {
  useEffect(() => {
    getSurveys();
    //loadUser();
  }, [getSurveys]);
  return loading && surveys === null ? (
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
          </div>
        </div>
      </header>
      <Alert />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <p className='h4 mt-2'>
              <i className='fa fa-user'></i>Hello {user && user.firstName}
            </p>
          </div>
        </div>
      </div>
      <>
        <DashboardButtons />
      </>
    </>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object,
};

const mappedStateToProps = (state) => ({
  user: state.auth.user,
  survey: state.survey,
});
export default connect(mappedStateToProps, { getSurveys, loadUser })(Dashboard);
