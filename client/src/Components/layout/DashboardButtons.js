import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { addCredits } from '../../actions/auth';
import { Link } from 'react-router-dom';

const DashboardButtons = ({ addCredits }) => {
  return (
    <section id='actions' className='py-4 mb-4 '>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <StripeCheckout
              name='SurveySide'
              description='$5 dollars for 5 survey credits'
              amount={500}
              token={(token) => {
                addCredits(token);
              }}
              stripeKey={process.env.REACT_APP_STRIPE_KEY}>
              <button className='btn btn-warning btn-block'>
                <i className='fas fa-plus'></i> Add Credits
              </button>
            </StripeCheckout>
          </div>
          <div className='col-md-3'>
            <Link to='/create-survey'>
              <button className='btn btn-success btn-block'>
                <i className='fas fa-plus'></i> Create Survey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

DashboardButtons.propTypes = {
  addCredits: PropTypes.func.isRequired,
};

export default connect(null, { addCredits })(DashboardButtons);
